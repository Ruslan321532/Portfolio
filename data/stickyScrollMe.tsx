import Image from 'next/image';

export const stickyContent = [
  {
    title: 'My name is Ruslan. I am a Full Stack developer from Kyrgyzstan',
    description:
      'I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving. Love almost all the stacks of Software Engineering..',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/about-me/first-step.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Continuous Learning',
    description:
      'Self-improvement: I always strive for self-development and improvement of my professional skills, so I actively study new technologies and tools as they progress, constantly expanding my horizons..',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/about-me/two-step.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Other Skills',
    description:
      'Knowledge of Full Stack Development (FSD) and Domain Driven Design (DDD) approaches to efficiently develop and scale applications. Skills in configuring tools to keep code clean and readable, such as ESLint, Prettier, and Husky, to improve Git commit history and ensure standard coding..',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/about-me/two-step.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
