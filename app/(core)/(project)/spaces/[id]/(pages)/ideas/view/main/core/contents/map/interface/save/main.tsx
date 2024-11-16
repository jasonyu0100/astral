import { ContextForSpacesIdeas } from '@/(core)/(project)/spaces/[id]/(pages)/ideas/controller/main';
import { AstralSaveIcon } from '@/icons/save/main';
import { useContext } from 'react';

export function SpacesIdeasSave() {
  const spacesSpaceController = useContext(ContextForSpacesIdeas);
  return (
    <div className='absolute bottom-[2rem] right-[2rem] z-30 flex w-[4rem] flex-col items-center justify-center'>
      <div
        className='flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-full bg-blue-500'
        onClick={() => spacesSpaceController.actions.saveItemsAction()}
      >
        <AstralSaveIcon className='h-[2rem] w-[2rem]' />
      </div>
    </div>
  );
}
