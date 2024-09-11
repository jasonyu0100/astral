import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { cn } from '@/utils/cn';

export function HorizonsArcSidebarOption({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}) {
  const hoverableController = useControllerForHoverable();

  return (
    <div
      className='w-full cursor-pointer'
      onMouseOver={() => hoverableController.onHover()}
      onMouseOut={() => hoverableController.onUnhover()}
      onClick={onClick}
    >
      <GlassWindowFrame
        name={HorizonsArcSidebarOption.name}
        borderFx={borderFx['border-around']}
        roundedFx={roundedFx['rounded-full']}
        className=' p-[1rem]'
      >
        <GlassWindowContents>
          <p
            className={cn('text-lg font-bold text-slate-500', {
              'text-slate-300': hoverableController.hovered || active,
            })}
          >
            {children}
          </p>
        </GlassWindowContents>
        {(hoverableController.hovered || active) && (
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
