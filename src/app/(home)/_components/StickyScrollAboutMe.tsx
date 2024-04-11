'use client';
import React from 'react';

import { stickyContent } from '@/data/stickyScrollMe';
import { StickyScroll } from '@/src/components/ui/sticky-scroll-reveal';

export function StickyScrollAboutMe() {
  return (
    <div id="aboutMe" className="p-10">
      <StickyScroll content={stickyContent} />
    </div>
  );
}
