import { FlowModalContext } from '@/(cosmos)/(modals)/flow-modal/main';
import { useContext } from 'react';
import { FlowHeaderAddButton } from './add/main';
import { FlowLoomButton } from './loom/main';

export function FlowHeaderRight() {
  const modalContext = useContext(FlowModalContext);

  return (
    <div className='flex w-1/3 flex-row justify-end'>
      <FlowLoomButton />
      <FlowHeaderAddButton
        onClick={() => modalContext.addFileMomentModal.open()}
      />
    </div>
  );
}
