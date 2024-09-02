import { ContextForUserMain } from '@/(server)/controller/user/main';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { useContext } from 'react';

export function SpaceJourneyLogTableItemAuthor() {
  const user = useContext(ContextForUserMain);

  return (
    <div className='flex flex-row space-x-[-1.5rem]'>
      <img
        src={user.state?.obj?.dp?.src || exampleFileElem.src}
        alt='example'
        className='aspect-square h-[3rem] w-[3rem] rounded-full'
      />
    </div>
  );
}
