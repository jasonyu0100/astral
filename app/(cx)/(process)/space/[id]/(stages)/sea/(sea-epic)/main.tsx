import { backgroundStyles, containerStyles } from '@/(components)/styles/data';
import { Glass } from '@/(components)/glass/main';

export function SeaMain({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={SeaMain.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row-center']}`}
    >
      {children}
    </Glass>
  );
}
