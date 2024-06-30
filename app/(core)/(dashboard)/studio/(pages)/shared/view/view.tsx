import { StudioSharedContainer } from './container/main';
import { StudioSpacesTable } from './table/main';

export function StudioSharedView() {
  return (
    <StudioSharedContainer>
      <StudioSpacesTable />
    </StudioSharedContainer>
  );
}
