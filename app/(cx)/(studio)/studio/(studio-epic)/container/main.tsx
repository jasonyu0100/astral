import { Glass } from '@/(components)/layer/main';
import { containerStyles } from '@/(components)/styles/data';

export function SpaceContainer({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={SpaceContainer.name}
      sizeStyle='w-full h-full'
      className={`${containerStyles.row}`}
    >
      {children}
    </Glass>
  );
}
