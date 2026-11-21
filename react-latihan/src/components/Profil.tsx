// src/components/Profil.tsx
import styles from "./Profil.module.css";

type ProfilProps = {
  nama: string;
  peran: string;
  hobi: string[];
};

export function Profil({ nama, peran, hobi }: ProfilProps) {
  return (
    <article className={styles.kartu}>
      <h2 className={styles.nama}>{nama}</h2>
      <p className={styles.peran}>{peran}</p>
      <ul>
        {hobi.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}