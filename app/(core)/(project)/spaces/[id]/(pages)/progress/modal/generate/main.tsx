import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useControllerForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ContextForTaskList } from '@/server/controller/way/list';
import { useContext, useState } from 'react';

export function SpacesProgressGenerateTasksModal() {
  const user = useGlobalUser((state) => state.user);
  const openAiController = useControllerForOpenAi();
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const taskListController = useContext(ContextForTaskList);
  const [generatePrompt, setGeneratePrompt] = useState('');
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  const generateTasks = async () => {
    const messageHistory = [
      `This is the base generate prompt: ${generatePrompt}`,
      `This is the chapter title: ${chapterListController.state.currentObj?.title}`,
      `This is the chapter objective: ${chapterListController.state.currentObj?.objective}`,
      `Create a series of tasks based on the message history above.
      
      Example format:
      {
        "tasks": [
          {"title": "#1", description: "#1 description"},
          {"title": "#2", description: "#2 description"},
          {"title": "#3", description: "#3 description"},
        ]
      }

      Ensure the response follows the exact structure and format shown above, with properly escaped characters, no trailing commas, and valid JSON syntax.`,
    ];

    const messagePrompt = messageHistory.join('\n');

    const agentResponse =
      await openAiController.actions.getMessageResponse(messagePrompt);

    const replacedString = agentResponse
      .replace('```json\n', '')
      .replace('```', '');

    const json = JSON.parse(replacedString);

    const tasks = json.tasks;
    console.log(tasks);
  };

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <AstralTextLineInput
              placeholder='Enter a generate prompt'
              onChange={(e) => setGeneratePrompt(e.target.value)}
            />
            <AstralRoundedActionButton onClick={() => generateTasks()}>
              <AstralArrowForwardIcon />
            </AstralRoundedActionButton>
          </div>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
