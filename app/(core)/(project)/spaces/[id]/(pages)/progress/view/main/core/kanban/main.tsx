import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { ContextForTaskList } from '@/server/controller/way/list';
import { exampleTask, TaskStatus } from '@/server/model/task/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ContextForSpacesProgress } from '../../../../controller/main';

const ItemType = {
  TASK: 'task',
};

export function SpacesProgressKanban() {
  const taskListController = useContext(ContextForTaskList);
  const { objs: objs } = taskListController.state;

  const todos = objs.filter((task) => task.taskStatus === TaskStatus.TODO);
  const inprogress = objs.filter(
    (task) => task.taskStatus === TaskStatus.IN_PROGRESS,
  );
  const dones = objs.filter((task) => task.taskStatus === TaskStatus.DONE);

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{ width: '100%', height: 'calc(100%)' }}
        className='overflow-auto'
      >
        <div className='grid h-full w-full grid-rows-3 gap-[1rem] p-[1rem]'>
          <KanbanRow title='Todo' tasks={todos} status={TaskStatus.TODO} />
          <KanbanRow
            title='In Progress'
            tasks={inprogress}
            status={TaskStatus.IN_PROGRESS}
          />
          <KanbanRow title='Done' tasks={dones} status={TaskStatus.DONE} />
        </div>
      </div>
    </DndProvider>
  );
}

function KanbanRow({ title, tasks, status }) {
  const taskListController = useContext(ContextForTaskList);

  const [{ isOver }, drop] = useDrop({
    accept: ItemType.TASK,
    drop: (item) => {
      if (item.status !== status) {
        taskListController.actions.editActions.edit(item.id, {
          taskStatus: status,
        });
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className='flex flex-col border-b-[1px] border-slate-300 border-opacity-30'>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <GlassWindowFrame
          roundedFx={roundedFx['rounded-full']}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex flex-row items-center space-x-[1rem] px-[1rem] py-[0.5rem]'>
            <h2 className='text-lg font-semibold text-slate-300'>{title}</h2>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </div>
      <div
        ref={drop}
        className={`flex h-full flex-row rounded py-[1rem] ${isOver ? 'bg-blue-200 bg-opacity-30' : ''}`}
      >
        <div className='flex min-h-[50px] flex-row space-x-[1rem]'>
          {tasks.map((task) => (
            <KanbanTask key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

function KanbanTask({ task }) {
  const taskListController = useContext(ContextForTaskList);
  const spacesProgressController = useContext(ContextForSpacesProgress);
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

  const isSelected = spacesProgressController.state.selectedTasks.includes(
    task.id,
  );

  return (
    <div
      ref={drag}
      className={`h-full w-[250px] flex-shrink-0 rounded border-slate-300 bg-yellow-500 p-4 shadow-sm ${
        isDragging ? 'opacity-50' : ''
      } ${isSelected ? 'border-2 border-blue-500' : 'border'}`}
      style={{ cursor: 'move' }}
      onClick={() => {
        if (isSelected) {
          taskListController.actions.stateActions.select(exampleTask);
          spacesProgressController.actions.updateSelectedTasks(
            spacesProgressController.state.selectedTasks.filter(
              (id) => id !== task.id,
            ),
          );
        } else {
          taskListController.actions.stateActions.select(task);
          spacesProgressController.actions.updateSelectedTasks([
            ...spacesProgressController.state.selectedTasks,
            task.id,
          ]);
        }
      }}
    >
      <div className='flex items-start justify-between'>
        {isEditingTitle ? (
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleTitleBlur}
            onKeyDown={(e) => handleKeyDown(e, handleTitleBlur)}
            autoFocus
            className='border-none bg-yellow-500 text-lg font-bold outline-none'
            style={{ width: '70%' }}
          />
        ) : (
          <p
            onClick={() => setIsEditingTitle(true)}
            className='cursor-pointer text-lg font-bold'
          >
            {title || 'Click to add title...'} {/* Placeholder text */}
          </p>
        )}
        <button onClick={deleteTask} className='ml-[1rem]' title='Delete Task'>
          <AstralCloseIcon className='fill-slate-50 opacity-50' />
        </button>
      </div>
      {isEditingDescription ? (
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={handleDescriptionBlur}
          onKeyDown={(e) => handleKeyDown(e, handleDescriptionBlur)}
          autoFocus
          className='border-none bg-yellow-500 text-sm font-light outline-none'
          style={{ width: '100%' }}
        />
      ) : (
        <p
          onClick={() => setIsEditingDescription(true)}
          className='cursor-pointer text-sm font-light'
        >
          {description || 'Click to add description...'}{' '}
          {/* Placeholder text */}
        </p>
      )}
    </div>
  );
}
