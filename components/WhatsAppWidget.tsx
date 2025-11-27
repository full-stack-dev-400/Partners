"use client";

import Image from "next/image";
import styles from "./WhatsAppWidget.module.css";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const DEFAULT_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Hi, I’d like to know more about Stonefort.";

export default function WhatsAppWidget() {
  if (!WHATSAPP_NUMBER) return null;

  const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        src="/images/whatsapp.webp"
        alt="WhatsApp"
        width={32}
        height={32}
        className={styles.icon}
        priority
      />

      <span className={styles.label}>Chat with us</span>
    </a>
  );
}
