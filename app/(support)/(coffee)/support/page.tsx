'use client';
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
  const [activeTab, setActiveTab] = useState('yearly');

  function triggerCheckout(priceId: string) {
    window.location.href = `/stripe/checkout?priceId=${priceId}`;
  }

  return (
    <div className='flex flex-col space-y-[2rem]'>
      {/* <Tabs
        defaultValue='yearly'
        className='flex w-full flex-col items-center'
        value={activeTab}
      >
        <TabsList className='h-[80px] w-[500px] rounded bg-slate-700 p-[5px]'>
          <TabsTrigger
            value='yearly'
            className={cn('h-full w-1/2 rounded font-bold text-white', {
              'bg-slate-950': activeTab === 'yearly',
            })}
            onClick={() => setActiveTab('yearly')}
          >
            Yearly
          </TabsTrigger>
          <TabsTrigger
            value='monthly'
            className={cn('h-full w-1/2 rounded font-bold text-white', {
              'bg-slate-950': activeTab === 'monthly',
            })}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </TabsTrigger>
        </TabsList>
        <TabsContent value='yearly' className='mt-[2rem]'>
          <div className='flex h-[500px] flex-row space-x-[2rem]'>
            <div
              className='flex aspect-[13/16] h-full flex-shrink-0 cursor-pointer flex-col items-center border-[3px] border-black bg-white p-[20px] pb-[0px]'
              onClick={() => triggerCheckout(stripeProducts.standard.monthly)}
            >
              <img
                src='/landing/producer-f.png'
                className='aspect-square w-full bg-black'
              />
              <div className='flex h-full w-full flex-col justify-center'>
                <p className='font-extraBold text-3xl'>Standard</p>
                <p className='text-lg font-bold'>180 / year</p>
              </div>
            </div>
            <div
              className='flex aspect-[13/16] h-full flex-shrink-0 cursor-pointer flex-col items-center border-[3px] border-black bg-white p-[20px] pb-[0px]'
              onClick={() => triggerCheckout(stripeProducts.pro.monthly)}
            >
              <img
                src='/landing/producer-m.png'
                className='aspect-square w-full bg-black'
              />
              <div className='flex h-full w-full flex-col justify-center'>
                <p className='font-extraBold text-3xl'>Pro</p>
                <p className='text-lg font-bold'>480 / year</p>
              </div>
            </div>
            <div
              className='flex aspect-[13/16] h-full flex-shrink-0 cursor-pointer flex-col items-center border-[3px] border-black bg-white p-[20px] pb-[0px]'
              onClick={() =>
                (window.location.href = 'mailto:business@ouros.media')
              }
            >
              <img
                src='/landing/personality-f.png'
                className='aspect-square w-full bg-black'
              />
              <div className='flex h-full w-full flex-col justify-center'>
                <p className='font-extraBold text-3xl'>Pulsar</p>
                <p className='text-lg font-bold'>Invite Only</p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value='monthly' className='mt-[2rem]'>
          <div className='flex h-[500px] flex-row space-x-[2rem]'>
            <div
              className='flex aspect-[13/16] h-full flex-shrink-0 cursor-pointer flex-col items-center border-[3px] border-black bg-white p-[20px] pb-[0px]'
              onClick={() => triggerCheckout(stripeProducts.standard.monthly)}
            >
              <img
                src='/landing/performer-m.png'
                className='aspect-square w-full bg-black'
              />
              <div className='flex h-full w-full flex-col justify-center'>
                <p className='font-extraBold text-3xl'>Standard</p>
                <p className='text-lg font-bold'>20 / mo</p>
              </div>
            </div>
            <div
              className='flex aspect-[13/16] h-full flex-shrink-0 cursor-pointer flex-col items-center border-[3px] border-black bg-white p-[20px] pb-[0px]'
              onClick={() => triggerCheckout(stripeProducts.pro.monthly)}
            >
              <img
                src='/landing/performer-f.png'
                className='aspect-square w-full bg-black'
              />
              <div className='flex h-full w-full flex-col justify-center'>
                <p className='font-extraBold text-3xl'>Pro</p>
                <p className='text-lg font-bold'>50 / mo</p>
              </div>
            </div>
            <div
              className='flex aspect-[13/16] h-full flex-shrink-0 cursor-pointer flex-col items-center border-[3px] border-black bg-white p-[20px] pb-[0px]'
              onClick={() =>
                (window.location.href = 'mailto:business@ouros.media')
              }
            >
              <img
                src='/landing/personality-m.png'
                className='aspect-square w-full bg-black'
              />
              <div className='flex h-full w-full flex-col justify-center'>
                <p className='font-extraBold text-3xl'>Pulsar</p>
                <p className='text-lg font-bold'>Invite Only</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs> */}
    </div>
  );
}
