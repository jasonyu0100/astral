import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '../../../../(design)/(styles)/data';

export function DashboardPlayer({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={DashboardPlayer.name}
      sizeStyle='h-[1rem] w-full'
      className={`${containerStyles['row-centered']}`}
      glassStyle={'bg-gradient-to-br from-slate-900 to-slate-950'}
    >
      {children}
    </GlassContainer>
  );
}
