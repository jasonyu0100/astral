import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { DivInputProps } from '@/(types)/props/main';

export function WidePolaroid({ ...props }: DivInputProps) {
  return (
    <div {...props}>
      <GlassWindowFrame className='aspect-[16/13] h-[20rem] shadow-md z-50 bg-white p-[1rem] pb-[3rem]  shadow-glow'>
        <GlassWindowContents className='flex w-full flex-col'>
          <div className='w-full overflow-hidden bg-black'>
            <img
              className='h-full w-full object-fill'
              src='https://images.unsplash.com/photo-1715254934165-15112c612e76?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </div>
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
