import Image from 'next/image';

import { workData } from '@/data/workData';
import { TracingBeam } from '@/src/components/ui/tracing-beam';

export function TracingExperiance() {
  return (
    <TracingBeam className="px-6">
      <div
        id="experience"
        className="max-w-2xl mx-auto antialiased pt-4 relative"
      >
        {workData.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.company}
            </h2>

            <p className="text-xl mb-4">{item.position}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item.image && (
                <Image
                  src={item.image}
                  alt="company logo"
                  height="100"
                  width="100"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <p>{item.description}</p>
              <p>Technologies used: {item.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
