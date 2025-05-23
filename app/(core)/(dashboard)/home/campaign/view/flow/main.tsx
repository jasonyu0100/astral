import { ContextForFlowList } from '@/architecture/controller/flow/list';
import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralGestureIcon } from '@/icons/gesture/main';
import { AstralStopIcon } from '@/icons/stop/main';
import { useContext } from 'react';
import { ContextForHomeCampaign } from '../../controller/main';
import { ContextForHomeCampaignModals } from '../../modal/controller/main';
import { HomeCampaignContainer } from './container/main';
import { HomeCampaignTableGridFlow } from './grid/flow-grid/main';
import { HomeCampaignTableSelectGrid } from './grid/select-grid/main';

export function HomeCampaignTableMain() {
  const flowCurrentController = useContext(ContextForHomeCampaign);
  const flowListController = useContext(ContextForFlowList);
  const spacesListController = useContext(ContextForSpaceList);
  const flowCurrentModalsController = useContext(ContextForHomeCampaignModals);

  const spacesList = spacesListController.state.objs;
  const flowSpaces = spacesList.filter(
    (space) => space.flowId === flowListController.state.objId,
  );

  const isFlowActive = flowListController.state.index === 0;
  const isFlowCompleted = flowListController.state.currentObj.completed;

  // Helper functions to reduce code duplication
  const renderSpaceStatusText = () => {
    if (isFlowActive) {
      return isFlowCompleted ? (
        <p className='text-md font-bold text-slate-400'>
          {spacesList.length} available spaces{' '}
        </p>
      ) : (
        <p className='text-md font-bold text-slate-400'>
          {flowSpaces.length} spaces to go
        </p>
      );
    } else {
      return (
        <p className='text-md font-bold text-slate-400'>
          {spacesList.length} available spaces,{' '}
        </p>
      );
    }
  };

  const renderActionButton = () => {
    if (isFlowActive) {
      return isFlowCompleted ? (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() =>
            flowCurrentModalsController.HomeCampaignController.open()
          }
        >
          <p className='font-bold text-slate-300'>
            Create Flow ({flowCurrentController.state.selectedSpaces.length})
          </p>
          <AstralGestureIcon />
        </button>
      ) : (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() => {
            flowCurrentController.actions.updateSelectedSpaces(
              flowSpaces.map((space) => space.id),
            );
            console.log(flowSpaces.map((space) => space.id));
            flowListController.actions.editActions.edit(
              flowListController.state.objId,
              { completed: true },
            );
          }}
        >
          <p className='font-bold text-slate-300'>End Flow</p>
          <AstralStopIcon />
        </button>
      );
    } else {
      return (
        <button
          className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
          onClick={() =>
            flowCurrentModalsController.HomeCampaignController.open()
          }
        >
          <p className='font-bold text-slate-300'>Create Flow</p>
          <AstralAddIcon />
        </button>
      );
    }
  };

  return (
    <HomeCampaignContainer>
      <GlassWindowFrame className='h-[4rem] w-full shadow-glow'>
        <GlassWindowContents className='grid grid-cols-3 px-[1rem]'>
          <div className='flex flex-row items-center'>
            {renderSpaceStatusText()}
          </div>
          <div></div>
          <div className='flex flex-row items-center justify-end'>
            {renderActionButton()}
          </div>
        </GlassWindowContents>
      </GlassWindowFrame>
      <div className='flex flex-col space-y-[1rem] p-[1rem]'>
        {isFlowActive && !isFlowCompleted ? (
          <HomeCampaignTableGridFlow spaces={flowSpaces} />
        ) : (
          <HomeCampaignTableSelectGrid spaces={spacesList} />
        )}
      </div>
    </HomeCampaignContainer>
  );
}
