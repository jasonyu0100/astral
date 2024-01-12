"use client";

import { useState } from "react";
import { GalleryObj } from "@/tables/gallery/main";
import { galleryTable } from "@/tables/gallery/table";
import { ExploreView } from "./view";
import isAuth from "@/utils/isAuth";


export interface ExploreViewProps {
  gallerys: GalleryObj[];
  addGallery: (section: GalleryObj) => void;
}

function Page() {
  const [gallerys, changeGallerys] = useState<GalleryObj[]>(galleryTable.examples);

  const addGallery = (gallery: GalleryObj) => {
    changeGallerys((prev) => {
      return [...prev, gallery]
    });
  };

  return <ExploreView gallerys={gallerys} addGallery={addGallery} />;
}

export default isAuth(Page);