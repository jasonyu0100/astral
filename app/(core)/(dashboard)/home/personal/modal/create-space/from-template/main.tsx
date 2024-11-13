import { LoadingWrapper } from '@/components/loading/controller/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import {
  ContextForPagable,
  useControllerForPagable,
} from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { ContextForHomePersonalCreateSpace } from '../controller/main';
import { HomePersonalCreateSpaceModalFooter } from './footer/main';
import { HomePersonalCreateSpaceModalPages } from './pages/main';

export function HomePersonalCreateSpaceModalView() {
  const pagableController = useControllerForPagable();
  const createSpaceController = useContext(ContextForHomePersonalCreateSpace);

  return (
    <ContextForPagable.Provider value={pagableController}>
      <LoadingWrapper>
        <AstralModal>
          <AstralModalBodyWrapper>
            <AstralModalBody>
              <AstralModalBodyContents>
                <AstralModalTitle>
                  {createSpaceController.state.category}
                </AstralModalTitle>
                <HomePersonalCreateSpaceModalPages />
              </AstralModalBodyContents>
              <AstralModalBodyAction>
                <HomePersonalCreateSpaceModalFooter />
              </AstralModalBodyAction>
            </AstralModalBody>
          </AstralModalBodyWrapper>
        </AstralModal>
      </LoadingWrapper>
    </ContextForPagable.Provider>
  );
}
