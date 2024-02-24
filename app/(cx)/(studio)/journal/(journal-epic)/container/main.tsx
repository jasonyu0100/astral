import { backgroundStyles, containerStyles } from '@/(components)/styles/data';
import { Glass } from '@/(components)/glass/main';

export function FeedContainer({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={FeedContainer.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['row']}`}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      {children}
    </Glass>
  );
}
