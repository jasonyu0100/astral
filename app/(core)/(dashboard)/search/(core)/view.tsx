import { ConversationalSearchHeader } from './header/main';
import { ConversationalSearchInput } from './input/main';
import { ConversationalSearchChatList } from './list/main';

export function ConversationalSearchView() {
  return (
    <div
      className='flex h-full w-full flex-col items-center'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      <ConversationalSearchHeader />
      <ConversationalSearchChatList />
      <ConversationalSearchInput />
    </div>
  );
}
