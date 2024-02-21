import { Glass } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';

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
