'use client'
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import { Prompt } from 'tabler-icons-react';

import { FloatingNav } from '@/src/components/ui/floating-navbar';

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export function FloatingNavBar() {
  const navItems: NavItem[] = [
    {
      name: 'Home',
      link: '#home',
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'About',
      link: '#about-me',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Contact',
      link: '#contact',
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: 'Experience',
      link: '#experience',
      icon: <Prompt className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  const handleClick = (link: string) => {
    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} handleClick={handleClick} />
    </div>
  );
}
