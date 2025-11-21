// RegisterForm.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Select from "react-select";
// @ts-ignore: no declaration file for 'react-select-country-list'
import countryList from "react-select-country-list";
import styles from "./RegisterForm.module.css";

// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------
type ITIOptions = any;
type ITIInstance = any;

type FormVals = {
  isPartner: "yes" | "no";
  firstName: string;
  lastName: string;
  email: string;
  country: string; // ISO2 (ae, gb, etc.)
  subject: string;
  message?: string;
  phoneRaw: string; // raw input value
  phoneE164?: string; // computed on submit
};

type Props = {
  /** Optional explicit heading to show above the form */
  heading?: string;
  /** Optional small line under the heading */
  subheading?: string;
};

// Optional: map common routes to headings (auto-fallback)
const PATH_TITLES: Record<string, string> = {
  "/ib": "Become an Introducing Broker",
  "/affiliate": "Join Our Affiliate Program",
  "/pamm": "Manage Funds with PAMM",
  "/loyalty": "Register to Get Rewards",
  "/about-us": "Get in Touch",
  "/contact": "Contact Us",
};

// ------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------
const SUBJECTS = [
  { value: "general", label: "General enquiry" },
  { value: "ib", label: "Introducing Broker (IB)" },
  { value: "affiliate", label: "Affiliate" },
  { value: "pamm", label: "PAMM" },
];

const selectStyles = {
  control: (base: any) => ({
    ...base,
    background: "transparent",
    border: "none",
    borderBottom: `1px solid rgba(255,255,255,0.25)`,
    borderRadius: 0,
    boxShadow: "none",
    minHeight: 40,
    cursor: "pointer",
  }),
  valueContainer: (b: any) => ({ ...b, padding: 0 }),
  singleValue: (b: any) => ({ ...b, color: "#fff" }),
  input: (b: any) => ({ ...b, color: "#fff" }),
  placeholder: (b: any) => ({ ...b, color: "rgba(255,255,255,0.6)" }),
  dropdownIndicator: (b: any) => ({ ...b, color: "rgba(255,255,255,0.6)" }),
  indicatorSeparator: () => ({ display: "none" }),
  menu: (b: any) => ({
    ...b,
    background: "#0B1220",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.1)",
  }),
  option: (b: any, s: any) => ({
    ...b,
    background: s.isFocused ? "rgba(255,255,255,0.06)" : "transparent",
    color: "#fff",
    cursor: "pointer",
  }),
};

// ------------------------------------------------------------------
// Component
// ------------------------------------------------------------------
export default function RegisterForm({
  heading,
  subheading,
}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Allow title override via query (useful for ad/campaign LPs)
  const titleFromQuery = searchParams.get("title") || undefined;

  // Resolve heading: prop > ?title= > PATH_TITLES > default
  const resolvedHeading =
    heading ||
    titleFromQuery ||
    PATH_TITLES[pathname] ||
    "Register to get rewards";

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormVals>({
    defaultValues: {
      isPartner: "no",
      country: "ae",
      subject: "",
    },
  });

  /* ---------------- Country dropdown (react-select-country-list) ---------------- */
  const countryOptions = useMemo(
    () =>
      countryList()
        .getData()
        .map((c: { value: string; label: string }) => ({
          value: c.value.toLowerCase(),
          label: c.label,
        })),
    []
  );

  const selectedCountry = countryOptions.find(
    (o: { value: string; label: string }) => o.value === watch("country")
  );

  /* ---------------- Phone (intl-tel-input) ---------------- */
  const inputRef = useRef<HTMLInputElement | null>(null);
  const itiRef = useRef<ITIInstance | null>(null);
  const [utilsReady, setUtilsReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!inputRef.current) return;
      const itiModule = await import("intl-tel-input");

      const instance = itiModule.default(inputRef.current!, {
        initialCountry: watch("country") || "ae",
        preferredCountries: ["ae", "sa", "gb", "ke"],
        separateDialCode: true,
        nationalMode: true,
        utilsScript:
          "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.6/build/js/utils.js",
      } as Partial<ITIOptions>);

      if ((instance as any).promise) {
        await (instance as any).promise;
      }
      if (!mounted) return;

      itiRef.current = instance;
      setUtilsReady(true);

      const onCountryChange = () => {
        const iso2 = instance.getSelectedCountryData().iso2 as string;
        setValue("country", iso2, { shouldDirty: true });
      };
      inputRef.current!.addEventListener("countrychange", onCountryChange);

      const onInput = () =>
        setValue("phoneRaw", inputRef.current!.value, { shouldDirty: true });
      inputRef.current!.addEventListener("input", onInput);

      return () => {
        inputRef.current?.removeEventListener("countrychange", onCountryChange);
        inputRef.current?.removeEventListener("input", onInput);
        instance.destroy();
      };
    })();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // when country dropdown changes, update ITI flag too
  useEffect(() => {
    const iso2 = watch("country");
    if (itiRef.current && iso2) {
      try {
        itiRef.current.setCountry(iso2);
      } catch {}
    }
  }, [watch("country")]);

  const onSubmit = handleSubmit((form) => {
    if (!itiRef.current) return;

    const raw = (inputRef.current?.value || "").trim();
    const selected = itiRef.current.getSelectedCountryData();

    let e164 = itiRef.current.getNumber();
    let isValid = itiRef.current.isValidNumber?.() ?? Boolean(e164);

    if (!e164 && raw) {
      const compact = raw.replace(/\s+/g, "").replace(/[^\d+]/g, "");
      const withoutPlus = compact.replace(/^\+/, "");
      const withoutLeadingZero = withoutPlus.replace(/^0+/, "");
      if ((selected as any)?.dialCode) {
        e164 = `+${(selected as any).dialCode}${withoutLeadingZero}`;
      }
    }

    setValue("phoneRaw", raw);
    setValue("phoneE164", e164);
    setValue("country", (selected as any)?.iso2 || form.country);

    const payload = {
      isPartner: form.isPartner,
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      subject: form.subject,
      message: form.message || "",
      country: (selected as any)?.iso2,
      phone: e164,
      isValidPhone: isValid,
    };

    console.log("SUBMIT →", payload);
    console.log(
      "DEBUG → raw:",
      raw,
      "E164:",
      e164,
      "ISO2:",
      (selected as any)?.iso2,
      "valid:",
      isValid
    );

    const emailBody = `
  <h3>New Registration</h3>
  Partner: ${payload.isPartner}
  Name: ${payload.firstName} ${payload.lastName}
  Email: ${payload.email}
  Country: ${payload.country?.toUpperCase()}
  Phone: ${payload.phone || form.phoneRaw}
  Subject: ${payload.subject}
  Message: ${payload.message}
`;

    const apiBody = {
      to: "umairasif384@gmail.com",
      from: "no-reply@stonefortpartners.com",
      subject: "New Partner Registration",
      body: emailBody,
    };

    fetch("/api/send-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(apiBody),
})
  .then(async (res) => {
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      const msg = data?.error || "Email failed";
      throw new Error(msg);
    }

    alert("✅ Email sent successfully!");
  })
  .catch((err) => {
    console.error("❌ Email API error:", err);
    alert("Something went wrong while sending the email.");
  });

    alert("Form submitted. Check console for payload.");
  });

  // RHF register for phone input (shared with ITI)
  const phoneReg = register("phoneRaw", { required: true });

  return (
    <section id="apply" className={styles.wrap} aria-label={resolvedHeading}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{resolvedHeading}</h2>
        {subheading ? <p className={styles.subtitle}>{subheading}</p> : null}

        <form className={styles.card} onSubmit={onSubmit}>
          {/* row: radio */}
          <div className={styles.fullRow}>
            <label className={styles.groupLabel}>
              Are you an existing partner with Stonefort?
            </label>

            {/* one-line radio layout */}
            <div className={styles.radioRow}>
              <label className={styles.radio}>
                <input type="radio" value="yes" {...register("isPartner")} />
                <span>Yes</span>
              </label>
              <label className={styles.radio}>
                <input type="radio" value="no" {...register("isPartner")} />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* row 1: First/Last/Email */}
          <div className={styles.grid3}>
            <div className={styles.field}>
              <label>First Name</label>
              <input
                placeholder="E.g. John"
                {...register("firstName", { required: true })}
                aria-invalid={!!errors.firstName}
              />
              {errors.firstName && (
                <span className={styles.err}>Required</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Last Name</label>
              <input
                placeholder="E.g. Doe"
                {...register("lastName", { required: true })}
                aria-invalid={!!errors.lastName}
              />
              {errors.lastName && <span className={styles.err}>Required</span>}
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <input
                placeholder="E.g. jhondeo@gmail.com"
                inputMode="email"
                type="email"
                {...register("email", { required: true })}
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className={styles.err}>Required</span>}
            </div>
          </div>

          {/* row 2: Country / Phone / Subject */}
          <div className={styles.grid3}>
            <div className={styles.field}>
              <label>Country</label>
              <Select
                instanceId="country"
                classNamePrefix="rs"
                options={countryOptions}
                value={selectedCountry}
                onChange={(opt) =>
                  setValue("country", (opt as any).value, { shouldDirty: true })
                }
                placeholder="Select your country"
                styles={selectStyles}
              />
            </div>

            <div className={styles.field}>
              <label>Phone Number</label>

              <div className={styles.phoneBox}>
                <input
                  placeholder="E.g. 07283 73736"
                  className={styles.phone}
                  {...phoneReg}
                  ref={(el) => {
                    phoneReg.ref(el);
                    inputRef.current = el;
                  }}
                />
              </div>

              {errors.phoneRaw && (
                <span className={styles.err}>Required</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Subject</label>
              <div className={styles.selectWrap}>
                <select
                  {...register("subject", { required: "Required" })}
                  className={styles.selectBare}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {SUBJECTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <span className={styles.selectCaret} aria-hidden>
                  ▾
                </span>
              </div>
              {errors.subject && (
                <p className={styles.errSmall}>{errors.subject.message}</p>
              )}
            </div>
          </div>

          {/* message */}
          <div className={styles.fullRow}>
            <label>Send us a message (optional)</label>
            <textarea
              rows={6}
              placeholder=""
              {...register("message")}
              style={{ backgroundColor: "#303030" }}
            />
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.cta} disabled={!utilsReady}>
              Register your interest
              <span className={styles.paperPlane} aria-hidden="true">
                <img src="/images/Vector.png" alt="" width={18} height={18} />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
