import { Glass } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';

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
