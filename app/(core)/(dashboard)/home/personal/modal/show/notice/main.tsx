import { AstralModal } from '@/components/modal/astral/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { useContext } from 'react';

export function HomePersonalShowNoticeModal() {
  const openableController = useContext(ContextForOpenable);

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <div
          className='flex h-full w-full items-center justify-center'
          style={{
            height: '50vh', // Set height to half the window height
          }}
        >
          <div
            style={{
              width: '80vw', // Set width to 80% of the viewport width
              maxWidth: '960px', // Set a max width for large screens
              aspectRatio: '16/9', // Maintain the 16:9 aspect ratio
            }}
          >
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/EiMj6UVBT_c' // Replace with your video ID
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='YouTube Video'
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
