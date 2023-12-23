"use client";

import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import DraftController from "./draft-epic/main";
import DraftControllerTopRow from "./draft-epic/top/main";
import DraftControllerCenterSection from "./draft-epic/center/main";
import DraftControllerBottomRow from "./draft-epic/bottom/main";
import DraftConstellation from "./draft-epic/bottom/constellations/item/main";
import DraftControllerConstellationRow from "./draft-epic/bottom/constellations/main";
import DraftCraftSection from "./draft-epic/center/craft/main";
import DraftCraftElement from "./draft-epic/center/craft/element/main";
import DraftConstellationAdd from "./draft-epic/bottom/add/main";
import DraftConstellationSection from "./draft-epic/center/constellation/main";
import ConstellationLinks from "./draft-epic/center/constellation/stars/links/main";
import ConstellationStar from "./draft-epic/center/constellation/stars/star/main";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import TopRowAddButton from "./draft-epic/top/button/add/main";
import TopRowSearchButton from "./draft-epic/top/button/search/main";
import DraftLoomButton from "./draft-epic/top/button/loom/main";
import {
  defaultDraftElement,
  defaultDraftElements,
  defaultDraftStars,
} from "./data";
import {
  defaultApolloConstellation,
  defaultApolloConstellations,
} from "../data";
import DraftWrapper from "./draft-epic/wrapper/main";

export default function Page() {
  const [constellations, changeConstellations] = useState(
    defaultApolloConstellations
  );
  const [draftElements, changeDraftElements] = useState(defaultDraftElements);
  const [draftStars, changeDraftStars] = useState(defaultDraftStars);
  const constraintsRef = useRef(null);

  return (
      <DraftWrapper>
        <DraftController>
          <DraftControllerTopRow>
            <TopRowAddButton
              onClick={() =>
                changeDraftElements((prev) => [...prev, defaultDraftElement])
              }
            />
            <TopRowSearchButton />
            <DraftLoomButton />
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
          </DraftControllerCenterSection>
          <DraftControllerBottomRow>
            <DraftConstellationAdd
              onClick={() =>
                changeConstellations((prev) => [
                  ...prev,
                  defaultApolloConstellation,
                ])
              }
            />
            <DraftControllerConstellationRow>
              {constellations.map((constellation) => (
                <DraftConstellation constellation={constellation} />
              ))}
            </DraftControllerConstellationRow>
          </DraftControllerBottomRow>
        </DraftController>
        <DraftCraftSection>
          {draftElements.map((draftElement) => (
            <DraftCraftElement
              src={draftElement.src}
              onClick={() =>
                changeDraftStars((prev) => [
                  ...prev,
                  {
                    x: Math.random() * 500,
                    y: Math.random() * 500,
                    element: draftElement,
                  },
                ])
              }
            />
          ))}
        </DraftCraftSection>
      </DraftWrapper>
  );
}
