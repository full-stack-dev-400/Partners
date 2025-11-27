"use client";

import { useState } from "react";
import styles from "./CpaFaq.module.css";

type QA = { q: string; a: string };

const QA_ITEMS: QA[] = [
    {
        q: "Is there any eligibility criteria to become a Stonefort Affiliate?",
        a: "Yes. Please review our Terms & Conditions for the full list of eligibility requirements before applying.",
    },
    
    {
        q: "How does Stonefort Securities help me grow my business?",
        a: "As a partner, you’ll receive dedicated 1-to-1 business support, ready-to-use marketing materials, and ongoing guidance to maximise your growth. For details, contact your affiliate manager.",
    },

    {
        q: "How can I become an affiliate partner with Stonefort Securities?",
        a: "Simply complete our online sign-up form and select “Affiliate Request” as your partnership type. Our team will connect with you to guide you through the next steps.",
    },

    {
        q: "What tools will I have access to as an affiliate?",
        a: "All affiliates gain access to a real-time tracking portal to monitor referrals, campaigns, and payouts with full transparency.",
    },
];

export default function CpaFaq() {
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