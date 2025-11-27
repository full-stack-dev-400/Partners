"use client";

import { useState } from "react";
import styles from "./PammFaqs.module.css";

type QA = { q: string; a: string };

const QA_ITEMS: QA[] = [
    {
        q: "What is the amount received by managers and investors at the end of a trading interval before compensation is applied?",
        a: "If the PAMM account achieves a 200% return, the manager receives 200% of their initial deposit (300 USD), resulting in 600 USD profit. Similarly, the investor receives 200% of their investment (200 USD), totalling 400 USD in profit. ",
    },
    
    {
        q: "How are profits and losses allocated in PAMM accounts?",
        a: "Profits and losses are distributed proportionally based on the amount each party invested. In this scenario, the manager holds 60% of the total capital (300 USD), and the investor holds 40% (200 USD), leading to a combined trading capital of 500 USD. Returns are allocated accordingly. ",
    },

    {
        q: "What is the performance fee paid by the investor to the manager?",
        a: "The investor pays a performance fee of 20% on their profit. Based on a 400 USD gain, the manager receives 80 USD as remuneration. ",
    },

{
  q: "How are final payouts calculated?",
  a: `
    <p>After profits and the manager’s performance fee are applied, the final balances are as follows:</p>
    <ul>
      <li><strong>Investor’s account:</strong> 200 USD (initial investment) + 400 USD (profit) − 80 USD (performance fee) = <strong>520 USD</strong></li>
      <li><strong>Manager’s account:</strong> 300 USD (initial deposit) + 600 USD (profit) + 80 USD (performance fee received) = <strong>980 USD</strong></li>
    </ul>
  `,
},
];

export default function PammFaq() {
     const [open, setOpen] = useState<number>(-1);

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.container}>
        <h2 id="faq-heading" className={styles.heading}>
          Frequently asked questions
        </h2>

        <ul className={styles.list}>
          {QA_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                <button
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className={styles.question}>{item.q}</span>
                  <span className={styles.icon} aria-hidden="true" />
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                >
                  <div className={styles.answerWrap}>
                    <div
  className={styles.answer}
  dangerouslySetInnerHTML={{ __html: item.a }}
/>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}