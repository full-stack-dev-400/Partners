"use client";

import styles from "./CPAProgramSchedule.module.css";

export default function CPAProgramSchedule() {
  return (
    <section className={styles.wrap} aria-label="CPA Program Schedule">
      {/* ===== Hero Copy ===== */}
      <div className={styles.hero}>
        <h1 className={styles.title}>
          <span className={styles.teal}>Monetize</span> your trading content by earning
          <br />
          for every <span className={styles.teal}>active trader</span> you recommend.
        </h1>
        <p className={styles.subtitle}>
          Where Your Connections Drive Your Success and Multiply Your Earnings.
        </p>
      </div>

      {/* ===== Schedule Table ===== */}
      <div className="notes">
      <div className={styles.tableCard}>
        
        <div className={styles.cardTitle} role="heading" aria-level={2}>
          CPA Program Schedule
        </div>

        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>FDA (Deposit Range)</th>
                <th>CPA Payout</th>
                <th>Minimum Lot Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$50 – $250</td>
                <td>20%</td>
                <td>4 LOTS (Minimum)</td>
              </tr>
              <tr>
                <td>$251 – $500</td>
                <td>20%</td>
                <td>7 LOTS (Minimum)</td>
              </tr>
              <tr>
                <td>$501 – $1500</td>
                <td>20%</td>
                <td>10 LOTS (Minimum)</td>
              </tr>
              <tr>
                <td>$1501 – $2500</td>
                <td>20%</td>
                <td>13 LOTS (Minimum)</td>
              </tr>
              <tr>
                <td>$2501 – $5000</td>
                <td>20%</td>
                <td>20 LOTS (Minimum)</td>
              </tr>
            </tbody>
          </table>
          
        </div>
        
        </div>
        <div className={styles.noteWrap}>
          <p className={styles.tableNote}>
            * TnC: – Eligible Instruments – FX, METALS & ENERGIES ONLY – Leverage : 1:500 – IMPORTANT : Maintain ROI of 2.5%
          </p>
      </div>
      </div>
      
    </section>
  );
}
