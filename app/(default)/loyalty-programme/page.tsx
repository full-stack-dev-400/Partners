export const dynamic = "force-dynamic";



// app/loyalty-programme/page.tsx
import type { Metadata } from "next";

//  import from your exact path
import LoyaltyProgramme from "@/components/LoyaltyProgramme/LoyaltyProgramme";

import LoyaltyGrowEarnings from "@/components/LoyaltyProgramme/LoyaltyGrowEarnings";
import LoyaltyPerks from "@/components/LoyaltyProgramme/LoyaltyPerks";
import LoyaltyFAQ from "@/components/LoyaltyProgramme/LoyaltyFAQ";

import RegisterForm from "@/components/RegisterForm";


export const metadata: Metadata = {
  title: "Loyalty Programme | Stonefort",
  description: "Elevate your partnership with Stonefort — for partnerships that truly pay off.",
  openGraph: {
    title: "Loyalty Programme | Stonefort",
    description: "Elevate your partnership with Stonefort.",
    type: "website",
    url: "https://stonefortpartners.com/loyalty-programme",
  },
};

export default function Page() {
  return (
    <main className="bg-black">

      <LoyaltyProgramme />
   
      <LoyaltyGrowEarnings />
      <LoyaltyPerks />
      <LoyaltyFAQ /> 
      <RegisterForm />

    </main>
  );
}
