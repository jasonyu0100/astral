'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const [sessionId, changeSessionId] = useState('');

  useEffect(() => {
    changeSessionId(searchParams.get('session_id') || '');
  });

  async function getBillingSession() {
    console.log(sessionId)
    let resp = await fetch('/api/stripe/billing-session', {
      method: 'POST',
      body: JSON.stringify({
        sessionId: sessionId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    let data = await resp.json()
    window.location.href = data.session.url
  }

  return (
    <>
      <button
        type='submit'
        role='link'
        className='h-[100px] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
        onClick={() => getBillingSession()}
      >
        MANAGE
      </button>
    </>
  );
}
