"use client";

import { useState } from "react";
import { craftModel } from "../../model/main";
import { DriveView } from "./view";
import { GalleryObj } from "../../../../tables/gallery/main";
import { CraftDrive } from "../../model/drive/type";

export default function Page() {
  const [drive, changeDrive] = useState<CraftDrive>(craftModel.drive.example);

  const addSection = (section: GalleryObj) => {
    changeDrive((prev) => {
      return {
        ...prev,
        sections: [...prev.sections, section],
      };
    });
  };

  return <DriveView drive={drive} addSection={addSection} />;
}
