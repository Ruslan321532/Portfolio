import { BackgroundContactsMe } from './_components/BackgroundContactsMe';
import { BentoGridDemo } from './_components/BentoGridThird';
import { FloatingNavBar } from './_components/FloatingNavBar';
import { SpotlightPreview } from './_components/Preview';
import { StickyScrollAboutMe } from './_components/StickyScrollAboutMe';
import { TabsProjects } from './_components/TabsProjects';
import { TracingExperiance } from './_components/TracingExperiance';

export default function Home() {
  return (
    <div>
      <FloatingNavBar />
      <SpotlightPreview />
      <TabsProjects />
      <BentoGridDemo />
      <TracingExperiance />
      <StickyScrollAboutMe />
      <BackgroundContactsMe />
    </div>
  );
}
