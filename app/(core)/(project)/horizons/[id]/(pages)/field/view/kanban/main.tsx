import { ContextForChapterWayList } from '@/(server)/controller/space/chapter/way/list';
import {
  ChapterWayObj,
  ChapterWayStatus,
  ContextForChapterWayObj,
} from '@/(server)/model/space/chapter/way/main';
import { useContext, useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import { HorizonsFieldListItem } from './lists/item/main';
import { HorizonsFieldRow } from './lists/main';
import { SpacesJourneyKanbanListTitle } from './lists/title/main';

export function HorizonsFieldKanban() {
  const wayListController = useContext(ContextForChapterWayList);

  const [todo, setTodo] = useState<ChapterWayObj[]>([]);
  const [inProgress, setInProgress] = useState<ChapterWayObj[]>([]);
  const [review, setInReview] = useState<ChapterWayObj[]>([]);
  const [done, setDone] = useState<ChapterWayObj[]>([]);
  const [populated, setPopulated] = useState(false);

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

      await wayListController.actions.editActions.edit(itemId, {
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
      <div className='grid h-full w-full grid-rows-4'>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <HorizonsFieldRow>
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
                    <HorizonsFieldListItem />
                  </ContextForChapterWayObj.Provider>
                </li>
              ))}
            </ul>
            {/* <HorizonsFieldAddItem
              onClick={() => {
                setPopulated(false);
              }}
            >
              <p className='font-bold text-slate-300'>Add Log</p>
              <AstralAddIcon />
            </HorizonsFieldAddItem> */}
          </HorizonsFieldRow>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <HorizonsFieldRow>
            <SpacesJourneyKanbanListTitle>
              In Progress
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
                    <HorizonsFieldListItem />
                  </li>
                </ContextForChapterWayObj.Provider>
              ))}
            </ul>
          </HorizonsFieldRow>
        </div>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <HorizonsFieldRow>
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
                    <HorizonsFieldListItem />
                  </li>
                </ContextForChapterWayObj.Provider>
              ))}
            </ul>
          </HorizonsFieldRow>
        </div>{' '}
        <div className='flex w-full flex-col space-y-[1rem]'>
          <HorizonsFieldRow>
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
                    <HorizonsFieldListItem />
                  </li>
                </ContextForChapterWayObj.Provider>
              ))}
            </ul>
          </HorizonsFieldRow>
        </div>
      </div>
    </div>
  );
}
