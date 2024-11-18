import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';

export function BrandUploadsDailyContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={BrandUploadsDailyContainer.name}
      className={`flex flex-row`}
      sizeFx='flex-grow h-full'
      borderFx={borderFx['border-around']}
      glassFx={glassFx['glass-5']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
