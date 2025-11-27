"use client";

import Image from "next/image";
import styles from "./TrustedBroker.module.css";

type Props = {
  title?: string;
  subtitle?: string;
  trustScore?: string;
  totalTrades?: string;
  awardText?: string;
  tradersNote?: string;
  trustPilotSrc?: string;
  awardSrc?: string;
};

export default function TrustedBroker({
  title = "Partner with a Trusted Broker",
  subtitle = "Experience seamless, secure, and transparent trading with a broker committed to your success.",
  trustScore = "Trust Score 4.0",
  totalTrades = "200K+",
  awardText = "Winner of best\nemerging broker",
  tradersNote = "Trusted by Traders\naround the world",
  trustPilotSrc = "/images/trust-pilot.png",
  awardSrc = "/images/emerging-award.png",
}: Props) {
  return (
    <section className={styles.wrap} aria-label="Trusted Broker State">
      <div className={styles.inner}>
        <h2 className={styles.title}>
  Partner with a <span className={styles.teal}>Trusted</span> Broker
</h2>

        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.row}>
          {/* Awards */}
          <div className={styles.cell}>
            <Image
              src={awardSrc}
              alt="Award"
              width={76}
              height={76}
              className={styles.icon}
            />
            <p className={styles.caption}>{awardText}</p>
          </div>

                    {/* Divider */}
          <div className={styles.divider} aria-hidden="true" />

          {/* ⭐ NEW CELL — Top 100 Broker */}
          <div className={styles.cell}>
            <Image
              src={awardSrc}
              alt="Top 100 Broker"
              width={76}
              height={76}
              className={styles.icon}
            />
            <p className={styles.caption}>Top 100 Broker</p>
          </div>

          {/* Divider */}
          <div className={styles.divider} aria-hidden="true" />

          {/* Trustpilot */}
          <div className={styles.cell}>
            <Image
              src={trustPilotSrc}
              alt="Trustpilot"
              width={150}
              height={64}
            />
            <p className={styles.caption}>{trustScore}</p>
          </div>

          {/* Divider */}
          <div className={styles.divider} aria-hidden="true" />

          {/* 200k+ */}
          <div className={styles.cell}>
            <div className={styles.bigCount}>{totalTrades}</div>
            <p className={styles.caption}>{tradersNote}</p>
          </div>


        </div>
      </div>
    </section>
  );
}
