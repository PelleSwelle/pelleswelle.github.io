import Image from "next/image";
import styles from "./page.module.css";

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
    }
  ];

  return (
    <div className={styles.projects}>
      <ul>
        {projects.map((project) => (
          <li className={styles.project}>
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
              src={project.image}
              width={520}
              height={280}
              alt="project image"
            />
          </li>
        ))}
      </ul>
      <ul>
        <li>The Dream House Murder</li>
        <li>Virtual Musicality</li>
        <li>Environman</li>
        <li>Anvisninger.dk</li>
      </ul>
    </div>
  );
}
