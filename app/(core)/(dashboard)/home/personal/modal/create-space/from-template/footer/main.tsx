import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import { AstralArrowBackIcon } from '@/icons/arrow-back/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { ContextForHomePersonalCreateSpace } from '../../controller/main';

export function HomePersonalCreateSpaceModalFooter() {
  const loadingController = useContext(ContextForLoading);
  const pagableController = useContext(ContextForPagable);
  const openableController = useContext(ContextForOpenable);
  const createSpaceController = useContext(ContextForHomePersonalCreateSpace);

  function renderFooter() {
    switch (pagableController.page) {
      case 0:
        return (
          <>
            <AstralRoundedActionButton
              onClick={() => {
                pagableController.updatePage(1);
              }}
            >
              <AstralArrowForwardIcon />
            </AstralRoundedActionButton>
          </>
        );
      case 1: {
        return (
          <>
            <AstralRoundedActionButton
              className='bg-gradient-to-br from-slate-400 to-slate-400'
              onClick={() => {
                pagableController.updatePage(0);
              }}
            >
              <AstralArrowBackIcon />
            </AstralRoundedActionButton>
            <AstralRoundedActionButton
              onClick={() => {
                loadingController.loadingController.open();
                createSpaceController.actions
                  .createSpaceFromTemplate()
                  .then((spaceObj) => {
                    openableController.close();
                    window.location.href = spacesMap.spaces.id.focus.link(
                      spaceObj.id,
                    );
                    loadingController.loadingController.close();
                  });
              }}
            >
              <AstralCheckIcon />
            </AstralRoundedActionButton>
          </>
        );
      }
    }
  }

  return <>{renderFooter()}</>;
}
