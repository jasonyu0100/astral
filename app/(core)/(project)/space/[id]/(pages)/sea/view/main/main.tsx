import { GlassAreaContainer } from "@/(components)/(glass)/area/main";
import { MapScenes } from "../../../map/view/main/scenes/main";
import { MapCore } from "../../../map/view/main/core/main";
import { MapMain } from "../../../map/view/main/main";
import { GlassWindowFrame } from "@/(components)/(glass)/window/main";

export function SeaMain({ children } : { children?: React.ReactNode}) {
    return <GlassWindowFrame
      name={MapMain.name}
      className={`flex flex-col  h-full flex-grow p-[1rem] `}
    >
        <div className="overflow-auto flex flex-col">

            {children}
        </div>
    </GlassWindowFrame>
}