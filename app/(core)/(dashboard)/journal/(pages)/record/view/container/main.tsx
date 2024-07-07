import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function JournalRecordContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={JournalRecordContainer.name}
      className={`flex flex-row`}
      glassFx={glassFx['glass-10']}
      sizeFx='flex-grow h-full'
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
