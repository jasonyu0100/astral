import { MutableRefObject } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { DraftStar } from "@/(pages)/(dashboard)/(apollo)/draft/data";

export default function ConstellationStar({
  constraintsRef,
  star,
  updateStar,
}: {
  constraintsRef: MutableRefObject<null>;
  star: DraftStar;
  updateStar: (star: Object) => void;
}) {
  const x = useMotionValue(star.x);
  const y = useMotionValue(star.y);


  useMotionValueEvent(x, "animationStart", () => {
    console.log("animation started on x");
  });

  useMotionValueEvent(x, "change", (latest) => {
    updateStar({ x: latest });
    console.log("x changed to", latest);
  });

  useMotionValueEvent(y, "animationStart", () => {
    console.log("animation started on y");
  });

  useMotionValueEvent(y, "change", (latest) => {
    updateStar({ y: latest });
    console.log("y changed to", latest);
  });

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      className={`bg-white w-[100px] h-[120px] p-[10px] flex flex-col items-center absolute top-[${x}] left-[${y}]`}
      style={{ x, y }}
    >
      <div className="w-[80px] h-[80px] bg-black">
        <img className="w-full h-full" src={star.element.src} />
        <p className="w-full text-center font-bold">
          {star.element.name}
        </p>
      </div>
    </motion.div>
  );
}
