import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ElementVariant } from '@/(server)/model/elements/main';
import { AstralAddIcon } from '@/icons/add/main';
import { useContext, useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import { ContextForSpaceJourneyModals } from '../../../modal/controller/main';
import { SpaceProgressAddItem } from './lists/add/main';
import { SpaceProgressListItem } from './lists/item/main';
import { SpaceProgressList } from './lists/main';

export function SpaceJourneyKanban() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const modalController = useContext(ContextForSpaceJourneyModals);

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
    <>
      <div style={{ height: 'calc(100% - 8rem)' }}>
        <div className='grid h-full w-full grid-cols-4 gap-[1rem] p-[2rem]'>
          <div className='flex h-full flex-col space-y-[1rem] overflow-auto'>
            <SpaceProgressList>
              <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
                <p className='font-bold text-slate-300'>Ideas</p>
                <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-green-500'>
                  <p className='font-bold text-slate-300'>{todo.length}</p>
                </div>
              </div>
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
                      {idea.variant === ElementVariant.URL && (
                        <iframe
                          onDrag={(e) => e.stopPropagation()}
                          src={idea.urlElem?.url}
                          title='YouTube video player'
                        />
                      )}
                    </SpaceProgressListItem>
                  </li>
                ))}
              </ul>
              <SpaceProgressAddItem
                onClick={() => {
                  setPopulated(false);
                  modalController.addTextIdeaController.open();
                }}
              >
                <p className='font-bold text-slate-300'>Add Idea</p>
                <AstralAddIcon />
              </SpaceProgressAddItem>
            </SpaceProgressList>
          </div>
          <div className='flex h-full flex-col space-y-[1rem] overflow-auto'>
            <SpaceProgressList>
              <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
                <p className='font-bold text-slate-300'>In Progress</p>
                <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-orange-500'>
                  <p className='font-bold text-slate-300'>
                    {inProgress.length}
                  </p>
                </div>
              </div>
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
            <SpaceProgressList>
              <div className='flex flex-row items-center justify-between space-x-[1rem]'>
                <p className='font-bold text-slate-300'>In Review</p>
                <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-red-500'>
                  <p className='font-bold text-slate-300'>{review.length}</p>
                </div>
              </div>
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
            <SpaceProgressList>
              <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
                <p className='font-bold text-slate-300'>Done</p>
                <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-blue-500'>
                  <p className='font-bold text-slate-300'>{review.length}</p>
                </div>
              </div>
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
    </>
  );
}
