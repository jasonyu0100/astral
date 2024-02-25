import { Glass } from '@/(components)/(basic)/glass/main';
import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';

export function DraftContainer({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={DraftContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      {children}
    </Glass>
  );
}
