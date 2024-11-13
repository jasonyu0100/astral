'use client';
import { useContext } from 'react';
import { ContextForFlowCurrent } from '../controller/main';
import { ContextForFlowCurrentModals } from '../modal/controller/main';
import { ContextForFlowCurrentCreateSpace } from '../modal/create-space/controller/main';
import { FlowCurrentTableMain } from './flow/main';

export function FlowCurrentView() {
  const flowCurrentModalsController = useContext(ContextForFlowCurrentModals);
  const createSpaceController = useContext(ContextForFlowCurrentCreateSpace);
  const flowCurrentController = useContext(ContextForFlowCurrent);

  return (
    <div className='flex flex-col space-y-[2rem]'>
      <div className='flex flex-col space-y-[2rem] py-[1rem]'>
        {flowCurrentController.state.inFlow ? (
          <>
            <p className='text-5xl font-bold text-slate-300'>
              Making a difference - 7d
            </p>
            <p className='text-xl font-light text-slate-300'>
              Find your rhythm and let your ideas flow effortlessly. Embrace the
              journey of creativity and see where it takes you.
            </p>
          </>
        ) : (
          <>
            <p className='text-5xl font-bold text-slate-300'>
              Your creative flow
            </p>
          </>
        )}
      </div>
      <FlowCurrentTableMain />
    </div>
  );
}
