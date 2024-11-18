import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { ContextForSpaceList } from '@/architecture/controller/space/list';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { AstralShareIcon } from '@/icons/share/main';
import { useContext } from 'react';

export function HomeProjectsRowShare() {
  const spaceListController = useContext(ContextForSpaceList);
  const spaceObj = useContext(ContextForSpaceObj);

  const starSpace = () => {
    spaceListController.actions.editActions.edit(spaceObj.id, {
      starred: !spaceObj.starred,
    });
  };

  return (
    <div className='flex items-center justify-center'>
      <AstralShareIcon
        onClick={() => {
          const link = `tryastral.com.au${liveMap.live.link(spaceObj.id)}`;
          alert('Link copied to clipboard');
          navigator.clipboard
            .writeText(link)
            .then(() => {
              console.log('Link copied to clipboard');
            })
            .catch((err) => {
              console.error('Failed to copy link: ', err);
            });
        }}
      />
    </div>
  );
}
