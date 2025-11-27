"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

type QA = { q: string; a: string };

const QA_ITEMS: QA[] = [
  {
    q: "How do I become a partner?",
    a: "Complete our sign-up form with your details and preferred partnership type, and our team will promptly connect with you to guide you through the next steps.",
  },
  {
    q: "Can I tailor my payout structure?",
    a: "Yes. We offer flexible plans based on volume, performance, and business model (IB, CPA, PAMM). Your manager will help you choose the best fit.",
  },
  {
    q: "What are the benefits of becoming a partner with Stonefort Partners?",
    a: "Top-tier payouts, real-time performance tracking, transparent reporting, dedicated account management, and full marketing support.",
  },
  {
    q: "Can I choose multiple partnership models?",
    a: "Absolutely. Many partners run multiple models in parallel (e.g., IB + CPA). We’ll help you structure it for clarity and maximum return.",
  },
];

export default function Faq() {
  // first open by default
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
                    <p className={styles.answer}>{item.a}</p>
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
