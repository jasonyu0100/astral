import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import {
  glassStyles,
  borderStyles,
  containerStyles,
} from '@/(design)/(styles)/data';

export function SearchBar({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SearchBar.name}
      size='flex-grow max-w-[800px] h-[4rem]'
      className={`${containerStyles['row-center']} space-x-[1rem] px-[1rem]`}
      glass={glassStyles['glass-10']}
      border={`${borderStyles['border-all']} ${borderStyles.rounded}`}
    >
      {children}
    </GlassAreaContainer>
  );
}
