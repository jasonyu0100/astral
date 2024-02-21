import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { Glass } from '@/(common)/layer/main';

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
