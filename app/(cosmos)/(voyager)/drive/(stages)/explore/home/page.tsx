"use client";
import { createContext, useState } from "react";
import { GalleryObj } from "@/tables/gallery/main";
import { galleryTable } from "@/tables/gallery/table";
import { ExploreView } from "./view";
import isAuth from "@/utils/isAuth";

export interface ExploreHomeContext {
  gallerys: GalleryObj[];
  addGallery: (section: GalleryObj) => void;
}

export const ExploreHomeContext = createContext<ExploreHomeContext>({
  gallerys: [],
  addGallery: () => {},
});

function Page() {
  const [gallerys, changeGallerys] = useState<GalleryObj[]>(
    galleryTable.examples
  );

  const addGallery = (gallery: GalleryObj) => {
    changeGallerys((prev) => {
      return [...prev, gallery];
    });
  };

  const context: ExploreHomeContext = {
    gallerys,
    addGallery,
  };

  return (
    <ExploreHomeContext.Provider value={context}>
      <ExploreView />
    </ExploreHomeContext.Provider>
  );
}

export default isAuth(Page);
