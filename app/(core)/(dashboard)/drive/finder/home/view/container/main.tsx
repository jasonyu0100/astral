import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, roundedFx } from '@/style/data';

export function DriveFinderHomeGallerysContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={DriveFinderHomeGallerysContainer.name}
      sizeFx='w-full h-full'
      className={`flex flex-col`}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
