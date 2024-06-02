import { GlassWindowContents } from "@/(components)/(glass)/window/contents/main";
import { GlassWindowFrame } from "@/(components)/(glass)/window/main";
import { GlassWindowPane } from "@/(components)/(glass)/window/pane/main";
import { borderFx, roundedFx, glassFx } from "@/(style)/data";

export function MapSidebarPoint() {
    return <GlassWindowFrame
        name='temp'
        borderFx={borderFx['border-all']}
        roundedFx={roundedFx.rounded}
        className='p-[1rem]'
      >
        <GlassWindowContents className='flex flex-row'>
          <p className='text-white'>1. Decision XYZ</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
}