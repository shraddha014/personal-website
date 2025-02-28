"use client";

import { useEffect, useRef, useState } from "react";
import { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } from "matter-js";
import styles from "./skillseffect.module.css";
import { neue } from "@/utils/fontConfig";
import { LanguageColor } from "@/utils/languages";

type TagSimulationProps={
  languages:LanguageColor[]
}

function TagSimulation({languages} : TagSimulationProps) {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef(Engine.create());
  const text = "Software Developer Skills.!!!";
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
    
    Render.setPixelRatio(render, window.devicePixelRatio || 1);

    const ctx = render.context;
    ctx.imageSmoothingEnabled = false;

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
    
    let xOffset = 50; // Start x position
let yOffset = 50; // Start y position
const paddingX = 20; // Horizontal space between elements
const paddingY = 15; // Vertical space between rows
const maxRowWidth = width - 50; // Max width before wrapping
const rowHeight = 71; // Fixed height of each row
const dropRandomness = 5; // Small randomness to avoid uniform drop

for (let i = 0; i < languages.length; i++) {
    const language = languages[i];

    // Ensure each language object has a valid width
    const rectWidth = language.excessiveWidth || 100; // Default to 100 if not defined

    // Check if adding this rectangle exceeds the max row width, move to a new row
    if (xOffset + rectWidth > maxRowWidth) {
        xOffset = 50; // Reset x to the start of the row
        yOffset += rowHeight + paddingY; // Move to the next row
    }

    // Create rectangle with slight randomness for smoother physics dropping
    const tagWhitelevel = Bodies.rectangle(
        xOffset + rectWidth / 2 + Math.random() * dropRandomness, // Adjusted center position with randomness
        yOffset + rowHeight / 2 + Math.random() * dropRandomness, // Adjusted to prevent overlap
        rectWidth,
        rowHeight,
        {
            restitution: 0.8, // Adds a bouncy effect
            friction: 0.5, // Adds natural friction
            chamfer: { radius: 8 }, // Optional rounding
            render: {
                sprite: {
                    texture: language.name,
                    xScale: 1,
                    yScale: 1
                }
            }
        }
    );

    rectangles.push(tagWhitelevel);

    // Move x position for next rectangle
    xOffset += rectWidth + paddingX;
}


    const ground = Bodies.rectangle(width / 2, height - 105, width, 0.1, { isStatic: true, friction: 10, render: { visible: false } });
    const rightWall = Bodies.rectangle(width-100, height/2, 20, height, { isStatic: true, friction: 10, render: { visible: false } })
    const leftWall = Bodies.rectangle(0, height/2, 20, height, { isStatic: true, friction: 10, render: { visible: false }  });
    const topWall = Bodies.rectangle(width / 2, 0, width, 20, { 
      isStatic: true, 
      friction: 10, 
      render: { visible: false } 
  });

    // Add all objects to the physics world
    World.add(engine.world, [...rectangles, ground, topWall, rightWall, leftWall, mouseConstraint]);

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
