import { AstralRoundedActionButton } from '@/components/button/action/main';
import { FileSearchImage } from '@/components/form/file/search-image/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ContextForSpaceMain } from '@/server/controller/space/main';
import {
  exampleFileElement,
  FileElement,
} from '@/server/model/elements/file/main';
import { useContext, useEffect, useState } from 'react';

export function SpacesPagesEditSpaceModal() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');
  const [thumbnail, setThumbnail] = useState<FileElement>(exampleFileElement);

  useEffect(() => {
    if (spaceMainController.state.obj) {
      setTitle(spaceMainController.state.obj.title);
      setDescription(spaceMainController.state.obj.description);
      setObjective(spaceMainController.state.obj.objective);
      setThumbnail(spaceMainController.state.obj.thumbnail);
    }
  }, [spaceMainController.state.obj]);

  async function editSpace() {
    const payload = {
      ...spaceMainController.state.obj,
      title,
      description,
      objective,
      thumbnail,
    };
    await spaceMainController.actions.editActions.edit(payload);
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <AstralModalTitle>Edit Space</AstralModalTitle>
              <FileSearchImage
                fileElem={thumbnail}
                onChange={(file) => setThumbnail(file)}
                label='Theme'
              />
              <AstralTextLineInput
                title='Title'
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <AstralTextAreaInput
                title='Objective'
                placeholder='Enter objective'
                rows={5}
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                style={{ resize: 'none' }}
              />
              <AstralTextAreaInput
                title='Description'
                placeholder='Enter description'
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ resize: 'none' }}
              />
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={editSpace}>
                <AstralArrowForwardIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
