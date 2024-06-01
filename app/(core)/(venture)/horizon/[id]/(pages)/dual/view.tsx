import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  containerFx,
  roundedFx,
  borderFx,
} from '@/(style)/data';

export function DualView({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={DualView.name}
      sizeFx='flex-grow h-full'
      className={`${containerFx['row']}`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}