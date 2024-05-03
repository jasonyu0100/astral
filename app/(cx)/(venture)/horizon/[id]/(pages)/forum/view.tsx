import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import {
  glassFx,
  containerFx,
  roundedFx,
  borderFx,
} from '@/(fx)/data';

export function BaseView({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={BaseView.name}
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