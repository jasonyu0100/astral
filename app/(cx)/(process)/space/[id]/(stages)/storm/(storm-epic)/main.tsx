import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { Glass } from '@/(components)/(basic)/glass/main';

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
