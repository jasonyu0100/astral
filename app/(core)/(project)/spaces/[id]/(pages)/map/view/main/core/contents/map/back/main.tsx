import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapDirectoryMode,
} from '../../../../../../controller/main';

export function SpacesMapBack() {
  const {
    actions: { updateDirectoryMode },
  } = useContext(ContextForSpacesMap);

  return (
    <div className='absolute left-[2rem] top-[2rem] z-50 flex h-[4rem] w-[4rem] flex-col items-center justify-center'>
      <AstralBackIndicatorIcon
        className='h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-500'
        onClick={() => updateDirectoryMode(SpacesMapDirectoryMode.DIRECTORY)}
      />
    </div>
  );
}
