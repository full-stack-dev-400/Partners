export const metadata = {
  title: "Stonefort Partners – Your Gateway to Global Partnership",
  description: "Top Payouts & Benefits for IBs, Affiliates, & Money Managers",
};

export const dynamic = "force-static";

import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import WhyPartner from "@/components/home/WhyPartner";
import Programs from "@/components/home/Programs";
// import TestimonialSlider from "@/components/home/TestimonialSlider";
import Insights from "@/components/home/Insights";
import Faq from "@/components/home/Faq";
import JoinCta from "@/components/home/JoinCta";

export default function Home() {
  return (
    <>
      <Hero
        title={`Your Gateway to<br/>Global Partnership`}
        subtitle="Top Payouts & Benefits for IBs, Affiliates, & Money Managers"
        primaryCta={{ label: "Become a Partner", href: "https://clients-mu-stonefortsecurities.com/#/register" }}
        secondaryCta={{ label: "Partner's Login", href: "https://partners-stonefortsecurities.com/v2/login/" }}
        
      />

       <StatsStrip />
       <WhyPartner />
       <Programs />
        {/* <TestimonialSlider trustpilotSrc="/images/trustpilot.gif" autoPlayMs={6000} /> */}
        <Insights />
        <Faq />
        <JoinCta
        logoSrc="/images/stonefort-logo.webm"
        primaryHref="https://clients-mu-stonefortsecurities.com/#/register"
        secondaryHref="/contact"
      />
    </>
  );
}
