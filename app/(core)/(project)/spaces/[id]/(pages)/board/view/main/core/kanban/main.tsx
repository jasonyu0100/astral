import { ContextForTaskList } from '@/(server)/controller/way/list';
import {
  ContextForTaskObj,
  TaskObj,
  TaskStatus,
} from '@/(server)/model/task/main';
import { useContext, useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import { SpaceJourneyListItem } from './row/item/main';
import { SpaceJourneyRow } from './row/main';
import { SpacesBoardKanbanListTitle } from './row/title/main';

export function SpacesBoardKanban() {
  const wayListController = useContext(ContextForTaskList);

  const [todo, setTodo] = useState<TaskObj[]>([]);
  const [inProgress, setInProgress] = useState<TaskObj[]>([]);
  const [review, setInReview] = useState<TaskObj[]>([]);
  const [done, setDone] = useState<TaskObj[]>([]);
  const [populated, setPopulated] = useState(false);

  useEffect(() => {
    if (populated) return;
    setTodo(
      wayListController.state.objs.filter((idea) => idea.taskStatus === 'todo'),
    );
    setInProgress(
      wayListController.state.objs.filter(
        (idea) => idea.taskStatus === 'in-progress',
      ),
    );
    setInReview(
      wayListController.state.objs.filter(
        (idea) => idea.taskStatus === 'review',
      ),
    );
    setDone(
      wayListController.state.objs.filter((idea) => idea.taskStatus === 'done'),
    );
    setPopulated(true);
  }, [wayListController.state.objs]);

  useEffect(() => {
    const elTodo = document.getElementById('todo');
    const elInProgress = document.getElementById('in-progress');
    const elReview = document.getElementById('review');
    const elDone = document.getElementById('done');

    const handleSortEnd = async (evt: Sortable.SortableEvent) => {
      const fromList = evt.from.id;
      const toList = evt.to.id;
      const itemId = evt.item.dataset.id;

      if (!itemId) {
        console.error('No item id found'); // aura
        return;
      }

      console.log(`Item ${itemId} moved from ${fromList} to ${toList}`);

      await wayListController.actions.editActions.edit(itemId, {
        taskStatus: toList,
      });
    };

    const sortableOptions = {
      group: 'shared', // Set both lists to the same group
      animation: 500,
      onEnd: (evt: Sortable.SortableEvent) => {
        handleSortEnd(evt); // Handle sort end
      },
    };

    if (elTodo) Sortable.create(elTodo, sortableOptions);
    if (elInProgress) Sortable.create(elInProgress, sortableOptions);
    if (elReview) Sortable.create(elReview, sortableOptions);
    if (elDone) Sortable.create(elDone, sortableOptions);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }} className='overflow-auto'>
      <div className='grid h-full w-full grid-rows-4'>
        <div className='flex h-full flex-col'>
          <SpaceJourneyRow>
            <SpacesBoardKanbanListTitle>Todo</SpacesBoardKanbanListTitle>
            <ul
              id={TaskStatus.TODO}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              {todo.map((log) => (
                <li data-id={log.id} className='drag-item'>
                  <ContextForTaskObj.Provider value={log}>
                    <SpaceJourneyListItem />
                  </ContextForTaskObj.Provider>
                </li>
              ))}
            </ul>
          </SpaceJourneyRow>
        </div>
        <div className='flex h-full flex-col'>
          <SpaceJourneyRow>
            <SpacesBoardKanbanListTitle>In-progress</SpacesBoardKanbanListTitle>
            <ul
              id={TaskStatus.IN_PROGRESS}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              {inProgress.map((log) => (
                <ContextForTaskObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceJourneyListItem />
                  </li>
                </ContextForTaskObj.Provider>
              ))}
            </ul>
          </SpaceJourneyRow>
        </div>
        <div className='flex h-full flex-col'>
          <SpaceJourneyRow>
            <SpacesBoardKanbanListTitle>Review</SpacesBoardKanbanListTitle>
            <ul
              id={TaskStatus.REVIEW}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              {review.map((log) => (
                <ContextForTaskObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceJourneyListItem />
                  </li>
                </ContextForTaskObj.Provider>
              ))}
            </ul>
          </SpaceJourneyRow>
        </div>
        <div className='flex h-full flex-col'>
          <SpaceJourneyRow>
            <SpacesBoardKanbanListTitle>Done</SpacesBoardKanbanListTitle>
            <ul
              id={TaskStatus.DONE}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              {done.map((log) => (
                <ContextForTaskObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceJourneyListItem />
                  </li>
                </ContextForTaskObj.Provider>
              ))}
            </ul>
          </SpaceJourneyRow>
        </div>
      </div>
    </div>
  );
}
