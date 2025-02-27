"use client";
import Card from "../components/Card";
import styles from './education.module.css';

export default function Education() { 
    

    return (
        <div className={styles.conatiner}>
            <Card frontContent={{
                name: "University of Texas at Austin",
                firstImage: '/assests/UT.jpg',
                secondImage: '/assests/ut_overlay.svg',
            }} backContent={{
                relatedCourse: ['Advanced Programming & App Development', 'Design Methods', 'Product Management', 
                'Business Data Science', 'Strategy IT & Change Management', 'Big Data & Distributed Programming'],
                courseName: "Master of Science in Information Technology and Management",
                backgroundcolor: '#AC6434'
            }}/>
            <Card frontContent={{
                name: "Vellore Institute of Technology",
                firstImage: '/assests/vit.jpg',
                secondImage: '/assests/vitOverlay.svg'
            }} backContent={{
                relatedCourse: ['Problem-Solving with Data Structure & Algorithms', 'Database Technologies', 'Software Project Management', 'Object Oriented Programming using Java', 'Data Mining & Business Intelligence'],
                courseName: "Master in Computer Applications",
                backgroundcolor: '#39668D'
            }}/>
            <Card frontContent={{
                name: "Graphic Era Deemed to be University",
                firstImage: '/assests/GEU.jpg',
                secondImage: '/assests/GEUOverlay.svg'
            }} backContent={{
                relatedCourse: ['Problem-Solving with Data Structure & Algorithms', 'Database Technologies', 'Distributed Operating System', 'Java', 'C++'],
                courseName: "Bachelor of Computer Applications",
                backgroundcolor: '#93686D'
            }}/>
        </div>
      );
 }