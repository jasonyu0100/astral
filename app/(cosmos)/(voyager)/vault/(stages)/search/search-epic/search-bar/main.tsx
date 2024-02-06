import { Layer } from '@/(common)/layer/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(common)/styles/data';

export function SearchBar({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={SearchBar.name}
      sizeStyle='flex-grow max-w-[800px] h-[4rem]'
      className={`${containerStyles['row-center']} space-x-[1rem] px-[1rem]`}
      backgroundStyle={backgroundStyles['glass-10']}
      borderStyle={`${borderStyles['border-all']} ${borderStyles.rounded}`}
    >
      {children}
    </Layer>
  );
}
