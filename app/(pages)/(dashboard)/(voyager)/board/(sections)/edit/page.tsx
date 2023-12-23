"use client";

import { useRef, useState } from "react";
import {
  defaultBoardElement,
  defaultBoardElements,
  defaultBoardStars,
} from "../../data";
import BoardController from "../../board-epic/main";
import BoardControllerCenterSection from "../../board-epic/center/main";
import BoardCraftSection from "../../board-epic/center/craft/main";
import BoardCraftElement from "../../board-epic/center/craft/element/main";
import BoardConstellationSection from "../../board-epic/center/constellation/main";
import { motion } from "framer-motion";
import ConstellationStar from "../../board-epic/center/constellation/stars/star/main";
import ConstellationLinks from "../../board-epic/center/constellation/stars/links/main";
import BoardControllerTopRow from "../../board-epic/top/main";
import BoardLoomButton from "../../board-epic/top/button/loom/main";
import TopRowSearchButton from "../../board-epic/top/button/search/main";
import TopRowAddButton from "../../board-epic/top/button/add/main";
import BoardWrapper from "../../board-epic/wrapper/main";

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
