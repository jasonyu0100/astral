import { ButtonInputProps } from '@/(components)/types/main';
import { VisualIcon } from '../../icons/visual/main';

export function DraftHeaderVisualBoardButton({ ...props }: ButtonInputProps) {
  return (
    <button className='flex h-[60px] w-full flex-row items-center' {...props}>
      <div className='flex h-[60px] w-[60px] flex-shrink-0 flex-col items-center justify-center border-r border-slate-500 border-opacity-30'>
        <VisualIcon className='h-1/2 w-1/2' />
      </div>
      <div className='flex h-[60px] flex-grow flex-row items-center pl-[10px]'>
        <p className='font-bold text-white'>Visual Board</p>
      </div>
    </button>
  );
}
