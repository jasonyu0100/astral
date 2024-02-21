import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { Glass } from '@/(common)/layer/main';

export function SearchController({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={SearchController.name}
      sizeStyle='h-full flex-grow'
      backgroundStyle={backgroundStyles['glass-5']}
      className={`${containerStyles['col']} space-y-[2rem] p-[2rem]`}
    >
      {children}
    </Glass>
  );
}
