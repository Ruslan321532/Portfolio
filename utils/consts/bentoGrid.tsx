import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from '@tabler/icons-react';

import { ImageComponent } from '../helpers/item-image';
export const itemsBentoGrid = [
  {
    title: 'Trello Clone',
    description:
      'Collaborate, manage projects, and reach new productivity peaks.',
    header: (
      <ImageComponent
        src="/project/trello-clone.jpg"
        href="https://trello-clone-rusya.netlify.app/"
        width={500}
        height={500}
        target="_blank"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    technologiesUsed:
      'Next.js · TypeScript · ReactJS · JavaScript · Python · Flask ·',
  },
  {
    title: 'Movix Tv',
    description: 'Website for watching movies/series.',
    header: (
      <ImageComponent
        src="/project/movix-tv.jpg"
        href="https://65bbdce52fd6b20d9350c4a0--rusya-mv-tv.netlify.app/"
        width={500}
        height={500}
        target="_blank"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    technologiesUsed:
      'Next.js · TypeScript · ReactJS · JavaScript · Python · Flask ·',
  },
  {
    title: 'Portfolio',
    description: 'My new Portfolio.',
    header: (
      <ImageComponent
        src="/project/portfolio.jpg"
        href="https://trello-clone-rusya.netlify.app/"
        width={500}
        height={500}
        target="_blank"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    technologiesUsed:
      'Next.js · TypeScript · ReactJS · JavaScript · Python · Flask ·',
  },
];
