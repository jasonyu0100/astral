import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralStopIcon } from '@/icons/stop/main';
import { useContext } from 'react';
import { ContextForFlowCurrent } from '../../controller/main';
import { ContextForFlowCurrentModals } from '../../modal/controller/main';
import { ContextForFlowCurrentCreateSpace } from '../../modal/create-space/controller/main';
import { FlowCurrentContainer } from './container/main';
import { FlowCurrentTableGrid } from './grid/main';

export function FlowCurrentTableMain() {
  const flowCurrentController = useContext(ContextForFlowCurrent);
  const spacesListController = useContext(ContextForSpaceList);
  const spacesList = spacesListController.state.objs;
  const starredSpaces = spacesList.filter((space) => !space.starred);
  const availableSpaces = spacesList.filter((space) => space.starred);
  const flowCurrentModalsController = useContext(ContextForFlowCurrentModals);
  const createSpaceController = useContext(ContextForFlowCurrentCreateSpace);

  return (
    <>
      <FlowCurrentContainer>
        <GlassWindowFrame className='h-[4rem] w-full shadow-glow'>
          <GlassWindowContents className='grid grid-cols-3 px-[2rem]'>
            <div className='flex flex-row items-center'>
              {flowCurrentController.state.inFlow ? (
                <p className='text-xl font-bold text-slate-400'>
                  {starredSpaces.length} spaces to go
                </p>
              ) : (
                <p className='text-xl font-bold text-slate-400'>
                  {spacesList.length} available spaces
                </p>
              )}
            </div>
            <div></div>
            <div className='flex flex-row items-center justify-end'>
              {flowCurrentController.state.inFlow ? (
                <button
                  className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
                  onClick={() => {
                    flowCurrentController.actions.updateInFlow(false);
                  }}
                >
                  <p className='font-bold text-slate-300'>Stop Flow</p>
                  <AstralStopIcon />
                </button>
              ) : (
                <button
                  className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
                  onClick={() => {
                    flowCurrentModalsController.createFlowController.open();
                  }}
                >
                  <p className='font-bold text-slate-300'>Create Flow</p>
                  <AstralAddIcon />
                </button>
              )}
            </div>
          </GlassWindowContents>
        </GlassWindowFrame>
        <div className='flex flex-col space-y-[1rem] p-[1rem]'>
          {flowCurrentController.state.inFlow ? (
            <>
              <FlowCurrentTableGrid spaces={starredSpaces} />
            </>
          ) : (
            <FlowCurrentTableGrid spaces={spacesList} />
          )}
        </div>
      </FlowCurrentContainer>
    </>
  );
}
