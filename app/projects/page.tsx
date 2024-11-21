import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Projects() {
  interface Project {
    name: string;
    techs: string[];
    keywords: string[];
    image: string;
  }

  const projects: Project[] = [
    {
      name: "Survivor Simulator",
      techs: ["Unity", "C#"],
      keywords: ["AI", "automous agents", "3D"],
      image: "/survivor2.png",
    },
    {
      name: 'Virtual Musicality',
      techs: ['Unity', 'C#'],
      keywords: ['Augmented Reality', 'realtime audio synthesis', 'hand tracking'],
      image: '/synth.png'
    },
    {
      name: 'The Dream House Murder',
      techs: ['Unity', 'C#'],
      keywords: ['Augmented Reality', 'whodunnit', 'murder-mystery', 'dialogue system'],
      image: '/dreamhouseMurderCover.png'
    },
    {
      name: 'Environman',
      techs: ['Processing', 'Java', 'p5.js'],
      keywords: ['Serious Game', 'Side-scroller', '2D'],
      image: '/environman.png'
    },
    {
      name: 'Anvisninger.dk',
      techs: ['Figma'],
      keywords: ['UX-design', 'interface-design', 'web design'],
      image: '/anvisninger.png'
    },

  ];

  return (
      <ul className={styles.projects}>
        {projects.map((project) => (
          <Link href={'/projects/'+ project.name } className={styles.project}>
            <h3>{project.name}</h3>
            <ul className={styles.techs}>
              {project.techs.map((tech) => (
                <li className={styles.techChip}>{tech}</li>
              ))}
            </ul>
            <ul className={styles.keywords}>
              {project.keywords.map((keyword) => (
                <li className={styles.keyword}>{keyword}</li>
              ))}
            </ul>
            <Image
              className={styles.image}
              src={project.image}
              width={520}
              height={280}
              alt={project.name}
            />
          </Link>
        ))}
      </ul>
  );
}
