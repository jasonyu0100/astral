import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForSessionUpdateListFromChapter } from '@/(server)/controller/space/chapter/session/update/list-from-chapter';
import { useControllerForSpotlightAttachmentListFromSpotlight } from '@/(server)/controller/space/chapter/spotlight/attachment/list-from-spotlight';
import { useControllerForSpotlightLinkList } from '@/(server)/controller/space/chapter/spotlight/link/list';
import { useControllerForChapterSpotlightListFromChapter } from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { FileElem } from '@/(server)/model/elements/file/main';
import { useControllerForOpenAi } from '@/api/controller/openai/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormUploadFiles } from '@/ui/form/file/upload/upload-files/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { ContextForLoading } from '@/ui/loading/controller/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useEffect, useState } from 'react';
import { spaceMap } from '../../../../map';
import { ContextForSpacesJourney } from '../../controller/main';

export function SpacesJourneySpotlightModal() {
  const {
    state: { selectedLogs },
  } = useContext(ContextForSpacesJourney);
  const loadingController = useContext(ContextForLoading);
  const openAiController = useControllerForOpenAi();
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spotlightListController =
    useControllerForChapterSpotlightListFromChapter(
      chapterListController.state.objId,
    );
  const attachmentListController =
    useControllerForSpotlightAttachmentListFromSpotlight(
      spotlightListController.state.objId,
    );
  const linkListController = useControllerForSpotlightLinkList(
    spotlightListController.state.objId,
  );

  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const updateListController = useControllerForSessionUpdateListFromChapter(
    chapterListController.state.objId,
  );
  const [files, changeFiles] = useState([] as FileElem[]);

  useEffect(() => {
    if (openableController.opened) {
      loadingController.loadingController.open();
      generateDescription()
        .then(() => generateTitle())
        .then(() => {
          loadingController.loadingController.close();
        });
    }
  }, [openableController.opened]);

  async function generateDescription() {
    loadingController.loadingController.open();
    const logSummary = selectedLogs
      .map((log) => `${log.title} - ${log.description}`)
      .join(' ');
    await openAiController.actions
      .getMessageResponse(
        `
      Summarise the following into dot points: ${logSummary}`,
      )
      .then((description) => {
        changeDescription(description || '');
      });
  }

  async function generateTitle() {
    const logSummary = selectedLogs
      .map((log) => `${log.title} - ${log.description}`)
      .join(' ');
    await openAiController.actions
      .getMessageResponse(
        `
      Summarise the following into a title: ${logSummary}`,
      )
      .then((title) => {
        changeTitle(title || '');
      });
  }

  async function createSpotlight() {
    if (files.length === 0) {
      alert('Please upload at least one file');
      return;
    }

    openableController.close();
    loadingController.loadingController.open();

    const spotlight =
      await spotlightListController.actions.createActions.createSpotlight(
        title,
        description,
        user.id,
        chapterListController.state.objId,
      );
    files.forEach(async (file) => {
      await attachmentListController.actions.createActions.createFromFile(
        user.id,
        spotlight.id,
        file,
      );
    });
    selectedLogs.forEach(async (log) => {
      await linkListController.actions.createActions.createFromLog(
        user.id,
        spotlight.id,
        log.id,
      );
    });

    // Create a new action to create a spotlight from a chapter
    await updateListController.actions.createActions.createFromChapterSpotlight(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      spotlight.id,
    );

    window.location.href = spaceMap.space.id.flight.link(
      spaceController.state.objId,
    );
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Generate Spotlight</FormTitle>
          <FormBody>
            <FormInput
              title='Title'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormTextArea
              title='Description'
              rows={8}
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              style={{ resize: 'none' }}
            />
            <FormUploadFiles
              label='Attachments'
              onChange={(files) => {
                changeFiles(files);
              }}
            />
          </FormBody>
          <FormFooter>
            <FormButton onClick={createSpotlight}>Next</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
