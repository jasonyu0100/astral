import React, { useContext, useEffect, useRef } from "react";
import p5 from "p5";
import { SeaStoryContext } from "../story/main";

export function P5Sketch() {
  const { storyWindowWidth, storyWindowHeight } = useContext(SeaStoryContext);
  const renderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clean up previous p5 instance
    if (renderRef.current) {
      const child = renderRef.current.children[0];
      if (child) {
        child.remove();
      }
    }

    // Create new p5 instance
    const newP5Instance = new p5((p: any) => {
      p.setup = () => {
        p.createCanvas(storyWindowWidth, storyWindowHeight).parent(
          renderRef.current!
        );
      };

      p.draw = () => {
        p.frameRate(30);
        p.background(255, 255, 255);
      };
    });

    // Cleanup function to remove the current p5 instance when the component is unmounted
    return () => {
      newP5Instance.remove();
    };
  }, [storyWindowWidth, storyWindowHeight]);

  return <div ref={renderRef}></div>;
}
