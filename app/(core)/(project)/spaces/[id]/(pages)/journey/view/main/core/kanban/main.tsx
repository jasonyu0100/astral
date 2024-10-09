import { ContextForChapterWayList } from '@/(server)/controller/space/chapter/way/list';
import {
  ChapterWayObj,
  ChapterWayStatus,
  ContextForChapterWayObj,
} from '@/(server)/model/space/chapter/way/main';
import { useContext, useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import { SpaceJourneyListItem } from './row/item/main';
import { SpaceJourneyRow } from './row/main';
import { SpacesJourneyKanbanListTitle } from './row/title/main';

export function SpacesJourneyKanban() {
  const wayListController = useContext(ContextForChapterWayList);

  const [todo, setTodo] = useState<ChapterWayObj[]>([]);
  const [inProgress, setInProgress] = useState<ChapterWayObj[]>([]);
  const [review, setInReview] = useState<ChapterWayObj[]>([]);
  const [done, setDone] = useState<ChapterWayObj[]>([]);
  const [populated, setPopulated] = useState(false);

  useEffect(() => {
    if (populated) return;
    setTodo(
      wayListController.state.objs.filter((idea) => idea.wayStatus === 'todo'),
    );
    setInProgress(
      wayListController.state.objs.filter(
        (idea) => idea.wayStatus === 'in-progress',
      ),
    );
    setInReview(
      wayListController.state.objs.filter(
        (idea) => idea.wayStatus === 'review',
      ),
    );
    setDone(
      wayListController.state.objs.filter((idea) => idea.wayStatus === 'done'),
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
        console.error('Item ID is undefined');
        return;
      }

      console.log(`Item ${itemId} moved from ${fromList} to ${toList}`);

      await wayListController.actions.editActions.edit(itemId, {
        wayStatus: toList,
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
            <SpacesJourneyKanbanListTitle>Todo</SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterWayStatus.TODO}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              {todo.map((log) => (
                <li data-id={log.id} className='drag-item'>
                  <ContextForChapterWayObj.Provider value={log}>
                    <SpaceJourneyListItem />
                  </ContextForChapterWayObj.Provider>
                </li>
              ))}
            </ul>
          </SpaceJourneyRow>
        </div>
        <div className='flex h-full flex-col'>
          <SpaceJourneyRow>
            <SpacesJourneyKanbanListTitle>
              In-progress
            </SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterWayStatus.IN_PROGRESS}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              {inProgress.map((log) => (
                <ContextForChapterWayObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceJourneyListItem />
                  </li>
                </ContextForChapterWayObj.Provider>
              ))}
            </ul>
          </SpaceJourneyRow>
        </div>
        <div className='flex h-full flex-col'>
          <SpaceJourneyRow>
            <SpacesJourneyKanbanListTitle>Review</SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterWayStatus.REVIEW}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              {review.map((log) => (
                <ContextForChapterWayObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceJourneyListItem />
                  </li>
                </ContextForChapterWayObj.Provider>
              ))}
            </ul>
          </SpaceJourneyRow>
        </div>
        <div className='flex h-full flex-col'>
          <SpaceJourneyRow>
            <SpacesJourneyKanbanListTitle>Done</SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterWayStatus.DONE}
              className='flex h-full flex-row space-x-[1rem]'
              style={{ height: '100%' }}
            >
              {done.map((log) => (
                <ContextForChapterWayObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceJourneyListItem />
                  </li>
                </ContextForChapterWayObj.Provider>
              ))}
            </ul>
          </SpaceJourneyRow>
        </div>
      </div>
    </div>
  );
}
