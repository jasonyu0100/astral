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
import Image from "next/image";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";
import BoardWrapper from "../../board-epic/wrapper/main";

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
          <Layer
            sizeStyle="w-full h-[80px]"
            containerStyle={containerStyles["row-center"]}
          >
            <div className="px-[1rem] h-[50px] flex flex-row w-full items-center space-x-[2rem] relative">
              <div className="w-[50px] h-[50px] bg-white rounded-[25px] overflow-hidden">
                <Image
                  alt="test"
                  src={`/apollo/sea/avatar.png`}
                  width={50}
                  height={50}
                />
              </div>
              <p className="text-white font-bold">Jason</p>
              <p className="text-white font-regular">21 hours ago</p>
            </div>
          </Layer>
        </BoardController>
        {navigationActive && (
          <BoardCraftSection>
            <h1>adsadsads</h1>
          </BoardCraftSection>
        )}
      </BoardWrapper>
    </>
  );
}
