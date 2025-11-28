"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./CpaHero.module.css";

export default function CpaAffiliate() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {/* === Breadcrumb (full width, above both columns) === */}
        <p className={styles.breadcrumb}>
          <Link href="/">Stonefort Partners</Link> › CPA Affiliate Program
        </p>

        {/* ===== Left Text Side ===== */}
        <div className={styles.content}>
          <h1 className={styles.title}>CPA Affiliate</h1>
          <p className={styles.subtitle}>
            Monetize your forex traffic with Stonefort’s CPA model; commissions
            on every funded trader.
          </p>

          <ul className={styles.features}>
            <li>
              <Image
                src="/images/Tick Square.png"
                alt="tick"
                width={24}
                height={24}
              />
              <div>
                <h3>Competitive CPA</h3>
                <p>
                  Earn one of the highest CPA payouts in the industry, with
                  rewards of up to <strong>$2,000 per funded account</strong>,
                  based on deposits and lot requirements.
                </p>
              </div>
            </li>

            <li>
              <Image
                src="/images/Tick Square.png"
                alt="tick"
                width={24}
                height={24}
              />
              <div>
                <h3>Multi-Regulated Security</h3>
                <p>
                  Stonefort operates under multiple international regulatory
                  frameworks, providing transparency, fund security, and global
                  credibility.
                </p>
              </div>
            </li>

            <li>
              <Image
                src="/images/Tick Square.png"
                alt="tick"
                width={24}
                height={24}
              />
              <div>
                <h3>Dedicated Affiliate Support</h3>
                <p>
                  Access 24/7 multilingual support and a team of affiliate
                  managers committed to helping you maximize your campaign
                  performance.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* ===== Right Card Side ===== */}
        <div className={styles.card}>
          <div className={styles.cardImage}>

            <Image
              src="/images/cpahero.webp"
              alt="affiliate banner"
              fill
              className={styles.bannerImg}
              priority
            />
            
          </div>

          <div className={styles.cardBody}>
            <div className={styles.cardHeader}>
              <Image
                src="/images/ib-logo.png" 
                alt="Stonefort icon"
                width={34}
                height={46}
              />
              <h3>
                Why Join <br /> Stonefort CPA Program?
              </h3>
            </div>

            <ul className={styles.stats}>
              <li>
                <Image
                  src="/images/candlestick.png"
                  alt="geo icon"
                  width={20}
                  height={20}
                />
                Range of Multi-Asset <br/>Trading Services
              </li>
              <li>
                <Image
                  src="/images/IB volum.png"
                  alt="geo icon"
                  width={20}
                  height={20}
                />
                <strong>500m+</strong> active GEO regions
              </li>
              <li>
                <Image
                  src="/images/IB Dollar.png"
                  alt="dollar icon"
                  width={20}
                  height={20}
                />
                <strong>$200m+</strong> paid to partners
              </li>
              <li>
                <Image
                  src="/images/IB profile.png"
                  alt="partner icon"
                  width={20}
                  height={20}
                />
                <strong>1000+</strong> active partners
              </li>
            </ul>

            <div className={styles.actions}>
              <Link href="#apply" className={styles.primaryBtn}>
                Become a CPA Affiliate
              </Link>
              <Link
                href="https://partners-stonefortsecurities.com/v2/login/"
                className={styles.secondaryBtn}
              >
                Login to CPA Affiliate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
