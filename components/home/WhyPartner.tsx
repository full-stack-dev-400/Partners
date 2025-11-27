"use client";

import Image from "next/image";
import styles from "./WhyPartner.module.css";

type Item = {
  title: string;
  body: string;
  icon?: string; // /public path, e.g. "/images/icons/dollar.svg"
};

export default function WhyPartner() {
  const items: Item[] = [
    {
      title: "Maximize Your Earnings",
      body:
        "Boost your revenue potential, reach a wider audience, and grow your business by partnering with Stonefort Securities.",
      icon: "/images/Doll.png",
    },
    {
      title: "Transparent Payouts",
      body:
        "Enjoy fast, secure, and fully transparent payouts through our trusted and efficient payment system.",
      icon: "/images/wallet.png",
    },
    {
      title: "Real-Time Performance Tracking",
      body:
        "Monitor your performance in real time with our intuitive Partner Portal, designed for full visibility and actionable insights.",
      icon: "/images/trade.png",
    },
    {
      title: "Dedicated Account Manager",
      body:
        "Work closely with your assigned Account Manager, who will support your growth strategy and help you hit your revenue goals.",
      icon: "/images/Profile.png",
    },
    {
      title: "Priority Partner Support",
      body:
        "Receive 1-to-1 assistance to turn every opportunity into a success our support team is with you at every step.",
      icon: "/images/email.png",
    },
    {
      title: "Marketing & Event Support",
      body:
        "Leverage our full suite of marketing materials and commercial support to amplify your brand and drive partner engagement.",
      icon: "/images/head.png",
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="why-head">
      <div className={styles.container}>
        <h2 id="why-head" className={styles.heading}>
          Why partner with <span className={styles.accent}>Stonefort</span>?
        </h2>

        <div className={styles.grid}>
          {items.map((it, i) => {
            // Alternate gradient cards: 0,2,4...
            const accented = i % 2 === 0;
            return (
              <article
                key={i}
                className={`${styles.card} ${accented ? styles.cardAccent : ""}`}
              >
                <span className={styles.iconChip} aria-hidden="true">
                  {it.icon ? (
                    <Image
                      src={it.icon}
                      alt=""
                      fill
                      sizes="40px"
                      className={styles.iconImg}
                    />
                  ) : (
                    <span className={styles.iconFallback}>★</span>
                  )}
                </span>

                <div className={styles.textWrapBottom}>
                 
                  <h3
                    className={`${styles.cardTitle} ${
                      i === 1 ? styles.cardTitleTwoLine : ""
                    }`}
                  >
                    {it.title}
                  </h3>

                  <p className={styles.cardBody}>{it.body}</p>
                </div>
              </article>

            );
          })}
        </div>
      </div>
    </section>
  );
}
