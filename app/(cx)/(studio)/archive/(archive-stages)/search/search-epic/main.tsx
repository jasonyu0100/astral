import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function SearchController({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SearchController.name}
      size='h-full flex-grow'
      glass={glassStyles['glass-5']}
      className={`${containerStyles['col']} space-y-[2rem] p-[2rem]`}
    >
      {children}
    </GlassAreaContainer>
  );
}
