import { effectStyles } from "@/(pages)/(common)/styles/data";
import clsx from "clsx";

export default function SidebarIndicatorOrangeJewel({
  active,
}: {
  active: boolean;
}) {
  return  (
    <div
      id={SidebarIndicatorOrangeJewel.name}
      className={clsx(
        "w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-red-500 to-amber-300 rounded-full",
        {
          [effectStyles["glow-lg"]]: active,
          ["opacity-50"]: !active,
        }
      )}
    />
  );
}
