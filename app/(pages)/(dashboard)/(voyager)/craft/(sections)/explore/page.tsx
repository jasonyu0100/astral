"use client";

import { useState } from "react";
import { CraftFolder, CraftSection } from "../../data";
import { brandSection } from "../../data/brand/main";
import ExploreWrapper from "./explore-epic/wrapper/main";
import ExploreBreadcrumb from "./explore-epic/breadcrumb/main";
import ExploreBreadcrumbItem from "./explore-epic/breadcrumb/item/main";
import ExploreBreadcrumbDivider from "./explore-epic/breadcrumb/divider/main";
import ExploreController from "./explore-epic/main";
import ExploreSection from "./explore-epic/section/main";
import ExploreSectionCoverImage from "./explore-epic/section/cover-image/main";
import ExploreSectionTitle from "./explore-epic/section/title/main";
import ExploreSectionDescription from "./explore-epic/section/description/main";
import CraftCart from "../../(common)/cart/main";

export default function Page() {
  const [section, changeSection] = useState<CraftSection | null>(brandSection);
  const [folder, changeFolder] = useState<CraftFolder | null>(null);
  const [cartActive, changeCartActive] = useState(true);

  return (
    <ExploreWrapper>
      <ExploreController>
          <ExploreBreadcrumb>
            <ExploreBreadcrumbItem>Drive</ExploreBreadcrumbItem>
            <ExploreBreadcrumbDivider/>
            <ExploreBreadcrumbItem>Brand</ExploreBreadcrumbItem>
            <ExploreBreadcrumbDivider/>
            <ExploreBreadcrumbItem>Logo</ExploreBreadcrumbItem>
          </ExploreBreadcrumb>
          <ExploreSection>
            <ExploreSectionCoverImage/>
            <ExploreSectionTitle/>
            <ExploreSectionDescription/>
          </ExploreSection>
      </ExploreController>
      {cartActive && <CraftCart />}
    </ExploreWrapper>
  );
}
