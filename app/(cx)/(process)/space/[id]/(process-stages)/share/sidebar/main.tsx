import {
  glassStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';

export function ShareSidebar({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={ShareSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col-center']} px-[1rem] py-[2rem]`}
      glassStyle={glassStyles['glass-10']}
    >
      {children}
    </GlassContainer>
  );
}
