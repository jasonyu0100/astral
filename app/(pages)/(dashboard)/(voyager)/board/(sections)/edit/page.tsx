"use client";

import { useRef, useState } from "react";
import {
  defaultBoardElement,
  defaultBoardElements,
  defaultBoardStars,
} from "../../data";
import BoardController from "../../controller/main";
import BoardControllerCenterSection from "../../controller/center/main";
import BoardCraftSection from "../../controller/center/craft/main";
import BoardCraftElement from "../../controller/center/craft/element/main";
import BoardConstellationSection from "../../controller/center/constellation/main";
import { motion } from "framer-motion";
import ConstellationStar from "../../controller/center/constellation/stars/star/main";
import ConstellationLinks from "../../controller/center/constellation/stars/links/main";
import BoardControllerTopRow from "../../controller/top/main";
import BoardLoomButton from "../../controller/top/button/loom/main";
import TopRowSearchButton from "../../controller/top/button/search/main";
import TopRowAddButton from "../../controller/top/button/add/main";
import BoardWrapper from "../../controller/wrapper/main";

export default function Page() {
  const [boardElements, changeBoardElements] = useState(defaultBoardElements);
  const [boardStars, changeBoardStars] = useState(defaultBoardStars);
  const constraintsRef = useRef(null);

  return (
      <BoardWrapper>
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
      </BoardWrapper>
  );
}
