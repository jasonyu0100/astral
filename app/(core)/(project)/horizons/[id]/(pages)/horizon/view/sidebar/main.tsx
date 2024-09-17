import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { HorizonHorizonSidebarItemFooter } from './item/footer/main';
import {
  HorizonHorizonSidebarItemHeader,
  KarmaState,
} from './item/header/main';
import { HorizonHorizonSidebarItemMain } from './item/main';

export function HorizonHorizonSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonHorizonSidebar.name}
      sizeFx='w-[360px] h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <p className='text-xl font-bold text-slate-300'>Upcoming</p>
      <p className='text-md font-light text-slate-300'>Arriving soon</p>
      <HorizonHorizonSidebarItemMain>
        <HorizonHorizonSidebarItemHeader
          title={'It was just a prank bro'}
          karma={KarmaState.Waning}
        />
        <HorizonHorizonSidebarItemFooter time='Arriving in 5 minutes' />
      </HorizonHorizonSidebarItemMain>
      <HorizontalDivider />
      <p className='text-md font-light text-slate-300'>Arriving in an hour</p>
      <HorizonHorizonSidebarItemMain>
        <HorizonHorizonSidebarItemHeader
          title={'Member posted insightful article on design patterns'}
          karma={KarmaState.Full}
        />
        <HorizonHorizonSidebarItemFooter time='Posted 2 hours ago' />
      </HorizonHorizonSidebarItemMain>
      <HorizonHorizonSidebarItemMain>
        <HorizonHorizonSidebarItemHeader
          title={'New collaborative project on AI research'}
          karma={KarmaState.Waxing}
        />
        <HorizonHorizonSidebarItemFooter time='Started 1 day ago' />
      </HorizonHorizonSidebarItemMain>
      <HorizonHorizonSidebarItemMain>
        <HorizonHorizonSidebarItemHeader
          title={'User asked for help with debugging issue'}
          karma={KarmaState.Half}
        />
        <HorizonHorizonSidebarItemFooter time='Resolved 30 minutes ago' />
      </HorizonHorizonSidebarItemMain>
      <HorizontalDivider />

      <p className='text-md font-light text-slate-300'>Arriving in a day</p>
      <HorizonHorizonSidebarItemMain>
        <HorizonHorizonSidebarItemHeader
          title={'Discussion on sustainable coding practices'}
          karma={KarmaState.Waning}
        />
        <HorizonHorizonSidebarItemFooter time='Ongoing for 2 days' />
      </HorizonHorizonSidebarItemMain>
      <HorizontalDivider />
      <br />
      <p className='text-xl font-bold text-slate-300'>Recent</p>
      <HorizonHorizonSidebarItemMain>
        <HorizonHorizonSidebarItemHeader
          title={'Member shared creative artwork'}
          karma={KarmaState.New}
        />
        <HorizonHorizonSidebarItemFooter time='Just now' />
      </HorizonHorizonSidebarItemMain>
      <HorizontalDivider />
    </GlassAreaContainer>
  );
}
