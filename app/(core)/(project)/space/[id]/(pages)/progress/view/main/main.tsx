import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ElementVariant } from '@/(server)/model/elements/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext, useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import { ContextForSpaceProgressModals } from '../../modal/controller/main';
import { SpaceProgressContainer } from './core/container/main';
import { SpaceProgressHeader } from './header/main';
import { SpaceProgressAddItem } from './lists/add/main';
import { SpaceProgressListItem } from './lists/item/main';
import { SpaceProgressList } from './lists/main';
import { SpaceProgressChapterNavigation } from './navigation/main';

export function SpaceProgressMain() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const modalController = useContext(ContextForSpaceProgressModals);

  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [review, setInReview] = useState([]);
  const [done, setDone] = useState([]);

  const [populated, setPopulated] = useState(false);

  useEffect(() => {
    if (!populated && ideaListController.state.objs.length > 0) {
      setTodo(
        ideaListController.state.objs.filter((idea) => idea.column === 'todo'),
      );
      setInProgress(
        ideaListController.state.objs.filter(
          (idea) => idea.column === 'in-progress',
        ),
      );
      setInReview(
        ideaListController.state.objs.filter(
          (idea) => idea.column === 'review',
        ),
      );
      setDone(
        ideaListController.state.objs.filter((idea) => idea.column === 'done'),
      );
      setPopulated(true);
    } else if (ideaListController.state.objs.length === 0) {
      setTodo([]);
      setInProgress([]);
      setInReview([]);
      setDone([]);
    }
  }, [ideaListController.state.objs]);

  useEffect(() => {
    setPopulated(false);

    const elTodo = document.getElementById('todo');
    const elInProgress = document.getElementById('in-progress');
    const elReview = document.getElementById('review');
    const elDone = document.getElementById('done');

    const handleSortEnd = async (evt) => {
      const fromList = evt.from.id;
      const toList = evt.to.id;
      const itemId = evt.item.dataset.id;

      console.log(`Item ${itemId} moved from ${fromList} to ${toList}`);

      setTimeout(async () => {
        await ideaListController.actions.editActions.edit(itemId, {
          column: toList,
        });
      }, 0);
    };

    const sortableOptions = {
      group: 'shared', // Set both lists to the same group
      animation: 500,
      onStart: (evt) => {
        evt.item.classList.add('dragging'); // Add dragging class on start
      },
      onEnd: (evt) => {
        evt.item.classList.remove('dragging'); // Remove dragging class on end
        handleSortEnd(evt); // Handle sort end
      },
    };

    Sortable.create(elTodo, sortableOptions);
    Sortable.create(elInProgress, sortableOptions);
    Sortable.create(elReview, sortableOptions);
    Sortable.create(elDone, sortableOptions);

    () => {
      Sortable.destroy(elTodo);
      Sortable.destroy(elInProgress);
      Sortable.destroy(elReview);
      Sortable.destroy(elDone);
    };
  }, [sceneListController.state.currentObj]);

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
                <ul id='todo' className='w-full space-y-[1rem]'>
                  {todo.map((idea) => (
                    <li data-id={idea.id} className='drag-item'>
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
                <SpaceProgressAddItem
                  onClick={() => modalController.addTextIdeaController.open()}
                >
                  <p className='font-bold text-slate-300'>Add Idea</p>
                  <AstralAddIcon />
                </SpaceProgressAddItem>
              </SpaceProgressList>
            </div>
            <div className='flex h-full flex-col space-y-[1rem] overflow-auto'>
              <p className='font-bold text-slate-300'>In Progress</p>
              <SpaceProgressList>
                <ul id='in-progress' className='h-full w-full space-y-[1rem]'>
                  {inProgress.map((idea) => (
                    <li data-id={idea.id} className='drag-item'>
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
              <p className='font-bold text-slate-300'>Review</p>
              <SpaceProgressList>
                <ul id='review' className='h-full w-full space-y-[1rem]'>
                  {review
                    .filter((idea) => idea.column === 'review')
                    .map((idea) => (
                      <li data-id={idea.id} className='drag-item'>
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
              <p className='font-bold text-slate-300'>Done</p>
              <SpaceProgressList>
                <ul id='done' className='h-full w-full space-y-[1rem]'>
                  {done.map((idea) => (
                    <li data-id={idea.id} className='drag-item'>
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
                  <AstralChevronUpIcon
                    className='h-[2rem] w-[2rem]'
                    onClick={() => {
                      if (
                        sceneListController.state.index ===
                        sceneListController.state.objs.length - 1
                      ) {
                        modalController.addSceneController.open();
                      } else {
                        sceneListController.actions.stateActions.goNext();
                      }
                    }}
                  />
                  <AstralChevronDownIcon
                    className='h-[2rem] w-[2rem]'
                    onClick={() => {
                      sceneListController.actions.stateActions.goPrev();
                    }}
                  />
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
