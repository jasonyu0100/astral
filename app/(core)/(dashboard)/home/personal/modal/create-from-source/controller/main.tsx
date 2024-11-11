import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForChapterConversationList } from '@/architecture/controller/conversation/list';
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
import { SpaceObj } from '@/architecture/model/space/main';
import { useControllerForOpenAi } from '@/external/controller/openai/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { TemplateChapterObj } from '@/templates/space/main';
import { getTextIdeaBounds } from '@/utils/bounds';
import { createContext, useContext, useState } from 'react';
export interface PageOne {
  title: string;
  updateTitle: (title: string) => void;
  thumbnail: FileElement;
  updateThumbnail: (thumbnail: FileElement) => void;
  description: string;
  updateDescription: (description: string) => void;
  source: string;
  updateSource: (source: string) => void;
  memberIds: string[];
  updateMemberIds: (memberIds: string[]) => void;
}

export interface PageTwo {
  templateProjectChapters: TemplateChapterObj[];
  updateTemplateProjectChapters: (templates: TemplateChapterObj[]) => void;
}

export const ContextForPageOne = createContext({} as PageOne);
export const ContextForPageTwo = createContext({} as PageTwo);

interface HomePersonalCreateFromSourceController {
  pageOne: PageOne;
  pageTwo: PageTwo;
  createChaptersFromSource: () => Promise<SpaceObj>;
  createSpace: () => Promise<SpaceObj>;
}

export const ContextForHomePersonalCreateFromSource = createContext(
  {} as HomePersonalCreateFromSourceController,
);

export const useControllerForHomePersonalCreateFromSource =
  (): HomePersonalCreateFromSourceController => {
    const user = useGlobalUser((state) => state.user);
    const spaceListController = useContext(ContextForSpaceList);
    const taskListController = useContext(ContextForTaskListFromChapter);
    const chapterListController = useContext(ContextForSpaceChapterList);
    const sceneListController = useContext(ContextForIdeaSceneList);
    const ideaListController = useContext(ContextForSceneIdeaList);
    const conversationListController = useContext(
      ContextForChapterConversationList,
    );
    const activityListController = useContext(
      ContextForUserActivityListFromChapter,
    );
    const spaceMembersListController = useControllerForSpaceMemberList('');
    const openAiController = useControllerForOpenAi();
    const [source, setSource] = useState('');
    const [title, setTitle] = useState('Custom Project');
    const [description, setDescription] = useState('Custom Project');
    const [theme, setTheme] = useState<FileElement>(exampleFileElement);
    const [memberIds, setMemberIds] = useState<string[]>([]);
    const [templateSpaceChapters, setTemplateSpaceChapters] = useState<
      TemplateChapterObj[]
    >([]);

    async function createChapters(
      space: SpaceObj,
      templateSpaceChapters: TemplateChapterObj[],
    ) {
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

      return chapters;
    }

    async function createMembers(space: SpaceObj, members: string[]) {
      const memberObjs = await Promise.all(
        members.map(async (memberId) => {
          const member =
            await spaceMembersListController.actions.createActions.createMember(
              memberId,
              space.id,
            );
          return member;
        }),
      );
      return memberObjs;
    }

    async function createChaptersFromSource() {
      const messageHistory = [
        `[Source Text]`,
        source,
        `[Instructions]`,
        `Convert the following source text into chapters`,
        `If the source text is a list, each item in the list should be a chapter`,
        `If the source text is a paragraph, the paragraph should be split into multiple chapters`,
        `If the source text is a single sentence, the sentence should be split into multiple chapters`,
        `It is crucial that you return title, description, objective and tasks for each chapter following the example format`,
        `Make sure the the broken down source text is converted into chapters with clear titles, descriptions, objectives and tasks`,
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
    {
      title: '📜 Introduction',
      description:
        '💡 Introduce the topic or purpose of the video in a clear and concise manner, setting up what the viewer can expect.',
      objective:
        '🔍 Quickly orient viewers with the video’s main topic or value proposition.',
      tasks: [
        {
          title: 'Introduce the Topic',
          description:
            'Provide a brief introduction that conveys the video’s main idea.',
        },
        {
          title: 'Create Curiosity',
          description:
            'Hint at what viewers will gain by staying engaged with the video.',
        },
        {
          title: 'Provide Context or Relevance',
          description:
            'Explain why the topic matters or how it relates to trending discussions or current events.',
        },
        {
          title: 'Establish Tone and Style',
          description:
            'Set the tone for the video, whether it’s serious, fun, educational, or informal.',
        },
      ],
    },
    {
      title: '💥 Main Content',
      description:
        '📈 Present the core information, value, or entertainment of the video in an engaging, fast-paced manner.',
      objective:
        '🏆 Deliver the primary content in a way that holds attention and provides immediate value.',
      tasks: [
        {
          title: 'Deliver Key Points',
          description:
            'Focus on one to three main points that are easy to understand and memorable.',
        },
        {
          title: 'Use Visual Cues',
          description:
            'Enhance content with text overlays, visuals, or animations to keep viewers engaged.',
        },
        {
          title: 'Show, Don’t Tell',
          description:
            'Use visuals, demonstrations, or examples to reinforce the message, rather than just describing it.',
        },
        {
          title: 'Pacing and Energy',
          description:
            'Keep the energy high by varying pacing and using quick cuts or transitions to maintain excitement.',
        },
        {
          title: 'Integrate Interactive Elements',
          description:
            'Use polls, questions, or interactive prompts to encourage viewer participation in real-time.',
        },
      ],
    },
    {
      title: '🗣️ Call to Action (Optional)',
      description:
        '📢 Prompt viewers to like, share, or follow if they found the content valuable.',
      objective:
        '💡 Encourage interaction and potential follow-up actions from the audience.',
      tasks: [
        {
          title: 'Encourage Engagement',
          description:
            'Suggest a simple call to action, such as “Like for more!” or “Follow for similar content.”',
        },
        {
          title: 'Create Urgency',
          description:
            'Add a sense of urgency by offering limited-time content or exclusive insights.',
        },
        {
          title: 'Promote Related Content',
          description:
            'Encourage viewers to explore other related videos or content on your channel/profile.',
        },
      ],
    },
    {
      title: '🎬 Ending',
      description:
        '✅ Provide a quick closing that wraps up the video, summarizing the main point or leaving viewers with a final thought.',
      objective:
        '🔚 Conclude the video naturally, leaving a lasting impression.',
      tasks: [
        {
          title: 'Summarize Key Takeaway',
          description:
            'Briefly recap the main point or value the viewer received.',
        },
        {
          title: 'Add a Closing Visual',
          description:
            'Include an end screen or graphic if applicable to reinforce branding or final call to action.',
        },
        {
          title: 'Provide a Memorable Final Statement',
          description:
            'Leave viewers with a catchy phrase, quote, or thought that sticks with them after the video ends.',
        },
        {
          title: 'Tease Upcoming Content',
          description:
            'Give viewers a hint of what’s coming next to encourage return visits.',
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

    async function createSpace() {
      const space =
        await spaceListController.actions.createActions.createFromTemplate(
          title,
          description,
          '',
          user.id,
          theme,
          'Custom',
        );

      console.log('SPACE CREATED', space);
      const chapters = await createChapters(space, templateSpaceChapters);
      console.log('CHAPTERS CREATED', chapters);

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

      const scenes = await Promise.all(
        chapters.map((chapter, index) =>
          sceneListController.actions.createActions
            .createScene(
              'Scene',
              chapter.description,
              chapter.objective,
              user.id,
              chapter.id,
            )
            .then((scene) => {
              const textElem = {
                id: crypto.randomUUID(),
                title: chapter.title,
                text: chapter.description,
                variant: TextElementVariant.ARTICLE,
              } as unknown as TextElement;

              const { width, height } = getTextIdeaBounds(textElem);

              ideaListController.actions.createActions.createIdeaFromTextElement(
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
              console.log('SCENE CREATED', scene);
            }),
        ),
      );
      console.log('SCENES CREATED', scenes);

      const conversations = await Promise.all(
        chapters.map((chapter, index) =>
          conversationListController.actions.createActions.createConversation(
            user.id,
            chapter.id,
          ),
        ),
      );

      const members = await createMembers(space, memberIds);
      console.log('MEMBERS CREATED', members);
      return space;
    }

    return {
      pageOne: {
        source,
        updateSource: (source: string) => setSource(source),
        title,
        updateTitle: (title: string) => setTitle(title),
        thumbnail: theme,
        updateThumbnail: (thumbnail: FileElement) => setTheme(thumbnail),
        description,
        updateDescription: (description: string) => setDescription(description),
        memberIds: memberIds,
        updateMemberIds: (members: string[]) => setMemberIds(members),
      },
      pageTwo: {
        templateProjectChapters: templateSpaceChapters,
        updateTemplateProjectChapters: (templates: TemplateChapterObj[]) =>
          setTemplateSpaceChapters(templates),
      },
      createChaptersFromSource,
      createSpace,
    };
  };
