"use client";

import { useEffect, useRef, useState } from "react";
import { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } from "matter-js";
import styles from "./skillseffect.module.css";
import { neue } from "@/utils/fontConfig";

// Define props type
interface LanguageColor {
  name: string;
  x: number;
  y: number;
  excessiveWidth: number;
  height: number;
}

interface TagSimulationProps {
  languages: LanguageColor[]; // Accepts an array of { name, color }
}

function TagSimulation({ languages }: TagSimulationProps) {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef(Engine.create());
  const text = "Software Developer Skills!!!!";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 150; // Speed for typing
  const deletingSpeed = 75; // Speed for deleting
  const delayBetweenCycles = 1500; // Time before retyping starts

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing effect
      if (charIndex < text.length) {
        interval = setTimeout(() => {
          setDisplayText((prev) => prev + text[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Wait before starting deletion
        setTimeout(() => setIsDeleting(true), delayBetweenCycles);
      }
    } else {
      // Deleting effect
      if (charIndex > 0) {
        interval = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        // Reset for next cycle
        setTimeout(() => setIsDeleting(false), delayBetweenCycles);
      }
    }

    return () => clearTimeout(interval);
  }, [charIndex, isDeleting]);

  useEffect(() => {
    if (!sceneRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const engine = engineRef.current;
    const render = Render.create({
      element: sceneRef.current!,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: '#f1f1f0'
      },
    });
    
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    const radius = 20;

    const rectangles = []
    
    for (let i = 0; i < languages.length; i++) {
      const language = languages[i]
      const tagWhitelevel = Bodies.rectangle(width / 2 - language.x, language.y, language.excessiveWidth, language.height, {
          chamfer: { radius: radius },
          render: {
              sprite: {
                  texture: language.name,
                  xScale: 1,
                  yScale: 1
              }
          }
      });
  
      rectangles.push(tagWhitelevel);
  }

    const ground = Bodies.rectangle(width / 2, height - 105, width, 1, { isStatic: true, friction: 10 });
    const rightWall = Bodies.rectangle(width+10, height/2, 20, height, { isStatic: true, friction: 10 })
    const leftWall = Bodies.rectangle(-12, height/2, 20, height, { isStatic: true, friction: 10 })

    // Add all objects to the physics world
    World.add(engine.world, [...rectangles, ground, rightWall, leftWall, mouseConstraint]);

    // Run engine and renderer
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);
    return () => {
      Render.stop(render);
      World.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div style={{fontWeight: 800}} className={`${styles.centerDiv} ${neue.className}}`}>
        {displayText}
      </div>
      <div ref={sceneRef} className={styles.simulationContainer} />
    </div>
  );
}

export default TagSimulation;
