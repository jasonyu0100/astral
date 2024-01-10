"use client";
import { useState } from "react";
import { CollectionModel } from "../../../../../../tables/collection/main";
import { GalleryObj } from "../../../../../../tables/gallery/main";
import { craftModel } from "../../../../model/main";
import { DriveSectionView } from "./view";

export default function Page() {
  const [section, changeSection] = useState<GalleryObj>(
    craftModel.drive.sections.section.example
  );

  const addFolder = (folder: CollectionModel) => {
    changeSection((prev) => {
      return {
        ...prev,
        collections: [...prev.collections, folder],
      };
    });
  };

  return <DriveSectionView section={section} addFolder={addFolder} />;
}
