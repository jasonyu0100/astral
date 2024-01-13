import { motion } from "framer-motion";
import { useContext, useRef } from "react";
import { DraftStar } from "./star/main";
import { DraftContext } from "../../../../page";

export function DraftConstellationStars() {
  const { stars, starHandler: starHandling } = useContext(DraftContext);
  const constraintsRef = useRef(null);
  return (
    <motion.div
      className="absolute top-0 left- 0 w-full h-full"
      ref={constraintsRef}
    >
      {stars.map((star) => (
        <DraftStar
          star={star}
          constraintsRef={constraintsRef}
          updateStar={(data) => starHandling.updateStar(star.id, data)}
        />
      ))}
    </motion.div>
  );
}
