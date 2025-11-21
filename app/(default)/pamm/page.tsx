export const dynamic = "force-dynamic";


import PammHero from "@/components/pamm/PammHero";
import PammIntro from "@/components/pamm/PammIntro";
import PammFeatures from "@/components/pamm/PammFeatures";
import PammHowItWorks from "@/components/pamm/PammHowItWorks";
import PammFaq from "@/components/pamm/PammFaqs";
import RegisterForm from "@/components/RegisterForm";
import MoneyManager from "@/components/pamm/PammMoneyManager";

export default function PammPage() {
  return (
    <>
      <PammHero />
      <PammIntro />
      <PammFeatures />
      <PammHowItWorks />
      <MoneyManager />
      <PammFaq />
      <RegisterForm heading="Contact Us" subheading="For enquires, assistance, or to explore our services, reach out to our dedicated team."/>
    </>
  );
}
