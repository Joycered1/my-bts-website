import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { members, getMember } from "@/lib/members";
import styles from "./page.module.css";

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return {};
  return {
    title: `${member.stageName} (${member.name}) — BTS Universe`,
    description: member.bio.slice(0, 160),
  };
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMember(slug);

  if (!member) notFound();

  return (
    <div className={styles.page}>
      {/* Back nav */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.backLink}>
          ← Back to all members
        </Link>
        {member.isBias && <span className={styles.biasBadge}>★ Main Bias</span>}
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.photoWrap}>
          <Image
            src={member.photoUrl}
            alt={member.stageName}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className={styles.photo}
            priority
          />
        </div>

        <div className={styles.headerInfo}>
          <p className={styles.hangul}>{member.hangul}</p>
          <h1 className={styles.stageName}>{member.stageName}</h1>
          <p className={styles.fullName}>{member.name}</p>

          <dl className={styles.stats}>
            <div className={styles.statRow}>
              <dt>Born</dt>
              <dd>{member.born}</dd>
            </div>
            <div className={styles.statRow}>
              <dt>Age</dt>
              <dd>{member.age}</dd>
            </div>
            <div className={styles.statRow}>
              <dt>Positions</dt>
              <dd>{member.positions.join(", ")}</dd>
            </div>
            <div className={styles.statRow}>
              <dt>Nicknames</dt>
              <dd>{member.nicknames.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className={styles.body}>
        {/* Bio */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Biography</h2>
          <p className={styles.bio}>{member.bio}</p>
        </section>

        {/* Solo Discography */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Solo Discography</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {member.solo_discography.map((item) => (
                <tr key={`${item.title}-${item.year}`}>
                  <td>{item.title}</td>
                  <td>{item.year}</td>
                  <td>
                    <span className={styles.typeTag}>{item.type}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Group Highlights */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Group Highlights</h2>
          <ul className={styles.highlightList}>
            {member.group_highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
