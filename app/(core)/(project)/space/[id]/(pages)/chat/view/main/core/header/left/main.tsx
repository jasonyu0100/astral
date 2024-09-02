import { useContext } from 'react';
import { ContextForSpaceChat } from '../../../../../controller/main';
import { ConversationRole } from '../../../../../data';

export function SpaceChatHeaderLeft() {
  const {
    state: { role },
    actions: { updateRole },
  } = useContext(ContextForSpaceChat);

  return (
    <div className='flex w-1/3 flex-row'>
      <select
        value={role}
        onChange={(e) => updateRole(e.target.value)}
        className='w-[10rem] border-b-[1px] border-slate-300 border-opacity-30 bg-transparent py-[0.5rem] font-light text-slate-300 outline-none'
      >
        {Object.values(ConversationRole).map((role) => (
          <option className='text-md font-light text-slate-300'>{role}</option>
        ))}
      </select>
    </div>
  );
}
