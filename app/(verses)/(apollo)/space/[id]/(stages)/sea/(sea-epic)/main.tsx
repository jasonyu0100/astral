import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { Glass } from '@/(common)/layer/main';

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
