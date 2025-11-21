export const dynamic = "force-dynamic";


import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import RegisterForm from "@/components/RegisterForm";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactChannels />
      <RegisterForm />
    </>
  );
}
