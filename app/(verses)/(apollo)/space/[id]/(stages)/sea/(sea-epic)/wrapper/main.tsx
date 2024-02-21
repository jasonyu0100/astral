import { Glass } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';

export function SeaWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={SeaWrapper.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      {children}
    </Glass>
  );
}
