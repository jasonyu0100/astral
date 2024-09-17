import React from 'react';

export function CommonSidebarIndicators({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='inline-flex flex-col items-start space-y-[2rem]'>
      {children}
    </div>
  );
}
