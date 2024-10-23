import { useContext } from 'react';
import { ContextForSpacesConversation } from '../../../../controller/main';
import { ConversationRole } from '../../../../roles';

export function SpacesConversationInputLeft() {
  const {
    state: { aiChatRole: role },
    actions: { updateAiChatRole: updateRole },
  } = useContext(ContextForSpacesConversation);
  return (
    <div className='flex w-[10rem] flex-shrink-0 items-center justify-center'>
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
