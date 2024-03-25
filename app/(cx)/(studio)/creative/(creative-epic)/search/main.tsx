import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import {
  glassStyles,
  borderStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';

export function CreativeSearch() {
  return (
    <GlassContainer
      displayName={CreativeSearch.name}
      sizeStyle='w-full h-[120px]'
      className='flex flex-shrink-0 flex-row items-center p-[2rem]'
    >
      <GlassContainer
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
      </GlassContainer>
      {/* <p className='font-bold text-slate-300'>Search People</p> */}
    </GlassContainer>
  );
}
