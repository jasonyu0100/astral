import { ButtonInputProps } from '@/(types)/props/main';
import { NetworkIcon } from '../../../icons/network/main';
import { MapModalType } from '@/(core)/(project)/space/[id]/(pages)/map/page';

export function MapHeaderDefaultBoardButton({ ...props }: ButtonInputProps) {
  return (
    <button className='flex h-[4rem] w-full flex-row items-center hover:bg-slate-900' {...props}>
      <div className='flex h-[4rem] w-[4rem] flex-shrink-0 flex-col items-center justify-center border-r border-slate-500 border-opacity-30'>
        <NetworkIcon className='h-1/2 w-1/2' />
      </div>
      <div className='flex h-[4rem] flex-grow flex-row items-center pl-[10px]'>
        <p className='font-bold text-slate-300'>{MapModalType.DEFAULT}</p>
      </div>
    </button>
  );
}
