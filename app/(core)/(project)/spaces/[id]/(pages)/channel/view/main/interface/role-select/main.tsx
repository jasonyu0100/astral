import { useContext, useState } from 'react';
import { ContextForSpacesChannel } from '../../../../controller/main';
import { ConversationRole } from '../../../../roles';

export function SpacesChannelInputLeft() {
  const {
    state: { aiChatRole: aiChatRole, selectedUser },
    actions: { updateAiChatRole: updateAiChatRole },
  } = useContext(ContextForSpacesChannel);
  const [isToggled, setIsToggled] = useState(
    aiChatRole !== ConversationRole.Channel,
  );

  const handleToggle = () => {
    setIsToggled(!isToggled);
    if (isToggled) {
      updateAiChatRole(ConversationRole.Channel);
    } else {
      updateAiChatRole(ConversationRole.Answerer);
    }
  };

  return (
    <div className='flex flex-shrink-0 items-center justify-center space-x-[2rem]'>
      <p className='text-bold font-bold text-slate-400'>
        {isToggled ? 'AI Response' : 'No AI Response'}
      </p>
      <div
        onClick={handleToggle}
        className={`flex h-8 w-14 cursor-pointer  items-center rounded-full bg-opacity-50 p-1 ${
          isToggled ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <div
          className={`h-6 w-6 transform rounded-full bg-white shadow-md transition-transform ${
            isToggled ? 'translate-x-6' : 'translate-x-0'
          }`}
        ></div>
      </div>
      {isToggled && (
        <select
          value={aiChatRole}
          onChange={(e) => updateAiChatRole(e.target.value as ConversationRole)}
          className='w-[150px] border-b-[1px] border-slate-300 border-opacity-30 bg-transparent py-[0.5rem] font-light text-slate-300 outline-none'
        >
          {Object.values(ConversationRole)
            .filter((role) => role !== ConversationRole.Channel)
            .map((role) => (
              <option className='text-md font-light text-slate-300'>
                {role}
              </option>
            ))}
        </select>
      )}
    </div>
  );
}
