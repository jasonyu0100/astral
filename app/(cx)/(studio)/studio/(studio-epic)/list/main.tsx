import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { useContext } from 'react';
import { StudioSpace } from './space/main';
import { SpacesHandlerContext } from '@/(logic)/internal/handler/spaces/main';
import { SpaceContext } from '@/(logic)/internal/data/infra/model/space/main';

export function SpacesList() {
  const spacesHandler = useContext(SpacesHandlerContext);
  const spaces = spacesHandler.spaces;

  return (
    <GlassContainer
      sizeStyle='w-full'
      displayName={SpacesList.name}
      className={`flex-col divide-y-[1px] divide-slate-500 divide-opacity-30`}
    >
      {spaces?.map((space, index) => (
        <SpaceContext.Provider value={space} key={space.id}>
          <StudioSpace index={index} key={space.id} />
        </SpaceContext.Provider>
      ))}
    </GlassContainer>
  );
}
