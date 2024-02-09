'use client';
import { StormSidebar } from './storm-epic/sidebar/main';
import { StormWrapper } from './storm-epic/main';
import { StormMain } from './storm-epic/center/main';
import { StormModalView } from '../../../../../(modals)/storm-modal/view';

export function StormView() {
  return (
    <StormWrapper>
      <StormModalView />
      <StormMain/>
      <StormSidebar />
    </StormWrapper>
  );
}
