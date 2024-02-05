import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';
import { useContext, useEffect, useState } from 'react';
import { SpacesContext } from '../../../(stages)/now/page';
import { SpacesModalContext } from '../main';
import { FormSearchImage } from '@/(common)/form/search-image/main';
import { FileObj } from '@/tables/file/main';
import { SelectedImage } from '@/(common)/form/selected-image/main';
import { FormSelect } from '@/(common)/form/select/main';
import { SpaceVariant } from '@/tables/space/main';
import { ChapterTemplate, spaceTemplates } from '@/tables/space/templates/main';
import { Divider } from '@/(common)/divider/main';

export function CreateSpaceModal() {
  const { spacesHandler } = useContext(SpacesContext);
  const { createSpace } = useContext(SpacesModalContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [thumbnail, changeThumbnail] = useState({} as FileObj);
  const [variant, changeVariant] = useState<string>(SpaceVariant.SONG)
  const [chapterTemplates, changeChapterTemplates] = useState([] as ChapterTemplate[])

  useEffect(() => {
    if (variant in spaceTemplates) {
      changeChapterTemplates(spaceTemplates[variant])
    }
  }, [variant])

  return (
    <Modal isOpen={createSpace.opened} onClose={() => createSpace.close()}>
      <FormContainer>
        <FormTitle>Create Space</FormTitle>
        <FormBody>
          <SelectedImage selected={thumbnail}/>
          <FormSearchImage onChange={(file) => changeThumbnail(file)} label="Profile"/>
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
          <Divider/>
          <FormSelect
            title='Type'
            value={variant}
            onChange={(e) => {
              changeVariant(e.target.value)
            }}
          >
            <option value={SpaceVariant.BAR}>
              {SpaceVariant.BAR}
            </option>
            <option value={SpaceVariant.MIX}>
              {SpaceVariant.MIX}
            </option>
            <option value={SpaceVariant.SONG}>
              {SpaceVariant.SONG}
            </option>
            <option value={SpaceVariant.CUSTOM}>
              {SpaceVariant.CUSTOM}
            </option>
          </FormSelect>
          {variant === SpaceVariant.CUSTOM ? <div className="bg-slate-50 w-full p-2 flex flex-col space-y-[1rem]">
            <p className="font-bold text-md overflow-hidden">1. TEST - <span className="font-light w-[100px] overflow-hidden">afsdafdsfasd</span></p>
            <p>CHAPTER</p>
            <p>CHAPTER</p>
            <p>CHAPTER</p>
            <p>CHAPTER</p>
            <p>CHAPTER</p>
            <p>CHAPTER</p>
            <button className="w-full p-[20px] bg-slate-300">
              Add Chapter
            </button>
          </div> : 
          <div className="bg-slate-50 w-full p-2 flex flex-col space-y-[1rem]">
            {chapterTemplates.map((template, index) => (
              <p className="font-bold text-md overflow-hidden">{index+1}. {template.title} - <span className="font-light w-[100px] overflow-hidden">{template.description}</span></p>
            ))}
          </div>
          }
        </FormBody>
        <FormFooter>
          <FormButton
            onClick={() => {
              spacesHandler.queryCreateSpace(title, description, thumbnail, variant);
              createSpace.close();
            }}
          >
            Create
          </FormButton>
        </FormFooter>
      </FormContainer>
    </Modal>
  );
}
