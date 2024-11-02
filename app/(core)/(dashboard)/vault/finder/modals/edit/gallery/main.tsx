import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { ContextForGalleryObj } from '@/architecture/model/gallery/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext, useState } from 'react';

export function VaultFinderEditGalleryModal() {
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const galleryObj = useContext(ContextForGalleryObj);
  const galleryController = useContext(ContextForGalleryList);
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  async function updateGallery() {
    await galleryController.actions.editActions.edit(galleryObj.id, {
      title,
      description,
    });

    alert('Updating gallery');

    openableController.close();
  }

  async function deleteGallery() {
    if (loggedInUser.journalId !== galleryObj.id) {
      await galleryController.actions.deleteActions.delete(galleryObj.id);
      alert('Deleting gallery');
    } else {
      alert('Cannot delete journal');
    }

    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Edit Gallery</AstralModalTitle>
              <AstralTextLineInput
                title='Title'
                placeholder='Enter a title for your gallery'
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Description'
                placeholder='Enter a description for your gallery'
                rows={5}
                value={description}
                onChange={(e) => changeDescription(e.target.value)}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton
                onClick={() => {
                  updateGallery();
                }}
              >
                <AstralCheckIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
            <AstralRoundedActionButton
              onClick={() => {
                deleteGallery();
              }}
            >
              <AstralDeleteIcon />
            </AstralRoundedActionButton>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
