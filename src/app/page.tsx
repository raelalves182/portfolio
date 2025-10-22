import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <section className="mt-[50px]">
          <div className='container'>
            <div className='flex items-center justify-between gap-2 max-lg:flex-col max-lg:gap-8'>
              <div data-aos="fade-right">
                <span className='text-2xl -tracking-[2px]'>Hey, I&apos;m Israel</span>
                <h1 className='text-[90px] leading-[90px] font-bold max-md:text-6xl max-md:leading-none'><span className='text-blue-600'>Front</span>end Developer</h1>
              </div>

              <div className='block border border-blue-600 p-6 rounded-full w-full h-[440px] max-w-[440px] max-sm:h-auto' data-aos="fade-left">
                <Image
                  src="/me.png"
                  width={440}
                  height={440}
                  alt="Picture of the author"
                  className='rounded-[240px] object-cover object-top w-full h-full'
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <section className='mt-[175px] max-lg:mt-14'>
          <div className="container">
            <h2 className='text-[56px] leading-[67px] font-bold'>Projects<span className='text-blue-600'>.</span></h2>
          </div>
        </section>
      </main>
    </>
  )
}
