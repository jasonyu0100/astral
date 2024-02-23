import { FlowModalContext } from '@/(modals)/flow-modal/main';
import { useContext } from 'react';
import { FlowHeaderAddButton } from './add/main';
import { FlowLogButton } from './log/main';

export function FlowHeaderRight() {
  const modalContext = useContext(FlowModalContext);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <FlowLogButton />
      <FlowHeaderAddButton
        onClick={() => modalContext.addFileMomentModal.open()}
      />
    </div>
  );
}
