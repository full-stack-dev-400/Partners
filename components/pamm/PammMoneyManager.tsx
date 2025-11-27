"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./PammMoneyManager.module.css";

export default function MoneyManager() {
  return (
    <section className={styles.wrap} aria-label="Get Started steps">
      <div className={styles.inner}>
        <h2 className={styles.title}>How to become a <span className={styles.teal}>money manager</span><br/> in 3 easy steps</h2>


        <ol className={styles.grid3}>
          {/* 1 */}
          <li className={`${styles.step}`} data-step="1">
            <div className={styles.iconWrap}>
              <Image
                src="/images/IB-1.png"
                alt="Register icon"
                width={59}
                height={95}
                className={styles.icon}
                priority
              />
            </div>

            <h3 className={styles.stepTitle}>Complete Your Application</h3>
            <p className={styles.stepText}>Submit your details and partnership preferences to start your journey as a Stonefort Partner.</p>
          </li>

          {/* connector */}
          <li aria-hidden="true" className={styles.connector} />

          {/* 2 */}
          <li className={`${styles.step}`} data-step="2">
            <div className={styles.iconWrap}>
              <Image
                src="/images/IB-2.png"
                alt="Refer icon"
                width={59}
                height={95}
                className={styles.icon}
              />
            </div>

            <h3 className={styles.stepTitle}>Connect with Our Premium Support Team</h3>
            <p className={styles.stepText}>Our dedicated partner onboarding team will assist you in setting up your account quickly and seamlessly.</p>
          </li>

          {/* connector */}
          <li aria-hidden="true" className={styles.connector} />

          {/* 3 */}
          <li className={`${styles.step}`} data-step="3">
            <div className={styles.iconWrap}>
              <Image
                src="/images/IB-3.png"
                alt="Earn icon"
                width={59}
                height={95}
                className={styles.icon}
              />
            </div>

            <h3 className={styles.stepTitle}>Let Clients Benefit <br/>from Your Expertise</h3>
            <p className={styles.stepText}>Enable clients to connect their accounts and start earning from your trading knowledge and professional strategies.</p>
          </li>
        </ol>

        <div className={styles.ctaRow}>
        <a
            href="/pammform"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
        >
            Become a Money Manager
        </a>

        <a
            href="https://www.stonefort-pamm.com/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
        >
            Log in to PAMM Portal
        </a>
        </div>


      </div>
    </section>
  );
}
