'use client';

import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { ctwn } from '@/utils/cn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useState } from 'react';

export const stripeProducts = {
  standard: {
    monthly:
      process.env.LIVE_MODE === 'true'
        ? 'price_1OiC3WJLrUNVWkE6fyTSHZdg'
        : 'price_1OiCdDJLrUNVWkE6cCXg6z64',
    yearly:
      process.env.LIVE_MODE === 'true'
        ? 'price_1OinhNJLrUNVWkE6tuuaI5M2'
        : 'price_1Oio7kJLrUNVWkE60gMeqk5y',
  },
  pro: {
    monthly:
      process.env.LIVE_MODE === 'true'
        ? 'price_1OiCXIJLrUNVWkE6AQPj7oF9'
        : 'price_1OiCZrJLrUNVWkE6t33t3j8e',
    yearly:
      process.env.LIVE_MODE === 'true'
        ? 'price_1OingkJLrUNVWkE65T1Xov44'
        : 'price_1Oio7cJLrUNVWkE6j6vqQqQt',
  },
};

export function getPlanName(priceId) {
  switch (priceId) {
    case stripeProducts.standard.monthly:
      return 'Standard Monthly';
    case stripeProducts.pro.monthly:
      return 'Pro Monthly';
    case stripeProducts.standard.yearly:
      return 'Standard Yearly';
    case stripeProducts.pro.yearly:
      return 'Pro Yearly';
    default:
      return 'Community Free';
  }
}

export function getPlanPrice(priceId) {
  switch (priceId) {
    case stripeProducts.standard.monthly:
      return '$20 / Month';
    case stripeProducts.pro.monthly:
      return '$50 / Month';
    case stripeProducts.standard.yearly:
      return '$180 / Year';
    case stripeProducts.pro.yearly:
      return '$480 / Year';
    default:
      return 'Free';
  }
}

function MemberPricingCard({
  title,
  price,
  description,
  imageSrc,
  onClick,
}: {
  title: string;
  price: string;
  description?: string;
  imageSrc: string;
  onClick: () => void;
}) {
  return (
    <div
      className='flex aspect-[13/16] h-full flex-shrink-0 cursor-pointer flex-col items-center border-[3px] border-black bg-white p-[20px] pb-[0px]'
      onClick={onClick}
    >
      <img src={imageSrc} className='aspect-square w-full bg-black' />
      <div className='flex h-full w-full flex-col justify-center'>
        <p className='font-extraBold text-3xl'>{title}</p>
        <p className='text-lg font-bold'>{price}</p>
        {description && <p className='text-center text-sm'>{description}</p>}
      </div>
    </div>
  );
}

export default function Page() {
  const [activeTab, setActiveTab] = useState('yearly');

  function triggerCheckout(priceId) {
    window.location.href = `/stripe/checkout?priceId=${priceId}`;
  }

  return (
    <div className='flex h-full w-full flex-col justify-center space-y-[2rem] overflow-auto'>
      <Tabs
        defaultValue='yearly'
        className='flex w-full flex-col items-center justify-center'
        value={activeTab}
      >
        <TabsList className='h-[80px] w-[500px] rounded bg-slate-700 p-[5px]'>
          <TabsTrigger
            value='yearly'
            className={ctwn('h-full w-1/2 rounded font-bold text-slate-300', {
              'bg-slate-950': activeTab === 'yearly',
            })}
            onClick={() => setActiveTab('yearly')}
          >
            Yearly
          </TabsTrigger>
          <TabsTrigger
            value='monthly'
            className={ctwn('h-full w-1/2 rounded font-bold text-slate-300', {
              'bg-slate-950': activeTab === 'monthly',
            })}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </TabsTrigger>
        </TabsList>
        <TabsContent value='yearly' className='mt-[2rem]'>
          <div className='grid grid-cols-1 gap-6 p-[2rem] md:grid-cols-4'>
            <MemberPricingCard
              title='Community'
              price='Free'
              imageSrc='/portal/personality-f.png'
              onClick={() => {
                window.location.href = studioMap.studio.personal.link;
              }}
            />
            <MemberPricingCard
              title='Standard'
              price='$90 / year'
              imageSrc='/portal/producer-f.png'
              onClick={() => triggerCheckout(stripeProducts.standard.yearly)}
            />
            <MemberPricingCard
              title='Pro'
              price='$240 / year'
              imageSrc='/portal/producer-m.png'
              onClick={() => triggerCheckout(stripeProducts.pro.yearly)}
            />
            <MemberPricingCard
              title='Enterprise'
              price='Contact us'
              imageSrc='/portal/personality-m.png'
              onClick={() => (window.location.href = 'mailto:jason@astral.fun')}
            />
          </div>
        </TabsContent>
        <TabsContent value='monthly' className='mt-[2rem]'>
          <div className='grid grid-cols-1 gap-6 p-[2rem] md:grid-cols-4'>
            <MemberPricingCard
              title='Community'
              price='Free'
              imageSrc='/portal/personality-f.png'
              onClick={() => {
                window.location.href = studioMap.studio.personal.link;
              }}
            />
            <MemberPricingCard
              title='Standard'
              price='$10 / month'
              imageSrc='/portal/performer-m.png'
              onClick={() => triggerCheckout(stripeProducts.standard.monthly)}
            />
            <MemberPricingCard
              title='Pro'
              price='$25 / month'
              imageSrc='/portal/performer-f.png'
              onClick={() => triggerCheckout(stripeProducts.pro.monthly)}
            />
            <MemberPricingCard
              title='Enterprise'
              price='Contact us'
              imageSrc='/portal/personality-m.png'
              onClick={() => (window.location.href = 'mailto:jason@astral.fun')}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
