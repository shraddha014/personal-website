import TagSimulation from "../matterjs/page";
import styles from "./skills.module.css"

export default function Skills() { 
    // const languages: string[] = ["JavaScript", "Python", "C++", "Go", "Rust", "TypeScript"];
    return (
        <TagSimulation
  languages={[
    { name: "JavaScript", color: "#F4D03F" },
    { name: "Python", color: "#F4D03F" },
    { name: "TypeScript", color: "#F4D03F" },
    { name: "Java 8+", color: "#9B59B6" },
    { name: "React", color: "#9B59B6" },
    { name: "Angular", color: "#9B59B6" },
    { name: "Postman", color: "#E67E22" },
    { name: "Docker", color: "#E67E22" },
    { name: "Spring Boot", color: "#1ABC9C" },
    { name: "Hibernate", color: "#1ABC9C" },
    { name: "Material UI", color: "#1ABC9C" },
    { name: "Jira", color: "#E67E22" },
    { name: "GitHub", color: "#E67E22" },
    { name: "S3", color: "#1ABC9C" },
    { name: "Lambda", color: "#1ABC9C" },
    { name: "CloudFront", color: "#1ABC9C" },

  ]}
/>

    );
 }