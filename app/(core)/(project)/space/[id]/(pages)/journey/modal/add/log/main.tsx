import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { useControllerForSessionUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function SpaceJourneyAddLogModal() {
  const user = useGlobalUser((state) => state.user);
  const loadingController = useContext(ContextForLoading);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const logListController = useControllerForChapterLogList(
    chapterListController.state.objId,
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const updateListController = useControllerForSessionUpdateListFromChapter('');

  async function createLog() {
    const log = await logListController.actions.createActions.createLog(
      chapterListController.state.objId,
      user.id,
      title,
      description,
    );
    await updateListController.actions.createActions.createFromChapterLog(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      log.id,
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
              rows={8}
            />
          </FormBody>
          <FormFooter>
            <FormButton onClick={createLog}>Next</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
