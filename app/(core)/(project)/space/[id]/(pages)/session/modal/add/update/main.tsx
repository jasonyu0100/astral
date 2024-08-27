import { exampleFileElems } from '@/(server)/model/elements/file/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { glassFx } from '@/style/data';
import { UserDpElement } from '@/ui/element/user/main';
import { FormTextArea } from '@/ui/form/area/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormInput } from '@/ui/form/input/main';
import { FormContainer } from '@/ui/form/main';
import { FormSelect } from '@/ui/form/select/main';
import { FormTitle } from '@/ui/form/title/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext, useState } from 'react';

export function SpaceSessionAddUpdateModal() {
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [message, changeMessage] = useState('');

  async function addChapterSession() {
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
                      <UserDpElement fileElem={fileElem} />
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
            <FormButton onClick={() => addChapterSession()}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
