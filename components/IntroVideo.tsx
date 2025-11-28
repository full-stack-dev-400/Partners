"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./IntroVideo.module.css";

export default function IntroVideo() {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch(() => {});

      const handleEnded = () => {
        setShowVideo(false);
      };

      video.addEventListener("ended", handleEnded);

      return () => {
        video.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  if (!showVideo) return null;

  return (
    <div className={styles.overlay}>
      <video
        ref={videoRef}
        src="/videos/Stonefort-Opening.webm"
        autoPlay
        muted
        playsInline
        className={styles.video}
      />
    </div>
  );
}
