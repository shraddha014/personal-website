"use client";

import { useEffect, useRef, useState } from "react";
import { Engine, Render, World, Bodies, Runner, Body, Mouse, MouseConstraint } from "matter-js";
import styles from "./skillseffect.module.css";

// Define props type
interface LanguageColor {
  name: string;
  color: string;
}

interface TagSimulationProps {
  languages: LanguageColor[]; // Accepts an array of { name, color }
}

function TagSimulation({ languages }: TagSimulationProps) {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef(Engine.create());
  const [positions, setPositions] = useState<{ x: number; y: number; width: number; height: number }[]>([]);

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

    // Create language divs as physics objects
    const languageBodies = languages.map((lang, index) => {
      const width = 200; // Fixed width
      const height = 100; // Fixed height
      const xPos = Math.random() * 600 + 100; // Random X position
      const yPos = 50 + Math.random() * 50; // Random starting height
      const body = Bodies.rectangle(xPos, yPos, width, height, {
        restitution: 0.8,
        friction: 0.5,
        render: { visible: false }, // Hide default physics body
      });

      // Apply a small force to spread them apart
      Body.applyForce(body, body.position, { x: (Math.random() - 0.5) * 0.02, y: 0 });

      return { body, width, height };
    });

    // Add a MouseConstraint to allow dragging
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    const ground = Bodies.rectangle(width / 2, height - 85, width, 1, { isStatic: true, friction: 10 });
    const rightWall = Bodies.rectangle(width+10, height/2, 20, height, { isStatic: true, friction: 10 })
    const leftWall = Bodies.rectangle(-12, height/2, 20, height, { isStatic: true, friction: 10 })

    // Add all objects to the physics world
    World.add(engine.world, [...languageBodies.map((b) => b.body), ground, rightWall, leftWall, mouseConstraint]);

    // Run engine and renderer
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Update state to track div positions
    const updatePositions = () => {
      setPositions(
        languageBodies.map((b) => ({
          x: b.body.position.x,
          y: b.body.position.y,
          width: b.width,
          height: b.height,
        }))
      );
      requestAnimationFrame(updatePositions);
    };
    updatePositions();

    // Cleanup on unmount
    return () => {
      Render.stop(render);
      World.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, [languages]);

  return (
    <div className={styles.container}>
      {/* Matter.js simulation container */}
      <div ref={sceneRef} className={styles.simulationContainer} />

      {/* Language divs positioned using physics */}
      {positions.map((pos, index) => (
        <div
          key={`lang-${index}`}
          className={styles.langContainer}
          style={{
            position: "absolute",
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${pos.width}px`,
            height: `${pos.height}px`,
            transform: "translate(-50%, -50%)",
            backgroundColor: languages[index].color, // Assign unique color from prop
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "grab",
            borderRadius: '999px',
            pointerEvents: 'none',
            fontSize: '2rem'
          }}
        >
          {languages[index].name}
        </div>
      ))}
    </div>
  );
}

export default TagSimulation;
