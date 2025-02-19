"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { neue } from "@/utils/fontConfig";



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
          className={`${getLinkClassName('/')}  ${neue.className}`}
        >
          About
        </Link>
        <Link
          href="/experience"
          className={`${getLinkClassName('/experience')}  ${neue.className}`}
        >
          Experience
        </Link>
        <Link
          href="/education"
          className={`${getLinkClassName('/education')}  ${neue.className}`}
        >
          Education
        </Link>
        <Link
          href="/projects"
          className={`${getLinkClassName('/projects')}  ${neue.className}`}
        >
          Projects
        </Link>
        <Link
          href="/skills"
          className={`${getLinkClassName('/skills')}  ${neue.className}`}
        >
          Skills
        </Link>
      </div>
    </div>
  );
}
