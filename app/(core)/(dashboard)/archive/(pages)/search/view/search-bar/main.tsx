import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  borderFx,
  roundedFx,
} from '@/(style)/data';

export function SearchBar({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SearchBar.name}
      sizeFx='flex-grow max-w-[800px] h-[4rem]'
      className={`flex items-center space-x-[1rem] px-[1rem]`}
      glassFx={glassFx['glass-10']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      {children}
    </GlassAreaContainer>
  );
}
