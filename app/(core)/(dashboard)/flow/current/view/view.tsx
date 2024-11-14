'use client';
import { ContextForFlowList } from '@/architecture/controller/flow/list';
import { useContext } from 'react';
import { FlowCurrentTableMain } from './flow/main';

export function FlowCurrentView() {
  const flowListController = useContext(ContextForFlowList);
  const isFlowCompleted = flowListController.state.currentObj.completed;

  return (
    <div className='flex flex-col space-y-[2rem]'>
      {isFlowCompleted ? (
        <>
          <p className='text-5xl font-bold text-slate-300'>No active flow</p>
        </>
      ) : (
        <>
          <p className='text-5xl font-bold text-slate-300'>
            {flowListController.state.currentObj?.title || 'Untitled Flow'}
          </p>
          <p className='text-xl font-light text-slate-300'>
            {flowListController.state.currentObj?.description || ''}
          </p>
        </>
      )}
      <FlowCurrentTableMain />
    </div>
  );
}
