import { glassStyles, roundedStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';

export function VentureCollection({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={VentureCollection.name}
      sizeStyle='h-full flex-grow'
      glassStyle={glassStyles['glass-5']}
      className={`flex flex-col overflow-auto`}
      roundedStyle={roundedStyles['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
