import { ButtonInputProps } from '@/(logic)/types/element/main';
import { SoundIcon } from '../../../icons/sound/main';
import { DraftModalType } from '@/(cx)/(process)/space/[id]/(process-stages)/draft/page';

export function DraftHeaderAudioBoardButton({ ...props }: ButtonInputProps) {
  return (
    <button className='flex h-[4rem] w-full flex-row items-center hover:bg-slate-900' {...props}>
      <div className='flex h-[4rem] w-[4rem] flex-shrink-0 flex-col items-center justify-center border-r border-slate-500 border-opacity-30'>
        <SoundIcon className='h-1/2 w-1/2' />
      </div>
      <div className='flex h-[4rem] flex-grow items-center flex-row pl-[10px]'>
        <p className='font-bold text-slate-300'>{DraftModalType.AUDIO}</p>
      </div>
    </button>
  );
}
