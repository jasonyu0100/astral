'use client';

import { homeMap } from '@/(core)/(dashboard)/home/map';
import { useGlobalUser } from '@/logic/store/user/main';
import { ctwn } from '@/utils/cn';
import PrivateAstralPage from '@/utils/private-astral-page';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useState } from 'react';

export const stripeProducts = {
  standard: {
    id:
      process.env.LIVE_MODE === 'true'
        ? 'prod_PXGa5aDgxDAsOf'
        : 'prod_R9DA4B3Mo96hOx', // updated
    monthly:
      process.env.LIVE_MODE === 'true'
        ? 'price_1QGft8JLrUNVWkE6w0qc58Ps'
        : 'price_1QGukiJLrUNVWkE6ZBV9P3QF', //updated
    yearly:
      process.env.LIVE_MODE === 'true'
        ? 'price_1QGfsxJLrUNVWkE6onR7U4R9'
        : 'price_1QGulAJLrUNVWkE6nWBecOJV', // updated
  },
  pro: {
    id:
      process.env.LIVE_MODE === 'true'
        ? 'prod_PXH5hzijAjH5QB'
        : 'prod_R9D97wrHsMkg0C', // updated
    monthly:
      process.env.LIVE_MODE === 'true'
        ? 'price_1QGfsfJLrUNVWkE6cSKLbZt3'
        : 'price_1QGuj8JLrUNVWkE6oIFWSUHE', // updated
    yearly:
      process.env.LIVE_MODE === 'true'
        ? 'price_1QGfsSJLrUNVWkE6hjOuJgNq'
        : 'price_1QGujfJLrUNVWkE6tts7ms4G', //updated
  },
};

export function getPlanName(priceId: string) {
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
      return 'Free';
  }
}

export function getPlanPrice(priceId: string) {
  switch (priceId) {
    case stripeProducts.standard.monthly:
      return '$10 / Month';
    case stripeProducts.pro.monthly:
      return '$25 / Month';
    case stripeProducts.standard.yearly:
      return '$100 / Year';
    case stripeProducts.pro.yearly:
      return '$250 / Year';
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

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const [activeTab, setActiveTab] = useState('monthly');

  function triggerCheckout(priceId: string) {
    if (
      loggedInUser.customerId &&
      loggedInUser.priceId &&
      loggedInUser.subscriptionId &&
      loggedInUser.productId
    ) {
      window.location.href = `/stripe/billing/existing`;
    } else {
      window.location.href = `/stripe/checkout?priceId=${priceId}`;
    }
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
            value='monthly'
            className={ctwn('h-full w-1/2 rounded font-bold text-slate-300', {
              'bg-slate-950': activeTab === 'monthly',
            })}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value='yearly'
            className={ctwn('h-full w-1/2 rounded font-bold text-slate-300', {
              'bg-slate-950': activeTab === 'yearly',
            })}
            onClick={() => setActiveTab('yearly')}
          >
            Yearly
          </TabsTrigger>
        </TabsList>
        <TabsContent value='yearly' className='mt-[2rem]'>
          <div className='grid grid-cols-4 gap-6 p-[2rem]'>
            <MemberPricingCard
              title='Community'
              price='Free'
              imageSrc='/portal/personality-f.png'
              onClick={() => {
                window.location.href = homeMap.home.projects.link;
              }}
            />
            <MemberPricingCard
              title='Standard'
              price='$100 / year'
              imageSrc='/portal/producer-f.png'
              onClick={() => triggerCheckout(stripeProducts.standard.yearly)}
            />
            <MemberPricingCard
              title='Pro'
              price='$250 / year'
              imageSrc='/portal/producer-m.png'
              onClick={() => triggerCheckout(stripeProducts.pro.yearly)}
            />
            <MemberPricingCard
              title='Enterprise'
              price='Contact us'
              imageSrc='/portal/personality-m.png'
              onClick={() =>
                (window.location.href = 'mailto:jasonyu0100@gmail.com')
              }
            />
          </div>
        </TabsContent>
        <TabsContent value='monthly' className='mt-[2rem]'>
          <div className='grid grid-cols-4 gap-6 p-[2rem]'>
            <MemberPricingCard
              title='Community'
              price='Free'
              imageSrc='/portal/personality-f.png'
              onClick={() => {
                window.location.href = homeMap.home.projects.link;
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
              onClick={() =>
                (window.location.href = 'mailto:jasonyu0100@gmail.com')
              }
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default PrivateAstralPage(Page);
