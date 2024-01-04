import { createContext, useEffect, useRef, useState } from "react";
import p5 from "p5";
import { FireworkSketch } from "./firework/sketch";

export function SeaStory() {
  const layerRef = useRef<HTMLDivElement>(null);
  const renderRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState(0);
  const [zoom, setZoom] = useState(1);

  const divWidth = (divHeight * 9) / 16;

  useEffect(() => {
    const updateDimensions = () => {
      if (layerRef.current) {
        const newHeight = layerRef.current.clientHeight;
        setDivHeight(newHeight);
        setZoom(newHeight / 1920);
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [layerRef.current]);

  useEffect(() => {
    if (renderRef.current) {
      const child = renderRef.current.children[0];
      if (child) {
        child.remove();
      }
    }

    const newP5Instance = new p5((p: any) => {
      console.log(divHeight, divWidth)
      new FireworkSketch(p, 1080, 1920, renderRef)
    });

    return () => {
      newP5Instance.remove();
    };
  }, []);

  return (
    <div
      className="h-full flex items-center justify-center overflow-hidden rounded-[1rem]"
      ref={layerRef}
      style={{ width: divWidth }}
    >
      <div
        className="overflow-hidden rounded-[1rem]"
        style={{ zoom: zoom * 0.9 }}
        ref={renderRef}
      ></div>
    </div>
  );
}
