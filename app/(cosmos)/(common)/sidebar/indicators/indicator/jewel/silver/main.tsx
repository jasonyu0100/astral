import { effectStyles } from "@/(common)/styles/data";
import clsx from "clsx";

export function IndicatorSilverJewel({ active }: { active: boolean }) {
  return (
    <div
      id={IndicatorSilverJewel.name}
      className={clsx(
        "w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-slate-500 to-slate-700 rounded-full",
        {
          [`${effectStyles["glow-lg"]} animate-activate`]: active,
          ["opacity-50"]: !active,
        }
      )}
    />
  );
}
