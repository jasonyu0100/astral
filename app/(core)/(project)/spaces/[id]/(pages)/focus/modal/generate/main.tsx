import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralBookSparkIcon } from '@/icons/book-spark/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext, useState } from 'react';
import { ContextForSpacesFocus, TaskTemplate } from '../../controller/main';

export function SpacesFocusGenerateTasksModal() {
  const openableController = useContext(ContextForOpenable);
  const [generatePrompt, setGeneratePrompt] = useState('');
  const loadingController = useContext(ContextForLoading);
  const spacesFocusController = useContext(ContextForSpacesFocus);
  const [tasks, setTasks] = useState<TaskTemplate[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<TaskTemplate[]>([]);

  const toggleTaskSelection = (task: TaskTemplate) => {
    setSelectedTasks(
      (prevSelected) =>
        prevSelected.includes(task)
          ? prevSelected.filter((t) => t !== task) // Deselect the task
          : [...prevSelected, task], // Select the task
    );
  };

  const generateTasks = () => {
    loadingController.loadingController.open();
    spacesFocusController.actions
      .createTasksFromPrompt(generatePrompt)
      .then((tasks) => {
        setTasks(tasks);
        loadingController.loadingController.close();
      });
  };

  const createTasks = () => {
    loadingController.loadingController.open();
    spacesFocusController.actions
      .createTasksFromSelected(selectedTasks)
      .then((tasks) => {
        console.log(tasks);
        openableController.close();
        loadingController.loadingController.close();
      });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents a new line from being added
      generateTasks();
    }
  };

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralTextLineInput
                placeholder='Enter a prompt'
                onKeyDown={handleKeyDown}
                onChange={(e) => setGeneratePrompt(e.target.value)}
              />
              <div className='grid grid-cols-3 gap-[1rem]'>
                {tasks.map((task) => (
                  <div
                    key={task.title}
                    onClick={() => toggleTaskSelection(task)}
                    className={`aspect-square cursor-pointer rounded bg-yellow-500 p-[1rem] ${
                      selectedTasks.includes(task)
                        ? 'border-[3px] border-blue-500'
                        : 'border border-transparent '
                    }`}
                  >
                    <div className='text-lg font-bold'>{task.title}</div>
                    <div className='text-sm font-light'>{task.description}</div>
                  </div>
                ))}
              </div>
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton
                className='from-slate-500 to-slate-600'
                onClick={() => {
                  generateTasks();
                }}
              >
                <AstralBookSparkIcon />
              </AstralRoundedActionButton>
              {tasks.length > 0 && selectedTasks.length > 0 && (
                <AstralRoundedActionButton
                  onClick={() => {
                    createTasks();
                  }}
                >
                  <AstralCheckIcon />
                </AstralRoundedActionButton>
              )}
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
