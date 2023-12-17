import { effectStyles } from "@/(pages)/(common)/styles/data";
import clsx from "clsx";

export default function SidebarWorkInfo({ active }: { active: boolean }) {
  return (
    <div
      id={SidebarWorkInfo.name}
      className={clsx(
        "h-[50px] flex-col justify-center items-start inline-flex",
        {
          "opacity-50": !active,
          "opacity-100": active,
        }
      )}
    >
      <p
        className={clsx(
          "h-[25px] text-slate-300 text-xl font-bold font-['Creato Display'] leading-7"
        )}
      >
        Cosmos
      </p>
      <p
        className={clsx(
          "h-[25px] text-slate-300 text-base font-normal font-['Creato Display'] leading-normal"
        )}
      >
        J22
      </p>
    </div>
  );
}
