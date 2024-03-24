import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';

export function VentureCollection({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={VentureCollection.name}
      sizeStyle='h-full flex-grow'
      glassStyle={backgroundStyles['glass-5']}
      className={`flex flex-col overflow-auto`}
    >
      {children}
    </GlassContainer>
  );
}
