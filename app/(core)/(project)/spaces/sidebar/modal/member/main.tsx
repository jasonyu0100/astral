import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForSpaceMemberList } from '@/architecture/controller/space/member/list';
import { useControllerForUserConnectionListFromSource } from '@/architecture/controller/user/connection/list-from-source';
import { ContextForUserConnectionObj } from '@/architecture/model/user/connection/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalTitle } from '@/components/modal/astral/title/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { createContext, useContext, useEffect, useState } from 'react';
import { SpacesSidebarAddMemberItem } from './item/main';

interface ControllerState {
  memberIds: string[];
}

interface ControllerActions {
  updateMemberIds: (members: string[]) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}
export const ContextForSpacesSidebarAddMember = createContext({} as Controller);

export function SpacesSidebarAddMemberModal() {
  const [availableMemberIds, setAvailableMemberIds] = useState<string[]>([]);
  const [memberIds, setMemberIds] = useState<string[]>([]); // Selected member IDs

  const spaceMainController = useContext(ContextForSpaceMain); // Space context (e.g., space ID)
  const loggedInUser = useContext(ContextForLoggedInUserObj); // Current logged-in user
  const followingListController = useControllerForUserConnectionListFromSource(
    loggedInUser.id,
  ); // User's following list
  const spaceMemberListController = useContext(ContextForSpaceMemberList); // Space members context
  const openableController = useContext(ContextForOpenable); // Modal handling context

  // Effect to calculate available members (users followed by logged-in user but not yet in space)
  useEffect(() => {
    // Get IDs of users followed by the logged-in user
    const followingIds = followingListController.state.objs.map(
      (member) => member.destinationId,
    );

    // Get IDs of users already members of the space
    const spaceMemberIds = spaceMemberListController.state.objs.map(
      (member) => member.userId,
    );

    // Filter out members that are already in the space
    const availableIds = followingIds.filter(
      (userId) => !spaceMemberIds.includes(userId),
    );

    setAvailableMemberIds(availableIds); // Set filtered available members
  }, [
    followingListController.state.objs,
    spaceMemberListController.state.objs,
  ]);

  // Function to handle adding selected members
  async function addMembers() {
    await Promise.all(
      memberIds.map((memberId) =>
        spaceMemberListController.actions.createActions.createMember(
          memberId,
          spaceMainController.state.objId,
        ),
      ),
    );

    // Clear selected members and refresh the list of available members
    setMemberIds([]);
    const spaceMemberIds = spaceMemberListController.state.objs.map(
      (member) => member.userId,
    );
    const availableIds = followingListController.state.objs
      .map((member) => member.destinationId)
      .filter((userId) => !spaceMemberIds.includes(userId));
    setAvailableMemberIds(availableIds);
  }

  return (
    <ContextForSpacesSidebarAddMember.Provider
      value={{
        state: {
          memberIds: memberIds, // Passing the selected member IDs via context
        },
        actions: {
          updateMemberIds: setMemberIds, // Action to update selected member IDs
        },
      }}
    >
      <ContextForOpenable.Provider value={openableController}>
        <AstralModal>
          <AstralModalBodyWrapper>
            <AstralModalBody>
              <AstralModalBodyContents>
                <AstralModalTitle>Add Member</AstralModalTitle>
                {followingListController.state.objs.filter((member) =>
                  availableMemberIds.includes(member.destinationId),
                ).length === 0 && (
                  <p className='font-bold text-slate-300'>
                    No available members to add
                  </p>
                )}
                {followingListController.state.objs
                  .filter(
                    (member) =>
                      availableMemberIds.includes(member.destinationId), // Only display available members
                  )
                  .map((member, index) => (
                    <ContextForIndexable.Provider
                      key={member.destinationId}
                      value={index}
                    >
                      <ContextForUserConnectionObj.Provider value={member}>
                        <SpacesSidebarAddMemberItem />
                      </ContextForUserConnectionObj.Provider>
                    </ContextForIndexable.Provider>
                  ))}
              </AstralModalBodyContents>
              <AstralModalBodyAction>
                <AstralRoundedActionButton
                  onClick={addMembers}
                  disabled={memberIds.length === 0} // Disable button if no members are selected
                >
                  <AstralArrowForwardIcon />
                </AstralRoundedActionButton>
              </AstralModalBodyAction>
            </AstralModalBody>
          </AstralModalBodyWrapper>
        </AstralModal>
      </ContextForOpenable.Provider>
    </ContextForSpacesSidebarAddMember.Provider>
  );
}
