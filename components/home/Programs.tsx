"use client";

import Link from "next/link";
import styles from "./Programs.module.css";

type Program = {
  tag: string;
  title: string;   // use \n for line breaks
  body: string;
  ctaHref: string;
  learnHref: string;
};

export default function Programs() {
  const programs: Program[] = [
    {
      tag: "INTRODUCING BROKER",
      title:
        "Trade More.\n Earn More.",
      body:
        "Start as a Silver IB and grow your way to Platinum with unbeatable rebates on Forex, Commodities, Indices & Crypto. The more you bring, the more you earn it’s that simple.",
      ctaHref: "https://clients-mu-stonefortsecurities.com/#/register",
      learnHref: "/become-an-ib",
    },
    {
      tag: "PAMM",
      title:
        "Smart Fee Structure Built for\nGrowth and Performance.",
      body:
        "Benefit from a dedicated fee account, flexible investor fees, low admin charges, and just 1% trading volume to remain active.",
      ctaHref: "https://clients-mu-stonefortsecurities.com/#/register",
      learnHref: "/pamm",
    },
    {
      tag: "CPA AFFILIATE PROGRAM",
      title:
        "Up to $2,000 CPA\n per client",
      body:
        "Earn up to $2,000 CPA per referral with Stonefort. Track results in real time and grow with dedicated partner support.",
      ctaHref: "https://clients-mu-stonefortsecurities.com/#/register",
      learnHref: "/cpa",
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="programs-head">
      <div className={styles.container}>
        <h2 id="programs-head" className={styles.heading}>
          <span className={styles.accent}>Partner</span> with Purpose.{" "}
          <span className={styles.accent}>Earn</span> with Confidence.
        </h2>

        <div className={styles.grid}>
          {programs.map((p, i) => (
            <article
              key={i}
              className={`${styles.card} ${i === 2 ? styles.cardCenter : ""}`}
            >
              {/* ribbon */}
              <div className={styles.ribbon}>
                <span className={styles.ribbonText}>{p.tag}</span>
              </div>

              {/* content */}
              <div className={styles.inner}>
                <h3
                  className={styles.title}
                  dangerouslySetInnerHTML={{
                    __html: p.title.replace(/\n/g, "<br/>"),
                  }}
                />
                <p className={styles.body}>{p.body}</p>

                <div className={styles.ctaRow}>
                  <Link href={p.ctaHref} className={`${styles.btn} ${styles.btnPrimary}`}>
                    Become a Partner
                  </Link>
                  <Link href={p.learnHref} className={`${styles.btn} ${styles.btnGhost}`}>
                    Learn More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
