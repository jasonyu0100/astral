import { AstralBackIndicatorIcon } from '@/icons/back/main';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapDirectoryMode,
} from '../../../../../../controller/map/main';

export function SpaceMapBack() {
  const {
    actions: { updateDirectoryMode },
  } = useContext(ContextForSpaceMap);

  return (
    <div className='absolute right-[1rem] top-[1rem] z-50 flex h-[4rem] w-[4rem] flex-col items-center justify-center'>
      <AstralBackIndicatorIcon
        className='h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-500'
        onClick={() => updateDirectoryMode(SpaceMapDirectoryMode.DIRECTORY)}
      />
    </div>
  );
}
