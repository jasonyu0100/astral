import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useControllerForTogglable } from '@/(logic)/contexts/togglable/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { DivInputProps } from '@/(types)/props/main';

export enum ScreenVideoIdeaSize {
  VERTICAL = 'VERTICAL',
  WIDE = 'WIDE',
}

interface ScreenVideoIdeaProps extends DivInputProps {
  size: ScreenVideoIdeaSize;
}

export function ScreenVideoIdea({ size, ...props } : ScreenVideoIdeaProps) {
  const togglableController = useControllerForTogglable();

  function getAspect(size: ScreenVideoIdeaSize) {
    switch (size) {
      case ScreenVideoIdeaSize.VERTICAL:
        return 'aspect-[5/7]';
      case ScreenVideoIdeaSize.WIDE:
        return 'aspect-[16/9]';
    }
  }

  const aspect = getAspect(size);

  return (
    <div {...props}>
      <GlassWindowFrame
        className={`z-50 ${aspect} w-[15rem] bg-black shadow-glow`}
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowPane glassFx={glassFx['glass-5']} />
        <GlassWindowContents className='flex w-full flex-row bg-black p-[1rem]'>
          {togglableController.toggled ? (
            <iframe
              onDrag={(e) => e.stopPropagation()}
              className='w-full object-contain'
              src={`https://www.youtube.com/embed/ABfT0jtWULM?controls=1&showinfo=0&modestbranding=0&rel=0&loop=1`}
              title='YouTube video player'
            />
          ) : (
            <img
              onDrag={(e) => e.stopPropagation()}
              className='z-50 w-full object-contain'
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
