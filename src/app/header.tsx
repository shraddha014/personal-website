"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";



export default function Header() {

    const pathname = usePathname();

    const getLinkClassName = (href: string) => {
        // Always include the base "link" class.
        // If this link is active, include "active" too.
        return pathname === href
        ? `${styles.links} ${styles.active}`
        : styles.links;
    };
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center'
    }}>
      <div
        className={styles.menu}
      >
        <Link
          href="/"
          
        >
          <div className={getLinkClassName('/')}>About</div>
        </Link>
        <Link
          href="/experience"
          className={getLinkClassName('/experience')}
        >
          Experience
        </Link>
        <Link
          href="/education"
          className={getLinkClassName('/education')}
        >
          Education
        </Link>
        <Link
          href="/projects"
          className={getLinkClassName('/projects')}
        >
          Projects
        </Link>
        <Link
          href="/skills"
          className={getLinkClassName('/skills')}
        >
          Skills
        </Link>
      </div>
    </div>
  );
}
