import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function SpaceMapCollectionAdd() {
  const openableController = useContext(ContextForOpenable);

  return (
    <GlassWindowFrame
      className='aspect-[3/2] w-full flex-shrink-0'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents
        onClick={openableController.open}
        className='flex h-full cursor-pointer items-center justify-center'
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
  );
}
