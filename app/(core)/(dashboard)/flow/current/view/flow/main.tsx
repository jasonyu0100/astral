import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralStopIcon } from '@/icons/stop/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { SpaceTemplate, SpaceTemplateMap } from '@/templates/space/main';
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
                  {spacesList.length} total spaces
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
                    flowCurrentController.actions.updateInFlow(true);
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
            <FlowCurrentTableGrid spaces={starredSpaces} />
          ) : (
            <FlowCurrentTableGrid spaces={spacesList} />
          )}
          <HorizontalDivider />
          <GlassWindowFrame>
            <GlassWindowContents className='flex flex-col space-y-[2rem]'>
              <div className='flex w-full flex-row space-x-[2rem] overflow-auto pb-[2rem]'>
                {Object.entries(SpaceTemplateMap).map(([template, obj]) => (
                  <GlassWindowFrame
                    className='aspect-[3/2] h-[200px] flex-shrink-0 p-[1rem]'
                    roundedFx={roundedFx.rounded}
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents className='flex flex-col space-y-[1rem]'>
                      <div className='flex flex-row items-center space-x-[1rem]'>
                        <div
                          className='flex h-[2.5rem] w-[2.5rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
                          onClick={() => {
                            createSpaceController.actions.updateCategory(
                              template as SpaceTemplate,
                            );
                            flowCurrentModalsController.createSpaceController.open();
                          }}
                        >
                          <AstralAddIcon />
                        </div>
                        <p className='text-xl font-bold text-slate-300'>
                          {obj?.title}
                        </p>
                      </div>
                      <p className='text-sm font-light text-slate-300'>
                        {obj?.description}
                      </p>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                ))}
              </div>
            </GlassWindowContents>
          </GlassWindowFrame>
        </div>
      </FlowCurrentContainer>
    </>
  );
}
