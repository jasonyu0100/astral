import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { useControllerForTogglable } from '@/(logic)/contexts/togglable/main';
import { borderFx, roundedFx } from '@/(style)/data';
import { DivInputProps } from '@/(types)/props/main';

export function VideoHorizontal({ ...props }: DivInputProps) {
  const togglableController = useControllerForTogglable();
  return (
    <div {...props}>
      <GlassWindowFrame
        className='z-50 aspect-[16/9] h-[15rem] shadow-glow'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents className='flex w-full flex-row p-[1rem]'>
          {togglableController.toggled ? (
            <iframe
              onDrag={(e) => e.stopPropagation()}
              className='h-full w-full object-cover'
              src={`https://www.youtube.com/embed/ABfT0jtWULM?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`}
              title='YouTube video player'
            />
          ) : (
            <img
              onDrag={(e) => e.stopPropagation()}
              className='h-full w-full object-cover'
              src={`https://img.youtube.com/vi/ABfT0jtWULM/hqdefault.jpg`}
              title='YouTube video player'
              onClick={() => togglableController.toggle()}
            />
          )}
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
