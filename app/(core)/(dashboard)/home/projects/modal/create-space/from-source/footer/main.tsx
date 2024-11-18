import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { ContextForLoading } from '@/components/loading/controller/main';
import { AstralArrowBackIcon } from '@/icons/arrow-back/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { ContextForHomeProjectsCreateSpace } from '../../controller/main';

export function HomeProjectsCreateFromSourceModalFooter() {
  const loadingController = useContext(ContextForLoading);
  const pagableController = useContext(ContextForPagable);
  const openableController = useContext(ContextForOpenable);
  const createSpaceController = useContext(ContextForHomeProjectsCreateSpace);

  function renderFooter() {
    switch (pagableController.page) {
      case 0:
        return (
          <>
            <AstralRoundedActionButton
              onClick={() => {
                loadingController.loadingController.open();
                createSpaceController.actions
                  .createChaptersFromSource()
                  .then(() => {
                    pagableController.updatePage(1);
                    loadingController.loadingController.close();
                  });
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
                  .createSpaceFromSource()
                  .then((spaceObj) => {
                    openableController.close();
                    window.location.href = liveMap.live.link(spaceObj.id);
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
