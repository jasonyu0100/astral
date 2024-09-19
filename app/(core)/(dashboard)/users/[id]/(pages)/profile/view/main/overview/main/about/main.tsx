import { useControllerForSpotlightAttachmentListFromUser } from '@/(server)/controller/space/chapter/spotlight/attachment/list-from-user';
import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { UserProfileWorkItem } from './popular/item/main';
import { UserProfileRowWrapper } from './popular/wrapper/main';

export function UserProfileOverviewAbout() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const attachmentListController =
    useControllerForSpotlightAttachmentListFromUser(loggedInUser.id);

  return (
    <div className='flex w-full flex-col space-y-[2rem]'>
      <p className='text-2xl font-bold text-slate-300'>Spotlight</p>
      <HorizontalDivider />
      <GlassWindowFrame className='w-full'>
        <GlassWindowContents className='flex flex-col items-center divide-y-[1px] divide-slate-500 divide-opacity-30'>
          <UserProfileRowWrapper>
            <UserProfileWorkItem />
          </UserProfileRowWrapper>
          <UserProfileRowWrapper>
            <UserProfileWorkItem />
          </UserProfileRowWrapper>
          <UserProfileRowWrapper>
            <UserProfileWorkItem />
          </UserProfileRowWrapper>
          <UserProfileRowWrapper>
            <UserProfileWorkItem />
          </UserProfileRowWrapper>
          <UserProfileRowWrapper>
            <UserProfileWorkItem />
          </UserProfileRowWrapper>
        </GlassWindowContents>
      </GlassWindowFrame>
      <p className='text-2xl font-bold text-slate-300'>Gallery</p>
      <HorizontalDivider />
      <GlassWindowFrame className='w-full' roundedFx={roundedFx.rounded}>
        <GlassWindowContents className='flex w-full flex-col'>
          <div className='grid grid-cols-7 gap-[1rem]'>
            {attachmentListController.state.objs
              .filter(
                (attachment) => ElementVariant.FILE === attachment.variant,
              )
              .map((attachment) => (
                <img
                  className='aspect-square h-full w-full bg-black'
                  src={attachment.fileElem?.src}
                />
              ))}
          </div>
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
