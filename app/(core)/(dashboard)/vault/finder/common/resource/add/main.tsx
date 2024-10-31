import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import { ContextForVaultFinderModals } from '../../../modals/controller/main';
import { ResourceContainer } from '../container/main';

export function CollectionResourceAdd() {
  const vaultFinderModalsController = useContext(ContextForVaultFinderModals);
  return (
    <div
      className='flex aspect-square w-full cursor-pointer flex-col justify-between space-y-[1rem]'
      onClick={() => {
        vaultFinderModalsController.createResourceController.open();
      }}
    >
      <ResourceContainer>
        <div className='flex h-full w-full items-center justify-center p-[1rem]'>
          <AstralRoundedActionButton>
            <AstralAddIcon className='h-[3rem] w-[3rem]' />
          </AstralRoundedActionButton>
        </div>
      </ResourceContainer>
    </div>
  );
}
