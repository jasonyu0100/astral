import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { VerticalDivider } from '@/(components)/(indicator)/divider/vertical/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/(controller)/space/chapter/scene/list';
import { useContext, useEffect } from 'react';
import Sortable from 'sortablejs';
import { ContextForSpaceProgressController } from '../../(controller)/space-session/main';
import { SpaceProgressContainer } from './core/container/main';
import { SpaceProgressHeader } from './header/main';
import { SpaceProgressListItem } from './lists/item/main';
import { SpaceProgressList } from './lists/main';
import { SpaceProgressChapterNavigation } from './navigation/main';

export function SpaceProgressMain() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const spaceSessionController = useContext(ContextForSpaceProgressController);

  useEffect(() => {
    const elTodo = document.getElementById('todo');
    const elInProgress = document.getElementById('in-progress');
    const elInVerses = document.getElementById('in-verses');
    const elDone = document.getElementById('done');
    const sortableTodo = Sortable.create(elTodo, {
      group: 'shared', // set both lists to same group
      animation: 500,
    });
    const sortableInProgress = Sortable.create(elInProgress, {
      group: 'shared', // set both lists to same group
      animation: 500,
    });
    const sortableInVerses = Sortable.create(elInVerses, {
      group: 'shared', // set both lists to same group
      animation: 500,
    });
    const sortableDone = Sortable.create(elDone, {
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
        <div className='flex h-full flex-row space-x-[2rem] overflow-auto p-[2rem]'>
          <div className='flex flex-col space-y-[1rem]'>
            <p className='font-bold text-slate-300'>Ideas</p>
            <SpaceProgressList>
              <ul id='todo' className='h-full w-full space-y-[1rem]'>
                {ideaListController.state.objs.map((idea, index) => (
                  <li>
                    <SpaceProgressListItem>
                      <p className='font-bold text-slate-300'>
                        {sceneListController.state.currentObj?.title} -{' '}
                        {idea.title}
                      </p>
                      <img src={idea.fileElem?.src} />
                    </SpaceProgressListItem>
                  </li>
                ))}
              </ul>
            </SpaceProgressList>
          </div>
          <VerticalDivider />
          <div className='flex flex-col space-y-[1rem]'>
            <p className='font-bold text-slate-300'>In Progress</p>
            <SpaceProgressList>
              <ul id='in-progress' className='h-full w-full space-y-[1rem]'>
                <li>
                  <SpaceProgressListItem>QWER</SpaceProgressListItem>
                </li>
                <li>
                  <SpaceProgressListItem>sdaf</SpaceProgressListItem>
                </li>
              </ul>
            </SpaceProgressList>
          </div>
          <div className='flex flex-col space-y-[1rem]'>
            <p className='font-bold text-slate-300'>Review</p>
            <SpaceProgressList>
              <ul id='in-verses' className='h-full w-full space-y-[1rem]'>
                <li>
                  <SpaceProgressListItem>adsdas</SpaceProgressListItem>
                </li>
                <li>
                  <SpaceProgressListItem>dasasd</SpaceProgressListItem>
                </li>
              </ul>
            </SpaceProgressList>
          </div>
          <div className='flex flex-col space-y-[1rem]'>
            <p className='font-bold text-slate-300'>Done</p>
            <SpaceProgressList>
              <ul id='done' className='h-full w-full space-y-[1rem]'>
                <li>
                  <SpaceProgressListItem>adsdas</SpaceProgressListItem>
                </li>
                <li>
                  <SpaceProgressListItem>dasasd</SpaceProgressListItem>
                </li>
              </ul>
            </SpaceProgressList>
          </div>
        </div>
        {/* {spaceSessionController.page === SpaceProgressPage.VIEW_SESSION && (
          <SpaceProgressViewSession />
        )}
        {spaceSessionController.page ===
          SpaceProgressPage.VIEW_SESSION_UPDATE && <SpaceProgressViewUpdate />}

        {spaceSessionController.page === SpaceProgressPage.COMPLETE_SESSION && (
          <SpaceProgressCompleteSession />
        )}
        {spaceSessionController.page ===
          SpaceProgressPage.COMPLETE_SESSION_UPDATE && (
          <SpaceProgressCompleteUpdate />
        )} */}
      </SpaceProgressContainer>
      <SpaceProgressChapterNavigation />
    </GlassWindowFrame>
  );
}
