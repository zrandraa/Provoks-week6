const nama = "Budi";
const umur = 20;
const hobi = ["membaca", "coding"];

export function Profil() {
  return (
    <div>
      <h1>{nama}</h1>
      <p>Umur: {umur} tahun</p>
      <p>Total hobi: {hobi.length}</p>
      <p>Hobi favorit: {hobi[0]}</p>
    </div>
  );
}

const aktif = true;

export function Tombol() {
  return (
    <button
      className={aktif ? "tombol aktif" : "tombol"}
      disabled={!aktif}
      style={{ padding: 12, borderRadius: 8 }}
    >
      {aktif ? "Aktif" : "Nonaktif"}
    </button>
  );
}

export function Ringkasan() {
  return (
    <>
      <h2>Ringkasan</h2>
      <p>Belajar React itu menyenangkan.</p>
    </>
  );
}

type Buku = {
  id: number;
  judul: string;
};

const daftarBuku: Buku[] = [
  { id: 1, judul: "Belajar React" },
  { id: 2, judul: "TypeScript Dasar" },
];

export function DaftarBuku() {
  return (
    <ul>
      {daftarBuku.map((buku) => (
        <li key={buku.id}>{buku.judul}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <main>
      <Profil />
      <Tombol />
      <Ringkasan />
      <DaftarBuku />
    </main>
  );
}