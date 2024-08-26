import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { FormTextArea } from '@/ui/(form)/area/main';
import { FormBody } from '@/ui/(form)/body/main';
import { FormButton } from '@/ui/(form)/button/main';
import { FormFooter } from '@/ui/(form)/footer/main';
import { FormInput } from '@/ui/(form)/input/main';
import { FormContainer } from '@/ui/(form)/main';
import { FormTitle } from '@/ui/(form)/title/main';
import { PolaroidModal } from '@/ui/(modal)/polaroid/main';
import { useContext, useState } from 'react';

export function SpaceIdeaAddAttachmentModal() {
  const openableController = useContext(ContextForOpenable);
  const [title, changeTitle] = useState('');
  const [description, changeDescription] = useState('');

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Add Attachement</FormTitle>
          <FormBody>
            <FormInput
              placeholder='Name'
              title='Name'
              value={title}
              onChange={(e) => changeTitle(e.target.value)}
            />
            <FormTextArea
              title='Objective'
              rows={5}
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              style={{ resize: 'none' }}
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
