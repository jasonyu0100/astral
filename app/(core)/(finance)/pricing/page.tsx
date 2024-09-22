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

  return <div className='flex flex-col space-y-[2rem]'></div>;
}
