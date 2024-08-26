import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForSessionForm } from '@/(core)/(project)/space/[id]/(pages)/progress/(controller)/complete-session-form/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function SpaceSessionCompleteSessionFormContribution() {
  const sessionFormController = useContext(ContextForSessionForm);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='text-xs font-bold text-slate-300'>Contribution</p>
      <GlassWindowFrame
        className='w-full py-[0.5rem]'
        roundedFx={roundedFx.rounded}
      >
        <GlassWindowContents className='grid grid-cols-6 divide-x-[1px] divide-slate-300 divide-opacity-30 text-sm font-bold text-slate-300'>
          <div
            className={`flex w-full cursor-pointer items-center justify-center ${sessionFormController.percent === 0 && 'text-blue-500'}`}
            onClick={() => sessionFormController.setPercent(0)}
          >
            <p>None</p>
          </div>
          <div
            className={`flex w-full cursor-pointer items-center justify-center ${sessionFormController.percent === 5 && 'text-blue-500'}`}
            onClick={() => sessionFormController.setPercent(5)}
          >
            <p>5m</p>
          </div>
          <div
            className={`flex w-full cursor-pointer items-center justify-center ${sessionFormController.percent === 15 && 'text-blue-500'}`}
            onClick={() => sessionFormController.setPercent(15)}
          >
            <p>15m</p>
          </div>
          <div
            className={`flex w-full cursor-pointer items-center justify-center ${sessionFormController.percent === 30 && 'text-blue-500'}`}
            onClick={() => sessionFormController.setPercent(30)}
          >
            <p>30m</p>
          </div>
          <div
            className={`flex w-full cursor-pointer items-center justify-center ${sessionFormController.percent === 60 && 'text-blue-500'}`}
            onClick={() => sessionFormController.setPercent(60)}
          >
            <p>1h</p>
          </div>
          <div
            className={`flex w-full cursor-pointer items-center justify-center ${sessionFormController.percent === 120 && 'text-blue-500'}`}
            onClick={() => sessionFormController.setPercent(120)}
          >
            <p>2h</p>
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}
