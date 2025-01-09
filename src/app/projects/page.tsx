import { neue } from "../layout";
import styles from "./projects.module.css";

interface projectItem {
  heading: string;
  link: string;
  description: string;
  languageUsed: string[];
  backgroundImage: string;
}

const projectItems: projectItem[] = [
  {
    heading: "Hook'em Hardware",
    link: "",
    description:
      "As the Product Manager for this project, I led the development of a web application for hardware resource management, using ReactJs, Python, and MongoDB.",
    languageUsed: ["react", "angular", "java", "sql"],
    backgroundImage: "/assests/one.png",
  },
  {
    heading: "Hook'em Hardware",
    link: "",
    description:
      "As the Product Manager for this project, I led the development of a web application for hardware resource management, using ReactJs, Python, and MongoDB.",
    languageUsed: ["react", "angular", "java", "sql"],
    backgroundImage: "/assests/two.png",
  },
  {
    heading: "Hook'em Hardware",
    link: "",
    description:
      "As the Product Manager for this project, I led the development of a web application for hardware resource management, using ReactJs, Python, and MongoDB.",
    languageUsed: ["react", "angular", "java", "sql"],
    backgroundImage: "/assests/three.png",
  },
];

export default function Projects() {
  return (
    <div className={styles.main}>
      <span className={`${neue.className} ${styles.pageTitle}`}>projects
        <span className={styles.dot}>.</span>
      </span>
      <div className={styles.container}>
        {projectItems.map((item, idx) => (
          <div
            className={styles.content}
            style={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundPosition: `bottom 0 right ${idx==0?"5%":"0"}`,
            }}
          >
            <div>{item.heading}</div>
            <div>{item.description}</div>
            <div>
              <div>
                {item.languageUsed.map((lang, index) => (
                  <div className={styles.langContainer}>{lang}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

