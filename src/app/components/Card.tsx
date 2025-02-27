import React from 'react';
import styles from './Card.module.css'

import { motion } from "framer-motion";
import { useState } from "react";
import { neue } from '@/utils/fontConfig';


interface CardProps {
  frontContent: {
    name: string,
    firstImage: string,
    secondImage: string,
  },
  backContent: {
    relatedCourse: string[],
    courseName: string,
    backgroundcolor: string
  }
}

const Card: React.FC<CardProps> = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
          onClick={() => setFlipped(!flipped)}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ perspective: "1000px" }}
        >
          {!flipped ? (
            <div className={`${styles.background} ${styles.conatinerSize}`} style={{backgroundImage: `url(${frontContent.firstImage})`}}>
              <div className={`${styles.motionContainer} ${styles.overlay} ${neue.className}`} style={{backgroundImage: `url(${frontContent.secondImage})`}}>
                <p className={styles.uniName}>{frontContent.name}</p>
                <p className={styles.courseName}>{backContent.courseName}</p>
              </div>
            </div>
          ) : (
            <div className={`${styles.conatinerSize} ${neue.className} ${styles.backContent}`} style={{backgroundColor:backContent.backgroundcolor, transform: "rotateY(180deg)"}}>
              <p className={styles.courseName} style={{color: '#FFFF'}}>{backContent.courseName}</p>
              <div>
                {backContent.relatedCourse.map((lang, index) => (
                    <div key={`lang-${index}`} className={styles.langContainer}>{lang}</div>
                  ))}
              </div>
            </div>
          )}
        </motion.div>
  );
};

export default Card;
