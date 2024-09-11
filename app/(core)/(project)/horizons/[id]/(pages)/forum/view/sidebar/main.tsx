import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { HorizonForumSidebarItemFooter } from './item/footer/main';
import { HorizonForumSidebarItemHeader, KarmaState } from './item/header/main';
import { HorizonForumSidebarItemMain } from './item/main';

export function HorizonForumSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonForumSidebar.name}
      sizeFx='w-[360px] h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <p className='text-lg font-bold text-slate-300'>Upcoming</p>
      <HorizonForumSidebarItemMain>
        <HorizonForumSidebarItemHeader
          title={'Member shared prank video'}
          karma={KarmaState.Waning}
        />
        <HorizonForumSidebarItemFooter time='Arriving in 5 minutes' />
      </HorizonForumSidebarItemMain>
      <p className='text-md font-light text-slate-300'>Arriving in an hour</p>
      <HorizonForumSidebarItemMain>
        <HorizonForumSidebarItemHeader
          title={'Member posted insightful article on design patterns'}
          karma={KarmaState.Full}
        />
        <HorizonForumSidebarItemFooter time='Posted 2 hours ago' />
      </HorizonForumSidebarItemMain>
      <HorizonForumSidebarItemMain>
        <HorizonForumSidebarItemHeader
          title={'New collaborative project on AI research'}
          karma={KarmaState.Waxing}
        />
        <HorizonForumSidebarItemFooter time='Started 1 day ago' />
      </HorizonForumSidebarItemMain>
      <HorizonForumSidebarItemMain>
        <HorizonForumSidebarItemHeader
          title={'User asked for help with debugging issue'}
          karma={KarmaState.Half}
        />
        <HorizonForumSidebarItemFooter time='Resolved 30 minutes ago' />
      </HorizonForumSidebarItemMain>

      <p className='text-md font-light text-slate-300'>Arriving in a day</p>
      <HorizonForumSidebarItemMain>
        <HorizonForumSidebarItemHeader
          title={'Discussion on sustainable coding practices'}
          karma={KarmaState.Waning}
        />
        <HorizonForumSidebarItemFooter time='Ongoing for 2 days' />
      </HorizonForumSidebarItemMain>
      <HorizontalDivider />
      <br />
      <p className='text-lg font-bold text-slate-300'>Recently Posted</p>
      <HorizonForumSidebarItemMain>
        <HorizonForumSidebarItemHeader
          title={'Member shared creative artwork'}
          karma={KarmaState.New}
        />
        <HorizonForumSidebarItemFooter time='Just now' />
      </HorizonForumSidebarItemMain>
      <HorizontalDivider />
    </GlassAreaContainer>
  );
}
