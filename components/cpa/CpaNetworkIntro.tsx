"use-client";

import Image from "next/image";
import styles from "./CpaNetworkIntro.module.css"

export default function CpaNetworkIntro(){
    return (
        <section className={styles.wrap} aria-label="CPA top benefits">
            <div className={styles.inner}>
                <h2 className={styles.title}>
                    Why <span className={styles.teal}>Affiliates</span> choose <span className={styles.teal}>Stonefort?</span>
                </h2>

                <ul className={styles.grid3}>
                    <li className={styles.card}>
                        <div className={styles.icon}>
                            <Image src="/images/payout.svg" alt="Leading payouts" width={48} height={48}/>
                        </div>
                        <h3 className={styles.cardTitle}>Competitive CPA</h3>
                        <p>Earn up to $1,000 per funded trader with Stonefort’s high-paying CPA program among the most rewarding in the forex industry.</p>
                    </li>

                    <li className={styles.card}>
                        <div className={styles.icon}>
                            <Image src="/images/support.svg" alt="Leading payouts" width={48} height={48}/>
                        </div>
                        <h3 className={styles.cardTitle}>Dedicated Partner Support</h3>
                        <p>Access 24/7 multilingual assistance and a team of affiliate managers committed to your growth and success.</p>
                    </li>
                    
                                        <li className={styles.card}>
                        <div className={styles.icon}>
                            <Image src="/images/modern.svg" alt="Leading payouts" width={48} height={48}/>
                        </div>
                        <h3 className={styles.cardTitle}>Seamless Onboarding</h3>
                        <p>Get instant access to premium marketing tools, creative assets, and resources designed to boost your referrals.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}