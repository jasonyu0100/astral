import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';

export function FinderHomeGallerysContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={FinderHomeGallerysContainer.name}
      sizeFx='w-full h-full'
      className={`flex flex-col`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
