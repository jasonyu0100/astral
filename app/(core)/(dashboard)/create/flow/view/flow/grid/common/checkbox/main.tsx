'use client';

import { ContextForCreateFlow } from '@/(core)/(dashboard)/create/flow/controller/main';
import { ContextForFlowList } from '@/architecture/controller/flow/list';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { useContext, useEffect, useState } from 'react';

export function CreateFlowRowCheckbox() {
  const spaceObj = useContext(ContextForSpaceObj);
  const flowListController = useContext(ContextForFlowList);
  const flowCurrentController = useContext(ContextForCreateFlow);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    // Update the local `isSelected` state based on the controller's selected spaces
    setIsSelected(
      flowCurrentController.state.selectedSpaces.includes(spaceObj.id),
    );
  }, [
    flowCurrentController.state.selectedSpaces,
    flowListController.state.currentObj.completed,
  ]);

  const handleCheckboxChange = () => {
    if (isSelected) {
      // Remove the space if it's already selected
      flowCurrentController.actions.updateSelectedSpaces(
        flowCurrentController.state.selectedSpaces.filter(
          (id) => id !== spaceObj.id,
        ),
      );
    } else {
      // Add the space if it's not selected
      flowCurrentController.actions.updateSelectedSpaces([
        ...flowCurrentController.state.selectedSpaces,
        spaceObj.id,
      ]);
    }
    // Toggle the local `isSelected` state
    setIsSelected(!isSelected);
  };

  return (
    <div className='flex items-center justify-center'>
      <input
        type='checkbox'
        checked={isSelected} // Use `checked` instead of `value`
        onChange={handleCheckboxChange}
      />
    </div>
  );
}
