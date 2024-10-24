import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';

export function JournalDailyContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={JournalDailyContainer.name}
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
