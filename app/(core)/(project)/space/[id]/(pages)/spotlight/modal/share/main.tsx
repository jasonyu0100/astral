import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { FormBody } from '@/ui/form/body/main';
import { FormButton } from '@/ui/form/button/main';
import { FormFooter } from '@/ui/form/footer/main';
import { FormContainer } from '@/ui/form/main';
import { FormTitle } from '@/ui/form/title/main';
import { PolaroidModal } from '@/ui/modal/polaroid/main';
import { useContext } from 'react';

export function SpaceSpotlightShareReviewModal() {
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
                window.location.href = spaceMap.space.id.chat.link(
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
