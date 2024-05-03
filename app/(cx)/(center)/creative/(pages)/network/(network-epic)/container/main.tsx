import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(fx)/data';

export function CreativeNetworkContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={CreativeNetworkContainer.name}
      className={`flex flex-row`}
      glassFx={glassFx['glass-5']}
      sizeFx='flex-grow h-full'
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
