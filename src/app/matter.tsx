"use client";

import React, { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Runner } from "matter-js";

export default function Comp() {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef(Engine.create());

  useEffect(() => {
    const cw = window.innerWidth;
    const ch = window.innerHeight;

    const render = Render.create({
      element: sceneRef.current as HTMLElement,
      engine: engineRef.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "#eee",
      },
    });

    const runner = Runner.create();

    World.add(engineRef.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    Runner.run(runner, engineRef.current);

    Render.run(render);

    return () => {
      const currentEngine = engineRef.current; // Local variable for cleanup
      Runner.stop(runner);
      Render.stop(render);
      World.clear(currentEngine.world, false);
      Engine.clear(currentEngine);

      if (render.canvas) {
        render.canvas.remove();
      }
      // @ts-expect-error: Matter.js assigns null to cleanup canvas internally.
      render.canvas = null;
      // @ts-expect-error: Matter.js uses custom context management not recognized by TypeScript.
      render.context = null;
      render.textures = {};
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div ref={sceneRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
