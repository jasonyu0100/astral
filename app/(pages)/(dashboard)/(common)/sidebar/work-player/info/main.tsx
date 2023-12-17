import { effectStyles } from "@/(pages)/(common)/styles/data";
import clsx from "clsx";

export default function WorkInfo({ active }: { active: boolean }) {
  return (
    <div
      id={WorkInfo.name}
      className={clsx(
        "w-[180px] h-[50px] flex-col justify-center items-start inline-flex",
        {
          "opacity-50": !active,
          "opacity-100": active,
        }
      )}
    >
      <p
        className={clsx(
          "w-[180px] h-[25px] text-slate-300 text-lg font-bold font-['Creato Display'] leading-7"
        )}
      >
        Cosmos
      </p>
      <p
        className={clsx(
          "w-[180px] h-[25px] text-slate-300 text-base font-normal font-['Creato Display'] leading-normal"
        )}
      >
        J22
      </p>
    </div>
  );
}
