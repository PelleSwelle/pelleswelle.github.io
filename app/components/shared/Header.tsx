import Link from "next/link"
import styles from './header.module.css'

export default function Header() {
  return(
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.navElement} href={'/'}>Home</Link>
        <Link className={styles.navElement} href={'/about'}>About</Link>
        <Link className={styles.navElement} href={'/projects'}>projects</Link>
        <Link className={styles.navElement} href={'/conceptsAndDesigns'}>Concepts and Designs</Link>
      </nav>

      <div className={styles.socials}>
        <a href="https://www.linkedincom/in/peter-donvang/">linkedIn</a>
        <a href="https://github.com/PelleSwelle/">Github</a>
        <a href="https://codepen.io/PelleSwelle/">Codepen</a>
      </div>

    </div>
  )
}