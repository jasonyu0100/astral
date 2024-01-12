import { MutableRefObject, useEffect } from "react";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import { StarObj } from "@/tables/draft/constellation/star/main";

export function DraftStar({
  constraintsRef,
  star,
  updateStar,
}: {
  constraintsRef: MutableRefObject<null>;
  star: StarObj;
  updateStar: (star: Object) => void;
}) {
  const x = useMotionValue(star.x);
  const y = useMotionValue(star.y);

  useEffect(() => {
    x.set(star.x)
    y.set(star.y)
  }, [star])

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
      className={`w-[100px] h-[150px] p-[10px] flex flex-col space-y-[1rem] items-center absolute top-[${x}] left-[${y}]`}
      style={{ x, y }}
    >
      <div className="w-[100px] h-[100px]">
        <img
          className="w-full h-full rounded-full flex-shrink-0 pointer-events-none border-slate-300 border-[3px]"
          src={star.file.src}
        />
      </div>
      <p className="w-full text-center text-slate-300 font-bold">
        {star.file.name}
      </p>
    </motion.div>
  );
}
