import React from 'react';

import { BentoGrid, BentoGridItem } from '@/src/components/ui/bento-grid';
import { itemsBentoGrid } from '@/utils/consts/bentoGrid';

export function BentoGridDemo() {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto mb-10">
      <h2 className="font-bold text-4xl text-white">Best Project</h2>
      <BentoGrid>
        {itemsBentoGrid.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
