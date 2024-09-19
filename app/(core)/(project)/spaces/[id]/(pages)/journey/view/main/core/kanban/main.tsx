import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/way/list';
import {
  ChapterWayObj,
  ChapterWayStatus,
  ContextForChapterWayObj,
} from '@/(server)/model/space/chapter/way/main';
import { useContext, useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import { SpaceJourneyListItem } from './lists/item/main';
import { SpaceJourneyList } from './lists/main';
import { SpacesJourneyKanbanListTitle } from './lists/title/main';

export function SpacesJourneyKanban() {
  const logListController = useContext(ContextForChapterLogList);

  const [todo, setTodo] = useState<ChapterWayObj[]>([]);
  const [inProgress, setInProgress] = useState<ChapterWayObj[]>([]);
  const [review, setInReview] = useState<ChapterWayObj[]>([]);
  const [done, setDone] = useState<ChapterWayObj[]>([]);
  const [populated, setPopulated] = useState(false);

  useEffect(() => {
    if (populated) return;
    setTodo(
      logListController.state.objs.filter((idea) => idea.wayStatus === 'todo'),
    );
    setInProgress(
      logListController.state.objs.filter(
        (idea) => idea.wayStatus === 'in-progress',
      ),
    );
    setInReview(
      logListController.state.objs.filter(
        (idea) => idea.wayStatus === 'review',
      ),
    );
    setDone(
      logListController.state.objs.filter((idea) => idea.wayStatus === 'done'),
    );
    setPopulated(true);
  }, [logListController.state.objs]);

  useEffect(() => {
    const elTodo = document.getElementById('todo');
    const elInProgress = document.getElementById('in-progress');
    const elReview = document.getElementById('review');
    const elDone = document.getElementById('done');

    const handleSortEnd = async (evt) => {
      const fromList = evt.from.id;
      const toList = evt.to.id;
      const itemId = evt.item.dataset.id;

      console.log(`Item ${itemId} moved from ${fromList} to ${toList}`);

      await logListController.actions.editActions.edit(itemId, {
        wayStatus: toList,
      });
    };

    const sortableOptions = {
      group: 'shared', // Set both lists to the same group
      animation: 500,
      onEnd: (evt) => {
        handleSortEnd(evt); // Handle sort end
      },
    };

    Sortable.create(elTodo, sortableOptions);
    Sortable.create(elInProgress, sortableOptions);
    Sortable.create(elReview, sortableOptions);
    Sortable.create(elDone, sortableOptions);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }} className='overflow-auto'>
      <div className='grid h-full w-full grid-cols-4'>
        <div className='flex h-full flex-col space-y-[1rem]'>
          <SpaceJourneyList>
            <SpacesJourneyKanbanListTitle>Todo</SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterWayStatus.TODO}
              className='w-full space-y-[1rem]'
              style={{ height: '100%' }}
            >
              {/* {todo.length === 0 && (
                <p className='w-full text-center font-bold text-slate-500'>
                  No items
                </p>
              )} */}
              {todo.map((log) => (
                <li data-id={log.id} className='drag-item'>
                  <ContextForChapterWayObj.Provider value={log}>
                    <SpaceJourneyListItem />
                  </ContextForChapterWayObj.Provider>
                </li>
              ))}
            </ul>
            {/* <SpaceJourneyAddItem
              onClick={() => {
                setPopulated(false);
              }}
            >
              <p className='font-bold text-slate-300'>Add Log</p>
              <AstralAddIcon />
            </SpaceJourneyAddItem> */}
          </SpaceJourneyList>
        </div>
        <div className='flex h-full flex-col space-y-[1rem]'>
          <SpaceJourneyList>
            <SpacesJourneyKanbanListTitle>
              In-progress
            </SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterWayStatus.IN_PROGRESS}
              className='w-full space-y-[1rem]'
              style={{ height: '100%' }}
            >
              {/* {inProgress.length === 0 && (
                <p className='w-full text-center font-bold text-slate-500'>
                  No items
                </p>
              )} */}
              {inProgress.map((log) => (
                <ContextForChapterWayObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceJourneyListItem />
                  </li>
                </ContextForChapterWayObj.Provider>
              ))}
            </ul>
          </SpaceJourneyList>
        </div>
        <div className='flex h-full flex-col space-y-[1rem]'>
          <SpaceJourneyList>
            <SpacesJourneyKanbanListTitle>Review</SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterWayStatus.REVIEW}
              className='w-full space-y-[1rem]'
              style={{ height: '100%' }}
            >
              {/* {review.length === 0 && (
                <p className='w-full text-center font-bold text-slate-500'>
                  No items
                </p>
              )} */}

              {review.map((log) => (
                <ContextForChapterWayObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceJourneyListItem />
                  </li>
                </ContextForChapterWayObj.Provider>
              ))}
            </ul>
          </SpaceJourneyList>
        </div>
        <div className='flex h-full flex-col space-y-[1rem]'>
          <SpaceJourneyList>
            <SpacesJourneyKanbanListTitle>Done</SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterWayStatus.DONE}
              className='w-full space-y-[1rem]'
              style={{ height: '100%' }}
            >
              {/* {done.length === 0 && (
                <p className='w-full text-center font-bold text-slate-500'>
                  No items
                </p>
              )} */}

              {done.map((log) => (
                <ContextForChapterWayObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceJourneyListItem />
                  </li>
                </ContextForChapterWayObj.Provider>
              ))}
            </ul>
          </SpaceJourneyList>
        </div>
      </div>
    </div>
  );
}
