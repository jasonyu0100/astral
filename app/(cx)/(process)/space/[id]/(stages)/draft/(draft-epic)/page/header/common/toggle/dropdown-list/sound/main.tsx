import { ButtonInputProps } from '@/(types)/main';
import { SoundIcon } from '../../../icons/sound/main';

export function DraftHeaderSoundBoardButton({ ...props }: ButtonInputProps) {
  return (
    <button className='flex h-[60px] w-full flex-row items-center' {...props}>
      <div className='flex h-[60px] w-[60px] flex-shrink-0 flex-col items-center justify-center border-r border-slate-500 border-opacity-30'>
        <SoundIcon className='h-1/2 w-1/2' />
      </div>
      <div className='flex h-[60px] flex-grow items-center flex-row pl-[10px]'>
        <p className='font-bold text-white'>Sound Board</p>
      </div>
    </button>
  );
}
