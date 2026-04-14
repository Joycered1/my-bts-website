import Image from "next/image";
import Link from "next/link";
import { members } from "@/lib/members";
import styles from "./page.module.css";

export default function Home() {
  const v = members.find((m) => m.isBias)!;
  const rest = members.filter((m) => !m.isBias);

  return (
    <main className={styles.main}>
      {/* ── Hero: V ── */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrap}>
          <Image
            src={v.photoUrl}
            alt={`${v.stageName} — ${v.name}`}
            fill
            sizes="100vw"
            className={styles.heroImg}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroBadge}>Main Bias</p>
          <h1 className={styles.heroName}>{v.stageName}</h1>
          <p className={styles.heroHangul}>{v.hangul}</p>
          <p className={styles.heroSub}>{v.name} · {v.positions.join(" · ")}</p>
          <p className={styles.heroBio}>{v.bio.slice(0, 220)}…</p>
          <Link href={`/members/${v.slug}`} className={styles.heroBtn}>
            Explore V&apos;s Universe →
          </Link>
        </div>
      </section>

      {/* ── Members section ── */}
      <section className={styles.membersSection}>
        <h2 className={styles.sectionTitle}>The Bangtan Seven</h2>
        <div className={styles.grid}>
          {/* V featured card */}
          <Link href={`/members/${v.slug}`} className={`${styles.card} ${styles.cardFeatured}`}>
            <div className={styles.cardImageWrap}>
              <Image
                src={v.photoUrl}
                alt={v.stageName}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.cardImg}
              />
              <div className={styles.cardOverlay} />
            </div>
            <div className={styles.cardInfo}>
              <span className={styles.biasBadge}>★ Main Bias</span>
              <h3 className={styles.cardName}>{v.stageName}</h3>
              <p className={styles.cardPosition}>{v.positions.join(" · ")}</p>
            </div>
          </Link>

          {/* Other 6 members */}
          {rest.map((member) => (
            <Link key={member.slug} href={`/members/${member.slug}`} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={member.photoUrl}
                  alt={member.stageName}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className={styles.cardImg}
                />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardName}>{member.stageName}</h3>
                <p className={styles.cardPosition}>{member.positions[0]}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
