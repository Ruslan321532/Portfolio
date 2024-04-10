'use client';
import emailjs from '@emailjs/browser';
import { IconSend } from '@tabler/icons-react';
import React, { useRef, useState } from 'react';
import { toast } from 'sonner';

import { serviceId, templateId, userId } from '@/services/email';
import { BackgroundBeams } from '@/src/components/ui/background-beams';
import { socialMediaLinks } from '@/utils/helpers/socialMediaLinks';

export function BackgroundContactsMe() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    if (!form.current) {
      return;
    }
    try {
      emailjs.sendForm(serviceId, templateId, form.current, userId).then(
        () => {
          toast.success('sucsess');
          setIsLoading(false);
        },
        error => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  return (
    <div
      id="contact"
      className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <BackgroundBeams />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          Looking for Expert Front-End Development? Contact Me for Top-Quality
          Web Solutions and Seamless User Experiences!
        </p>
        <form ref={form} onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="font-medium text-gray-700 block mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="example@gmail.com"
            className="rounded-lg border p-2.5 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-700 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="rounded-lg border p-2.5 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <label
            htmlFor="message"
            className="font-medium text-gray-700 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="example@gmail.com"
            className="rounded-lg border p-2.5 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <button
            disabled={isLoading}
            className="bg-purple-800 text-white py-3 px-6 rounded-lg font-bold text-lg mt-8 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300 flex items-center justify-between" // Добавляем стили для выравнивания содержимого по центру
          >
            <span className="flex items-center">
              {isLoading ? 'Loading' : 'Send'}
            </span>
            <span>
              <IconSend className="ml-2" />
            </span>
          </button>
        </form>
        <div className="flex justify-center mt-6 space-x-4">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="w-8 h-8" style={{ zIndex: 999 }}>
                {link.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
