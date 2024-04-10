import { BackgroundContactsMe } from './_components/BackgroundContactsMe';
import { BentoGridDemo } from './_components/BentoGridThird';
import { FloatingNavBar } from './_components/FloatingNavBar';
import { SpotlightPreview } from './_components/Preview';
import { StickyScrollAboutMe } from './_components/StickyScrollAboutMe';
import { TabsProjects } from './_components/TabsProjects';

export default function Home() {
  return (
    <div>
      <FloatingNavBar />
      <SpotlightPreview />
      <TabsProjects />
      <BentoGridDemo />
      <StickyScrollAboutMe />
      <BackgroundContactsMe />
    </div>
  );
}
