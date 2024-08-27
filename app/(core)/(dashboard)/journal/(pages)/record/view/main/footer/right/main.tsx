import { TimerComponent } from '@/ui/timer/main';

export function JournalRecorderFooterRight() {
  return (
    <div className='flex w-1/3 flex-row justify-end  space-x-[1rem]'>
      <TimerComponent />
    </div>
  );
}
