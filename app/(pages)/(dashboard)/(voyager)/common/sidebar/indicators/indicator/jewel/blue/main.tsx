import { effectStyles } from "@/(pages)/(common)/styles/data";
import clsx from "clsx";

export default function SidebarIndicatorBlueJewel({
  active,
}: {
  active: boolean;
}) {
  return (
    <div
      id={SidebarIndicatorBlueJewel.name}
      className={clsx(
        "w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full",
        {
          [effectStyles["glow-lg"]]: active,
          ["opacity-50"]: !active,
        }
      )}
    />
  );
}
