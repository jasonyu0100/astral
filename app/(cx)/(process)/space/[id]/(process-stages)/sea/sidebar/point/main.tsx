import { backgroundStyles, borderStyles } from '@/(design)/(styles)/data';
import { Glass } from '@/(components)/(basic)/glass/main';

export function SeaPoint({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={SeaPoint.name}
      sizeStyle='w-full h-[150px]'
      className='p-[2rem] text-white'
    >
      {children}
    </Glass>
  );
}
