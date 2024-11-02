import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
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
import {
  ContextForFileChangable,
  useControllerForFileChangable,
} from '@/logic/contexts/fileChangable/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { useContext, useState } from 'react';

export function SpacesSceneAddGalleryModal() {
  const user = useGlobalUser((state) => state.user);
  const openableController = useContext(ContextForOpenable);
  const galleryListController = useContext(ContextForGalleryList);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const fileChangableController = useControllerForFileChangable();

  async function createGallery() {
    galleryListController.actions.createActions
      .createGallery(
        user.id,
        title,
        description,
        fileChangableController.fileElem,
      )
      .then(() => {
        openableController.close();
      });
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <ContextForFileChangable.Provider value={fileChangableController}>
        <AstralModal>
          <AstralModalBodyWrapper>
            <AstralModalBody>
              <AstralModalBodyContents>
                <AstralModalTitle>Create Gallery</AstralModalTitle>
                <AstralTextLineInput
                  title='Title'
                  placeholder='Enter title'
                  value={title}
                  onChange={(e) => changeTitle(e.target.value)}
                />
                <AstralTextAreaInput
                  title='Description'
                  rows={5}
                  placeholder='Enter description'
                  value={description}
                  onChange={(e) => changeDescription(e.target.value)}
                  style={{ resize: 'none' }}
                />
              </AstralModalBodyContents>
              <AstralModalBodyAction>
                <AstralRoundedActionButton onClick={createGallery}>
                  <AstralArrowForwardIcon />
                </AstralRoundedActionButton>
              </AstralModalBodyAction>
            </AstralModalBody>
          </AstralModalBodyWrapper>
        </AstralModal>
      </ContextForFileChangable.Provider>
    </ContextForOpenable.Provider>
  );
}
