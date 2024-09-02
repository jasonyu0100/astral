import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForLogLinkList } from '@/(server)/controller/space/chapter/log/link/list';
import { useControllerForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { useControllerForSpotlightAttachmentList } from '@/(server)/controller/space/chapter/spotlight/attachment/list';
import { useControllerForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import {
  exampleLogLinks,
  LogLinkObj,
} from '@/(server)/model/space/chapter/log/link/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';
import { ContextForSpaceJourney } from '../../controller/main';

export function SpaceJourneySpotlightModal() {
  const journeyController = useContext(ContextForSpaceJourney);
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spotlightListController = useControllerForChapterSpotlightList(
    chapterListController.state.objId,
  );
  const attachmentListController = useControllerForSpotlightAttachmentList(
    spotlightListController.state.objId,
  );
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const updateListController = useControllerForSessionUpdateOfChapterList('');
  const linkListController = useControllerForLogLinkList();
  const [links, setLinks] = useState<LogLinkObj[]>([]);
  const [selectedLinks, setSelectedLinks] =
    useState<LogLinkObj[]>(exampleLogLinks);

  async function createSpotlight() {
    const spotlight =
      await spotlightListController.actions.createActions.createSpotlight(
        title,
        description,
        user.id,
        chapterListController.state.objId,
      );
    selectedLinks.forEach(async (link) => {
      await attachmentListController.actions.createActions.createFromLink(
        user.id,
        spotlight.id,
        link,
      );
    });
    await updateListController.actions.createActions.createFromChapterSpotlight(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      spotlight.id,
    );
    window.location.href = spaceMap.space.id.spotlight.link(
      spaceController.state.objId,
    );
    openableController.close();
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
            {journeyController.selectedLogs.map((log) => (
              <div>
                <label>{log.title}</label>
              </div>
            ))}
          </FormBody>
          <FormFooter>
            <FormButton onClick={createSpotlight}>Next</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
