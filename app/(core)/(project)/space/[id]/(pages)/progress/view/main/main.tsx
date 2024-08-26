import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useControllerForOpenable } from '@/(logic)/contexts/openable/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { ElementVariant } from '@/(server)/(model)/elements/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext, useEffect } from 'react';
import Sortable from 'sortablejs';
import { SpaceProgressContainer } from './core/container/main';
import { SpaceProgressHeader } from './header/main';
import { SpaceProgressListItem } from './lists/item/main';
import { SpaceProgressList } from './lists/main';
import { SpaceProgressChapterNavigation } from './navigation/main';

export function SpaceProgressMain() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const openableController = useControllerForOpenable();

  useEffect(() => {
    const elTodo = document.getElementById('todo');
    const elInProgress = document.getElementById('in-progress');
    const elReview = document.getElementById('review');
    const elDone = document.getElementById('done');
    Sortable.create(elTodo, {
      group: 'shared', // set both lists to same group
      animation: 500,
    });
    Sortable.create(elInProgress, {
      group: 'shared', // set both lists to same group
      animation: 500,
    });
    Sortable.create(elReview, {
      group: 'shared', // set both lists to same group
      animation: 500,
    });
    Sortable.create(elDone, {
      group: 'shared', // set both lists to same group
      animation: 500,
    });
  }, []);

  return (
    <GlassWindowFrame
      name={SpaceProgressMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceProgressHeader />
      <SpaceProgressContainer>
        <div style={{ height: 'calc(100% - 10rem)' }}>
          <div className='grid h-full w-full grid-cols-4 gap-[1rem] px-[2rem] pt-[1rem]'>
            <div className='flex h-full flex-col space-y-[1rem] overflow-auto'>
              <p className='font-bold text-slate-300'>Ideas</p>
              <SpaceProgressList>
                <ul id='todo' className='h-full w-full space-y-[1rem]'>
                  {ideaListController.state.objs.map((idea) => (
                    <li>
                      <SpaceProgressListItem>
                        <p className='font-bold text-slate-300'>
                          {sceneListController.state.currentObj?.title} -{' '}
                          {idea.title}
                        </p>
                        {idea.variant === ElementVariant.FILE && (
                          <img src={idea.fileElem?.src} />
                        )}
                        {idea.variant === ElementVariant.TEXT && (
                          <div className='aspect-square w-full bg-yellow-500 p-[1rem] text-black'>
                            {idea.textElem?.text}
                          </div>
                        )}
                      </SpaceProgressListItem>
                    </li>
                  ))}
                </ul>
              </SpaceProgressList>
            </div>
            <div className='flex h-full flex-col space-y-[1rem] overflow-auto'>
              <p className='font-bold text-slate-300'>In Progress</p>
              <SpaceProgressList>
                <ul
                  id='in-progress'
                  className='h-full w-full space-y-[1rem]'
                ></ul>
              </SpaceProgressList>
            </div>
            <div className='flex h-full flex-col space-y-[1rem] overflow-auto'>
              <p className='font-bold text-slate-300'>Review</p>
              <SpaceProgressList>
                <ul id='review' className='h-full w-full space-y-[1rem]'></ul>
              </SpaceProgressList>
            </div>
            <div className='flex h-full flex-col space-y-[1rem] overflow-auto'>
              <p className='font-bold text-slate-300'>Done</p>
              <SpaceProgressList>
                <ul id='done' className='h-full w-full space-y-[1rem]'></ul>
              </SpaceProgressList>
            </div>
          </div>
        </div>
        <div className='h-[10rem] w-full p-[2rem]'>
          <GlassWindowFrame
            className='h-full w-full items-center justify-center p-[2rem]'
            roundedFx={roundedFx.rounded}
            borderFx={borderFx['border-around']}
          >
            <GlassWindowContents className='flex flex-row items-center'>
              <div className='flex w-full flex-row items-center space-x-[2rem]'>
                <div className='flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full bg-purple-500'>
                  <p className='text-2xl font-bold text-slate-300'>
                    {sceneListController.state.index + 1}
                  </p>
                </div>
                <div className='flex w-full flex-col'>
                  <p className='text-lg font-bold text-slate-300'>
                    {sceneListController.state.currentObj?.title}
                  </p>
                  <p className='text-md font-light text-slate-300'>
                    {sceneListController.state.currentObj?.description}
                  </p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='h-[2rem] w-[2rem] cursor-pointer'
                    fill='none'
                    onClick={() => {
                      if (
                        sceneListController.state.index ===
                        sceneListController.state.objs.length - 1
                      ) {
                        openableController.open();
                      } else {
                        sceneListController.actions.stateActions.goNext();
                      }
                    }}
                  >
                    <mask
                      id='mask0_3266_7'
                      maskUnits='userSpaceOnUse'
                      x='0'
                      y='0'
                      width='25'
                      height='25'
                    >
                      <rect
                        x='0.0400391'
                        y='0.563477'
                        width='24'
                        height='24'
                        fill='#D9D9D9'
                      />
                    </mask>
                    <g mask='url(#mask0_3266_7)'>
                      <path
                        d='M12.04 11.3635L7.44004 15.9635L6.04004 14.5635L12.04 8.56348L18.04 14.5635L16.64 15.9635L12.04 11.3635Z'
                        fill='#CBD5E1'
                      />
                    </g>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='h-[2rem] w-[2rem] cursor-pointer'
                    fill='none'
                    onClick={() => {
                      sceneListController.actions.stateActions.goPrev();
                    }}
                  >
                    <mask
                      id='mask0_3266_13'
                      maskUnits='userSpaceOnUse'
                      x='0'
                      y='0'
                      width='24'
                      height='24'
                    >
                      <rect width='24' height='24' fill='#D9D9D9' />
                    </mask>
                    <g mask='url(#mask0_3266_13)'>
                      <path
                        d='M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z'
                        fill='#CBD5E1'
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>
      </SpaceProgressContainer>
      <SpaceProgressChapterNavigation />
    </GlassWindowFrame>
  );
}
