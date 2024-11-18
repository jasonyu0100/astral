import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForChapterConversationList } from '@/architecture/controller/conversation/list';
import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { useControllerForSpaceMemberList } from '@/architecture/controller/space/member/list';
import { ContextForTaskListFromChapter } from '@/architecture/controller/task/list-from-chapter';
import {
  exampleFileElement,
  FileElement,
} from '@/architecture/model/elements/file/main';
import {
  TextElement,
  TextElementVariant,
} from '@/architecture/model/elements/text/main';
import { SpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { SpaceObj } from '@/architecture/model/space/main';
import { useControllerForOpenAi } from '@/external/controller/openai/main';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  SpaceTemplate,
  SpaceTemplateMap,
  TemplateChapterObj,
} from '@/templates/space/main';
import { getTextIdeaBounds } from '@/utils/bounds';
import { createContext, useContext, useEffect, useState } from 'react';
export interface ControllerActions {
  updateTitle: (title: string) => void;
  updateThumbnail: (thumbnail: FileElement) => void;
  updateDescription: (description: string) => void;
  updateCategory: (category: SpaceTemplate) => void;
  updateMemberIds: (memberIds: string[]) => void;
  updateTemplateProjectChapters: (templates: TemplateChapterObj[]) => void;
  createSpaceFromTemplate: () => Promise<SpaceObj>;
}

export interface ControllerState {
  templateProjectChapters: TemplateChapterObj[];
  title: string;
  thumbnail: FileElement;
  description: string;
  category: SpaceTemplate;
  memberIds: string[];
}

export const ContextForPageOne = createContext({} as ControllerActions);
export const ContextForPageTwo = createContext({} as ControllerState);

interface HomeCreateCreateSpaceController {
  actions: ControllerActions;
  state: ControllerState;
}

export const ContextForHomeCreateCreateSpace = createContext(
  {} as HomeCreateCreateSpaceController,
);

export const useControllerForHomeCreateCreateSpace =
  (): HomeCreateCreateSpaceController => {
    const user = useGlobalUser((state) => state.user);
    const spaceListController = useContext(ContextForSpaceList);
    const taskListController = useContext(ContextForTaskListFromChapter);
    const chapterListController = useContext(ContextForSpaceChapterList);
    const sceneListController = useContext(ContextForIdeaSceneList);
    const ideaListController = useContext(ContextForSceneIdeaList);
    const conversationListController = useContext(
      ContextForChapterConversationList,
    );
    const messageListController = useContext(ContextForConversationMessageList);
    const activityListController = useContext(
      ContextForUserActivityListFromChapter,
    );
    const spaceMembersListController = useControllerForSpaceMemberList('');
    const openAiController = useControllerForOpenAi();
    const [title, setTitle] = useState(
      SpaceTemplateMap[SpaceTemplate.Ideation].title,
    );
    const [description, setDescription] = useState('');
    const [source, setSource] = useState('');
    const [category, setCategory] = useState(SpaceTemplate.Ideation);
    const [theme, setTheme] = useState<FileElement>(exampleFileElement);
    const [memberIds, setMemberIds] = useState<string[]>([]);
    const [templateSpaceChapters, setTemplateSpaceChapters] = useState(
      SpaceTemplateMap[category].chapters,
    );

    async function createSpaceFromTemplate() {
      async function createSpace() {
        const space =
          await spaceListController.actions.createActions.createFromTemplate(
            title,
            description,
            'custom',
            user.id,
            theme,
            'custom',
          );
        await activityListController.actions.createActions.createFromSpace(
          user.id,
          space.id,
        );
        return space;
      }

      async function createChapters(space: SpaceObj) {
        return Promise.all(
          templateSpaceChapters.map(async (templateChapter, index) => {
            const chapter =
              await chapterListController.actions.createActions.createChapter(
                templateChapter.title,
                templateChapter.description,
                templateChapter.objective,
                user.id,
                space.id,
                index,
              );
            await activityListController.actions.createActions.createFromChapter(
              user.id,
              space.id,
              chapter.id,
            );
            return chapter;
          }),
        );
      }

      async function createTasks(space: SpaceObj, chapters: SpaceChapterObj[]) {
        return Promise.all(
          templateSpaceChapters.map((template, index) =>
            Promise.all(
              template.tasks.map((task) =>
                taskListController.actions.createActions.createTask(
                  chapters[index].id,
                  user.id,
                  task.title,
                  task.description,
                  space.id,
                ),
              ),
            ),
          ),
        );
      }

      async function createScenes(
        space: SpaceObj,
        chapters: SpaceChapterObj[],
      ) {
        return Promise.all(
          chapters.map((chapter) =>
            sceneListController.actions.createActions
              .createScene(
                'Scene',
                chapter.description,
                chapter.objective,
                user.id,
                chapter.id,
              )
              .then(async (scene) => {
                console.log('SCENE CREATED', scene);
                await activityListController.actions.createActions.createFromChapterScene(
                  user.id,
                  space.id,
                  chapter.id,
                  scene.id,
                );

                const textElem = {
                  id: crypto.randomUUID(),
                  title: chapter.title,
                  text: chapter.description,
                  variant: TextElementVariant.ARTICLE,
                } as unknown as TextElement;

                const { width, height } = getTextIdeaBounds(textElem);

                const idea =
                  await ideaListController.actions.createActions.createIdeaFromTextElement(
                    user.id,
                    scene.id,
                    title,
                    description,
                    Math.ceil(Math.random() * 200),
                    Math.ceil(Math.random() * 200),
                    width,
                    height,
                    textElem,
                    ideaListController.state.objs.length,
                  );

                await activityListController.actions.createActions.createFromChapterSceneIdea(
                  user.id,
                  space.id,
                  chapter.id,
                  scene.id,
                  idea.id,
                );
                console.log('IDEA CREATED', textElem);
              }),
          ),
        );
      }

      async function createConversations(
        space: SpaceObj,
        chapters: SpaceChapterObj[],
      ) {
        return Promise.all(
          chapters.map((chapter) =>
            conversationListController.actions.createActions
              .createConversation(user.id, chapter.id)
              .then(async (conversation) => {
                console.log('CONVERSATION CREATED', conversation);
                await activityListController.actions.createActions.createFromChapterChapterConversation(
                  user.id,
                  space.id,
                  chapter.id,
                  conversation.id,
                );

                const message =
                  await messageListController.actions.createActions.sendAgentMessage(
                    'astral',
                    conversation.id,
                    "Hello I'm Astral 💫, how can I help you today.",
                  );
                console.log('MESSAGE CREATED', message);
              }),
          ),
        );
      }

      async function createMembers(space: SpaceObj) {
        return Promise.all(
          memberIds.map(async (memberId) => {
            const member =
              await spaceMembersListController.actions.createActions.createMember(
                memberId,
                space.id,
              );
            return member;
          }),
        );
      }

      const space = await createSpace();
      const chapters = await createChapters(space);
      const tasks = await createTasks(space, chapters);
      const scenes = await createScenes(space, chapters);
      const conversations = await createConversations(space, chapters);
      const members = await createMembers(space);

      return space;
    }

    useEffect(() => {
      setTemplateSpaceChapters(SpaceTemplateMap[category].chapters);
    }, [category]);

    return {
      actions: {
        updateTitle: (title: string) => setTitle(title),
        updateCategory: (category: SpaceTemplate) => setCategory(category),
        updateThumbnail: (thumbnail: FileElement) => setTheme(thumbnail),
        updateDescription: (description: string) => setDescription(description),
        updateMemberIds: (members: string[]) => setMemberIds(members),
        updateTemplateProjectChapters: (templates: TemplateChapterObj[]) =>
          setTemplateSpaceChapters(templates),
        createSpaceFromTemplate: createSpaceFromTemplate,
      },
      state: {
        category: category,
        templateProjectChapters: templateSpaceChapters,
        title,
        thumbnail: theme,
        description,
        memberIds: memberIds,
      },
    };
  };
