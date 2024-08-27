import { useControllerForFlippable } from '@/logic/contexts/flippable/main';
import { borderFx, roundedFx } from '@/style/data';
import { DivInputProps } from '@/types/props/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';

export enum CardTextIdeaSize {
  NORMAL = 'normal',
  WIDE = 'wide',
}

interface CardTextIdeaProps extends DivInputProps {
  size: CardTextIdeaSize;
}

export function CardTextIdea({ size, ...props }: CardTextIdeaProps) {
  const flippableController = useControllerForFlippable();

  function getAspect(size: CardTextIdeaSize) {
    switch (size) {
      case CardTextIdeaSize.NORMAL:
        return 'aspect-[12/9]';
      case CardTextIdeaSize.WIDE:
        return 'aspect-[9/12]';
    }
  }

  const aspect = getAspect(size);

  return (
    <div {...props}>
      <GlassWindowFrame
        roundedFx={roundedFx.rounded}
        className={`z-50 ${aspect} h-[15rem] bg-white p-[1rem] shadow-glow`}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents
          onClick={flippableController.flip}
          className='flex items-center justify-center p-[1rem]'
        >
          {flippableController.flipped ? (
            <p className='font-bold text-black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          ) : (
            <p className='font-extraBold text-xl uppercase text-black'>TBD</p>
          )}
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
