"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Become an Introducer.module.css";

export default function BecomeAnIntroducer() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {/* === Breadcrumb (full width, above both columns) === */}
        <p className={styles.breadcrumb}>
          <Link href="/">Stonefort Partners</Link> › Become an Introducer Broker
        </p>

        {/* ===== Left Text Side ===== */}
        <div className={styles.content}>
          <h1 className={styles.title}>Partner with Power</h1>
          <p className={styles.subtitle}>
            Profit from Every Trade as your Network is Your Net Worth in Forex.
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
                <h3>Earn from Every Trade</h3>
                <p className="ibcontent">
                  Access up-to-the-minute information on trading and performance
                  directly from your Partner Portal. Respond quickly to market
                  changes and fine-tune your approach in real time.
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
                <h3>Flexible IB Levels</h3>
                <p className="ibcontent">
                  Start at Silver and move up to Gold or Platinum. Higher levels
                  mean better rebates and more earning potential.
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
                <h3>Support to Help You Grow</h3>
                <p className="ibcontent">
                  Get full assistance from account managers to marketing tools
                  to expand your reach and grow your referral base.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* ===== Right Card Side ===== */}
        <div className={styles.card}>
          <Image
            src="/images/Group 1410088510.png"
            alt="bull vs bear"
            width={501}
            height={162}
            className={styles.cardImage}
          />

          <div className={styles.cardBody}>
            <div className={styles.cardHeader}>
              <Image
                src="/images/ib-logo.png"
                alt="Stonefort icon"
                width={34}
                height={46}
              />
              <h3>
                Why Partner with <br />
                Stonefort?
              </h3>
            </div>

            <ul className={styles.stats}>
              <li>
                <Image
                  src="/images/IB volum.png"
                  alt="volume icon"
                  width={20}
                  height={20}
                />
                <strong>$500M+</strong>monthly trading volume
              </li>
              <li>
                <Image
                  src="/images/IB Dollar.png"
                  alt="dollar icon"
                  width={20}
                  height={20}
                />
                <strong>$200M+</strong>paid to partners
              </li>
              <li>
                <Image
                  src="/images/IB profile.png"
                  alt="profile icon"
                  width={20}
                  height={20}
                />
                <strong>1000+</strong> active partners
              </li>
            </ul>

            <div className={styles.actions}>
              <Link
                href="https://clients-mu-stonefortsecurities.com/#/register"
                className={styles.primaryBtn}
              >
                Become an Introducer
              </Link>
              <Link
                href="https://partners-stonefortsecurities.com/v2/login/"
                className={styles.secondaryBtn}
              >
                Login to IB Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
