import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForTaskListFromChapter } from '@/architecture/controller/task/list-from-chapter';
import { exampleTask, TaskStatus } from '@/architecture/model/task/main';
import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { AstralPolylineIcon } from '@/icons/polyline/main';
import { AstralTableIcon } from '@/icons/table/main';
import { useContext, useState } from 'react';
import { useDrag } from 'react-dnd';
import {
  ContextForSpacesFocus,
  SpacesFocusSidebarMode,
} from '../../../../../controller/main';
import { ItemType } from '../main';

export function SpaceFocusKanbanTask({ task }) {
  const taskListController = useContext(ContextForTaskListFromChapter);
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spacesFocusController = useContext(ContextForSpacesFocus);
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.TASK,
    item: { id: task.id, status: task.taskStatus },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const deleteTask = () => {
    taskListController.actions.deleteActions.delete(task.id);
  };

  const handleTitleBlur = () => {
    taskListController.actions.editActions.edit(task.id, { title });
    setIsEditingTitle(false);
  };

  const handleDescriptionBlur = () => {
    taskListController.actions.editActions.edit(task.id, { description });
    setIsEditingDescription(false);
  };

  const handleKeyDown = (e, onBlur) => {
    if (e.key === 'Enter') {
      onBlur();
    }
  };

  const isSelected = spacesFocusController.state.selectedTasks.includes(
    task.id,
  );

  return (
    <>
      <div
        ref={drag}
        className={`h-full w-[300px] flex-shrink-0 rounded bg-yellow-500 p-4 shadow-sm ${
          isDragging ? 'opacity-50' : ''
        } ${isSelected ? 'border-[2px] border-purple-500' : 'border-black'}`}
        style={{ cursor: 'move' }}
        onClick={() => {
          if (isSelected) {
            taskListController.actions.stateActions.select(exampleTask);
            spacesFocusController.actions.updateSelectedTasks(
              spacesFocusController.state.selectedTasks.filter(
                (id) => id !== task.id,
              ),
            );
          } else {
            taskListController.actions.stateActions.select(task);
            spacesFocusController.actions.updateSelectedTasks([
              ...spacesFocusController.state.selectedTasks,
              task.id,
            ]);
          }
        }}
      >
        <div className='flex items-start justify-between space-x-[1rem]'>
          {isEditingTitle ? (
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleTitleBlur}
              onKeyDown={(e) => handleKeyDown(e, handleTitleBlur)}
              autoFocus
              className='border-none bg-transparent text-lg font-bold text-black outline-none'
              style={{ width: '70%' }}
            />
          ) : (
            <p
              onClick={() => setIsEditingTitle(true)}
              className='cursor-pointer text-lg font-bold text-black'
            >
              {title || 'Click to add title...'} {/* Placeholder text */}
            </p>
          )}
          <div className='flex flex-row space-x-[1rem]'>
            <button
              onClick={() => {
                taskListController.actions.editActions.edit(task.id, {
                  taskStatus: TaskStatus.ARCHIVE,
                });
                spacesFocusController.actions.updateSidebarMode(
                  SpacesFocusSidebarMode.ARCHIVE,
                );
              }}
            >
              <AstralBackIndicatorIcon className='fill-slate-50 opacity-50' />
            </button>
            <button onClick={deleteTask}>
              <AstralCloseIcon className='fill-slate-50 opacity-50' />
            </button>
          </div>
        </div>
        {isEditingDescription ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={handleDescriptionBlur}
            onKeyDown={(e) => handleKeyDown(e, handleDescriptionBlur)}
            autoFocus
            className='border-none bg-transparent text-sm text-black outline-none'
            style={{ width: '100%' }}
          />
        ) : (
          <p
            onClick={() => setIsEditingDescription(true)}
            className='cursor-pointer text-sm text-black'
          >
            {description || 'Click to add description...'}{' '}
            {/* Placeholder text */}
          </p>
        )}
      </div>
      {isSelected && (
        <div className='flex h-full flex-col items-center justify-center space-y-[1rem]'>
          <div
            className='flex h-[3rem] w-[3rem] animate-pulse-slow cursor-pointer items-center justify-center rounded-full bg-slate-300 bg-opacity-30'
            onClick={() => {
              taskListController.actions.editActions.edit(task.id, {
                taskStatus: TaskStatus.CURRENT,
              });
              window.location.href = `${spacesMap.spaces.id.focus.link(
                spaceMainController.state.objId,
              )}?chapter=${chapterListController.state.currentObj?.id}`;
            }}
          >
            <AstralPolylineIcon />
          </div>
          <div
            className='flex h-[3rem] w-[3rem] animate-pulse-slow cursor-pointer items-center justify-center rounded-full bg-slate-300 bg-opacity-30'
            onClick={() => {
              taskListController.actions.editActions.edit(task.id, {
                taskStatus: TaskStatus.CURRENT,
              });
              window.location.href = `${spacesMap.spaces.id.public.link(
                spaceMainController.state.objId,
              )}?chapter=${chapterListController.state.currentObj?.id}`;
            }}
          >
            <AstralTableIcon />
          </div>
          <div
            className='flex h-[3rem] w-[3rem] animate-pulse-slow cursor-pointer items-center justify-center rounded-full bg-slate-300 bg-opacity-30'
            onClick={() => {
              taskListController.actions.editActions.edit(task.id, {
                taskStatus: TaskStatus.CURRENT,
              });
              window.location.href = `${spacesMap.spaces.id.channel.link(
                spaceMainController.state.objId,
              )}?chapter=${chapterListController.state.currentObj?.id}`;
            }}
          >
            <AstralChatIndicatorIcon />
          </div>
        </div>
      )}
    </>
  );
}
