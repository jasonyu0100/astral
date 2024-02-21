import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { Glass } from '@/(common)/layer/main';

export function StormWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={StormWrapper.name}
      sizeStyle='h-full flex-grow'
      backgroundStyle={backgroundStyles['glass-5']}
      className={`${containerStyles['row']}`}
    >
      {children}
    </Glass>
  );
}
