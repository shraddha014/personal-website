import styles from './page.module.css'
import { neue } from "@/utils/fontConfig";

export default function Home() {
  return (
    // <div className={styles.mainContent}>
    <>
      <div className={`${neue.className} ${styles.mainHeading}`}>
        <div className={styles.headingContainer}>
          <span className={styles.name}>
          <span className={styles.nameFirstPara}>Hey! I am </span>
          <span className={styles.nameSecondPara}>Shraddha <span className={styles.dot}>.</span></span> 
          </span>
          <span className={styles.description}>
          I thrive at the intersection of technology and strategy, bridging the gap between development and business to create impactful solutions.
          </span>
        </div>
        <div className={styles.imageContainer}/>
      </div>
      
        {/* </div> */}

          {/* <img src="/assests/Group.png" alt="" className={styles.groupedImage}/> */}
    </>
  );
}
