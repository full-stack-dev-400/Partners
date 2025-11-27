"use client";

import { useState } from "react";
import styles from "./IbFaq.module.css";

type QA = { q: string; a: string };

const QA_ITEMS: QA[] = [
    {
        q: "Are there any eligibility criteria to become an IB partner?",
        a: "There is no minimum eligibility requirement to join as an IB partner. However, your earnings depend on the number of referred clients who trade with us, so it’s helpful to have a clear strategy for attracting referrals.",
    },
    
    {
        q: "How does Stonefort help me grow my business?",
        a: "Our partners benefit from dedicated one-on-one business support, access to comprehensive marketing materials, and commercial assistance for promotional events. For more details, please reach out to your account manager.",
    },

    {
        q: "How can I become an IB partner with Stonefort?",
        a: "Simply complete our sign-up form with your details and select “IB request” as your partnership type. A team member will contact you promptly with the next steps.",
    },

    {
        q: "What tools do you offer partners?",
        a: "All IB partners receive access to a real-time tracking portal for managing referrals and monitoring payouts. Additionally, partners can leverage our PAMM solutions for efficient money management and benefit from social copy trading options to earn through signal sharing.",
    },
];

export default function IbFaq() {
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