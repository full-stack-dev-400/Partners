"use client";

import Link from "next/link";
import styles from "./PammHero.module.css";

export default function PammHero() {
  return (
    <section className={styles.wrap} aria-label="Stonefort PAMM hero">
      <div className={styles.container}>
        {/* ===== Background box ===== */}
        <div className={styles.bgBox}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
                <span aria-hidden="true">›</span>
              </li>
              <li aria-current="page">PAMM</li>
            </ol>
          </nav>

          {/* Title + tagline */}
          <div className={styles.center}>
            <h1 className={styles.title}>
              Stonefort P<span className={styles.teal}>A</span>MM
            </h1>
            <p className={styles.tagline}>Become a Fund Manager with Stonefort.</p>
          </div>
        </div>


      </div>
              {/* ===== White card below hero ===== */}
        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.cardTitle}>
            Experience Professional Portfolio Growth with Stonefort{" "}
           P<span className={styles.teal}>A</span>MM
          </h2>
          <p className={styles.cardText}>
            Let skilled fund managers trade on your behalf through Stonefort’s PAMM
            (Percentage Allocation Management Module). Enjoy transparent profit sharing,
            risk diversification, and full control over your investments.
          </p>
          </div>
          
        </div>
    </section>
  );
}
