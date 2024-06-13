import { glassFx, borderFx } from '@/(style)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function SeaSidebar({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SeaSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem] `}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
    >
      <div className="flex flex-col w-full overflow-auto space-y-[1rem]">
        {children}
      </div>
    </GlassAreaContainer>
  );
}
