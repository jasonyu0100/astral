import React from 'react';

export function CollectionHeaderTools({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-shrink-0 flex-row space-x-[1rem]'>{children}</div>
  );
}
