import { useContext } from "react";
import { PolaroidContext } from "../../handler/polaroid/main";

export function PortalContainerFlip() {
  const { polaroidHandler } = useContext(PolaroidContext);
  return (
    <button onClick={() => polaroidHandler.flipPolaroid()}>
      <div className="animate-pulse mt-[3rem] text-center text-slate-500 text-xl font-bold leading-7 cursor-pointer">
        FLIP ME
      </div>
    </button>
  );
}
