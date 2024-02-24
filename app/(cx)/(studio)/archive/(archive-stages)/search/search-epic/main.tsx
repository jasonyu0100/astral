import { backgroundStyles, containerStyles } from '@/(components)/styles/data';
import { Glass } from '@/(components)/glass/main';

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
