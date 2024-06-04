import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';

export function ChaptersContainer({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ChaptersContainer.name}
      sizeFx='w-full h-[80px]'
      glassFx={glassFx['glass-5']}
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
    >
      {children}
    </GlassAreaContainer>
  );
}
