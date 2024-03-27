import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import {
  glassStyles,
  borderStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';

export function CreativeSearch() {
  return (
    <GlassAreaContainer
      displayName={CreativeSearch.name}
      sizeStyle='w-full h-[120px]'
      className='flex flex-shrink-0 flex-row items-center p-[2rem]'
    >
      <GlassAreaContainer
        sizeStyle='flex-grow h-[4rem]'
        className={`flex flex-row items-center space-x-[1rem] px-[1rem]`}
        glassStyle={glassStyles['glass-10']}
        borderStyle={borderStyles['border-all']}
        roundedStyle={roundedStyles['rounded-full']}
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
