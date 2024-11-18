import { useContext } from 'react';
import { ContextForHomeCampaignCreateSpace } from '../../../../controller/main';

export function HomeCampaignCreateSpaceTemplateStructure() {
  const { state: pageTwo } = useContext(ContextForHomeCampaignCreateSpace);
  const { templateProjectChapters } = pageTwo;
  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      {templateProjectChapters.map((template, index) => (
        <p className='text-md overflow-hidden font-bold' key={index}>
          {index + 1}. {template.title} -{' '}
          <span className='font-light'>{template.objective}</span>
        </p>
      ))}
    </div>
  );
}
