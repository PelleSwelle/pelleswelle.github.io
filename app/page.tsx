import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className="titles">
          <p>Game Developer</p>
          <p>Frontend Developer</p>
          <p>UX Designer</p>
        </div>

        <div>
          <h1>Peter Dønvang</h1>
        </div>
      </div>
    </main>
  );
}
