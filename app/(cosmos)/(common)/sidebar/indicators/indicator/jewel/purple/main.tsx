import { effectStyles } from "@/(common)/styles/data";
import clsx from "clsx";

export function IndicatorPurpleJewel({
  active,
}: {
  active: boolean;
}) {
  return (
    <div
      id={IndicatorPurpleJewel.name}
      className={clsx(
        "w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-fuchsia-700 to-fuchsia-900 rounded-full",
        {
          [effectStyles["glow-lg"]]: active,
          ["opacity-50"]: !active,
        }
      )}
    />
  );
}
