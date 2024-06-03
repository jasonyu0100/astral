
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function SeaMain({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SeaMain.name}
      sizeFx='h-full flex-grow p-[2rem]'
      className={`$flex flex-col`}
    >
      <div className='w-full overflow-auto space-y-[2rem]'>{children}</div>
    </GlassAreaContainer>
  );
}
