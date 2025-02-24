import React from 'react';
import styles from './Card.module.css'

import { motion } from "framer-motion";
import { useState } from "react";


interface CardProps {
  frontContent: {
    name: string,
    firstImage: string,
    secondImage: string,
  },
  backContent: {
    relatedCourse: string[],
    courseName: string
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
            <div className={styles.motionContainer} style={{backgroundImage: `url(${frontContent.firstImage}), url(${frontContent.secondImage})`}}>
              <h2 className="">{frontContent.name}</h2>
              <p className="">{backContent.courseName}</p>
            </div>
          ) : (
            <div className={styles.motionContainer} style={{backgroundColor:'pink', transform: "rotateY(180deg)"}}>
              <h3 className="">{backContent.courseName}</h3>
              {backContent.relatedCourse.map((lang, index) => (
                  <div key={`lang-${index}`} className={styles.langContainer}>{lang}</div>
                ))}
            </div>
          )}
        </motion.div>
  );
};

export default Card;
