import { useContext } from 'react';
import { ChatRole } from '../../../../../data';
import { ContextForChat } from '../../../../../page';

export function SpaceChatHeaderLeft() {
  const { role, setRole } = useContext(ContextForChat);

  return (
    <div className='flex w-1/3 flex-row'>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className='w-[10rem] border-b-[1px] border-slate-300 border-opacity-30 bg-transparent py-[0.5rem] font-light text-slate-300 outline-none'
      >
        {Object.values(ChatRole).map((role) => (
          <option className='text-md font-light text-slate-300'>{role}</option>
        ))}
      </select>
    </div>
  );
}
