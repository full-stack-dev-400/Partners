import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-10">
      {/* ===== Top bar: socials · logo · trustpilot ===== */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-6 sm:px-8">
        {/* Social icons (left) */}
        <nav className="flex items-center gap-4">
          <Link href="https://x.com/" aria-label="X (Twitter)">
            <Image
              src="/images/Link - twitter.png"
              alt="Twitter"
              width={42}
              height={42}
              className="opacity-90 hover:opacity-100 transition"
            />
          </Link>
          <Link href="https://instagram.com/" aria-label="Instagram">
            <Image
              src="/images/Link - instagram.png"
              alt="Instagram"
              width={42}
              height={42}
              className="opacity-90 hover:opacity-100 transition"
            />
          </Link>
          <Link href="https://youtube.com/" aria-label="YouTube">
            <Image
              src="/images/youtube.png"
              alt="YouTube"
              width={42}
              height={42}
              className="opacity-90 hover:opacity-100 transition"
            />
          </Link>
          <Link href="https://linkedin.com/" aria-label="LinkedIn">
            <Image
              src="/images/Link - linkedin.png"
              alt="LinkedIn"
              width={42}
              height={42}
              className="opacity-90 hover:opacity-100 transition"
            />
          </Link>
          <Link href="https://line.me/" aria-label="LINE">
            <Image
              src="/images/line.png"
              alt="LINE"
              width={42}
              height={42}
              className="opacity-90 hover:opacity-100 transition"
            />
          </Link>
        </nav>

        {/* Center logo */}
        <div className="flex justify-center">
          <Image
            src="/images/stonefort-footer.png"
            alt="Stonefort Partners"
            width={170}
            height={30}
            priority
          />
        </div>

        {/* Trustpilot badge */}
        <div className="flex flex-col items-end gap-1">
          <Image
            src="/images/trustpilot.png"
            alt="Trustpilot rating"
            width={240}
            height={28}
          />
          <p className="text-sm">Trust Score 4.0</p>
        </div>
      </div>

      {/* ===== Legal content ===== */}
      <div className="max-w-[1200px] mx-auto text-[#ffffff] text-[15px] leading-[1.75] px-6 sm:px-8 mt-8">
        <h3 className="text-[#00d3c6] text-[18px] font-semibold mb-2">
          About Stonefort Partners
        </h3>
        <h4 className="text-[#fff] font-semibold mb-3">
          Stonefort Partners is Part of Stonefort Securities. This website is
          owned and operated by Stonefort Securities.
        </h4>

        <p>
          Stonefort Securities LLC (SFS) holds a Category 5 License (No.
          2020000026) issued by the Securities and Commodities Authority (SCA),
          UAE, to conduct Financial Consultation, Promotion, and Introduction
          activities. Through its exclusive partnership with Stonefort
          Securities Limited (Mauritius), SFS serves UAE Nationals and
          Residents. SFS does not hold client funds or assets; all services are
          provided strictly on an introduction basis.
        </p>

        <p className="mt-2">
          Stonefort Securities Limited (SRS) holds an Investment Dealer License
          to act as a Full-Service Dealer, excluding Underwriting activities
          under License No GB 24202921, issued by the Financial Services
          Commission (FSC), Mauritius (MUS). SFS-MUS address is the 10th floor,
          Barmer House, Hotel Avenue, Ebene, Cybercity, MUS.
        </p>

        {/* <p className="mt-2">
          Stonefort Securities (SLC) Limited is incorporated in Saint Lucia with
          registration number 2025-00262. SFS-SLC address is the offices of
          Fortgate Offshore Investment and Legal Services Ltd, Ground Floor, The
          Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.
        </p> */}

        <p className="mt-2">
          Stonefort Markets LLC is registered in Saint Vincent and the
          Grenadines (SVG) with registration No 4164 LLC 2025. SFS-SVG address
          is Euro House, Richmond Hill Road, Kingstown, St. Vincent and the
          Grenadines (SVG).
        </p>

        {/* <p className="mt-3 text-[#dff8f6] font-medium">
          The PAMM (Percent Allocation Money Management) service is offered{" "}
          <strong>
            exclusively under Stonefort Securities (SLC) Ltd
          </strong>
          , which is incorporated and regulated in Saint Lucia.
        </p> */}

        <p className="mt-2">
          Past performance is not indicative of future results. Please ensure
          you fully understand the risks involved before investing or allocating
          funds to any PAMM account.
        </p>

        <h3 className="text-[#00d3c6] text-[18px] font-semibold mt-6 mb-2">
          Risk Disclosure – Products & Services
        </h3>
        <p>
          Over the counter (OTC) leveraged derivative products, including
          Contracts for Difference (CFDs) and currencies in the spot market are
          complex financial instruments that carry a high level of risk. The use
          of leverage can magnify both gains and losses; in some cases, losses
          may exceed the initial investment. These products may not be suitable
          for all investors.
        </p>

        <p className="mt-2">
          Before engaging in any trading activity, you should carefully assess
          your investment objectives, level of experience, risk tolerance, and
          overall financial situation. We strongly recommend seeking independent
          financial or professional advice before trading.
        </p>

        <h3 className="text-[#00d3c6] text-[18px] font-semibold mt-6 mb-2">
          Disclaimer
        </h3>
        <p>
          CFDs and other leveraged OTC financial instruments involve a
          significant risk of losing money rapidly due to leverage. You should
          ensure that you fully understand how these instruments work and
          consider whether you can afford to take the high risk of losing your
          capital.
        </p>

        <p className="mt-2">
          Trading is carried out at your own discretion and risk. Stonefort
          Securities does not accept responsibility for any losses incurred as a
          result of trading these high-risk financial products.
        </p>
      </div>

      {/* ===== Bottom copyright ===== */}
      <div className="max-w-[1200px] mx-auto mt-8 pt-5 border-t border-white/10 text-center text-sm text-[#9fb0b0] px-6 sm:px-8">
        © {new Date().getFullYear()} Stonefort Partners. All rights reserved.
      </div>

      {/* ===== Responsive alignment fix ===== */}
      <style jsx global>{`
        @media (max-width: 768px) {
          footer .grid {
            grid-template-columns: 1fr 1fr !important;
          }
          footer .flex.justify-center {
            grid-column: 1 / -1;
          }
          footer .flex.justify-end {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
