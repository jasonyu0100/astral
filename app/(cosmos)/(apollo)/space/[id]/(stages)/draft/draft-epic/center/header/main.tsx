import { Layer } from '@/(common)/layer/main';
import { containerStyles, borderStyles } from '@/(common)/styles/data';
import { constellationTable } from '@/tables/draft/table';
import { DraftHeaderAddButton } from './add/main';
import { DraftHeaderListButton } from './left/list/main';
import DraftHeaderTitle from './title/main';
import { DraftHeaderLeft } from './left/main';
import { DraftHeaderRight } from './right/main';
import { useContext, useState } from 'react';
import { DraftContext } from '../../../page';
import { FormTextArea } from '@/(common)/form/area/main';
import { FormBody } from '@/(common)/form/body/main';
import { FormButton } from '@/(common)/form/button/main';
import { FormDescription } from '@/(common)/form/description/main';
import { FormFooter } from '@/(common)/form/footer/main';
import { FormInput } from '@/(common)/form/input/main';
import { FormContainer } from '@/(common)/form/main';
import { FormTitle } from '@/(common)/form/title/main';
import { Modal } from '@/(common)/modal/main';

export function DraftHeader() {
  const { chapter, constellation, constellationHandler } =
    useContext(DraftContext);
  const headerTitle =
    constellation && chapter
      ? `${constellation.title} - ${chapter.title}`
      : 'None';

  
      
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');
  const [showModal, changeShowModal] = useState(false);

  return (
    <>      
    <Modal isOpen={showModal} onClose={() => changeShowModal(false)}>
        <FormContainer>
          <FormTitle>Create Constellation</FormTitle>
          <FormBody>
            <FormDescription>Add your constellation here</FormDescription>
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
                constellationHandler.queryCreateConstellation(title, description).then((constellation: any) => constellationHandler.addConstellation(constellation))
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
      displayName={DraftHeader.name}
      sizeStyle='h-[50px] w-full flex-shrink-0'
      className={`${containerStyles['row-center']} px-[1rem] space-x-[1rem] justify-between`}
      borderStyle={borderStyles['border-b']}
    >
      <DraftHeaderLeft>
        <DraftHeaderListButton />
      </DraftHeaderLeft>
      <div className='flex flex-row justify-center w-1/3'>
        <DraftHeaderTitle>{headerTitle}</DraftHeaderTitle>
      </div>
      <DraftHeaderRight>
        <DraftHeaderAddButton
          onClick={() => {
            changeShowModal(true)
          }}
        />
      </DraftHeaderRight>
    </Layer>
    </>
  );
}
