import { AstralAddIcon } from '@/icons/add/main';
import { AstralRemoveIcon } from '@/icons/remove/main';
import { useContext } from 'react';
import { ContextForSpacesSpace } from '../../../../../../controller/main';

export function SpacesSpaceZoom() {
  const spacesSpaceController = useContext(ContextForSpacesSpace);

  return (
    <div className='absolute right-[2rem] top-[2rem] z-30 flex w-[4rem] flex-col items-center justify-center'>
      <div className='flex flex-col items-center space-y-[1rem] rounded-full bg-slate-500 bg-opacity-30 p-[1rem]'>
        <AstralAddIcon
          onClick={() => {
            if (spacesSpaceController.state.zoom >= 0.9) return;
            spacesSpaceController.actions.updateZoom(
              spacesSpaceController.state.zoom + 0.1,
            );
          }}
        />
        <p className='text-lg font-bold text-slate-500'>
          {Math.round(spacesSpaceController.state.zoom * 100)}%
        </p>
        <AstralRemoveIcon
          onClick={() => {
            if (spacesSpaceController.state.zoom <= 0.2) return;
            spacesSpaceController.actions.updateZoom(
              spacesSpaceController.state.zoom - 0.1,
            );
          }}
        />
      </div>
    </div>
  );
}
