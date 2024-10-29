import { AstralSearchIcon } from '@/icons/search/main';
import { FormInputProps } from '../../props/main';
import { borderFx, glassFx, roundedFx } from '../../style/data';
import { GlassWindowContents } from '../glass/window/contents/main';
import { GlassWindowFrame } from '../glass/window/main';
import { GlassWindowPane } from '../glass/window/pane/main';

export function SearchBar({ ...props }: FormInputProps) {
  return (
    <GlassWindowFrame
      name={SearchBar.name}
      className='h-[5rem] w-full'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents className='flex w-full items-center space-x-[2rem] px-[2rem]'>
        <AstralSearchIcon />
        <input
          className='h-[3rem] w-full bg-transparent text-2xl text-slate-300 outline-none'
          placeholder='enter search...'
          {...props}
        />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
