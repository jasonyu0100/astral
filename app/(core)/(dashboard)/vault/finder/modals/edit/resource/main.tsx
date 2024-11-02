import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralDeleteIcon } from '@/icons/delete/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext, useState } from 'react';

export function VaultFinderEditResourceModal() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  const openableController = useContext(ContextForOpenable);
  const resourceObj = useContext(ContextForCollectionResourceObj);
  const [title, changeTitle] = useState(resourceObj.title);
  const [description, changeDescription] = useState(resourceObj.description);

  const updateResource = async () => {
    await resourceListController.actions.editActions.edit(resourceObj.id, {
      title,
      description,
    });
    alert('Updating resource');
    openableController.close();
  };

  const deleteResource = async () => {
    await resourceListController.actions.deleteActions.delete(resourceObj.id);
    alert('Deleting resource');
    openableController.close();
  };

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Edit Resource</AstralModalTitle>
              <AstralTextLineInput
                title='Title'
                placeholder='Enter a title for your media'
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Description'
                placeholder='Enter a description for your media'
                value={description}
                onChange={(e) => changeDescription(e.target.value)}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={() => updateResource()}>
                <AstralSaveIcon />
              </AstralRoundedActionButton>
              <AstralRoundedActionButton onClick={() => deleteResource()}>
                <AstralDeleteIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
