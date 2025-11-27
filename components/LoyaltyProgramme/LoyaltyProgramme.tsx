"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoyaltyHeroWithIntro() {
  return (
    <>
      {/* ====================== HERO (Boxed 1240 Background) ====================== */}
<section className="relative bg-black text-slate-100 overflow-hidden">
  {/* FULL-WIDTH RIGHT IMAGE */}
  <div className="absolute inset-0 right-0 w-full">

    <Image
      src="/images/loyaltyBanner.webp"
      alt=""
      fill
      priority
      className="object-cover object-right"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
  </div>

  {/* LEFT CONTENT (Centered inside 1240) */}
  <div className="relative mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
    {/* breadcrumb */}
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[#00d3c6]">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
        </li>
        <li aria-hidden className="text-slate-500">›</li>
        <li className="text-slate-200">Loyalty Programme</li>
      </ol>
    </nav>

    <h1 className="heroHeading max-w-[640px]">
      Elevate Your Partnership with
      <span className="block text-teal-400"> Stonefort</span>
    </h1>

    <p  className="heroSub mt-5 text-slate-300 max-w-[560px] " >
      For partnerships that truly pay off.
    </p>

    <div className="mt-8 flex flex-wrap items-center gap-3">


      <Link
        href="#apply"
        className="inline-flex items-center rounded-full bg-[#00d3c6] px-6 py-3 text-base font-medium text-[#fff] hover:bg-[#fff] hover:text-[#0b1220]"
      >
        Express your Interest
      </Link>
    </div>
  </div>
</section>


      {/* ====================== INTRO BAND (Full Width) ====================== */}
      <section
        className="
          relative w-full overflow-hidden
          bg-[linear-gradient(90deg,#0c1219_0%,#1a2430_35%,#1e2a36_65%,#0c1219_100%)]
          border-y border-white/5
        "
        aria-label="Loyalty Programme introduction"
      >
        {/* vignette sheen */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60
                     bg-[radial-gradient(120%_60%_at_50%_-20%,rgba(255,255,255,0.06),transparent_60%)]"
          aria-hidden="true"
        />
        {/* top + bottom hairline glows */}
        <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* text */}
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <p className="py-10 sm:py-12 md:py-14 text-center text-[20px] sm:text-[20px] md:text-[22px] leading-relaxed text-white/90">
            Our Loyalty Programme is designed to reward ambition. IBs and Affiliates can unlock
            tiered benefits, exclusive luxury perks, and priority access to premium partner
            experiences.
          </p>
        </div>
      </section>
    </>
  );
}
