import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForLogLinkList } from '@/(server)/controller/space/chapter/log/link/list';
import { useControllerForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { useControllerForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { ElementIdeaPreview } from '@/ui/element/idea/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';
import { spaceMap } from '../../../../map';
import { ContextForSpaceMap } from '../../controller/map/main';

export function SpaceMapPlanModal() {
  const user = useGlobalUser((state) => state.user);
  const {
    state: { selectedIdeas },
  } = useContext(ContextForSpaceMap);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const logListController = useControllerForChapterLogList(
    chapterListController.state.objId,
  );
  const linkListController = useControllerForLogLinkList(
    logListController.state.objId,
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const updateListController = useControllerForSessionUpdateOfChapterList('');

  async function createLog() {
    const log = await logListController.actions.createActions.createLog(
      chapterListController.state.objId,
      user.id,
      title,
      description,
    );
    selectedIdeas.forEach(async (idea) => {
      await linkListController.actions.createActions.createLink(
        user.id,
        log.id,
        idea,
      );
    });
    await updateListController.actions.createActions.createFromChapterSpotlight(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      log.id,
    );
    window.location.href = spaceMap.space.id.journey.link(
      spaceController.state.objId,
    );
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Create Log</FormTitle>
          <FormBody>
            <FormInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              title='Title'
            />
            <FormTextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              title='Description'
            />
            <HorizontalDivider />
            {selectedIdeas.map((idea) => (
              <>
                <ContextForSceneIdeaObj.Provider value={idea}>
                  <ElementIdeaPreview />
                </ContextForSceneIdeaObj.Provider>
              </>
            ))}
          </FormBody>
          <FormFooter>
            <FormButton onClick={createLog}>Next</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
