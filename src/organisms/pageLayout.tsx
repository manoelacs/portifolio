import { Menu } from '@src/molecules/menu';
import { PageSection } from '@src/molecules/pageSection';
import { Hero } from '@src/molecules/hero';
import React from 'react';
import { AboutMe } from './AboutMe';
import { Resume } from './resume';

export const PageLayout = () => {
  const pages = {
    'About Me': <AboutMe />,
    Resume: <Resume />,
  };
  return (
    <div className='flex flex-row gap-x-4 justify-end items-end'>
      <Hero />
      <div className='flex flex-col gap-y-4 h-full justify-end items-end '>
        <Menu />
        <PageSection className='p-0'>{pages['Resume']}</PageSection>
      </div>
    </div>
  );
};
