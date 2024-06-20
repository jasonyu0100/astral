import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { useControllerForHoverable } from '@/(logic)/contexts/hoverable/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { FormInputProps } from '@/(types)/props/main';

export function SpaceStormInputText({ ...props }: FormInputProps) {
  const hoverableController = useControllerForHoverable();
  return (
    <GlassAreaContainer
      name={SpaceStormInputText.name}
      sizeFx='max-w-[600px] flex-grow h-[50px]'
      glassFx={`${hoverableController.hovered ? glassFx['glass-20'] : glassFx['glass-10']}`}
      roundedFx={roundedFx['rounded-full']}
      onMouseOver={() => hoverableController.onHover()}
      onMouseLeave={() => hoverableController.onUnhover()}
      borderFx={borderFx['border-around']}
    >
      <input
        className={`h-full w-full animate-pulse-slow bg-transparent px-[2rem] font-light text-slate-300 outline-none`}
        placeholder='Type a message...'
        {...props}
      />
    </GlassAreaContainer>
  );
}
