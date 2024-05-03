import { useState } from 'react';
import { ToggleDropdownList } from './dropdown-list/main';
import { ToggleButton } from './toggle-button/main';
import { ToggleContext } from '@/(lgx)/internal/contexts/toggle/main';

export function ToggleMapModalButton() {
  const [toggled, changeToggled] = useState(false);

  return (
    <ToggleContext.Provider
      value={{ toggled: toggled, toggle: () => changeToggled(!toggled) }}
    >
      <ToggleButton />
      <div className='relative'>{toggled && <ToggleDropdownList />}</div>
    </ToggleContext.Provider>
  );
}
