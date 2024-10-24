import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { FormTextArea } from '@/components/form/area/main';
import { FormBody } from '@/components/form/body/main';
import { FormButton } from '@/components/form/button/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormInput } from '@/components/form/input/main';
import { FormContainer } from '@/components/form/main';
import { FormSelect } from '@/components/form/select/main';
import { FormTitle } from '@/components/form/title/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { glassFx } from '@/style/data';
import { useContext, useState } from 'react';

export function SpacesBoardAddUpdateModal() {
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [message, changeMessage] = useState('');

  async function addChapterReview() {
    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Update</FormTitle>
          <FormBody>
            <FormInput
              title='Name'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormTextArea
              title='Message'
              rows={5}
              value={message}
              onChange={(e) => changeMessage(e.target.value)}
              style={{ resize: 'none' }}
            />
            <FormSelect title={'Collaborators'}>
              <option>Collaborator A</option>
              <option>Collaborator B</option>
              <option>Collaborator C</option>
            </FormSelect>
            <GlassWindowFrame className='p-[1rem]'>
              <GlassWindowContents className='flex flex-col space-y-[1rem]'>
                <div className='flex flex-col space-y-[1rem]'>
                  {exampleFileElems.map((fileElem) => (
                    <div className='flex flex-row items-center space-x-[1rem] font-bold'>
                      <UserDisplayPictureElement fileElem={fileElem} />
                      <p>First name</p>
                      <p>Last name</p>
                    </div>
                  ))}
                </div>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </FormBody>
          <FormFooter>
            <FormButton onClick={() => addChapterReview()}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
