import { useContext } from 'react';
import { ContextForSpacesChat } from '../../../../controller/main';
import { ConversationRole } from '../../../../roles';

export function SpacesChatInputLeft() {
  const {
    state: { aiChatRole: role },
    actions: { updateAiChatRole: updateAiChatRole },
  } = useContext(ContextForSpacesChat);
  return (
    <div className='flex w-[10rem] flex-shrink-0 items-center justify-center'>
      {/* <AstralAttachmentIcon
        onClick={() => {
          modalController.addAttachmentController.open();
        }}
      /> */}
      <select
        value={role}
        onChange={(e) => updateAiChatRole(e.target.value as ConversationRole)}
        className='w-full border-b-[1px] border-slate-300 border-opacity-30 bg-transparent py-[0.5rem] font-light text-slate-300 outline-none'
      >
        {Object.values(ConversationRole).map((role) => (
          <option className='text-md font-light text-slate-300'>{role}</option>
        ))}
      </select>
    </div>
  );
}
