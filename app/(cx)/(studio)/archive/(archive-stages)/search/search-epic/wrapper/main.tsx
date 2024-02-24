import { Glass } from '@/(components)/glass/main';
import { containerStyles } from '@/(components)/styles/data';

export function SearchWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={SearchWrapper.name}
      sizeStyle='w-full h-full'
      className={`${containerStyles.row}`}
    >
      {children}
    </Glass>
  );
}
