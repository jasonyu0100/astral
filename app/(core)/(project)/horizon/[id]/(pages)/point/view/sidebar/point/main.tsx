import { GlassWindowContents } from "@/(components)/(glass)/window/contents/main";
import { GlassWindowFrame } from "@/(components)/(glass)/window/main";
import { GlassWindowPane } from "@/(components)/(glass)/window/pane/main";
import { borderFx, roundedFx, glassFx } from "@/(style)/data";

export function PointSidebarPoint({children} : {children ?: React.ReactNode}) {
    return <GlassWindowFrame
        name='temp'
        borderFx={borderFx['border-around']}
        roundedFx={roundedFx.rounded}
        className='p-[1rem]'
      >
        <GlassWindowContents className='flex flex-row'>
          <p className='text-white'>{children}</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
}