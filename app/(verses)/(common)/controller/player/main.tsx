import { Glass } from '@/(common)/layer/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '../../../../(common)/styles/data';

export function DashboardPlayer({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={DashboardPlayer.name}
      sizeStyle='h-[1rem] w-full'
      className={`${containerStyles['row-centered']}`}
      backgroundStyle={'bg-gradient-to-br from-slate-900 to-slate-950'}
    >
      {children}
    </Glass>
  );
}
