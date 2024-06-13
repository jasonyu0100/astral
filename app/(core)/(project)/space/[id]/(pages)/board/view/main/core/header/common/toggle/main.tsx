import { useState } from 'react';
import { ToggleDropdownList } from './dropdown-list/main';
import { ToggleButton } from './toggle-button/main';
import { ContextForTogglable } from '@/(logic)/contexts/togglable/main';

export function ToggleBoardModalButton() {
  const [toggled, changeToggled] = useState(false);

  return (
    <ContextForTogglable.Provider
      value={{ toggled: toggled, toggle: () => changeToggled(!toggled) }}
    >
      <ToggleButton />
      <div className='relative'>{toggled && <ToggleDropdownList />}</div>
    </ContextForTogglable.Provider>
  );
}
