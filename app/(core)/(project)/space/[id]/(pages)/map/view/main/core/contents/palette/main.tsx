import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForSpaceMap } from '../../../../../controller/map/main';
import { AddIcon } from './icons/add/main';
import { FileIcon } from './icons/file/main';
import { GenerateIcon } from './icons/generate/main';
import { LinkIcon } from './icons/link/main';
import { TextIcon } from './icons/text/main';

export function SpaceMapCoreContentsPalette() {
  const mapController = useContext(ContextForSpaceMap);
  const ideaController = useContext(ContextForSceneIdeaList);

  return (
    <GlassWindowFrame
      className='w-full py-[2rem]'
      roundedFx={roundedFx['rounded-full']}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='flex flex-col items-center justify-center space-y-[1rem]'>
        {mapController.selectedIdea === null ? (
          <>
            <AddIcon />
            <TextIcon />
            <FileIcon />
            <LinkIcon />
            <GenerateIcon />
          </>
        ) : (
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 -960 960 960'
              width='24px'
              className='fill-slate-300'
              onClick={() => {
                if (mapController.selectedIdea !== null) {
                  ideaController.actions.deleteActions.delete(
                    mapController.selectedIdea.id,
                  );
                  mapController.updateSelectedIdea(null);
                }
              }}
              fill='#e8eaed'
            >
              <path d='M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z' />
            </svg>
          </>
        )}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
