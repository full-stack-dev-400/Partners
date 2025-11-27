"use client";

import { useState } from "react";
import styles from "../home/Faq.module.css";

type QA = { q: string; a: string };

const QA_ITEMS: QA[] = [
  {
    q: "How do I join the Loyalty Programme?",
    a: "If you’re already a Stonefort Partner, you can easily opt in by logging into your partner account and following the opt-in instructions on your dashboard.If you’re not a partner yet, register through our Partner Programme to get started — it only takes a few minutes to join and begin earning rewards.",
  },
  {
    q: "How can I earn points?",
    a: "You’ll earn points for every referral you bring to Stonefort Securities. Depending on your partnership type, you can also earn additional points based on your referred clients’ trading activity. ",
  },
  {
    q: "How do I redeem my points?",
    a: "To redeem your accumulated points, just reach out to your dedicated account manager who will assist you with available reward options. ",
  },
  {
    q: "Am I eligible for the Partner Loyalty Programme?",
    a: "Yes, our Loyalty Programme is open to all active IB and affiliate partners of Stonefort Securities. ",
  },
];

export default function LoyaltyFaq() {
  const [open, setOpen] = useState<number>(-1); // first open like home

  return (
    <section className={styles.section} aria-labelledby="loyalty-faq-heading">
      <div className={styles.container}>
        <h2 id="loyalty-faq-heading" className={styles.heading}>
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
                  aria-controls={`loyalty-faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span id={`loyalty-faq-q-${i}`} className={styles.question}>
                    {item.q}
                  </span>
                  <span className={styles.icon} aria-hidden="true" />
                </button>

                <div
                  id={`loyalty-faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`loyalty-faq-q-${i}`}
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
