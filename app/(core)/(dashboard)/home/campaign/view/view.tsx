'use client';
import { ContextForFlowList } from '@/architecture/controller/flow/list';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { HomeCampaignTableMain } from './flow/main';

export function HomeCampaignView() {
  const flowListController = useContext(ContextForFlowList);
  const isFlowCompleted = flowListController.state.currentObj.completed;

  return (
    <div className='flex flex-col space-y-[2rem]'>
      <div className='space-y-[1rem] py-[1rem]'>
        {isFlowCompleted ? (
          <>
            <p className='text-5xl font-bold text-slate-300'>
              No active campaign
            </p>
          </>
        ) : (
          <>
            <p className='text-5xl font-bold text-slate-300'>
              {flowListController.state.currentObj?.title || 'Untitled Flow'}
            </p>
            <p className='text-sm font-light text-slate-300'>
              Created{' '}
              {getFormattedDate(
                new Date(flowListController.state.currentObj?.created ?? ''),
              )}
            </p>
            <p className='text-xl font-light text-slate-300'>
              {flowListController.state.currentObj?.description ||
                'No description available'}
            </p>
          </>
        )}
      </div>
      <HomeCampaignTableMain />
    </div>
  );
}
