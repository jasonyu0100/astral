import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { useControllerForTogglable } from '@/(logic)/contexts/togglable/main';
import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import { useContext } from 'react';

export function SpaceSessionUpdateFormMore() {
  const sessionUpdateListController = useContext(
    ContextForChapterSessionUpdateList,
  );
  const togglableController = useControllerForTogglable();
  const added = sessionUpdateListController.state.objs.filter(
    (obj) => obj.added,
  );
  const notAdded = sessionUpdateListController.state.objs.filter(
    (obj) => !obj.added,
  );

  return (
    <>
      {togglableController.toggled ? (
        <>
          <div
            className='flex flex-row space-x-[0.5rem]'
            onClick={togglableController.toggle}
          >
            <p className='font-bold text-slate-300'>Hide</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
            >
              <mask
                id='mask0_3266_7'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='25'
                height='25'
              >
                <rect
                  x='0.0400391'
                  y='0.563477'
                  width='24'
                  height='24'
                  fill='#D9D9D9'
                />
              </mask>
              <g mask='url(#mask0_3266_7)'>
                <path
                  d='M12.04 11.3635L7.44004 15.9635L6.04004 14.5635L12.04 8.56348L18.04 14.5635L16.64 15.9635L12.04 11.3635Z'
                  fill='#CBD5E1'
                />
              </g>
            </svg>
          </div>
          <HorizontalDivider />
          <div className='flex flex-col'>
            <p className='text-sm font-bold text-slate-300'>Updates</p>
            <div className='flex flex-col'>
              {added.length === 0 && (
                <div className='text-xs text-slate-500'>No updates added</div>
              )}
              {added.map((item, index) => (
                <div className='text-xs text-slate-500'>
                  {index + 1}. {item.variant.toLowerCase()} update -{' '}
                  {item.title}
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='text-sm font-bold text-slate-300'>Other</p>
            <div className='flex flex-col'>
              {notAdded.length === 0 && (
                <div className='text-xs text-slate-500'>No other updates</div>
              )}
              {notAdded.map((item, index) => (
                <div className='text-xs text-slate-500'>
                  - {item.variant.toLowerCase()} update
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <HorizontalDivider />
          <div
            className='flex flex-row space-x-[0.5rem]'
            onClick={togglableController.toggle}
          >
            <p className='font-bold text-slate-300'>More</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <mask
                id='mask0_3266_13'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='24'
                height='24'
              >
                <rect width='24' height='24' fill='#D9D9D9' />
              </mask>
              <g mask='url(#mask0_3266_13)'>
                <path
                  d='M12 15.4L6 9.4L7.4 8L12 12.6L16.6 8L18 9.4L12 15.4Z'
                  fill='#CBD5E1'
                />
              </g>
            </svg>
          </div>
        </>
      )}
    </>
  );
}
