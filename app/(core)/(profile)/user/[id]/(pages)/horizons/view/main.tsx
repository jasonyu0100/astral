import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';

export function ProfileUserView({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ProfileUserView.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
