import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { DraftPanelAddButton } from './add/main';
import { DraftModalContext } from '@/(modals)/(process)/draft-modal/main';
import { useContext } from 'react';

export function DraftPanelHeader() {
  const modalContext = useContext(DraftModalContext);
  const { open } = modalContext.addConstellationModal;
    
  return (
    <GlassAreaContainer
      sizeFx='w-full h-[60px]'
      className='flex flex-row items-center justify-between'
      name={DraftPanelHeader.name}
    >
      <p className='ml-[1rem] font-extraBold text-xl text-slate-300'>Pages</p>
      <DraftPanelAddButton
        onClick={() => {
          open();
        }}
      />
    </GlassAreaContainer>
  );
}
