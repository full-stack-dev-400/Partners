"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import TranslateWidget from "@/components/TranslateWidget";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname(); // 👈 current URL

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const threshold = 80;

      if (currentY > lastScrollY && currentY > threshold) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 🔹 Helper: check which main menu is active
  const isHomeActive = ["/", "/become-an-ib", "/cpa", "/pamm"].includes(pathname);
  const isLoyaltyActive = pathname.startsWith("/loyalty-programme");
  const isAboutActive = pathname.startsWith("/about");

  const activeColor = "#00d4c6";

  return (
    <header
      className={`sticky top-0 z-40 w-full text-white bg-black/95 backdrop-blur-sm transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* ===== Top utility bar ===== */}
      <div className="bg-black">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex h-14 items-center justify-end gap-6">
            <Link
              href="/contact"
              className="text-[14px] font-normal tracking-[0.2px] hover:text-teal-300 transition-colors"
            >
              Contact Us
            </Link>

              <div className="scale-75 origin-right">
    <TranslateWidget />
  </div>
          </div>
        </div>
      </div>

      {/* divider line */}
      <div className="h-px w-full bg-white/10" />

      {/* ===== Bottom main bar ===== */}
      <div className="bg-black">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center py-4 md:py-1">
            <div
              className="
                shrink-0
                scale-[0.75]
                sm:scale-95
                lg:scale-105
              "
            >
              <Logo />
            </div>

            <div className="flex-1" />

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-[56px]">
                {/* Home + dropdown */}
                <li className="relative group">
                  <Link
                    href="/"
                    className={`inline-flex items-center gap-2 text-[18px] leading-none font-normal tracking-[0.2px] transition-colors
                      ${
                        isHomeActive
                          ? "text-[##00d4c6]"
                          : "text-white hover:text-teal-300"
                      }
                    `}
                  >
                    Home
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      className="opacity-90"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  <div
                    className="
                      absolute left-1/2 top-full -translate-x-1/2 z-50 mt-3
                      invisible opacity-0 translate-y-1 transition
                      group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                      pointer-events-none group-hover:pointer-events-auto
                      before:absolute before:inset-x-0 before:-top-3 before:h-3 before:content-['']
                    "
                  >
                    <div className="w-[380px] rounded-md bg-white py-2 text-black shadow-2xl">
                      {/* IB */}
                      <Link
                        href="/become-an-ib"
                        className={`
                          block px-6 py-4 text-[18px] font-normal transition-colors
                          ${
                            pathname === "/become-an-ib"
                              ? "bg-[#00d4c6] text-white"
                              : "hover:bg-[#00d4c6] hover:text-white"
                          }
                        `}
                      >
                        Become an Introducer (IB)
                      </Link>

                      {/* CPA */}
                      <Link
                        href="/cpa"
                        className={`
                          block px-6 py-4 text-[18px] font-normal transition-colors
                          ${
                            pathname === "/cpa"
                              ? "bg-[#00d4c6] text-white"
                              : "hover:bg-[#00d4c6] hover:text-white"
                          }
                        `}
                      >
                        Become a CPA Affiliate
                      </Link>

                      {/* PAMM */}
                      <Link
                        href="/pamm"
                        className={`
                          block px-6 py-4 text-[18px] font-normal transition-colors
                          ${
                            pathname === "/pamm"
                              ? "bg-[#00d4c6] text-white"
                              : "hover:bg-[#00d4c6] hover:text-white"
                          }
                        `}
                      >
                        Become a Money Manager (PAMM)
                      </Link>
                    </div>
                  </div>
                </li>

                {/* Loyalty Programme */}
                <li>
                  <Link
                    href="/loyalty-programme"
                    className={`text-[18px] leading-none font-normal tracking-[0.2px] transition-colors
                      ${
                        isLoyaltyActive
                          ? "text-[#00d4c6]"
                          : "text-white hover:text-teal-300"
                      }
                    `}
                  >
                    Loyalty Programme
                  </Link>
                </li>

                {/* About Us */}
                <li>
                  <Link
                    href="/about"
                    className={`text-[18px] leading-none font-normal tracking-[0.2px] transition-colors
                      ${
                        isAboutActive
                          ? "text-[#00d4c6]"
                          : "text-white hover:text-teal-300"
                      }
                    `}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex-1" />

            <div className="lg:hidden ml-auto">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/10" />
    </header>
  );
}
