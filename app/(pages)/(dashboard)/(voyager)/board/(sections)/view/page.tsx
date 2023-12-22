"use client";

import { useRef, useState } from "react";
import { defaultBoardStars } from "../../data";
import BoardController from "../view/(common)/controller/main";
import BoardControllerCenterSection from "../view/(common)/controller/center/main";
import BoardCraftSection from "../view/(common)/controller/center/craft/main";
import BoardConstellationSection from "../view/(common)/controller/center/constellation/main";
import { motion } from "framer-motion";
import ConstellationStar from "../view/(common)/controller/center/constellation/stars/star/main";
import ConstellationLinks from "../view/(common)/controller/center/constellation/stars/links/main";

export default function Page() {
  const [boardStars, changeBoardStars] = useState(defaultBoardStars);
  const [navigationActive, changeNavigation] = useState(false);
  const constraintsRef = useRef(null);

  return (
    <>
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
          {navigationActive && (
            <BoardCraftSection>
              <h1>adsadsads</h1>
            </BoardCraftSection>
          )}
        </BoardControllerCenterSection>
      </BoardController>
    </>
  );
}
