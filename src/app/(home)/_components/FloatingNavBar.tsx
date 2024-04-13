'use client';

import { navItemsRoutes } from '@/routes/navbar';
import { FloatingNav } from '@/src/components/ui/floating-navbar';

export function FloatingNavBar() {
  const handleClick = (link: string) => {
    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItemsRoutes} handleClick={handleClick} />
    </div>
  );
}
