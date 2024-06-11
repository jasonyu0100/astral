import { GlassWindowContents } from "@/(components)/(glass)/window/contents/main";
import { GlassWindowFrame } from "@/(components)/(glass)/window/main";
import { roundedFx } from "@/(style)/data";

export function VideoVertical() {
    return <GlassWindowFrame
          className='aspect-[8/12] w-[20rem] animate-pulse-slow shadow-glow'
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex w-full flex-row'>
            <iframe
              onDrag={(e) => e.stopPropagation()}
              className='object-contain'
              style={{ width: '100%', height: '100%' }}
              src={`https://www.youtube.com/embed/ABfT0jtWULM?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`}
              title='YouTube video player'
            />
          </GlassWindowContents>
        </GlassWindowFrame>
}