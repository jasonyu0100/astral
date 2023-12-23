import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ConstellationStar from "./star/main";
import ConstellationLinks from "./links/main";
import { defaultBoardStars } from "../../../../data";

export default function ConstellationStars({}) {
  const constraintsRef = useRef(null);
  const [stars, changeStars] = useState(defaultBoardStars);

  return (
    <>
      <ConstellationLinks stars={stars}/>
      <motion.div
        className="absolute top-0 left- 0 w-full h-full"
        ref={constraintsRef}
      >
        {stars.map((star, i) => (
          <ConstellationStar
            star={star}
            constraintsRef={constraintsRef}
            updateStar={(data) =>
              changeStars((prev) =>
                prev.map((o, j) => (j === i ? { ...o, ...data } : o))
              )
            }
          />
        ))}
      </motion.div>
    </>
  );
}
