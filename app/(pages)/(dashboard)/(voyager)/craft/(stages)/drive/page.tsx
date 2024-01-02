"use client";

import { useState } from "react";
import { craftModel } from "../../model/main";
import { DriveView } from "./view";

export default function Page() {
  const [cartActive, changeCartActive] = useState(false);
  const [section, changeSection] = useState(
    craftModel.drive.sections.section.example
  );
  const [folder, changeFolder] = useState(
    craftModel.drive.sections.section.folders.folder.example
  );
  
  return (
    <DriveView
    />
  );
}
