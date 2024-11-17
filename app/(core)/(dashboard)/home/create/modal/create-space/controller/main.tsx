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
import {
  UrlElement,
  UrlElementVariant,
} from '@/architecture/model/elements/url/main';
import { SpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { SpaceObj } from '@/architecture/model/space/main';
import { useControllerForOpenAi } from '@/external/controller/openai/main';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  SpaceTemplate,
  SpaceTemplateMap,
  TemplateChapterObj,
} from '@/templates/space/main';
import { getTextIdeaBounds, getUrlIdeaBounds } from '@/utils/bounds';
import { createContext, useContext, useEffect, useState } from 'react';
export interface ControllerActions {
  updateTitle: (title: string) => void;
  updateThumbnail: (thumbnail: FileElement) => void;
  updateDescription: (description: string) => void;
  updateCategory: (category: SpaceTemplate) => void;
  updateMemberIds: (memberIds: string[]) => void;
  updateSource: (source: string) => void;
  updateTemplateProjectChapters: (templates: TemplateChapterObj[]) => void;
  createChaptersFromSource: () => Promise<TemplateChapterObj[]>;
  createSpaceFromTemplate: () => Promise<SpaceObj>;
  createBlankSpace: () => Promise<SpaceObj>;
  createSpaceFromSource: () => Promise<SpaceObj>;
}

export interface ControllerState {
  templateProjectChapters: TemplateChapterObj[];
  title: string;
  thumbnail: FileElement;
  description: string;
  category: SpaceTemplate;
  memberIds: string[];
  source: string;
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
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [source, setSource] = useState('');
    const [category, setCategory] = useState(SpaceTemplate.Blank);
    const [theme, setTheme] = useState<FileElement>(exampleFileElement);
    const [memberIds, setMemberIds] = useState<string[]>([]);
    const [templateSpaceChapters, setTemplateSpaceChapters] = useState(
      SpaceTemplateMap[category].chapters,
    );

    async function createChaptersFromSource() {
      const messageHistory = [
        `[Source Description]`,
        title,
        `[Source Text]`,
        source,
        `[Instructions]`,
        `Convert the following source text into chapters`,
        `If the source text is a list, each item in the list should be a chapter`,
        `If the source text is a paragraph, the paragraph should be split into multiple chapters`,
        `If the source text is a single sentence, the sentence should be split into multiple chapters`,
        `It is crucial that you return title, description, objective and tasks for each chapter following the example format`,
        `If the source text is broken, default to creating 5 chapters about creativity`,
        `Make sure the the broken down source text is converted into several chapters with clear titles, descriptions, objectives and tasks`,
        `[Example return]`,
        `
{
  chapters: [
    {
      title: '⚡ Hook',
      description:
        '🧲 Start with a captivating opening statement or visual that grabs viewers’ attention within the first few seconds.',
      objective:
        '🎯 Capture viewer attention immediately to increase the likelihood of retention.',
      tasks: [
        {
          title: 'Craft a Strong Opening Line',
          description:
            'Use a surprising fact, question, or bold statement to hook viewers.',
        },
        {
          title: 'Add Visuals or Sound Effects',
          description:
            'Incorporate quick visuals or sound effects to enhance the hook.',
        },
        {
          title: 'Use Humor or Relatable Content',
          description:
            'Leverage humor, memes, or relatable moments to make an immediate connection with the audience.',
        },
        {
          title: 'Create Intrigue with a Teaser',
          description:
            'Tease something exciting or unexpected that will unfold later in the video to keep viewers watching.',
        },
      ],
    },
  ],
}
        `,
      ];
      const messagePrompt = messageHistory.join('\n');

      console.log(messagePrompt);
      const agentResponse =
        (await openAiController.actions.getMessageResponse(messagePrompt)) ||
        '';
      console.log(agentResponse);
      const replacedString = agentResponse
        .replace('```json\n', '')
        .replace('```', '');
      const json = JSON.parse(replacedString);
      const chapters = json.chapters;
      setTemplateSpaceChapters(chapters);
      console.log(chapters);
      return chapters;
    }

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

    async function createBlankSpace() {
      const category = SpaceTemplate.Blank;
      const templateSpaceChapters =
        SpaceTemplateMap[SpaceTemplate.Blank].chapters;

      async function createSpace() {
        const space =
          await spaceListController.actions.createActions.createFromTemplate(
            title,
            description,
            SpaceTemplateMap[category].objective,
            user.id,
            theme,
            category,
          );
        await activityListController.actions.createActions.createFromSpace(
          user.id,
          space.id,
        );
        console.log('SPACE CREATED', space);
        return space;
      }

      async function createChapters(space: SpaceObj) {
        const chapters = await Promise.all(
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
        console.log('CHAPTERS CREATED', chapters);
        return chapters;
      }

      async function createTasks(space: SpaceObj, chapters: SpaceChapterObj[]) {
        const tasks = await Promise.all(
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
        console.log('TASKS CREATED', tasks);
        return tasks;
      }

      async function createScenes(
        space: SpaceObj,
        chapters: SpaceChapterObj[],
      ) {
        const scenes = await Promise.all(
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

                const videoElem = {
                  id: crypto.randomUUID(),
                  url: `https://www.youtube.com/embed/wh7nnuBGmFQ`,
                  variant: UrlElementVariant.YOUTUBE,
                } as unknown as UrlElement;

                const { width, height } = getUrlIdeaBounds(videoElem);

                const idea =
                  await ideaListController.actions.createActions.createIdeaFromUrlElement(
                    user.id,
                    scene.id,
                    title,
                    description,
                    Math.ceil(Math.random() * 200),
                    Math.ceil(Math.random() * 200),
                    width,
                    height,
                    videoElem,
                    ideaListController.state.objs.length,
                  );

                await activityListController.actions.createActions.createFromChapterSceneIdea(
                  user.id,
                  space.id,
                  chapter.id,
                  scene.id,
                  idea.id,
                );
                console.log('IDEA CREATED', videoElem);
              }),
          ),
        );
        console.log('SCENES CREATED', scenes);
        return scenes;
      }

      async function createConversations(
        space: SpaceObj,
        chapters: SpaceChapterObj[],
      ) {
        const conversations = await Promise.all(
          chapters.map((chapter) =>
            conversationListController.actions.createActions
              .createConversation(user.id, chapter.id)
              .then(async (conversation) => {
                await activityListController.actions.createActions.createFromChapterChapterConversation(
                  user.id,
                  space.id,
                  chapter.id,
                  conversation.id,
                );
                console.log('CONVERSATION CREATED', conversation);

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
        console.log('CONVERSATIONS CREATED', conversations);
        return conversations;
      }

      async function createMembers(space: SpaceObj) {
        const members = await Promise.all(
          memberIds.map(async (memberId) => {
            const member =
              await spaceMembersListController.actions.createActions.createMember(
                memberId,
                space.id,
              );
            return member;
          }),
        );
        console.log('MEMBERS CREATED', members);
        return members;
      }

      const space = await createSpace();
      const chapters = await createChapters(space);
      const tasks = await createTasks(space, chapters);
      const scenes = await createScenes(space, chapters);
      const conversations = await createConversations(space, chapters);
      const members = await createMembers(space);

      return space;
    }

    async function createSpaceFromSource() {
      async function createSpace() {
        const space =
          await spaceListController.actions.createActions.createFromTemplate(
            title,
            description,
            'Custom Project',
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
        updateSource: (source: string) => setSource(source),
        createChaptersFromSource,
        createSpaceFromTemplate: createSpaceFromTemplate,
        createBlankSpace: createBlankSpace,
        createSpaceFromSource: createSpaceFromSource,
      },
      state: {
        source: source,
        category: category,
        templateProjectChapters: templateSpaceChapters,
        title,
        thumbnail: theme,
        description,
        memberIds: memberIds,
      },
    };
  };
