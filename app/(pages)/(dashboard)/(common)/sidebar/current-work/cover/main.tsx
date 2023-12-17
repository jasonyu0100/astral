import { effectStyles } from "@/(pages)/(common)/styles/data";
import clsx from "clsx";

export default function SidebarWorkCover({ active }: { active: boolean }) {
  return (
    <img
      src="/voyager/release/producer.png"
      className={clsx(
        "w-[2.5rem] h-[2.5rem] rounded-full border-[3px] border-slate-50",
        {
          "opacity-50": !active,
          "opacity-100": active,
          [effectStyles["glow-lg"]]: active,
        }
      )}
    />
  );
}
