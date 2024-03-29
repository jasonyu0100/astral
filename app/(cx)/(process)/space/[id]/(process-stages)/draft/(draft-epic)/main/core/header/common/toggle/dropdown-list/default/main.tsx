import { ButtonInputProps } from '@/(logic)/types/element/main';
import { NetworkIcon } from '../../../icons/network/main';
import { DraftModalType } from '@/(cx)/(process)/space/[id]/(process-stages)/draft/page';

export function DraftHeaderDefaultBoardButton({ ...props }: ButtonInputProps) {
  return (
    <button className='flex h-[60px] w-full flex-row items-center hover:bg-slate-900' {...props}>
      <div className='flex h-[60px] w-[60px] flex-shrink-0 flex-col items-center justify-center border-r border-slate-500 border-opacity-30'>
        <NetworkIcon className='h-1/2 w-1/2' />
      </div>
      <div className='flex h-[60px] flex-grow flex-row items-center pl-[10px]'>
        <p className='font-bold text-white'>{DraftModalType.DEFAULT}</p>
      </div>
    </button>
  );
}
