import { Glass } from '@/(components)/layer/main';
import { backgroundStyles, containerStyles } from '@/(components)/styles/data';

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
