import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';

export function RecordCollection({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={RecordCollection.name}
      sizeStyle='h-full flex-grow'
      glassStyle={backgroundStyles['glass-5']}
      className={`${containerStyles['col-center']}`}
    >
      {children}
    </GlassContainer>
  );
}
