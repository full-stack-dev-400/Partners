"use client";

import Image from "next/image";
import styles from "./NetworkIntro.module.css";

export default function NetworkIntro() {
  return (
    <section className={styles.wrap} aria-label="IB top benefits">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Join <span className={styles.accent}>Stonefort</span>. Expand Your <span className={styles.accent}>Network</span>.
          Build Your Forex <span className={styles.accent}>Empire</span>.
        </h2>
        <p className={styles.subtitle}>
          Where Your Connections Drive Your Success and Multiply Your Earnings.
        </p>

        <ul className={styles.grid3}>
          <li className={styles.card}>
            <div className={styles.icon}>
              <Image src="/images/payout.svg" alt="Leading payouts" width={48} height={48} />
            </div>
            <h3 className={styles.cardTitle}>Leading Payouts</h3>
            <p className={styles.cardText}>
              Maximize your referral earnings with rebates up to 70%, while enjoying full control over withdrawals through our automated payout system.
            </p>
          </li>

          <li className={styles.card}>
            <div className={styles.icon}>
              <Image src="/images/support.svg" alt="Personalized support" width={48} height={48} />
            </div>
            <h3 className={styles.cardTitle}>Personalized Support</h3>
            <p className={styles.cardText}>
              Receive dedicated one-on-one assistance from our expert team, along with tailored commercial and marketing support to power your promotional campaigns.
            </p>
          </li>

          <li className={styles.card}>
            <div className={styles.icon}>
              <Image src="/images/modern.svg" alt="Modern tools" width={48} height={48} />
            </div>
            <h3 className={styles.cardTitle}>Modern Tools</h3>
            <p className={styles.cardText}>
              Transparent, real-time tracking with an IB Portal designed for seamless partner management and beyond.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
