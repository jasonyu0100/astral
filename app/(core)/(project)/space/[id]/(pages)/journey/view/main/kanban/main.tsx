import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import {
  ChapterLogObj,
  ChapterLogStatus,
  ContextForChapterLogObj,
} from '@/(server)/model/space/chapter/log/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext, useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import { ContextForSpaceJourneyModals } from '../../../modal/controller/main';
import { SpaceProgressListItem } from './lists/item/main';
import { SpaceProgressList } from './lists/main';
import { SpaceJourneyKanbanListTitle } from './lists/title/main';

export function SpaceJourneyKanban() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const logListController = useContext(ContextForChapterLogList);
  const modalController = useContext(ContextForSpaceJourneyModals);

  const [todo, setTodo] = useState<ChapterLogObj[]>([]);
  const [inProgress, setInProgress] = useState<ChapterLogObj[]>([]);
  const [review, setInReview] = useState<ChapterLogObj[]>([]);
  const [done, setDone] = useState<ChapterLogObj[]>([]);
  const [populated, setPopulated] = useState(false);

  useEffect(() => {
    if (!populated && logListController.state.objs.length > 0) {
      setTodo(
        logListController.state.objs.filter(
          (idea) => idea.logStatus === 'todo',
        ),
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
        logListController.state.objs.filter(
          (idea) => idea.logStatus === 'done',
        ),
      );
      setPopulated(true);
    } else if (logListController.state.objs.length === 0) {
      setTodo([]);
      setInProgress([]);
      setInReview([]);
      setDone([]);
    }
  }, [logListController.state.objs]);

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
        await logListController.actions.editActions.edit(itemId, {
          logStatus: toList,
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
  }, [chapterListController.state.currentObj]);

  return (
    <div style={{ width: '100%', height: '100%' }} className='overflow-auto'>
      <div className='grid w-full grid-cols-4 gap-[1rem] p-[2rem]'>
        <div className='flex h-full flex-col space-y-[1rem]'>
          <SpaceProgressList>
            <SpaceJourneyKanbanListTitle>Todo</SpaceJourneyKanbanListTitle>

            <HorizontalDivider />
            <ul
              id={ChapterLogStatus.TODO}
              className='min-height-[1000px] w-full space-y-[2rem]'
            >
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
            <SpaceJourneyKanbanListTitle>
              In-progress
            </SpaceJourneyKanbanListTitle>
            <HorizontalDivider />

            <ul
              id={ChapterLogStatus.IN_PROGRESS}
              className='min-height-[1000px] w-full space-y-[2rem]'
            >
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
            <SpaceJourneyKanbanListTitle>Review</SpaceJourneyKanbanListTitle>
            <HorizontalDivider />
            <ul
              id={ChapterLogStatus.REVIEW}
              className='min-height-[1000px] w-full space-y-[2rem]'
            >
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
            <SpaceJourneyKanbanListTitle>Done</SpaceJourneyKanbanListTitle>
            <HorizontalDivider />
            <ul
              id={ChapterLogStatus.DONE}
              className='min-height-[1000px] w-full space-y-[2rem]'
            >
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
