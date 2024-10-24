import { FormBody } from '@/components/form/body/main';
import { FormButton } from '@/components/form/button/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormInput } from '@/components/form/input/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext, useState } from 'react';

export function SpacesConversationAddAttachmentModal() {
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Attachment</FormTitle>
          <FormBody>
            <FormInput
              title='Name'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
          </FormBody>
          <FormFooter>
            <FormButton onClick={() => {}}>Add</FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
