import Link from "next/link"

export default function Header() {
  return(
    <div className="header">
      <div className="navbar">
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/projects'}>projects</Link>
        <Link href={'/experience'}>Experience</Link>
        <Link href={'/education'}>Education</Link>
        <Link href={'/conceptsAndDesigns'}>Concepts and Designs</Link>
      </div>

      <div className="socials">
        <a href="https://www.linkedin.com/in/peter-donvang/">linkedIn</a>
        <a href="https://github.com/PelleSwelle/">Github</a>
        <a href="https://codepen.io/PelleSwelle/">Codepen</a>
      </div>

    </div>
  )
}