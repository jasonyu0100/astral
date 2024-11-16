import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { useControllerForSceneIdeaList } from '@/architecture/controller/idea/list';
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
import { description } from '@/logic/information/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { getTextIdeaBounds } from '@/utils/bounds';
import { useContext, useState } from 'react';

export function SpacesIdeasAddSceneModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const ideaListController = useControllerForSceneIdeaList('');
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const [title, changeTitle] = useState('');
  const [objective, changeObjective] = useState('');

  async function createScene() {
    const scene = await sceneListController.actions.createActions
      .createScene(
        title,
        objective,
        objective,
        user.id,
        chapterListController.state.objId,
      )
      .then((scene) => {
        console.log('SCENE CREATED', scene);
        activityListController.actions.createActions.createFromChapterScene(
          user.id,
          spaceController.state.objId,
          chapterListController.state.objId,
          scene.id,
        );
        const textElem = {
          id: crypto.randomUUID(),
          title: scene.title,
          text: scene.objective,
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
              scene.chapterId || '',
              scene.id,
              idea.id,
            );
            console.log('IDEA CREATED', textElem);
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
              <AstralModalTitle>Add Scene</AstralModalTitle>
              <AstralTextLineInput
                title='Title'
                placeholder='Enter a title for your scene'
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Objective'
                placeholder='Set an objective for your scene'
                rows={8}
                value={objective}
                onChange={(e) => changeObjective(e.target.value)}
                style={{ resize: 'none' }}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={createScene}>
                <AstralArrowForwardIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
