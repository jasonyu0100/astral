import { MutableRefObject, useEffect } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { ExploreElementObj } from "@/(pages)/(cosmos)/tables/resource/explore/element/main";

export function ResultElement({
  constraintsRef,
  result,
  updateStar,
}: {
  constraintsRef: MutableRefObject<null>;
  result: ExploreElementObj;
  updateStar: (star: Object) => void;
}) {
  const x = useMotionValue(result.x);
  const y = useMotionValue(result.y);

  useEffect(() => {
    x.set(result.x)
    y.set(result.y)
  }, [result])

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
      className={`w-[200px] h-[200px] flex flex-col space-y-[1rem] items-center absolute top-[${x}] left-[${y}]`}
      style={{ x, y }}
    >
      <div className="w-[200px] h-[200px]">
        <img
          className="w-full h-full rounded-full flex-shrink-0 pointer-events-none opacity-80"
          src={result.file.src}
        />
      </div>
      <p className="w-full text-center text-white font-bold">
        {result.file.name}
      </p>
    </motion.div>
  );
}

