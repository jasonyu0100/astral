'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/utils/cn';
import { useState } from 'react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('monthly');

  const prices = {
    Standard: {
      monthly: 'price_1OiCdDJLrUNVWkE6cCXg6z64',
      yearly: 'price_1Oio7kJLrUNVWkE60gMeqk5y',
    },
    Pro: {
      monthly: 'price_1OiCZrJLrUNVWkE6t33t3j8e',
      yearly: 'price_1Oio7cJLrUNVWkE6j6vqQqQt',
    },
  };

  function triggerCheckout(priceId: string) {
    window.location.href = `/stripe/checkout?priceId=${priceId}`;
  }

  return (
    <>
      <Tabs
        defaultValue='monthly'
        className='flex w-full flex-col items-center'
        value={activeTab}
      >
        <TabsList className='w-[500px] rounded bg-slate-500 p-[5px]'>
          <TabsTrigger
            value='monthly'
            className={cn('w-1/2 rounded bg-slate-900 font-bold text-white', {
              'bg-slate-900': activeTab === 'monthly',
              'bg-slate-500': activeTab !== 'monthly',
            })}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value='yearly'
            className={cn('w-1/2 rounded bg-slate-900 font-bold text-white', {
              'bg-slate-900': activeTab === 'yearly',
              'bg-slate-500': activeTab !== 'yearly',
            })}
            onClick={() => setActiveTab('yearly')}
          >
            Yearly
          </TabsTrigger>
        </TabsList>
        <TabsContent value='monthly'>
          <div className='flex flex-row'>
            <button
              className='aspect-[13/16] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
              onClick={() => triggerCheckout(prices.Standard.monthly)}
            >
              $20 / Month
            </button>
            <button
              className='aspect-[13/16] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
              onClick={() => triggerCheckout(prices.Pro.monthly)}
            >
              $50 / Month
            </button>
            <button
              className='aspect-[13/16] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
              onClick={() => {
                window.location.href = 'mailto:business@ouros.media';
              }}
            >
              Community Edition
            </button>
          </div>
        </TabsContent>
        <TabsContent value='yearly'>
          <div className='flex flex-row'>
            <button
              className='aspect-[13/16] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
              onClick={() => triggerCheckout(prices.Standard.monthly)}
            >
              $180 / Year
            </button>
            <button
              className='aspect-[13/16] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
              onClick={() => triggerCheckout(prices.Pro.monthly)}
            >
              $480 / Year
            </button>
            <button
              className='aspect-[13/16] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
              onClick={() => {
                window.location.href = 'mailto:business@ouros.media';
              }}
            >
              Community Edition
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
