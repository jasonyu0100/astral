import { ContextForTaskList } from '@/architecture/controller/task/list';
import {
  ContextForTaskObj,
  TaskObj,
  TaskStatus,
} from '@/architecture/model/task/main';
import { useContext, useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import { HorizonsFieldListItem } from './row/item/main';
import { HorizonsFieldRow } from './row/main';
import { SpacesJourneyKanbanListTitle } from './row/title/main';

export function HorizonsFieldKanban() {
  const wayListController = useContext(ContextForTaskList);

  const [todo, setTodo] = useState<TaskObj[]>([]);
  const [inProgress, setInProgress] = useState<TaskObj[]>([]);
  const [review, setInReview] = useState<TaskObj[]>([]);
  const [done, setDone] = useState<TaskObj[]>([]);
  const [populated, setPopulated] = useState(false);

  useEffect(() => {
    const elTodo = document.getElementById('todo');
    const elInProgress = document.getElementById('in-progress');
    const elReview = document.getElementById('review');
    const elDone = document.getElementById('done');

    const handleSortEnd = async (evt: Sortable.SortableEvent) => {
      const fromList = evt.from.id;
      const toList = evt.to.id;
      const itemId = evt.item.dataset.id;
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
        <div className='flex w-full flex-col space-y-[1rem]'>
          <HorizonsFieldRow>
            <SpacesJourneyKanbanListTitle>
              {TaskStatus.PENDING}
            </SpacesJourneyKanbanListTitle>
            <ul
              id={TaskStatus.PENDING}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              <li className='drag-item'>
                <div className='aspect-square h-full bg-yellow-500 p-[1rem]'>
                  Test
                </div>
              </li>
              <li className='drag-item'>
                <div className='aspect-square h-full bg-yellow-500 p-[1rem]'>
                  Test
                </div>
              </li>
              <li className='drag-item'>
                <div className='aspect-square h-full bg-yellow-500 p-[1rem]'>
                  Test
                </div>
              </li>
              <li className='drag-item'>
                <div className='aspect-square h-full bg-yellow-500 p-[1rem]'>
                  Test
                </div>
              </li>
              <li className='drag-item'>
                <div className='aspect-square h-full bg-yellow-500 p-[1rem]'>
                  Test
                </div>
              </li>
              <li className='drag-item'>
                <div className='aspect-square h-full bg-yellow-500 p-[1rem]'>
                  Test
                </div>
              </li>
              <li className='drag-item'>
                <div className='aspect-square h-full bg-yellow-500 p-[1rem]'>
                  Test
                </div>
              </li>
              <li className='drag-item'>
                <div className='aspect-square h-full bg-yellow-500 p-[1rem]'>
                  Test
                </div>
              </li>
              {todo.map((log) => (
                <li data-id={log.id} className='drag-item'>
                  <ContextForTaskObj.Provider value={log}>
                    <HorizonsFieldListItem />
                  </ContextForTaskObj.Provider>
                </li>
              ))}
            </ul>
          </HorizonsFieldRow>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <HorizonsFieldRow>
            <SpacesJourneyKanbanListTitle>
              {TaskStatus.CURRENT}
            </SpacesJourneyKanbanListTitle>
            <ul
              id={TaskStatus.CURRENT}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              {/* {inProgress.length === 0 && (
                <p className='w-full text-center font-bold text-slate-500'>
                  No items
                </p>
              )} */}
              {inProgress.map((log) => (
                <ContextForTaskObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <HorizonsFieldListItem />
                  </li>
                </ContextForTaskObj.Provider>
              ))}
            </ul>
          </HorizonsFieldRow>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <HorizonsFieldRow>
            <SpacesJourneyKanbanListTitle>Review</SpacesJourneyKanbanListTitle>
            <ul
              id={TaskStatus.BACKLOG}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              {/* {review.length === 0 && (
                <p className='w-full text-center font-bold text-slate-500'>
                  No items
                </p>
              )} */}

              {review.map((log) => (
                <ContextForTaskObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <HorizonsFieldListItem />
                  </li>
                </ContextForTaskObj.Provider>
              ))}
            </ul>
          </HorizonsFieldRow>
        </div>{' '}
        <div className='flex w-full flex-col space-y-[1rem]'>
          <HorizonsFieldRow>
            <SpacesJourneyKanbanListTitle>
              {TaskStatus.DONE}
            </SpacesJourneyKanbanListTitle>
            <ul
              id={TaskStatus.DONE}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              {/* {done.length === 0 && (
                <p className='w-full text-center font-bold text-slate-500'>
                  No items
                </p>
              )} */}

              {done.map((log) => (
                <ContextForTaskObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <HorizonsFieldListItem />
                  </li>
                </ContextForTaskObj.Provider>
              ))}
            </ul>
          </HorizonsFieldRow>
        </div>
      </div>
    </div>
  );
}
