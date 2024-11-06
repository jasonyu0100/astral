import { AstralSaveIcon } from '@/icons/save/main';
import { useContext } from 'react';
import { ContextForSpacesSpace } from '../../../../../../controller/main';

export function SpacesSpaceSave() {
  const spacesSpaceController = useContext(ContextForSpacesSpace);
  return (
    <div className='absolute bottom-[2rem] right-[2rem] z-30 flex w-[4rem] flex-col items-center justify-center'>
      <div
        className='flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-full bg-blue-500'
        onClick={() => spacesSpaceController.actions.saveAll()}
      >
        <AstralSaveIcon className='h-[2rem] w-[2rem]' />
      </div>
    </div>
  );
}
