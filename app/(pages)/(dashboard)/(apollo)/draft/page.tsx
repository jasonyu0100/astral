"use client";

import DraftController from "./draft-epic/main";
import DraftControllerTopRow from "./draft-epic/top/main";
import DraftControllerCenterSection from "./draft-epic/center/main";
import DraftControllerBottomRow from "./draft-epic/bottom/main";
import DraftConstellation from "./draft-epic/bottom/constellations/item/main";
import DraftControllerConstellationRow from "./draft-epic/bottom/constellations/main";
import DraftSidebar from "./draft-epic/sidebar/main";
import DraftCraftElement from "./draft-epic/sidebar/element/main";
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
import Layer from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";

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
            <DraftControllerConstellationRow>
              {constellations.map((constellation) => (
                <DraftConstellation constellation={constellation} />
              ))}
            </DraftControllerConstellationRow>
            <DraftConstellationAdd
              onClick={() =>
                changeConstellations((prev) => [
                  ...prev,
                  defaultApolloConstellation,
                ])
              }
            />
          </DraftControllerBottomRow>
        </DraftController>
        <DraftSidebar>
          
    <div className="flex flex-row items-center flex-shrink-0 w-full h-[80px] px-[2rem] space-x-[2rem] justify-between">
      <p className="text-white font-extraBold text-xl">Conversations</p>
      <Layer
        sizeStyle="w-[50px] h-[50px] rounded-[25px] overflow-hidden"
        containerStyle={containerStyles["col-centered"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <mask
            id="mask0_2433_4355"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="50"
            height="50"
          >
            <rect width="50" height="50" fill="#CBD5E1" />
          </mask>
          <g mask="url(#mask0_2433_4355)">
            <path
              d="M26.2498 25L16.6665 15.4167L19.5832 12.5L32.0832 25L19.5832 37.5L16.6665 34.5833L26.2498 25Z"
              fill="#CBD5E1"
            />
          </g>
        </svg>
      </Layer>
    </div>
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
        </DraftSidebar>
      </DraftWrapper>
  );
}
