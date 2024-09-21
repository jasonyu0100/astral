import { cn } from '@/utils/cn';
import { useState } from 'react';
import { TabBlueShard } from './blue/main';
import { TabGreenShard } from './green/main';
import { TabOrangeShard } from './orange/main';
import { TabPurpleShard } from './purple/main';

interface Tab {
  id: string;
  label: string;
  shardColor: 'blue' | 'green' | 'orange' | 'purple';
}

interface TabBaseProps {
  tabs: Tab[];
}

export function TabBase({ tabs }: TabBaseProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const renderShard = (color: string, active: boolean) => {
    switch (color) {
      case 'blue':
        return <TabBlueShard active={active} />;
      case 'green':
        return <TabGreenShard active={active} />;
      case 'orange':
        return <TabOrangeShard active={active} />;
      case 'purple':
        return <TabPurpleShard active={active} />;
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row items-center gap-2'>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={cn('rounded px-4 py-2 text-white', {
              'bg-blue-600': activeTabIndex === index,
              'bg-gray-500': activeTabIndex !== index,
            })}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='mt-2 flex justify-center'>
        {renderShard(tabs[activeTabIndex].shardColor, true)}
      </div>
    </div>
  );
}
