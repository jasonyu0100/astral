import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';

export function ScenesContainer({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ScenesContainer.name}
      sizeFx='w-full h-[80px]'
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem] shadow-glow'
    >
      {children}
    </GlassAreaContainer>
  );
}
