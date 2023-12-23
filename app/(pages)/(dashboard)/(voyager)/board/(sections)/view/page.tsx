"use client";

import { useRef, useState } from "react";
import { defaultBoardStars } from "../../data";
import BoardController from "../../board-epic/main";
import BoardControllerCenterSection from "../../board-epic/center/main";
import BoardCraftSection from "../../board-epic/center/craft/main";
import BoardConstellationSection from "../../board-epic/center/constellation/main";
import { motion } from "framer-motion";
import ConstellationStar from "../../board-epic/center/constellation/stars/star/main";
import ConstellationLinks from "../../board-epic/center/constellation/stars/links/main";
import BoardWrapper from "../../board-epic/wrapper/main";
import BoardAuthorInfo from "../../board-epic/author-info/main";

export default function Page() {
  const [boardStars, changeBoardStars] = useState(defaultBoardStars);
  const [navigationActive, changeNavigation] = useState(true);
  const constraintsRef = useRef(null);

  return (
    <>
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
          <BoardAuthorInfo/>
        </BoardController>
        {navigationActive && (
          <BoardCraftSection>
            <h1 className="text-white">adsadsads</h1>
          </BoardCraftSection>
        )}
      </BoardWrapper>
    </>
  );
}
