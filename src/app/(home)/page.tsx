import { BackgroundBeamsDemo } from './_components/BackgroundBeams';
import { BentoGridDemo } from './_components/BentoGridThird';
import { FloatingNavBar } from './_components/FloatingNavBar';
import { SpotlightPreview } from './_components/Preview';
import { TabsProjects } from './_components/TabsProjects';

export default function Home() {
  return (
    <div>
      <FloatingNavBar />
      <SpotlightPreview />
      <TabsProjects />
      <BentoGridDemo />
      <BackgroundBeamsDemo />
    </div>
  );
}
