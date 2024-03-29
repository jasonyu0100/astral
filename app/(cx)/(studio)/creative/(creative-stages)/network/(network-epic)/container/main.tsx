import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassStyles, roundedStyles } from '@/(design)/(styles)/data';

export function CreativeNetworkContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={CreativeNetworkContainer.name}
      className={`flex flex-row`}
      glass={glassStyles['glass-5']}
      size='flex-grow h-full'
      rounded={roundedStyles['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
