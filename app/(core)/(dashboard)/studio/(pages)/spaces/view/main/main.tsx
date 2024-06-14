import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { useContext } from 'react';
import { StudioSpace } from './space/main';
import { ContextForSpaceObj } from '@/(server)/(model)/space/main';
import { ContextForSpaceList } from '@/(server)/(controller)/space/list';

export function SpacesMain() {
  const spaceListHandler = useContext(ContextForSpaceList);

  return (
    <GlassAreaContainer
      sizeFx='flex-grow'
      name={SpacesMain.name}
      className={`divide-y-[1px] divide-slate-500 divide-opacity-30 overflow-auto`}
    >
      <div className='flex w-full flex-col'>
        {spaceListHandler.state.spaces?.map((space, index) => (
          <ContextForSpaceObj.Provider value={space} key={space.id}>
            <StudioSpace index={index} key={space.id} />
          </ContextForSpaceObj.Provider>
        ))}
      </div>
    </GlassAreaContainer>
  );
}
