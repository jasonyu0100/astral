"use client";

import { useState } from "react";
import { GalleryObj } from "@/tables/gallery/main";
import { galleryTable } from "@/tables/gallery/table";
import { ManageView } from "./view";
import isAuth from "@/utils/isAuth";


export interface ManageViewProps {
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

  return <ManageView gallerys={gallerys} addGallery={addGallery} />;
}

export default isAuth(Page);