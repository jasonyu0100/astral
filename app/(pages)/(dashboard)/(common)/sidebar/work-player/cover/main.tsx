import { effectStyles } from "@/(pages)/(common)/styles/data";
import clsx from "clsx";

export default function WorkCover({ active }: { active: boolean }) {
  return (
    <div
      className={clsx(
        "w-[2.5rem] h-[2.5rem] flex flex-shrink-0 flex-col justify-center items-center bg-white",
        {
          "opacity-50": !active,
          "opacity-100": active,
          [effectStyles["glow-lg"]]: active,
        }
      )}
    >
      <img
        src="/voyager/release/producer.png"
        style={{ width: "2rem", height: "2rem" }}
      />
    </div>
  );
}
