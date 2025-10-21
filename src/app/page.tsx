import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <section className="mt-[50px]">
          <div className='container'>
            <div className='flex items-center justify-between gap-24'>
              <div>
                <span className='text-2xl -tracking-[2px]'>Hey, I&apos;m Israel</span>
                <h1 className='text-[90px] leading-[90px] font-bold'><span className='text-blue-600'>Front</span>end Developer</h1>
              </div>

              <div className='block border border-blue-600 p-6 rounded-full'>
                <Image
                  src="/me.png"
                  width={440}
                  height={440}
                  alt="Picture of the author"
                  className='rounded-[240px] object-cover object-top h-[440px] sm:max-w-none'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='mt-[50px]'>
          <div className="container">
            <div>
              <h2 className='text-[56px] leading-[67px] font-bold'>Projects<span className='text-blue-600'>.</span></h2>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
