import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { useControllerForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { ElementIdea } from '@/components/element/idea/main';
import { AstralSelectInput } from '@/components/input/select/main';
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
import { useContext, useState } from 'react';
import { spacesMap } from '../../../../map';
import { ContextForSpacesSpace } from '../../controller/main';

export function SpacesSpaceMigrateSceneModal() {
  const loadingController = useContext(ContextForLoading);
  const spaceController = useContext(ContextForSpaceMain);
  const spacesSpaceController = useContext(ContextForSpacesSpace);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );
  const [sceneId, setSceneId] = useState(
    sceneListController.state.objs[0]?.id || '',
  );

  async function createScene() {
    loadingController.loadingController.open();
    openableController.close();

    await activityListController.actions.createActions.createFromChapterScene(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      sceneId,
    );

    // DUPLICATE
    const migratedIdeas = await Promise.all(
      spacesSpaceController.state.selectedIdeas.map((selectedIdea) =>
        ideaListController.actions.createActions.duplicateWithScene(
          selectedIdea,
          sceneId,
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
          sceneId,
          migratedIdea.id,
        ),
      ),
    );

    // DELETE
    await Promise.all(
      spacesSpaceController.state.selectedIdeas.map((selectedIdea) =>
        ideaListController.actions.deleteActions.delete(selectedIdea.id),
      ),
    );

    setTimeout(() => {
      loadingController.loadingController.close();
      window.location.href = `${spacesMap.spaces.id.focus.link(spaceController.state.objId)}?chapter=${chapterListController.state.objId}&scene=${sceneId}`;
    }, 1000);
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Migrate</AstralModalTitle>
              <AstralSelectInput
                value={sceneId}
                onChange={(e) => setSceneId(e.target.value)}
              >
                {sceneListController.state.objs.map((scene) => (
                  <option value={scene.id}>{scene.title}</option>
                ))}
              </AstralSelectInput>
              <div className='grid w-full grid-cols-3 gap-[1rem]'>
                {spacesSpaceController.state.selectedIdeas.map(
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
