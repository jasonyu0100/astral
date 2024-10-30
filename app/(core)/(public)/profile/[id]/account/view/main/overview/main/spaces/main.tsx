import { UserProfileOverviewHighlights } from './highlights/main';

export function UserProfileOverviewSpaces() {
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <UserProfileOverviewHighlights />
    </div>
  );
}
