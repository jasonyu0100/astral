import { VaultKnowledgeContainer } from './container/main';

export function VaultKnowledgeView() {
  return (
    <VaultKnowledgeContainer>
      <div className='h-full w-full p-[2rem]'>
        <p className='font-bold text-slate-700'>Create action items</p>
      </div>
    </VaultKnowledgeContainer>
  );
}
