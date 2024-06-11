import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { roundedFx } from '@/(style)/data';

export function VideoCircle() {
  return (
    <GlassWindowFrame className='aspect-square flex-shrink-0 h-[20rem] w-[20rem] animate-pulse-slow overflow-hidden  rounded-full shadow-glow'>
      <GlassWindowContents className='flex w-full flex-row items-center justify-center'>
        <iframe
          onDrag={(e) => e.stopPropagation()}
          className='overflow-hidden   rounded-full object-contain'
          style={{ width: '100%', height: '100%' }}
          src={`https://www.youtube.com/embed/ABfT0jtWULM`}
          title='YouTube video player'
        />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
