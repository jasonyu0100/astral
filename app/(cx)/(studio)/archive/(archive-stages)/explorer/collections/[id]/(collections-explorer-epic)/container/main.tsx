import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  containerFx,
  roundedFx,
  borderFx,
} from '@/(design)/(fx)/data';

export function CollectionsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={CollectionsContainer.name}
      sizeFx='flex-grow h-full'
      className={`${containerFx['col']} p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
