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
      
      <div className={styles.paginator}>
        <Link className={styles.navElement} href={'/'}>Home</Link>
        <Link className={styles.navElement} href={'/about'}>About</Link>
        <Link className={styles.navElement} href={'/projects'}>projects</Link>
        <Link className={styles.navElement} href={'/conceptsAndDesigns'}>Concepts and Designs</Link>
      </div>
    </main>
  );
}
