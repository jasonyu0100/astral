import { Layer } from "@/(pages)/(common)/layer/main";
import { createContext, useEffect, useRef, useState } from "react";

export const SeaStoryContext = createContext({ storyWindowHeight: 0, storyWindowWidth: 0 });

export function SeaStory({ children }: { children: React.ReactNode }) {
  const layerRef = useRef<HTMLDivElement>(null);
  const [storyWindowHeight, changeHeight] = useState(0);

  useEffect(() => {
    // Check if the ref has been assigned a current value
    if (layerRef.current) {
      changeHeight(layerRef.current.clientHeight);
    }
  }, [layerRef.current]); // Run the effect whenever layerRef.current changes

  return (
    <SeaStoryContext.Provider
      value={{ storyWindowHeight, storyWindowWidth: (storyWindowHeight * 9) / 16 }}
    >
      <div
        className="h-full"
        ref={layerRef}
        style={{ width: (storyWindowHeight * 9) / 16 }}
      >
        <Layer displayName={SeaStory.name} sizeStyle="w-full h-full">
          {children}
        </Layer>
      </div>
    </SeaStoryContext.Provider>
  );
}
