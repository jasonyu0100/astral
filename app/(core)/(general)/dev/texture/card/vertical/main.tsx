import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';
import { roundedFx } from '@/(style)/data';
import { DivInputProps } from '@/(types)/props/main';

export function VerticalCard({ ...props }: DivInputProps) {
  const flippableController = useControllerForFlippable();

  return (
    <div {...props}>
      <GlassWindowFrame
        className='aspect-[9/12] h-[20rem] border-[4px] border-black bg-black shadow-glow z-50'
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents
          className='flex items-center justify-center p-[1rem]'
          onClick={flippableController.flip}
        >
          {flippableController.flipped ? (
            <p className='text-xl font-extraBold uppercase text-white'>
              world hold on
            </p>
          ) : (
            <p className='font-bold text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          )}
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
