import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { useControllerForSpotlightAttachmentList } from '@/(server)/controller/space/chapter/spotlight/attachment/list';
import { useControllerForSpotlightLinkList } from '@/(server)/controller/space/chapter/spotlight/link/list';
import { useControllerForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { FileElem } from '@/(server)/model/elements/file/main';
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
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';
import { ContextForSpaceJourney } from '../../controller/main';

export function SpaceJourneySpotlightModal() {
  const {
    state: { selectedLogs },
  } = useContext(ContextForSpaceJourney);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spotlightListController = useControllerForChapterSpotlightList(
    chapterListController.state.objId,
  );
  const attachmentListController = useControllerForSpotlightAttachmentList(
    spotlightListController.state.objId,
  );
  const linkListController = useControllerForSpotlightLinkList(
    spotlightListController.state.objId,
  );

  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const updateListController = useControllerForSessionUpdateOfChapterList('');
  const [files, changeFiles] = useState([] as FileElem[]);

  async function createSpotlight() {
    if (files.length === 0) {
      alert('Please upload at least one file');
      return;
    }

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
    // window.location.href = spaceMap.space.id.spotlight.link(
    //   spaceController.state.objId,
    // );
    // openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Create Spotlight</FormTitle>
          <FormBody>
            <FormInput
              title='Name'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormTextArea
              title='Description'
              rows={5}
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              style={{ resize: 'none' }}
            />
            <div className='grid w-full grid-cols-3 gap-[1rem]'>
              {selectedLogs.map((log) => (
                <div className='aspect-square bg-yellow-500 p-[1rem]'>
                  <p className='font-bold'>{log.title}</p>
                </div>
              ))}
            </div>
            <HorizontalDivider />
            <FormUploadFiles
              label='Spotlight Attachments'
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
