"use client";
import Image from "next/image";

type Perk = {
  title: string;
  text: string;
  img: string;          // desktop image
  imgMobile?: string;   // mobile image
  imgClass?: string;
  imgPosition?:
    | "bottom-right"
    | "top-right"
    | "bottom-left"
    | "top-left"
    | "bottom-center"
    | "center"
    | "center-right"
    | "center-left";
  tall?: boolean;
  wide?: boolean;
  startAtCol2?: boolean;
};

const TOP_PERKS: Perk[] = [
  {
    title: "Cash\nPrizes",
    text: "Amplify your income with\nperformance-driven cash rewards.",
    img: "/images/dollar.png",
    imgMobile: "/images/dollarmbl.webp",
    imgClass: "scale-110 translate-x-2 translate-y-2",
  },
  {
    title: "Exclusive\nMerchandise",
    text: "Showcase your style\nwith limited-edition Stonefort gear.",
    img: "/images/gift.png",
    imgMobile: "/images/giftmbl.webp",
    imgClass: "scale-100 translate-y-3",
  },
{
  title: "Premium\nTechnology",
  text: "Equip yourself with gadgets\nand smart home tech.",
  img: "/images/iphone.png",
  imgMobile: "/images/iponembl.webp",
  imgPosition: "bottom-center",
  tall: true,
  imgClass: "scale-125 md:scale-125", // clean and centered
},
  {
    // PASS card (top grid)
    title: "VIP Event\nAccess",
    text: "Gain entry to exclusive\nglobal events.",
    img: "/images/pass.png",
    imgMobile: "/images/passmbl.webp",
    imgPosition: "top-right",
    wide: true,
    // Mobile: push further down & slightly right
    // Desktop: keep previous offsets with md:*
    imgClass:
      "scale-150 translate-y-20 translate-x-3 md:translate-y-4 md:translate-x-1",
  },
];

const MORE_PERKS: Perk[] = [
  {
    title: "Luxury Holidays\n& Travel",
    text: "Enjoy paid trips to\nstunning destinations.",
    img: "/images/travel.png",
    imgMobile: "/images/planmbl.webp",
    imgPosition: "center-left",
    tall: true,
    imgClass: "scale-160 translate-x-12 translate-y-10",
  },
  {
    // COIN card
    title: "Bonuses &\nEnhanced Payouts",
    text: "Earn bigger commissions\nfor performance.",
    img: "/images/gold-coin.png",
    imgMobile: "/images/coinmbl.webp",
    // Mobile: remove inner padding so it hugs bottom-right,
    // Desktop: restore padding with md:px-4 md:pb-2 (original look).
    imgClass:
      "scale-100 translate-x-4 translate-y-3 px-0 pb-0 md:px-4 md:pb-2",
  },
  {
    title: "Luxe\nExperiences",
    text: "Indulge in bespoke\nluxury experiences.",
    img: "/images/car.png",
    imgMobile: "/images/carmbl.webp",
    imgClass: "scale-160 translate-x-0 translate-y-0",
  },
  {
    title: "VIP Event\nAccess",
    text: "Gain entry to exclusive\nunforgettable events.",
    img: "/images/Bag.png",
    imgMobile: "/images/bagmbl.webp",
    wide: true,
    startAtCol2: true,
    imgClass: "scale-110 -translate-y-1 translate-x-2",
  },
];

export default function LoyaltyPerks() {
  const renderCard = (perk: Perk, key: string | number) => {
    const titleLines = perk.title.split("\n");
    const textLines = perk.text.split("\n");

    return (
      <article
        key={key}
        className={[
          "group relative overflow-hidden rounded-[22px] border border-[#c59b35]/45 bg-[#0b0f14]",
          "p-6 sm:p-7 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)] md:pr-4 xl:pr-3",
          perk.tall ? "md:row-span-2" : "",
          perk.wide ? "md:col-span-2" : "",
          perk.startAtCol2 ? "md:col-start-2" : "",
        ].join(" ")}
      >
        <div className="relative z-10">
          <h3 className="text-[20px] sm:text-[22px] font-bold mb-2">
            {titleLines.map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h3>

          <p className="text-white/85 text-[18px] leading-relaxed">
            {textLines.map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < textLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        {/* Dynamic Image Wrapper based on position */}
        {(() => {
          const base =
            "absolute z-0 pointer-events-none select-none w-[70%] max-w-[460px]";
          const pos = perk.imgPosition ?? "bottom-right";
          const posClass = (() => {
            switch (pos) {
              case "bottom-left":
                return "bottom-0 left-0 flex justify-start items-end px-4 pb-2";
              case "bottom-center":
                return "bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-end pb-0";
              case "top-right":
                return "top-0 right-0 flex justify-end items-start px-4 pt-2";
              case "top-left":
                return "top-0 left-0 flex justify-start items-start px-4 pt-2";
              case "center":
                return "inset-0 flex items-center justify-center";
              case "center-right":
                return "inset-y-0 right-0 flex items-center justify-end pr-4";
              case "center-left":
                return "inset-y-0 left-0 flex items-center justify-start pl-4";
              default:
                return "bottom-0 right-0 flex justify-end items-end px-4 pb-2";
            }
          })();

          const commonImgClasses =
            "object-contain grayscale brightness-110 contrast-110 opacity-95 transition duration-500 ease-out group-hover:grayscale-0 group-hover:brightness-100";

          return (
            <div className={`${base} ${posClass} ${perk.imgClass ?? ""}`}>
              {/* Mobile image */}
              <Image
                src={perk.imgMobile ?? perk.img}
                alt={perk.title}
                width={300}
                height={360}
                className={`${commonImgClasses} md:hidden`}
              />

              {/* Desktop image (unchanged positioning) */}
              <Image
                src={perk.img}
                alt={perk.title}
                width={300}
                height={360}
                className={`${commonImgClasses} hidden md:block`}
              />
            </div>
          );
        })()}

        <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/5" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
      </article>
    );
  };

  return (
    <section className="relative bg-black text-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <header className="text-center mb-10 sm:mb-14">
          <h2 className="sectionHeading">
            Turn Every <span className="text-teal-400">Pip</span> Into{" "}
            <span className="text-teal-400">Perks</span>
          </h2>
          <p className="contentText mt-3 text-white/85">
            Every lot traded and milestone reached brings you closer to tailored
            bonuses, elite benefits, and perks designed for serious traders like you.
          </p>
        </header>

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
          {TOP_PERKS.map((perk, i) => renderCard(perk, i))}
        </div>

        {/* Bottom grid */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
          {MORE_PERKS.map((perk, i) => renderCard(perk, `more-${i}`))}
        </div>
      </div>
    </section>
  );
}
