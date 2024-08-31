import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { useControllerForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { TextElem, TextElemVariant } from '@/(server)/model/elements/text/main';
import { useOpenAIController } from '@/api/controller/openai/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useEffect, useState } from 'react';

export function SpaceChatGenerateSceneModal() {
  const user = useGlobalUser((state) => state.user);
  const openAi = useOpenAIController();
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const messageListController = useContext(ContextForConversationMessageList);
  const sceneListController = useContext(ContextForChapterSceneList);
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const [stickies, setStickies] = useState([]);

  async function generateStickies() {
    const messagesString = messageListController.state.objs
      .map((message) => {
        return message.message;
      })
      .join(' ');

    const rawString = await openAi.getMessageResponse(
      `Summarise the following into 5 steps in JSON array like this {"steps": []}: <message>${messagesString}<message/>`,
    );

    const rawSteps = (rawString || '')
      .replace('```json', '')
      .replace('```', '');

    const jsonObject = JSON.parse(rawSteps || '{ "steps": []}');
    setStickies(jsonObject['steps']);
  }

  useEffect(() => {
    generateStickies();
  }, []);

  async function addStickiesToScene() {
    stickies.forEach((sticky, index) => {
      const title = `Step ${index + 1}`;
      const description = sticky;
      const text = sticky;
      const variant = TextElemVariant.STICKY;
      ideaListController.actions.createActions.createFromText(
        user.id,
        sceneListController.state.objId,
        title,
        description,
        index * 200,
        0,
        150,
        150,
        {
          id: crypto.randomUUID(),
          title: title,
          text: text,
          variant: variant,
        } as TextElem,
        ideaListController.state.objs.length,
      );
    });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Generate Map</FormTitle>
          <FormBody>
            <div className='grid w-full grid-cols-3 gap-[1rem]'>
              {stickies.map((sticky) => (
                <div className='aspect-square bg-yellow-500 p-[1rem]'>
                  <p className='font-bold'>{sticky}</p>
                </div>
              ))}
            </div>
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                addStickiesToScene().then(() => {
                  window.location.href = spaceMap.space.id.map.link(
                    spaceController.state.objId,
                  );
                });
              }}
            >
              Next
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
