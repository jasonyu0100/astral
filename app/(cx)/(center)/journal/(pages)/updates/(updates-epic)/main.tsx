import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { UpdatesPosts } from './main/main';
import { JournalSearch } from './main/search/main';
import { JournalFooter } from './main/footer/main';

export function UpdatesMain() {
  return (
    <GlassAreaContainer
      name={UpdatesMain.name}
      sizeFx='h-full flex-grow'
      className='flex flex-col'
    >
      <JournalSearch />
      <UpdatesPosts />
      <JournalFooter />
    </GlassAreaContainer>
  );
}
