import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';

export function SeaMain({ children }: { children?: React.ReactNode }) {
  return (
    <GlassWindowFrame name={SeaMain.name} className='h-full flex-grow p-[2rem] pr-[1rem]'>
      <GlassWindowContents className="overflow-auto">
        <div className='flex w-full flex-col space-y-[2rem] pr-[1rem]'>
          {children}
        </div>
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
