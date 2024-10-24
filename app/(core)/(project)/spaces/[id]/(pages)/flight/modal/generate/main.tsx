import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { FormBody } from '@/components/form/body/main';
import { FormButton } from '@/components/form/button/main';
import { FormFooter } from '@/components/form/footer/main';
import { FormContainer } from '@/components/form/main';
import { FormTitle } from '@/components/form/title/main';
import { PolaroidModal } from '@/components/modal/polaroid/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';

export function SpacesFlightShareReviewModal() {
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <PolaroidModal>
        <FormContainer>
          <FormTitle>Share Review</FormTitle>
          <FormBody></FormBody>
          <FormFooter>
            <FormButton
              onClick={() => {
                window.location.href = spacesMap.spaces.id.conversation.link(
                  spaceController.state.objId,
                );
              }}
            >
              Copy
            </FormButton>
          </FormFooter>
        </FormContainer>
      </PolaroidModal>
    </ContextForOpenable.Provider>
  );
}
