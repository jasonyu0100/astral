import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import { GalleryCollectionContainer } from "@/(pages)/(cosmos)/(voyager)/drive/(stages)/explore/gallery/[id]/gallery-epic/grid/container/main";
import React from "react";

export function GalleryFolder({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={GalleryCollectionContainer.name}
      sizeStyle="w-full aspect-[32/16]"
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles.rounded} ${borderStyles["border-all"]}`}
    >
      <div className="flex flex-row items-center w-full h-full">{children}</div>
    </Layer>
  );
}
