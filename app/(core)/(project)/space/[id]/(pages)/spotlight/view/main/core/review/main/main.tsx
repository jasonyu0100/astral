import { ContextForSpotlightAttachmentList } from '@/(server)/controller/space/chapter/spotlight/attachment/list';
import { ContextForSpotlightLinkList } from '@/(server)/controller/space/chapter/spotlight/link/list';
import { ContextForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForSpotlightLinkObj } from '@/(server)/model/space/chapter/spotlight/link/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { Carousel } from './carousel/main';
import { SpaceSpotlightLog } from './log/main';

export function SpaceSpotlightMain() {
  const spotlightListController = useContext(ContextForChapterSpotlightList);
  const attachmentListController = useContext(
    ContextForSpotlightAttachmentList,
  );
  const linkListController = useContext(ContextForSpotlightLinkList);
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  return (
    <div className='flex flex-col space-y-[2rem] p-[4rem]'>
      <div className='flex w-full flex-row space-x-[4rem]'>
        <div className='flex h-full w-full flex-row items-center space-x-[2rem]'>
          <Carousel
            images={attachmentListController.state.objs.map(
              (obj) => obj.fileElem?.src || '',
            )}
          />
        </div>
        <div className='flex max-h-[600px] w-[400px] flex-shrink-0 flex-col space-y-[1rem] overflow-auto'>
          {linkListController.state.objs.map((link) => (
            <ContextForSpotlightLinkObj.Provider value={link}>
              <SpaceSpotlightLog />
            </ContextForSpotlightLinkObj.Provider>
          ))}
        </div>
      </div>
      <div className='flex w-full flex-col justify-between space-y-[1rem]'>
        <div className='flex flex-row items-center space-x-[1rem]'>
          <img
            className='aspect-square h-[3rem] rounded-full'
            src={loggedInUser.dp?.src || exampleFileElem.src}
          />
          <p className='text-2xl font-bold text-slate-300'>
            {spotlightListController.state.currentObj?.title || 'Untitled'}
          </p>
        </div>
        <p className='text-xl text-slate-300'>
          {spotlightListController.state.currentObj?.description ||
            'No description'}
        </p>
        <div className='space-y-[0.5rem]'>
          <p className=' text-sm font-light text-white'>
            {getFormattedDate(
              new Date(spotlightListController.state.currentObj?.created ?? ''),
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
