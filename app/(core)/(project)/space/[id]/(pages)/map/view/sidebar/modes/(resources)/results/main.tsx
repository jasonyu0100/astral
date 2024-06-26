import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceMapCreateResourceModal } from '../../../../../(modal)/sidebar/resource/main';
import { SpaceMapResourceThumbnail } from './thumbnail/main';

export function SpaceMapResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceMapCreateResourceModal />
      </ContextForOpenable.Provider>
      <div
        className='flex w-full flex-col overflow-auto px-[1rem]'
        style={{ height: 'calc(100% - 4rem - 80px)' }}
      >
        <div className='grid grid-cols-2 gap-[1rem]'>
          {resourceListController.state.objs.map((resource) => (
            <ContextForCollectionResourceObj.Provider value={resource}>
              <SpaceMapResourceThumbnail />
            </ContextForCollectionResourceObj.Provider>
          ))}
          <GlassWindowFrame className='aspect-square w-full'>
            <GlassWindowContents
              className='flex cursor-pointer items-center justify-center'
              onClick={openableController.open}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-1/2 w-1/2'
                viewBox='0 0 25 25'
                fill='none'
              >
                <mask
                  id='mask0_3283_42'
                  maskUnits='userSpaceOnUse'
                  x='0'
                  y='0'
                  width='25'
                  height='25'
                >
                  <rect
                    x='0.588867'
                    y='0.433105'
                    width='24'
                    height='24'
                    fill='#D9D9D9'
                  />
                </mask>
                <g mask='url(#mask0_3283_42)'>
                  <path
                    d='M11.5889 13.4331H5.58887V11.4331H11.5889V5.43311H13.5889V11.4331H19.5889V13.4331H13.5889V19.4331H11.5889V13.4331Z'
                    fill='#CBD5E1'
                  />
                </g>
              </svg>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
      </div>
    </>
  );
}
