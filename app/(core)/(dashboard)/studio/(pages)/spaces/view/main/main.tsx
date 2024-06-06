import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { useContext } from 'react';
import { StudioSpace } from './space/main';
import { SpacesHandlerContext } from '@/(model)/(controller)/(archive)/spaces/main';
import { SpaceContext } from '@/(model)/space/main';

export function SpacesMain() {
  const spacesHandler = useContext(SpacesHandlerContext);
  const spaces = spacesHandler.spaces;

  return (
    <GlassAreaContainer
      sizeFx='flex-grow'
      name={SpacesMain.name}
      className={`divide-y-[1px] divide-slate-500 divide-opacity-30 overflow-auto`}
    >
      <div className="w-full flex flex-col">
        {spaces?.map((space, index) => (
          <SpaceContext.Provider value={space} key={space.id}>
            <StudioSpace index={index} key={space.id} />
          </SpaceContext.Provider>
        ))}
      </div>
    </GlassAreaContainer>
  );
}
