import { useContext } from 'react';
import { ContextForSpacesSpace } from '../../../../controller/main';
import { ConversationRole } from '../../../../roles';

export function SpacesSpaceInputLeft() {
  const {
    state: { role },
    actions: { updateRole },
  } = useContext(ContextForSpacesSpace);
  return (
    <div className='flex h-[50px] w-[200px] flex-shrink-0 items-center justify-center'>
      {/* <AstralAttachmentIcon
        onClick={() => {
          modalController.addAttachmentController.open();
        }}
      /> */}
      <select
        value={role}
        onChange={(e) => updateRole(e.target.value as string)}
        className='w-full border-b-[1px] border-slate-300 border-opacity-30 bg-transparent py-[0.5rem] font-light text-slate-300 outline-none'
      >
        {Object.values(ConversationRole).map((role) => (
          <option className='text-md font-light text-slate-300'>{role}</option>
        ))}
      </select>
    </div>
  );
}
