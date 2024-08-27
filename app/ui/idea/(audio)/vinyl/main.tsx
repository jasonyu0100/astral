import { useControllerForFlippable } from '@/logic/contexts/flippable/main';
import { useControllerForTogglable } from '@/logic/contexts/togglable/main';
import { DivInputProps } from '@/types/props/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export function VinylAudioIdea() {
  const flippableController = useControllerForFlippable();
  const togglableController = useControllerForTogglable();

  return (
    <GlassWindowFrame className='h-[15rem] animate-pulse-slow'>
      <GlassWindowContents
        className='absolute flex h-full flex-row'
        onClick={() => {
          flippableController.flip();
          togglableController.toggle();
        }}
      >
        <img
          className='relative z-50 aspect-square h-full flex-shrink-0 border-[10px] border-white object-contain'
          src='https://www.udiscovermusic.com/wp-content/uploads/2022/03/janelle-monae-dirty-computer.jpg'
        />
        <img
          src='/graphic/record.png'
          className='relative right-[5rem] z-0 aspect-square h-full flex-shrink-0 animate-spin p-[1rem]'
        />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}

export function VinylAudioClosedIdea({ ...props }: DivInputProps) {
  const flippableController = useControllerForFlippable();
  return (
    <div {...props}>
      <GlassWindowFrame className='z-50 aspect-square h-[15rem] border-[10px] border-white shadow-md'>
        <GlassWindowContents
          className='flex h-full flex-row'
          onClick={flippableController.flip}
        >
          {flippableController.flipped ? (
            <>
              <img
                className='aspect-square h-full w-full flex-shrink-0 object-contain'
                src='https://www.udiscovermusic.com/wp-content/uploads/2022/03/janelle-monae-dirty-computer.jpg'
              />
              <p className='font-bold text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </>
          ) : (
            <img
              className='aspect-square h-full w-full flex-shrink-0 object-contain'
              src='https://www.udiscovermusic.com/wp-content/uploads/2022/03/janelle-monae-dirty-computer.jpg'
            />
          )}
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
