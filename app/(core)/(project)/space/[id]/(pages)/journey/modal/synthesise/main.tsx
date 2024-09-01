import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useControllerForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import { ContextForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
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
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function SpaceJourneySpotlightModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const spotlightListController = useContext(ContextForChapterSpotlightList);
  const openableController = useContext(ContextForOpenable);
  const user = useGlobalUser((state) => state.user);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const updateListController = useControllerForSessionUpdateOfChapterList('');

  async function createReview() {
    const spotlight =
      await spotlightListController.actions.createActions.createSpotlightFromFile(
        title,
        description,
        user.id,
        chapterListController.state.objId,
      );
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
          <FormTitle>Generate Spotlight</FormTitle>
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
            <p className='font-bold text-black'>Available</p>
            <div className='grid grid-cols-3 gap-[1rem]'></div>
            <p className='font-bold text-black'>Selected</p>
            <div className='grid grid-cols-3 gap-[1rem]'></div>
            <HorizontalDivider />
          </FormBody>
          <FormFooter>
            <FormButton onClick={createReview}>Next</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
