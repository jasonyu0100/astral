import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useContext } from 'react';

export default function SpaceJourneyMiddleTitle() {
  const chaptersHandler = useContext(ContextForSpaceChapterList);
  const title = chaptersHandler.state.currentObj?.title || '';

  return <div className='font-extraBold text-lg text-slate-300'>{title}</div>;
}
