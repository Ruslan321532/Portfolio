import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import { Prompt } from 'tabler-icons-react';
type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const navItemsRoutes: NavItem[] = [
  {
    name: 'Home',
    link: '#home',
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'About',
    link: '#aboutMe',
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'Contact',
    link: '#contact',
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: 'Experience',
    link: '#experience',
    icon: <Prompt className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
