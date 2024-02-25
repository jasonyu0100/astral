import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { Glass } from '@/(components)/(basic)/glass/main';

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
