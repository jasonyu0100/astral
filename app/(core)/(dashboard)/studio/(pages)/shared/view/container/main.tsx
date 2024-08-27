import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';

export function StudioSharedContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={StudioSharedContainer.name}
      className={`flex flex-row`}
      glassFx={glassFx['glass-5']}
      sizeFx='flex-grow h-full'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
