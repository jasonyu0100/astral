import { UserProfileSpacesRowIndicator } from './activity/main';
import { UserProfileSpacesRowCategory } from './category/main';
import { UserProfileSpacesRowInfo } from './info/main';
import { UserProfileSpacesRowNumber } from './number/main';
import { UserProfileSpacesRowDays } from './stat/day/main';
import { UserProfileSpacesRowIdeas } from './stat/ideas/main';
import { UserProfileSpacesRowLogs } from './stat/logs/main';
import { UserProfileSpacesRowPosts } from './stat/posts/main';

export function UserProfileSpacesRow() {
  return (
    <div className='grid w-full grid-cols-8 py-[2rem]'>
      <UserProfileSpacesRowNumber />
      <UserProfileSpacesRowInfo />
      <UserProfileSpacesRowCategory />
      <div></div>
      <div className='col-span-2 grid grid-cols-4'>
        <UserProfileSpacesRowDays />
        <UserProfileSpacesRowIdeas />
        <UserProfileSpacesRowLogs />
        <UserProfileSpacesRowPosts />
      </div>
      <UserProfileSpacesRowIndicator />
    </div>
  );
}
