import { ContextForGalleryCollectionList } from '@/architecture/controller/gallery/collection/list';
import { ContextForGalleryCollectionObj } from '@/architecture/model/gallery/collection/main';
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

export function VaultFinderEditCollectionModal() {
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const collectionController = useContext(ContextForGalleryCollectionList);
  const collectionObj = useContext(ContextForGalleryCollectionObj);

  async function updateCollection() {
    await collectionController.actions.editActions.edit(collectionObj.id, {
      title,
      description,
    });

    alert('Updating collection');

    openableController.close();
  }

  async function deleteCollection() {
    await collectionController.actions.deleteActions.delete(
      collectionController.state.objId,
    );
    alert('Deleting collection');

    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Edit Collection</AstralModalTitle>
              <AstralTextLineInput
                title='Title'
                placeholder='Enter a title for your collection'
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Description'
                placeholder='Enter a description for your collection'
                rows={5}
                value={description}
                onChange={(e) => changeDescription(e.target.value)}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton
                onClick={() => {
                  updateCollection();
                }}
              >
                <AstralCheckIcon />
              </AstralRoundedActionButton>
              <AstralRoundedActionButton
                className='from-slate-500 to-slate-600'
                onClick={() => {
                  deleteCollection();
                }}
              >
                <AstralDeleteIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
