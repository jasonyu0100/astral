import { ContextForPagable } from '@/logic/contexts/pagination/main';
import { useContext } from 'react';
import { HomeCampaignCreateSpaceModalPageOne } from './page-1/main';
import { HomeCampaignCreateSpaceModalPageTwo } from './page-2/main';

export function HomeCampaignCreateSpaceModalPages() {
  const pagableController = useContext(ContextForPagable);

  return (
    <>
      {pagableController.page === 0 && <HomeCampaignCreateSpaceModalPageOne />}
      {pagableController.page === 1 && <HomeCampaignCreateSpaceModalPageTwo />}
    </>
  );
}
