import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import { useContext } from 'react';
import { StudioSpace } from './space/main';
import { SpacesHandlerContext } from '@/(lgx)/internal/handler/spaces/main';
import { SpaceContext } from '@/(lgx)/internal/model/space/main';

export function SpacesMain() {
  const spacesHandler = useContext(SpacesHandlerContext);
  const spaces = spacesHandler.spaces;

  return (
    <GlassAreaContainer
      sizeFx='w-full'
      name={SpacesMain.name}
      className={`flex-col divide-y-[1px] divide-slate-500 divide-opacity-30`}
    >
      {spaces?.map((space, index) => (
        <SpaceContext.Provider value={space} key={space.id}>
          <StudioSpace index={index} key={space.id} />
        </SpaceContext.Provider>
      ))}
    </GlassAreaContainer>
  );
}
