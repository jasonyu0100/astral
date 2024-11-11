import { ContextForSpacesSpace } from '@/(core)/(project)/spaces/[id]/(pages)/space/controller/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralRemoveIcon } from '@/icons/remove/main';
import { useContext } from 'react';

export function SpacesSpaceZoom() {
  const spacesSpaceController = useContext(ContextForSpacesSpace);

  return (
    <div className='absolute right-[2rem] top-[2rem] z-30 flex w-[4rem] flex-col items-center justify-center'>
      <div className='flex flex-col items-center space-y-[1rem] rounded-full bg-slate-400 bg-opacity-30 p-[1rem]'>
        <AstralAddIcon
          onClick={() => {
            if (spacesSpaceController.state.zoom >= 1.5) return;
            spacesSpaceController.actions.updateZoom(
              spacesSpaceController.state.zoom + 0.05,
            );
          }}
        />
        <p className='text-lg font-bold text-slate-400'>
          {Math.round(spacesSpaceController.state.zoom * 100)}%
        </p>
        <AstralRemoveIcon
          onClick={() => {
            if (spacesSpaceController.state.zoom <= 0.2) return;
            spacesSpaceController.actions.updateZoom(
              spacesSpaceController.state.zoom - 0.05,
            );
          }}
        />
      </div>
    </div>
  );
}
