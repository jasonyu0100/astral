'use client';
import { outputSchema } from '@/tables/tables';
import insideCosmos from '@/utils/isAuth';

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  return (
    <code className='text-white break-all space-y-[1rem]'>
      {code.split('\n').map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </code>
  );
};

function Page() {
  const text = outputSchema();
  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-[3rem]'>
      <div className='aspect-[13/16] h-full overflow-auto p-[50px] bg-slate-950'>
        <CodeBlock code={text} />
      </div>
    </div>
  );
}

export default insideCosmos(Page);
