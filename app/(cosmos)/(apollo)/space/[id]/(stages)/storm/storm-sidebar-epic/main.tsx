import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { StormChapterAdd } from './chapters/chapter/add/main';
import { StormChapter } from './chapters/chapter/main';
import { SidebarColumn } from './chapters/main';
import { useContext, useState } from 'react';
import { StormContext } from '../page';
import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';

export function StormSidebar() {
  const { chapters, chapterHandler } = useContext(StormContext);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [showModal, changeShowModal] = useState(false);

  return (
    <>
      <Modal isOpen={showModal} onClose={() => changeShowModal(false)}>
        <FormContainer>
          <FormTitle>Add Chapter</FormTitle>
          <FormBody>
            <FormDescription>Add your chapter here</FormDescription>
            <FormInput
              placeholder='Name'
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
          </FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                chapterHandler.queryCreateChapter(title, description)
                changeShowModal(false);
                alert('Add Chapter');
              }}
            >
              Add Chapter
            </FormButton>
          </FormFooter>
        </FormContainer>
      </Modal>
      <Layer
        displayName={StormSidebar.name}
        sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
        backgroundStyle={backgroundStyles['glass-10']}
        className={`${containerStyles['col-center']} p-[1rem]`}
      >
        <SidebarColumn>
          {chapters.map((chapter) => (
            <StormChapter chapter={chapter} />
          ))}
          <StormChapterAdd onClick={() => changeShowModal(true)}/>
        </SidebarColumn>
      </Layer>
    </>
  );
}
