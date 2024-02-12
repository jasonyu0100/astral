'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/utils/cn';
import { useState } from 'react';

export const stripeProducts = {
  standard: {
    monthly: 'price_1OiCdDJLrUNVWkE6cCXg6z64',
    yearly: 'price_1Oio7kJLrUNVWkE60gMeqk5y',
  },
  pro: {
    monthly: 'price_1OiCZrJLrUNVWkE6t33t3j8e',
    yearly: 'price_1Oio7cJLrUNVWkE6j6vqQqQt',
  },
};

export function getPlanName(priceId: string) {
  switch (priceId) {
    case stripeProducts.standard.monthly:
      return 'Standard';
    case stripeProducts.standard.yearly:
      return 'Standard';
    case stripeProducts.pro.monthly:
      return 'Pro';
    case stripeProducts.pro.yearly:
      return 'Pro';
    default:
      return 'Community';
  }
}

export function getPlanPrice(priceId: string) {
  switch (priceId) {
    case stripeProducts.standard.monthly:
      return '$20 / Month';
    case stripeProducts.standard.yearly:
      return '$180 / Year';
    case stripeProducts.pro.monthly:
      return '$50 / Month';
    case stripeProducts.pro.yearly:
      return '$480 / Year';
    default:
      return 'Free';
  }
}

export default function Page() {
  const [activeTab, setActiveTab] = useState('monthly');

  function triggerCheckout(priceId: string) {
    window.location.href = `/stripe/checkout?priceId=${priceId}`;
  }

  return (
    <div className='flex flex-col space-y-[2rem]'>
      <Tabs
        defaultValue='monthly'
        className='flex w-full flex-col items-center'
        value={activeTab}
      >
        <TabsList className='h-[80px] w-[500px] rounded bg-slate-700 p-[5px]'>
          <TabsTrigger
            value='monthly'
            className={cn('h-full w-1/2 rounded font-bold text-white', {
              'bg-slate-950': activeTab === 'monthly',
            })}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value='yearly'
            className={cn('h-full w-1/2 rounded font-bold text-white', {
              'bg-slate-950': activeTab === 'yearly',
            })}
            onClick={() => setActiveTab('yearly')}
          >
            Yearly
          </TabsTrigger>
        </TabsList>
        <TabsContent value='monthly' className='mt-[2rem]'>
          <div className='flex flex-row space-x-[2rem]'>
            <button
              className='aspect-[13/16] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
              onClick={() => triggerCheckout(stripeProducts.standard.monthly)}
            >
              $20 / Month
            </button>
            <button
              className='aspect-[13/16] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
              onClick={() => triggerCheckout(stripeProducts.pro.monthly)}
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
        <TabsContent value='yearly' className='mt-[2rem]'>
          <div className='flex flex-row space-x-[2rem]'>
            <button
              className='aspect-[13/16] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
              onClick={() => triggerCheckout(stripeProducts.standard.monthly)}
            >
              $180 / Year
            </button>
            <button
              className='aspect-[13/16] w-[500px] border-[3px] border-black bg-white font-extraBold text-lg'
              onClick={() => triggerCheckout(stripeProducts.pro.monthly)}
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
    </div>
  );
}
