import { containerFx } from '@/(design)/(fx)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { UpdatesPosts } from './main/main';
import { JournalFooter } from './main/footer/main';
import { JournalSearch } from './main/search/main';

export function UpdatesMain() {
  return (
    <div className='h-full flex-grow'>
      <JournalSearch />
      <UpdatesPosts />
    </div>
  );
}
