import { effectStyles } from "@/(pages)/(common)/styles/data";
import clsx from "clsx";

export default function SidebarIndicatorGreenJewel({
  active,
}: {
  active: boolean;
}) {
  return (
    <div
      id={SidebarIndicatorGreenJewel.name}
      className={clsx(
        "w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-amber-300 to-emerald-400 rounded-full",
        {
          [effectStyles["glow-lg"]]: active,
          ["opacity-50"]: !active,
        }
      )}
    />
  );
}
