import { ContextForSpaceMemberList } from '@/architecture/controller/space/member/list';
import { ContextForSpaceMemberObj } from '@/architecture/model/space/member/main';
import {
  ContextForLoggedInUserObj,
  UserObj,
} from '@/architecture/model/user/main';
import { AstralArrowDropUp } from '@/icons/arrow-drop-up/main';
import { useContext, useState } from 'react';
import { ContextForSpacesChat } from '../../../../controller/main';
import { SpacesChatsMember } from './member/main';

export function SpacesChatMessengerSelect() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spacesConversationController = useContext(ContextForSpacesChat);
  const spaceMemberList = useContext(ContextForSpaceMemberList);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(
    spacesConversationController.state.selectedUser,
  );

  const handleSelect = (member: UserObj) => {
    setSelectedMember(member);
    spacesConversationController.actions.updateSelectedUser(member);
    setIsOpen(false);
  };

  return (
    <div className='relative flex-shrink-0 p-[0.5rem]'>
      {/* Selected User Display */}
      <div
        className='flex w-[5rem] flex-shrink-0 cursor-pointer items-center rounded-full bg-slate-300 bg-opacity-30 p-[0.5rem]'
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={selectedMember?.dp?.src}
          className='mr-2 h-[2rem] w-[2rem] rounded-full'
        />
        {/* <span className='font-bold text-slate-300'>
          {selectedMember?.displayName || 'Unknown'}
        </span> */}
        <AstralArrowDropUp />
      </div>

      {/* Custom Dropdown (opens upwards) */}
      {isOpen && (
        <div className='absolute bottom-full mb-2 w-[10rem] rounded-md bg-slate-300 bg-opacity-30'>
          <div
            key={loggedInUser.id}
            className='flex cursor-pointer items-center p-2'
            onClick={() => handleSelect(loggedInUser)}
          >
            <img
              src={loggedInUser?.dp?.src}
              className='mr-2 h-[2rem] w-[2rem] rounded-full'
            />
            <span className='text-slate-300'>{loggedInUser?.fname}</span>
          </div>
          {spaceMemberList.state.objs.map((member) => (
            <ContextForSpaceMemberObj.Provider key={member.id} value={member}>
              <SpacesChatsMember handleSelect={handleSelect} />
            </ContextForSpaceMemberObj.Provider>
          ))}
        </div>
      )}
    </div>
  );
}
