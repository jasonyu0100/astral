"use client";

import Layer from "@/(pages)/(common)/layer/main";
import { borderStyles } from "@/(pages)/(common)/styles/data";
import DraftController from "./(common)/controller/main";
import DraftControllerTopRow from "./(common)/controller/top/main";
import DraftControllerCenterSection from "./(common)/controller/center/main";
import DraftControllerBottomRow from "./(common)/controller/bottom/main";
import DraftConstellation from "./(common)/controller/bottom/constellation-row/item/main";
import DraftControllerConstellationRow from "./(common)/controller/bottom/constellation-row/main";
import DraftCraftSection from "./(common)/controller/center/craft/main";
import DraftCraftElement from "./(common)/controller/center/craft/element/main";
import DraftConstellationAdd from "./(common)/controller/bottom/add/main";
import DraftConstellationSection from "./(common)/controller/center/constellation/main";
import ConstellationLinks from "./(common)/controller/center/constellation/stars/links/main";
import ConstellationStar from "./(common)/controller/center/constellation/stars/star/main";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import TopRowAddButton from "./(common)/controller/top/button/add/main";
import TopRowSearchButton from "./(common)/controller/top/button/search/main";
import TopRowLoomButton from "./(common)/controller/top/button/loom/main";
import {
  defaultDraftElement,
  defaultDraftElements,
  defaultDraftStar,
  defaultDraftStars,
} from "./data";
import { defaultApolloConstellation, defaultApolloConstellations } from "../data";

export default function DraftPage() {
  const [constellations, changeConstellations] = useState(
    defaultApolloConstellations
  );
  const [draftElements, changeDraftElements] = useState(defaultDraftElements);
  const [draftStars, changeDraftStars] = useState(defaultDraftStars);
  const constraintsRef = useRef(null);

  return (
    <>
      <DraftController>
        <DraftControllerTopRow>
          <TopRowAddButton
            onClick={() =>
              changeDraftElements((prev) => [...prev, defaultDraftElement])
            }
          />
          <TopRowSearchButton />
          <TopRowLoomButton />
        </DraftControllerTopRow>
        <DraftControllerCenterSection>
          <DraftConstellationSection>
            <ConstellationLinks stars={draftStars} />
            <motion.div
              className="absolute top-0 left- 0 w-full h-full"
              ref={constraintsRef}
            >
              {draftStars.map((star, i) => (
                <ConstellationStar
                  star={star}
                  constraintsRef={constraintsRef}
                  updateStar={(data) =>
                    changeDraftStars((prev) =>
                      prev.map((o, j) => (j === i ? { ...o, ...data } : o))
                    )
                  }
                />
              ))}
            </motion.div>
          </DraftConstellationSection>
          <DraftCraftSection>
            {draftElements.map((draftElement) => (
              <DraftCraftElement
                src={draftElement.src}
                onClick={() =>
                  changeDraftStars((prev) => [...prev, defaultDraftStar])
                }
              />
            ))}
          </DraftCraftSection>
        </DraftControllerCenterSection>
        <DraftControllerBottomRow>
          <DraftConstellationAdd
            onClick={() => changeConstellations((prev) => [...prev, defaultApolloConstellation])}
          />
          <Layer
            sizeStyle="h-[80px]"
            borderStyle={borderStyles["border-r"]}
          ></Layer>
          <DraftControllerConstellationRow>
            {constellations.map((constellation) => (
              <DraftConstellation constellation={constellation} />
            ))}
          </DraftControllerConstellationRow>
        </DraftControllerBottomRow>
      </DraftController>
    </>
  );
}
