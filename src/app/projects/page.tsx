import { neue } from "@/utils/fontConfig";
import styles from "./projects.module.css";

interface projectItem {
  heading: string;
  link: string;
  description: string;
  languageUsed: string[];
  backgroundImage: string;
  showLink: boolean;
}

const projectItems: projectItem[] = [
  {
    heading: "Pretty Wiki",
    link: "https://github.com/hi-mark/pretty-wiki",
    description:
      `Implementing customizable themes, font styles, and layout optimizations 
      to enhance Wikipedia's content readability and aesthetic appeal.`,
    languageUsed: ["Typescript", "HTML", "CSS"],
    backgroundImage: "/assests/one.png",
    showLink: true
  },
  {
    heading: "Hook'em Hardware",
    link: "https://github.com/shraddha014/hook-em-hardware-be",
    description:
      `Led a team of 4 in developing a web application to check hardware availability. 
      Created and managed GitHub issues to track progress and ensure timely delivery of milestones.`,
    languageUsed: ["React", "Python", "MongoDb", "Heroku"],
    backgroundImage: "/assests/two.png",
    showLink: true
  },
  {
    heading: "Aircraft Communications Addressing and Reporting System",
    link: "",
    description:
      `Developed a web-based communication gateway between ground stations and pilots, 
      enabling efficient data exchange and real-time communication.`,
    languageUsed: ["Angular", "Java", "Spring Boot", "OracleDb"],
    backgroundImage: "/assests/three.png",
    showLink: false
  },
];

export default function Projects() {
  return (
    <div className={`${neue.className} ${styles.main}`}>
      <span className={styles.pageTitle}>projects
        <span className={styles.dot}>.</span>
      </span>
      <div className={styles.container}>
        {projectItems.map((item, idx) => (
          <div key={`project-${idx}`}
            className={styles.content}
            style={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundPosition: `bottom 0 right ${idx==0?"5%":"0"}`,
            }}
          >
            <div className={styles.topSection}>
              <div className={styles.heading}>{item.heading}</div>
              {item.showLink && <a href={item.link} target="_blank" rel="noopener noreferrer"><img src="/assests/redirect.svg" alt="" /></a>}
            </div>
            <div className={styles.description}>{item.description}</div>
            <div>
              <div>
                {item.languageUsed.map((lang, index) => (
                  <div key={`lang-${idx}-${index}`} className={styles.langContainer}>{lang}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

