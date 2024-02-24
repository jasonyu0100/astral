import { Glass } from '@/(components)/glass/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '../../../styles/data';

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
