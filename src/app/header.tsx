"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { neue } from "@/utils/fontConfig";



export default function Header() {

  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    return pathname === href
      ? `${styles.links} ${styles.active}`
      : styles.links;
  };

  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <Link className={styles.logoWrapper} href="/">
          {/* <img
            className={styles.logo}
            src="/images/logo.svg"
            alt="site logo and link to home page"
          /> */}
        </Link>
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
        <a
          className={styles.thirteen}
          href="/assests/Shraddha_Resume_Software.pdf"
          download="Shraddha.pdf"
        >
          <span className={styles.hideInMobile}>Download&nbsp;</span>
          Resume&nbsp;
          <img className={styles.downloadIcon}
            src="/assests/downloadicon.svg"
            alt="site logo and link to home page"
          />
        </a>
      </div>
    </div>
  );
}
