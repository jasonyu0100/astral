import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';

export function SpaceSeaSidebar({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SpaceSeaSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem] `}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
    >
      <div className='flex w-full flex-col space-y-[1rem] overflow-auto'>
        {children}
      </div>
    </GlassAreaContainer>
  );
}
