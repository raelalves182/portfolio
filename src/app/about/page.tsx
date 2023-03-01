import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function about() {
  return (
    <section className="bg-hero-pattern bg-no-repeat bg-cover bg-center h-screen">
      <div className="container max-w-6xl px-6 m-auto h-full flex justify-center">
        <div className="flex items-center gap-6 bg-black bg-opacity-75 m-auto rounded">
          <div>
            <Image 
              className="rounded"
              src="/my-image.jpg"
              alt="my-image"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1 className="text-3xl text-white font-bold before:content-['━━'] before:text-sky-300 before:text-4xl before:mr-2">
              About me
            </h1>

            <p className="text-2xl text-white">I&apos;m Israel Alves, a <strong>Front-End Developer</strong>, focused and passionate about music and technology.</p>

            <p>My Skills</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about;