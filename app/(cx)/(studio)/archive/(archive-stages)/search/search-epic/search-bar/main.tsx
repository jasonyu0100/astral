import { Glass } from '@/(components)/glass/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(components)/styles/data';

export function SearchBar({ children }: { children: React.ReactNode }) {
  return (
    <Glass
      displayName={SearchBar.name}
      sizeStyle='flex-grow max-w-[800px] h-[4rem]'
      className={`${containerStyles['row-center']} space-x-[1rem] px-[1rem]`}
      backgroundStyle={backgroundStyles['glass-10']}
      borderStyle={`${borderStyles['border-all']} ${borderStyles.rounded}`}
    >
      {children}
    </Glass>
  );
}
