import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { useControllerForTimer } from './controller/main';

export function JournalRecordFooterLeft() {
  const timerController = useControllerForTimer();

  return (
    <div className='flex w-1/3 flex-row items-center justify-start space-x-[1rem]'>
      <GlassWindowFrame roundedFx={roundedFx['rounded-full']}>
        <GlassWindowContents
          className='flex items-center justify-center p-[1rem]'
          onClick={() => timerController.actions.updateTimeDilation(1)}
        >
          <p className='flex w-full animate-pulse-slow justify-center text-xl font-bold text-slate-300 transition-opacity'>
            {String(timerController.state.hours).padStart(2, '0')} :{' '}
            <span className='flex w-[2rem] justify-center px-[4px]'>
              {String(timerController.state.minutes).padStart(2, '0')}
            </span>
            m :{' '}
            <span className='flex w-[2rem] justify-center px-[4px]'>
              {String(timerController.state.seconds).padStart(2, '0')}
            </span>
            s
          </p>
        </GlassWindowContents>
      </GlassWindowFrame>
      <GlassWindowFrame
        className='aspect-square h-[2rem] w-[2rem]'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className='flex items-center justify-center'
          onClick={() => timerController.actions.updateTimeDilation(1)}
        >
          <p className='text-3xl font-bold text-slate-300'>-</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <GlassWindowFrame
        className='aspect-square h-[2rem] w-[2rem]'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className='flex items-center justify-center'
          onClick={() => timerController.actions.updateTimeDilation(100)}
        >
          <p className='text-3xl font-bold text-slate-300'>+</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
