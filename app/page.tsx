import styles from "./page.module.css";

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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
        consectetur quis nihil quod accusantium eaque voluptatum dolores quam
        quas suscipit?
      </p>
    </main>
  );
}
