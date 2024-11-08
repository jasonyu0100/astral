import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForSpacesPersonalModals } from '../../modal/controller/main';
import { HomePersonalHeaderAdd } from './add/main';
import { HomePersonalHeaderInfo } from './info/main';

export function HomePersonalHeader() {
  const spacesPersonalModals = useContext(ContextForSpacesPersonalModals);

  return (
    <>
      <GlassWindowFrame
        className='w-full p-[1rem] px-[4rem]'
        name={HomePersonalHeader.name}
      >
        <GlassWindowContents className='flex flex-row items-center'>
          <HomePersonalHeaderInfo />
          <HomePersonalHeaderAdd
            onClick={() => {
              spacesPersonalModals.createSpaceController.open();
            }}
          />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </>
  );
}
