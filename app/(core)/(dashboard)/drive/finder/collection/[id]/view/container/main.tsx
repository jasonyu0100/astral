import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, roundedFx } from '@/style/data';

export function DriveFinderCollectionResourcesContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={DriveFinderCollectionResourcesContainer.name}
      sizeFx='flex-grow h-full'
      className={'flex flex-col'}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
