import { LoadingWrapper } from '@/components/loading/controller/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { CreateSpaceModalFooter } from './footer/main';
import { CreateSpaceModalPages } from './pages/main';

export function CreateSpaceModalView() {
  const pagableController = useContext(ContextForPagable);
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <ContextForPagable.Provider value={pagableController}>
        <LoadingWrapper>
          <AstralModal>
            <AstralModalBodyWrapper>
              <AstralModalBody>
                <AstralModalBodyContents>
                  <AstralModalTitle>Create Space</AstralModalTitle>
                  <CreateSpaceModalPages />
                </AstralModalBodyContents>
                <AstralModalBodyAction>
                  <CreateSpaceModalFooter />
                </AstralModalBodyAction>
              </AstralModalBody>
            </AstralModalBodyWrapper>
          </AstralModal>
        </LoadingWrapper>
      </ContextForPagable.Provider>
    </ContextForOpenable.Provider>
  );
}
