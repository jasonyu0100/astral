import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import {
  ChapterLogObj,
  ChapterLogStatus,
  ContextForChapterLogObj,
} from '@/(server)/model/space/chapter/log/main';
import { useContext, useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import { SpaceProgressListItem } from './lists/item/main';
import { SpaceProgressList } from './lists/main';
import { SpacesJourneyKanbanListTitle } from './lists/title/main';

export function SpacesJourneyKanban() {
  const logListController = useContext(ContextForChapterLogList);

  const [todo, setTodo] = useState<ChapterLogObj[]>([]);
  const [inProgress, setInProgress] = useState<ChapterLogObj[]>([]);
  const [review, setInReview] = useState<ChapterLogObj[]>([]);
  const [done, setDone] = useState<ChapterLogObj[]>([]);
  const [populated, setPopulated] = useState(false);

  useEffect(() => {
    if (populated) return;
    setTodo(
      logListController.state.objs.filter((idea) => idea.logStatus === 'todo'),
    );
    setInProgress(
      logListController.state.objs.filter(
        (idea) => idea.logStatus === 'in-progress',
      ),
    );
    setInReview(
      logListController.state.objs.filter(
        (idea) => idea.logStatus === 'review',
      ),
    );
    setDone(
      logListController.state.objs.filter((idea) => idea.logStatus === 'done'),
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
        logStatus: toList,
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
          <SpaceProgressList>
            <SpacesJourneyKanbanListTitle>Todo</SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterLogStatus.TODO}
              className='w-full space-y-[2rem]'
              style={{ height: '100%' }}
            >
              {/* {todo.length === 0 && (
                <p className='w-full text-center font-bold text-slate-500'>
                  No items
                </p>
              )} */}
              {todo.map((log) => (
                <li data-id={log.id} className='drag-item'>
                  <ContextForChapterLogObj.Provider value={log}>
                    <SpaceProgressListItem />
                  </ContextForChapterLogObj.Provider>
                </li>
              ))}
            </ul>
            {/* <SpaceProgressAddItem
              onClick={() => {
                setPopulated(false);
              }}
            >
              <p className='font-bold text-slate-300'>Add Log</p>
              <AstralAddIcon />
            </SpaceProgressAddItem> */}
          </SpaceProgressList>
        </div>
        <div className='flex h-full flex-col space-y-[1rem]'>
          <SpaceProgressList>
            <SpacesJourneyKanbanListTitle>
              In-progress
            </SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterLogStatus.IN_PROGRESS}
              className='w-full space-y-[2rem]'
              style={{ height: '100%' }}
            >
              {/* {inProgress.length === 0 && (
                <p className='w-full text-center font-bold text-slate-500'>
                  No items
                </p>
              )} */}
              {inProgress.map((log) => (
                <ContextForChapterLogObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceProgressListItem />
                  </li>
                </ContextForChapterLogObj.Provider>
              ))}
            </ul>
          </SpaceProgressList>
        </div>
        <div className='flex h-full flex-col space-y-[1rem]'>
          <SpaceProgressList>
            <SpacesJourneyKanbanListTitle>Review</SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterLogStatus.REVIEW}
              className='w-full space-y-[2rem]'
              style={{ height: '100%' }}
            >
              {/* {review.length === 0 && (
                <p className='w-full text-center font-bold text-slate-500'>
                  No items
                </p>
              )} */}

              {review.map((log) => (
                <ContextForChapterLogObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceProgressListItem />
                  </li>
                </ContextForChapterLogObj.Provider>
              ))}
            </ul>
          </SpaceProgressList>
        </div>
        <div className='flex h-full flex-col space-y-[1rem]'>
          <SpaceProgressList>
            <SpacesJourneyKanbanListTitle>Done</SpacesJourneyKanbanListTitle>
            <ul
              id={ChapterLogStatus.DONE}
              className='w-full space-y-[2rem]'
              style={{ height: '100%' }}
            >
              {/* {done.length === 0 && (
                <p className='w-full text-center font-bold text-slate-500'>
                  No items
                </p>
              )} */}

              {done.map((log) => (
                <ContextForChapterLogObj.Provider value={log}>
                  <li data-id={log.id} className='drag-item'>
                    <SpaceProgressListItem />
                  </li>
                </ContextForChapterLogObj.Provider>
              ))}
            </ul>
          </SpaceProgressList>
        </div>
      </div>
    </div>
  );
}
