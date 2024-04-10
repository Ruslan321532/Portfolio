import Image from 'next/image';
import React from 'react';

import { TracingBeam } from '@/src/components/ui/tracing-beam';

export function TracingExperiance() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
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

const workData = [
  {
    company: 'Kassir Kg',
    position: 'Frontend разработчик',
    description: `В Kassir Kg я работаю в качестве Frontend разработчика и активно участвую в создании веб-приложений. Мой опыт и навыки позволяют мне успешно заниматься разработкой фронтенда с использованием Next.js, TypeScript, ReactJS и JavaScript, что позволяет создавать адаптивные веб-приложения, способные эффективно работать на разных устройствах. Кроме того, я обладаю навыками локализации проектов, что позволяет сделать продукты компании доступными для международной аудитории.`,
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: 'Next.js · TypeScript · ReactJS · JavaScript ·',
  },
  {
    company: 'ShowGo UZ',
    position: 'Full-Stack разработчик',
    description: `В ShowGo UZ я занимаю должность Full-Stack разработчика, активно внося свой вклад в создание веб-приложений. Мой опыт и умения позволяют мне успешно осуществлять разработку фронтенда с использованием Next.js, TypeScript, ReactJS и JavaScript. Это обеспечивает создание адаптивных веб-приложений, способных эффективно функционировать на различных устройствах. Кроме того, я обладаю навыками локализации проектов, что делает продукты компании доступными для международной аудитории.`,
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: 'Next.js · TypeScript · ReactJS · JavaScript ·',
  },
];
