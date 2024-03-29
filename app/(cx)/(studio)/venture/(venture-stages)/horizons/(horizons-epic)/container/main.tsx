import { glassStyles, roundedStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';

export function VentureHorizonsContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={VentureHorizonsContainer.name}
      size='h-full flex-grow'
      glass={glassStyles['glass-5']}
      className={`flex flex-col overflow-auto`}
      rounded={roundedStyles['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
