import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  exampleFileElement,
  FileElement,
} from '@/architecture/model/elements/file/main';
import { SpaceVisibility } from '@/architecture/model/space/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralSearchImage } from '@/components/form/search-image/main';
import { AstralTextAreaInput } from '@/components/input/area/main';
import { AstralTextLineInput } from '@/components/input/line/main';
import { AstralSelectInput } from '@/components/input/select/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext, useEffect, useState } from 'react';

export function SpacesChannelEditSpaceModal() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objective, setObjective] = useState('');
  const [thumbnail, setThumbnail] = useState<FileElement>(exampleFileElement);
  const [visibility, setVisibility] = useState<SpaceVisibility>(
    SpaceVisibility.PUBLIC,
  );

  useEffect(() => {
    if (spaceMainController.state.obj) {
      setTitle(spaceMainController.state.obj.title);
      setDescription(spaceMainController.state.obj.description);
      setObjective(spaceMainController.state.obj.objective);
      setThumbnail(spaceMainController.state.obj.thumbnail);
      setVisibility(
        spaceMainController.state.obj.visibility as SpaceVisibility,
      );
    }
  }, [spaceMainController.state.obj]);

  async function editSpace() {
    const payload = {
      ...spaceMainController.state.obj,
      title,
      description,
      objective,
      thumbnail,
      visibility,
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
              <AstralSearchImage
                fileElem={thumbnail}
                onChange={(file) => setThumbnail(file)}
                label='Thumbnail'
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
              />{' '}
              <div className='flex flex-row space-x-[1rem]'>
                <AstralSelectInput
                  value={visibility}
                  onChange={(e) =>
                    setVisibility(e.target.value as SpaceVisibility)
                  }
                >
                  <option value={SpaceVisibility.PUBLIC}>Public</option>
                  <option value={SpaceVisibility.PRIVATE}>Private</option>
                </AstralSelectInput>
              </div>
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              <AstralRoundedActionButton onClick={editSpace}>
                <AstralCheckIcon />
              </AstralRoundedActionButton>
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
