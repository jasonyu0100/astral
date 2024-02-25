import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';

export function SearchBar({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={SearchBar.name}
      sizeStyle='flex-grow max-w-[800px] h-[4rem]'
      className={`${containerStyles['row-center']} space-x-[1rem] px-[1rem]`}
      glassStyle={backgroundStyles['glass-10']}
      borderStyle={`${borderStyles['border-all']} ${borderStyles.rounded}`}
    >
      {children}
    </GlassContainer>
  );
}
