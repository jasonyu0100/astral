import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { useControllerForChapterConversationList } from '@/architecture/controller/conversation/list';
import { useControllerForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  TextElement,
  TextElementVariant,
} from '@/architecture/model/elements/text/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { getTextIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesIdeasAddChapterModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const sceneListController = useContext(ContextForIdeaSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const conversationListController =
    useControllerForChapterConversationList('');
  const messageListController = useControllerForConversationMessageList('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');

  async function createChapter() {
    await chapterListController.actions.createActions
      .createChapter(
        title,
        description,
        objective,
        user.id,
        spaceController.state.objId,
      )
      .then((chapter) => {
        activityListController.actions.createActions.createFromChapter(
          user.id,
          spaceController.state.objId,
          chapter.id,
        );
        sceneListController.actions.createActions
          .createScene(
            'Scene',
            chapter.description,
            chapter.objective,
            user.id,
            chapter.id,
          )
          .then((scene) => {
            console.log('SCENE CREATED', scene);
            activityListController.actions.createActions.createFromChapterScene(
              user.id,
              spaceController.state.objId,
              chapter.id,
              scene.id,
            );
            const textElem = {
              id: crypto.randomUUID(),
              title: chapter.title,
              text: chapter.objective,
              variant: TextElementVariant.ARTICLE,
            } as unknown as TextElement;

            const { width, height } = getTextIdeaBounds(textElem);

            ideaListController.actions.createActions
              .createIdeaFromTextElement(
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
              )
              .then((idea) => {
                activityListController.actions.createActions.createFromChapterSceneIdea(
                  user.id,
                  spaceController.state.objId,
                  chapter.id,
                  scene.id,
                  idea.id,
                );
                console.log('IDEA CREATED', textElem);
              });
          });

        conversationListController.actions.createActions
          .createConversation(user.id, chapter.id)
          .then((conversation) => {
            activityListController.actions.createActions.createFromChapterChapterConversation(
              user.id,
              spaceController.state.objId,
              chapter.id,
              conversation.id,
            );
            console.log('CONVERSATION CREATED', conversation);
            messageListController.actions.createActions
              .sendAgentMessage(
                'astral',
                conversation.id,
                "Hello I'm Astral 💫, how can I help you today.",
              )
              .then((message) => {
                console.log('MESSAGE CREATED', message);
              });
          });
      });
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Add Chapter</AstralModalTitle>
              <AstralTextLineInput
                title='Title'
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Objective'
                placeholder='Enter objective'
                rows={5}
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                style={{ resize: 'none' }}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={createChapter}>
                <AstralArrowForwardIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
