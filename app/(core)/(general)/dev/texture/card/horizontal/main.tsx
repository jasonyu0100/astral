import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';
import { roundedFx } from '@/(style)/data';
import { DivInputProps } from '@/(types)/props/main';

export function HorizontalCard({ ...props }: DivInputProps) {
  const flippableController = useControllerForFlippable();

  return (
    <div {...props}>
      <GlassWindowFrame
        roundedFx={roundedFx.rounded}
        className='z-50 aspect-[12/9] h-[15rem] bg-black p-[1rem] shadow-glow'
      >
        <GlassWindowContents
          onClick={flippableController.flip}
          className='flex items-center justify-center p-[1rem]'
        >
          {flippableController.flipped ? (
            <p className='font-bold text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          ) : (
            <p className='font-extraBold text-xl uppercase text-white'>
              world hold on
            </p>
          )}
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
