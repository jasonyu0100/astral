import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassStyles,
  borderStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';

export function CreativeSearch() {
  return (
    <GlassAreaContainer
      name={CreativeSearch.name}
      size='w-full h-[120px]'
      className='flex flex-shrink-0 flex-row items-center p-[2rem]'
    >
      <GlassAreaContainer
        size='flex-grow h-[4rem]'
        className={`flex flex-row items-center space-x-[1rem] px-[1rem]`}
        glass={glassStyles['glass-10']}
        border={borderStyles['border-all']}
        rounded={roundedStyles['rounded-full']}
      >
        <input
          className='h-full w-full rounded-full bg-transparent px-[2rem] text-2xl font-bold text-slate-300 outline-none'
          placeholder='Enter name...'
        ></input>
      </GlassAreaContainer>
      {/* <p className='font-bold text-slate-300'>Search People</p> */}
    </GlassAreaContainer>
  );
}
