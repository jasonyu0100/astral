import { SpacesConversationSearchArticlesTab } from './articles/main';
import { SpacesConversationSearchImageryTab } from './imagery/main';
import { SpacesConversationSearchMediaTab } from './media/main';
import { SpacesConversationSearchTextTab } from './text/main';

export function SpacesConversationConstellationTabs() {
  return (
    <div className='flex flex-row p-[2rem]'>
      <div className='grid w-full grid-cols-5'>
        <SpacesConversationSearchTextTab />
        <SpacesConversationSearchArticlesTab />
        <SpacesConversationSearchImageryTab />
        <SpacesConversationSearchMediaTab />
      </div>
    </div>
  );
}
