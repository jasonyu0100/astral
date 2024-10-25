import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { useContext } from 'react';
import {
  ContextForSpacesView,
  SpacesViewDirectoryMode,
} from '../../../../../../../controller/main';

export function SpacesViewBack() {
  const {
    actions: { updateDirectoryMode },
  } = useContext(ContextForSpacesView);

  return (
    <div className='absolute left-[2rem] top-[2rem] z-30 flex h-[4rem] w-[4rem] flex-col items-center justify-center'>
      <AstralBackIndicatorIcon
        className='h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-500'
        onClick={() => updateDirectoryMode(SpacesViewDirectoryMode.DIRECTORY)}
      />
    </div>
  );
}
