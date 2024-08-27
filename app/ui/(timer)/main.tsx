import { useControllerForTimer } from '@/logic/timer/main';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '../(glass)/window/contents/main';
import { GlassWindowFrame } from '../(glass)/window/main';
import { GlassWindowPane } from '../(glass)/window/pane/main';

export function TimerComponent({ hours }: { hours?: number }) {
  const timerController = useControllerForTimer(hours);
  return (
    <>
      <div className='flex flex-row items-center justify-start'>
        <GlassWindowFrame roundedFx={roundedFx['rounded-full']}>
          <GlassWindowContents
            className='flex items-center justify-center p-[1rem]'
            onClick={() => timerController.actions.updateTimeDilation(1)}
          >
            <p className='flex w-full justify-center text-lg font-light text-slate-300 transition-opacity'>
              {String(timerController.state.hours).padStart(2, '0')}h :{' '}
              <span className='flex w-[1.5rem] justify-center px-[2px]'>
                {String(timerController.state.minutes).padStart(2, '0')}
              </span>
              m :{' '}
              <span className='flex w-[1.5rem] justify-center px-[2px]'>
                {String(timerController.state.seconds).padStart(2, '0')}
              </span>
              s
            </p>
          </GlassWindowContents>
        </GlassWindowFrame>
        <GlassWindowFrame
          className='aspect-square h-[1.5rem] w-[1.5rem]'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() => timerController.actions.updateTimeDilation(1)}
          >
            <p className='text-xl font-bold text-slate-500'>-</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        <GlassWindowFrame
          className='aspect-square h-[1.5rem] w-[1.5rem]'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() => timerController.actions.updateTimeDilation(100)}
          >
            <p className='text-xl font-bold text-slate-500'>+</p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </>
  );
}
