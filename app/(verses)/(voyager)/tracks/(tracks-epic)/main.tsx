import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { Glass } from '@/(common)/layer/main';

export function RecordCollection({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={RecordCollection.name}
      sizeStyle='h-full flex-grow'
      backgroundStyle={backgroundStyles['glass-5']}
      className={`${containerStyles['col-center']}`}
    >
      {children}
    </Glass>
  );
}
