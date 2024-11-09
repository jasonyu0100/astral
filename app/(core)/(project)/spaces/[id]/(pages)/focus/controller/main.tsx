import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForTaskListFromChapter } from '@/architecture/controller/task/list-from-chapter';
import { TaskObj } from '@/architecture/model/task/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { useControllerForOpenAi } from '@/external/controller/openai/main';
import { createContext, useContext, useState } from 'react';

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

interface ControllerState {
  sidebarMode: SpacesFocusSidebarMode;
  sidebarVisibility: SpacesFocusSidebarVisibility;
  selectedTasks: TaskObj[];
}

interface ControllerActions {
  updateSidebarMode: (mode: SpacesFocusSidebarMode) => void;
  updateSidebarVisibility: (visibility: SpacesFocusSidebarVisibility) => void;
  updateSelectedTasks: (logs: TaskObj[]) => void;
  checkContainsSelectedTask: (log: TaskObj) => boolean;
  createTasksFromPrompt: (prompt: string) => Promise<TaskTemplate[]>;
  createTasksFromSelected: (
    selectedTaskTemplates: TaskTemplate[],
  ) => Promise<TaskObj[]>;
}

export const ContextForSpacesFocus = createContext({} as Controller);

export enum SpacesFocusDataMode {
  Table = 'Table',
  ROWS = 'Rows',
}

export enum SpacesFocusSidebarMode {
  CHAPTERS = 'Chapters',
  ARCHIVE = 'Archive',
}

export enum SpacesFocusSidebarVisibility {
  OPEN = 'open',
  CLOSED = 'closed',
}

export interface TaskTemplate {
  title: string;
  description: string;
}

export function useControllerForSpacesFocus(): Controller {
  const [selectedTasks, setSelectedTasks] = useState<TaskObj[]>([]);
  const [sidebarMode, setSidebarMode] = useState<SpacesFocusSidebarMode>(
    SpacesFocusSidebarMode.CHAPTERS,
  );
  const [sidebarVisibility, setSidebarVisibility] =
    useState<SpacesFocusSidebarVisibility>(SpacesFocusSidebarVisibility.OPEN);
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const taskListController = useContext(ContextForTaskListFromChapter);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const openAiController = useControllerForOpenAi();
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );

  const createTasksFromPrompt = async (prompt: string) => {
    const messageHistory = [
      `[Context]`,
      `This is the chapter title: ${chapterListController.state.currentObj?.title}`,
      `This is the chapter objective: ${chapterListController.state.currentObj?.objective}`,
      `[Instructions]`,
      `Create a list of tasks based on the following prompt (include a variety of tasks in addition to an overall task):`,
      `[Example Result]`,
      `{
        "tasks": [
          {
            "title": "Design Website",
            "description": "Create a new design for the website that is modern and sleek."
          },
          {
            "title": "Create Logo",
            "description": "Design a logo that is modern and sleek."
          }
        ]}`,
      `[Prompt]`,
      prompt,
    ];
    const messagePrompt = messageHistory.join('\n');

    const response =
      await openAiController.actions.getMessageResponse(messagePrompt);
    const replacedString = response.replace('```json\n', '').replace('```', '');
    const json = JSON.parse(replacedString);
    const tasks = json.tasks as TaskTemplate[];

    return tasks;
  };

  const createTasksFromSelected = async (
    selectedTaskTemplates: TaskTemplate[],
  ) => {
    const tasks = await Promise.all(
      selectedTaskTemplates.map((taskTemplate) =>
        taskListController.actions.createActions.createTask(
          chapterListController.state.currentObj?.id || '',
          loggedInUser.id,
          taskTemplate.title,
          taskTemplate.description,
          spaceMainController.state.objId,
        ),
      ),
    );

    const activity = Promise.all(
      tasks.map((task) =>
        activityListController.actions.createActions.createFromChapterTask(
          loggedInUser.id,
          spaceMainController.state.objId,
          chapterListController.state.currentObj?.id || '',
          task.id,
        ),
      ),
    );

    return tasks;
  };

  return {
    state: {
      sidebarMode: sidebarMode,
      sidebarVisibility: sidebarVisibility,
      selectedTasks: selectedTasks,
    },
    actions: {
      updateSidebarVisibility: (visibility) => setSidebarVisibility(visibility),
      updateSidebarMode: (mode) => setSidebarMode(mode),
      updateSelectedTasks: (tasks) => setSelectedTasks(tasks),
      checkContainsSelectedTask: (task: TaskObj) =>
        selectedTasks.map((task) => task.id).includes(task.id),
      createTasksFromPrompt: createTasksFromPrompt,
      createTasksFromSelected: createTasksFromSelected,
    },
  };
}
