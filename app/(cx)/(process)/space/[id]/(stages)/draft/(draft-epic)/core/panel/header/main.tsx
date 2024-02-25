import { Glass } from '@/(components)/(basic)/glass/main';
import { DraftHeaderAddButton } from '../../header/modes/default/left/add/main';
import { DraftModalContext } from '@/(modals)/draft-modal/main';
import { useContext } from 'react';

export function DraftPanelHeader() {
  const modalContext = useContext(DraftModalContext);
  const { open } = modalContext.addConstellationModal;
    
  return (
    <Glass
      sizeStyle='w-full h-[60px]'
      className='flex flex-row items-center justify-between'
      displayName={DraftPanelHeader.name}
    >
      <p className='ml-[1rem] font-extraBold text-xl text-slate-300'>Pages</p>
      <DraftHeaderAddButton
        onClick={() => {
          open();
        }}
      />
    </Glass>
  );
}
