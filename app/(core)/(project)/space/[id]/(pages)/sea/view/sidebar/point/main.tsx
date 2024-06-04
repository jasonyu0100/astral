import { GlassWindowContents } from "@/(components)/(glass)/window/contents/main";
import { GlassWindowFrame } from "@/(components)/(glass)/window/main";
import { GlassWindowPane } from "@/(components)/(glass)/window/pane/main";
import { borderFx, roundedFx, glassFx } from "@/(style)/data";

export function ShareSidebarPoint({children} : {children ?: React.ReactNode}) {
    return <GlassWindowFrame
        name='temp'
        borderFx={borderFx['border-around']}
        className='p-[1rem] bg-yellow-300 aspect-[3/2] flex-shrink-0 bg-opacity-90 mr-[1rem]'
      >
        <GlassWindowContents className='flex flex-row'>
          <p className='text-white text-2xl font-permanentMarker'>{children}</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
}