import { useState } from 'react';
import { ToggleDropdownList } from './dropdown-list/main';
import { ToggleButton } from './toggle-button/main';
import { ToggleContext } from '@/(logic)/internal/contexts/toggle/main';


export function DraftHeaderToggleButton() {
  const [toggled, changeToggled] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggled, toggle: () => changeToggled(!toggled) }}>
      <div className='relative'>
        <ToggleButton />
        {toggled && <ToggleDropdownList />}
      </div>
    </ToggleContext.Provider>
  );
}
