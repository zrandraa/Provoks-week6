// src/components/Salam.tsx
import styles from "./Salam.module.css";

export function Salam() {
  return (
    <section className={styles.kotak}>
      <h1 className={styles.judul}>Halo, React!</h1>
      <p>Ini komponen TypeScript pertamaku.</p>
    </section>
  );
}
