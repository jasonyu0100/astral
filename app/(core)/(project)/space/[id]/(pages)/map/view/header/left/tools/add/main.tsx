import { SpaceMapAddFileIdeaModal } from '@/(core)/(project)/space/[id]/(pages)/map/(modal)/add/idea/file/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { SvgInputProps } from '@/(types)/props/main';

export function SpaceMapAddIcon({ ...props }: SvgInputProps) {
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SpaceMapAddFileIdeaModal />
      </ContextForOpenable.Provider>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-[1.5rem] w-[1.5rem] cursor-pointer'
        viewBox='0 0 24 24'
        fill='none'
        onClick={openableController.open}
      >
        <mask
          id='mask0_3261_5797'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
        >
          <rect width='24' height='24' fill='#D9D9D9' />
        </mask>
        <g mask='url(#mask0_3261_5797)'>
          <path d='M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z' fill='#CBD5E1' />
        </g>
      </svg>
    </>
  );
}
