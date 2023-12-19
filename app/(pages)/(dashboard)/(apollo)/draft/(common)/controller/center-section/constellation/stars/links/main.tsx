import { motion } from "framer-motion";
import { StarProps } from "../star/main";

export default function ConstellationLinks({ stars }: { stars: StarProps[] }) {
  return (
    <motion.svg className="absolute top-0 left-0 w-full h-full">
      {...stars.map((star, i) => (
        <line
            className="stroke-slate-300"
          x1={star.x + 50}
          y1={star.y + 60}
          x2={stars[i === 0 ? stars.length - 1 : i - 1].x + 50}
          y2={stars[i === 0 ? stars.length - 1 : i - 1].y + 60}
          stroke="#ffffff"
        />
      ))}
    </motion.svg>
  );
}
