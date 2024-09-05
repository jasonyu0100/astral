import { ContextForSpotlightCommentList } from '@/(server)/controller/space/chapter/spotlight/comment/list';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpaceSpotlightInput } from './input/main';
import { SpaceSpotlightList } from './list/main';

export function SpaceSpotlightComments() {
  const commentListController = useContext(ContextForSpotlightCommentList);
  return (
    <GlassWindowFrame className='flex h-full w-full border-slate-300 border-opacity-30'>
      <GlassWindowContents className='flex w-full flex-col space-y-[1rem] px-[4rem] py-[2rem]'>
        <SpaceSpotlightInput />
        <br />
        <HorizontalDivider />
        <br />
        <p className='text-xl font-bold text-slate-500'>
          Comments ({commentListController.state.objs.length})
        </p>
        <br />
        <SpaceSpotlightList />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
