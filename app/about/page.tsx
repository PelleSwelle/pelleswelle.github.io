import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.center}>
      <div className="about">
        <strong>
          I was born at a very young age in Denmark. <br />
        </strong>
        <p>
          I now live in Stockholm with my fiancy working on my skills and
          exploring different technologies
        </p>

        <p>
          I originally wanted to play music. I spent all of my time and energy
          on playing the guitar, and got pretty good at it. I got accepted to
          the Royal Academy of Music in Aalborg, Denmark.
        </p>
      </div>
    </div>
  );
}
