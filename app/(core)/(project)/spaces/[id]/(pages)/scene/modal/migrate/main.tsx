import { AstralRoundedActionButton } from '@/components/button/action/main';
import { ElementIdea } from '@/components/element/idea/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useControllerForUserActivityListFromChapter } from '@/server/controller/activity/list-from-chapter';
import { useControllerForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { useContext, useState } from 'react';
import { spacesMap } from '../../../../map';
import { ContextForSpacesScene } from '../../controller/main';

export function SpacesSceneMigrateSceneModal() {
  const loadingController = useContext(ContextForLoading);
  const spaceController = useContext(ContextForSpaceMain);
  const spacesSceneController = useContext(ContextForSpacesScene);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );
  const [title, changeTitle] = useState('');
  const [objective, changeObjective] = useState('');

  async function createScene() {
    loadingController.loadingController.open();
    openableController.close();
    const scene = await sceneListController.actions.createActions.createScene(
      title,
      objective,
      objective,
      user.id,
      chapterListController.state.objId,
    );

    await activityListController.actions.createActions.createFromChapterScene(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      scene.id,
    );

    // DUPLICATE
    const migratedIdeas = await Promise.all(
      spacesSceneController.state.selectedIdeas.map((selectedIdea) =>
        ideaListController.actions.createActions.duplicateWithScene(
          selectedIdea,
          scene.id,
        ),
      ),
    );

    // RECORD
    await Promise.all(
      migratedIdeas.map((migratedIdea) =>
        activityListController.actions.createActions.createFromChapterSceneIdea(
          user.id,
          spaceController.state.objId,
          chapterListController.state.objId,
          scene.id,
          migratedIdea.id,
        ),
      ),
    );

    // DELETE
    await Promise.all(
      spacesSceneController.state.selectedIdeas.map((selectedIdea) =>
        ideaListController.actions.deleteActions.delete(selectedIdea.id),
      ),
    );

    setTimeout(() => {
      loadingController.loadingController.close();
      window.location.href = `${spacesMap.spaces.id.scene.link(spaceController.state.objId)}?chapter=${chapterListController.state.objId}&scene=${scene.id}`;
    }, 1000);
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Migrate to New Scene</AstralModalTitle>
              <AstralTextLineInput
                title='Title'
                placeholder='Enter a title for your migrated scene'
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Objective'
                placeholder='Set an objective for your migrated scene'
                rows={8}
                value={objective}
                onChange={(e) => changeObjective(e.target.value)}
                style={{ resize: 'none' }}
              />
              <div className='grid w-full grid-cols-3 gap-[1rem]'>
                {spacesSceneController.state.selectedIdeas.map(
                  (selectedIdea) => (
                    <ContextForIdeaObj.Provider value={selectedIdea}>
                      <ElementIdea />
                    </ContextForIdeaObj.Provider>
                  ),
                )}
              </div>
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
