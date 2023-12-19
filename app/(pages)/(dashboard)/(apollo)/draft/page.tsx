"use client";

import Layer from "@/(pages)/(common)/layer/main";
import {
  borderStyles,
} from "@/(pages)/(common)/styles/data";
import DraftController from "./(common)/controller/main";
import DraftControllerTopRow from "./(common)/controller/top-row/main";
import DraftControllerCenterSection from "./(common)/controller/center-section/main";
import DraftControllerBottomRow from "./(common)/controller/bottom-row/main";
import DraftBottomRowItem from "./(common)/controller/bottom-row/constellation-row/item/main";
import DraftControllerConstellationRow from "./(common)/controller/bottom-row/constellation-row/main";
import DraftCraftSection from "./(common)/controller/center-section/craft/main";
import DraftCraftElement from "./(common)/controller/center-section/craft/element/main";
import DraftBottomRowAdd from "./(common)/controller/bottom-row/add/main";
import DraftConstellationSection from "./(common)/controller/center-section/constellation/main";

export default function DraftPage() {
  return (
    <>
      <DraftController>
        <DraftControllerTopRow />
        <DraftControllerCenterSection>
          <DraftConstellationSection>
            sadasd
          </DraftConstellationSection>
          <DraftCraftSection>
            <DraftCraftElement/>
            <DraftCraftElement/>
            <DraftCraftElement/>
            <DraftCraftElement/>
          </DraftCraftSection>
        </DraftControllerCenterSection>
        <DraftControllerBottomRow>
          <DraftBottomRowAdd/>
          <Layer
            sizeStyle="h-[80px]"
            borderStyle={borderStyles["border-r"]}
          ></Layer>
          <DraftControllerConstellationRow>
            <DraftBottomRowItem />
            <DraftBottomRowItem />
            <DraftBottomRowItem />
            <DraftBottomRowItem />
            <DraftBottomRowItem />
            <DraftBottomRowItem />
            <DraftBottomRowItem />
            <DraftBottomRowItem />
          </DraftControllerConstellationRow>
        </DraftControllerBottomRow>
      </DraftController>
    </>
  );
}
