import {
  glassStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function ShareSidebar({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ShareSidebar.name}
      size='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col-center']} px-[1rem] py-[2rem]`}
      glass={glassStyles['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
