"use client";

import { useRef, useState } from "react";
import {
  defaultBoardElement,
  defaultBoardElements,
  defaultBoardStars,
} from "../../data";
import BoardController from "../../board-epic/main";
import BoardControllerCenterSection from "../../board-epic/center/main";
import BoardSidebar from "../../board-epic/sidebar/main";
import BoardConstellationSection from "../../board-epic/center/constellation/main";
import { motion } from "framer-motion";
import ConstellationStar from "../../board-epic/center/constellation/stars/star/main";
import ConstellationLinks from "../../board-epic/center/constellation/stars/links/main";
import BoardWrapper from "../../board-epic/wrapper/main";
import BoardSidebarHeader from "../../board-epic/sidebar/header/main";
import BoardSidebarButtonRow from "../../board-epic/sidebar/header/button-row/main";
import BoardSidebarElements from "../../board-epic/sidebar/elements/main";
import BoardCraftElement from "../../board-epic/sidebar/elements/element/main";
import BoardSidebarHeaderTitle from "../../board-epic/sidebar/header/title/main";
import TopRowSearchButton from "../../board-epic/sidebar/header/button-row/button/search/main";
import BoardLoomButton from "../../board-epic/sidebar/header/button-row/button/loom/main";
import TopRowAddButton from "../../board-epic/sidebar/header/button-row/button/add/main";

export default function Page() {
  const [boardElements, changeBoardElements] = useState(defaultBoardElements);
  const [boardStars, changeBoardStars] = useState(defaultBoardStars);
  const constraintsRef = useRef(null);

  return (
    <BoardWrapper>
      <BoardController>
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
      <BoardSidebar>
        <BoardSidebarHeader>
          <BoardSidebarHeaderTitle>Elements</BoardSidebarHeaderTitle>
          <BoardSidebarButtonRow>
            <TopRowAddButton
              onClick={() =>
                changeBoardElements((prev) => [...prev, defaultBoardElement])
              }
            />
            <TopRowSearchButton />
            <BoardLoomButton />
          </BoardSidebarButtonRow>
        </BoardSidebarHeader>
        <BoardSidebarElements>
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
        </BoardSidebarElements>
      </BoardSidebar>
    </BoardWrapper>
  );
}
