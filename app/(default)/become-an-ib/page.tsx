export const dynamic = "force-dynamic";


import BecomeAnIntroducer from "@/components/Become an Introducer/Become an Introducer";
import NetworkIntro from "@/components/Become an Introducer/NetworkIntro";
import CellXpertShowcase from "@/components/Become an Introducer/CellXpertShowcase";
import GetStartedNow from "@/components/Become an Introducer/GetStartedNow";
import IBWhyChoose from "@/components/Become an Introducer/IBWhyChoose";
import IbFaq from "@/components/Become an Introducer/IbFaq";
import RegisterForm from "@/components/RegisterForm";

export default function Page() {
  return (
    <>
      <BecomeAnIntroducer />;
      <NetworkIntro />;
      <CellXpertShowcase />
      <GetStartedNow />
      <IBWhyChoose />
      <IbFaq />
      <RegisterForm heading="Contact Us" subheading="For enquires, assistance, or to explore our services, reach out to our dedicated team." />;

    </>
  );

}
