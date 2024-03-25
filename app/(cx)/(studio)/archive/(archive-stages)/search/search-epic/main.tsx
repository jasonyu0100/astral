import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';

export function SearchController({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={SearchController.name}
      sizeStyle='h-full flex-grow'
      glassStyle={glassStyles['glass-5']}
      className={`${containerStyles['col']} space-y-[2rem] p-[2rem]`}
    >
      {children}
    </GlassContainer>
  );
}
