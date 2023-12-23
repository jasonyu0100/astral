"use client";

import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { useRef, useState } from "react";
import {
  defaultBoardElement,
  defaultBoardElements,
  defaultBoardStars,
} from "../../data";
import BoardController from "../view/(common)/controller/main";
import BoardControllerCenterSection from "../view/(common)/controller/center/main";
import BoardCraftSection from "../view/(common)/controller/center/craft/main";
import BoardCraftElement from "../view/(common)/controller/center/craft/element/main";
import BoardConstellationSection from "../view/(common)/controller/center/constellation/main";
import { motion } from "framer-motion";
import ConstellationStar from "../view/(common)/controller/center/constellation/stars/star/main";
import ConstellationLinks from "../view/(common)/controller/center/constellation/stars/links/main";
import BoardControllerTopRow from "../view/(common)/controller/top/main";
import BoardLoomButton from "../view/(common)/controller/top/button/loom/main";
import TopRowSearchButton from "../view/(common)/controller/top/button/search/main";
import TopRowAddButton from "../view/(common)/controller/top/button/add/main";

export default function Page() {
  const [boardElements, changeBoardElements] = useState(defaultBoardElements);
  const [boardStars, changeBoardStars] = useState(defaultBoardStars);
  const constraintsRef = useRef(null);

  return (
    <>
      <Layer
        sizeStyle="h-full flex-grow"
        containerStyle={containerStyles["row"]}
        backgroundStyle={backgroundStyles["glass-5"]}
      >
        <BoardController>
          <BoardControllerTopRow>
            <TopRowAddButton
              onClick={() =>
                changeBoardElements((prev) => [...prev, defaultBoardElement])
              }
            />
            <TopRowSearchButton />
            <BoardLoomButton />
          </BoardControllerTopRow>
          <BoardControllerCenterSection>
            <BoardConstellationSection>
              <ConstellationLinks stars={boardStars} />
              <motion.div
                className="absolute top-0 left- 0 w-full h-full"
                ref={constraintsRef}
              >
                {boardStars.map((star, i) => (
                  <ConstellationStar
                    star={star}
                    constraintsRef={constraintsRef}
                    updateStar={(data) =>
                      changeBoardStars((prev) =>
                        prev.map((o, j) => (j === i ? { ...o, ...data } : o))
                      )
                    }
                  />
                ))}
              </motion.div>
            </BoardConstellationSection>
          </BoardControllerCenterSection>
        </BoardController>
        <BoardCraftSection>
          {boardElements.map((boardElement) => (
            <BoardCraftElement
              src={boardElement.src}
              onClick={() =>
                changeBoardStars((prev) => [
                  ...prev,
                  {
                    x: Math.random() * 500,
                    y: Math.random() * 500,
                    element: boardElement,
                  },
                ])
              }
            />
          ))}
        </BoardCraftSection>
      </Layer>
    </>
  );
}
