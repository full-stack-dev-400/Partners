export const dynamic = "force-dynamic";


import CpaAffiliate from "@/components/cpa/CpaHero"; 
import CPAProgramSchedule from "@/components/cpa/CPAProgramSchedule";
import CpaNetworkIntro from "@/components/cpa/CpaNetworkIntro";
import AffiliatePortal from "@/components/cpa/AffiliatePortal";
import CpaGetStarted from "@/components/cpa/CpaGetStarted";
import CpaFaq from "@/components/cpa/CpaFaq";
import RegisterForm from "@/components/RegisterForm";


export default function Page() {
  return (
    <>
      <CpaAffiliate />
      <CPAProgramSchedule />
      <CpaNetworkIntro />
      <AffiliatePortal />
      <CpaGetStarted />
      <CpaFaq />
      <RegisterForm heading="Contact Us" subheading="For enquires, assistance, or to explore our services, reach out to our dedicated team."/>
    </>
  );
}
