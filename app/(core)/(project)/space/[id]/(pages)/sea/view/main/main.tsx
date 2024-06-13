import { GlassAreaContainer } from "@/(components)/(glass)/area/main";
import { GlassWindowFrame } from "@/(components)/(glass)/window/main";

export function SeaMain({ children } : { children?: React.ReactNode}) {
    return <GlassWindowFrame
      name={SeaMain.name}
      className={`flex flex-col  h-full flex-grow p-[1rem] `}
    >
        <div className="overflow-auto flex flex-col">

            {children}
        </div>
    </GlassWindowFrame>
}