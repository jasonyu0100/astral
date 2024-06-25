import { StudioBackedContainer } from './container/main';

export function StudioBackedView() {
  return (
    <StudioBackedContainer>
      <div className='h-full w-full p-[2rem]'>
        <p className='font-bold text-slate-300'>Create action items</p>
      </div>
    </StudioBackedContainer>
  );
}
