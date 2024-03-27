import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';

export function SearchController({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={SearchController.name}
      sizeStyle='h-full flex-grow'
      glassStyle={glassStyles['glass-5']}
      className={`${containerStyles['col']} space-y-[2rem] p-[2rem]`}
    >
      {children}
    </GlassAreaContainer>
  );
}
