'use client';
import insideCosmos from '@/utils/isAuth';

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  return (
    <code className='space-y-[1rem] break-all text-white'>
      {code.split('\n').map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </code>
  );
};

function Page() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center p-[3rem]'>
      <div className='aspect-[13/16] h-full overflow-auto bg-slate-950 p-[50px]'>
        <CodeBlock code={'<p>Hello World</p>'} />
      </div>
    </div>
  );
}

export default insideCosmos(Page);
