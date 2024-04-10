import { BackgroundBeamsDemo } from './_components/BackgroundBeams';
import { BentoGridDemo } from './_components/BentoGridThird';
import { SpotlightPreview } from './_components/Preview';
import { TabsDemo } from './_components/TabsProjects';

export default function Home() {
  return (
    <div>
      <SpotlightPreview />
      <TabsDemo />
      <BentoGridDemo />
      <BackgroundBeamsDemo />
    </div>
  );
}
