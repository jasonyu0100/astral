"use client";

import { useState } from "react";
import { GalleryObj } from "@/(pages)/(cosmos)/tables/gallery/main";
import { galleryTable } from "@/(pages)/(cosmos)/tables/gallery/table";
import { ManageView } from "./view";


export interface ManageViewProps {
  gallerys: GalleryObj[];
  addGallery: (section: GalleryObj) => void;
}

export default function Page() {
  const [gallerys, changeGallerys] = useState<GalleryObj[]>(galleryTable.examples);

  const addGallery = (gallery: GalleryObj) => {
    changeGallerys((prev) => {
      return [...prev, gallery]
    });
  };

  return <ManageView gallerys={gallerys} addGallery={addGallery} />;
}
