import { backgroundStyles, borderStyles } from '@/(components)/styles/data';
import { Glass } from '@/(components)/glass/main';

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
