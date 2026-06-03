import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <section className="mt-[50px]">
          <div className='container'>
            <div className='flex items-center justify-between gap-2 max-w-5xl m-auto max-lg:flex-col max-lg:gap-8'>
              <div className='max-w-[500px] max-md:text-center' data-aos="fade-right">
                <span className='text-2xl -tracking-[2px]'>Hey, I&apos;m Israel</span>
                <h1 className='text-[90px] leading-[90px] font-bold max-md:text-6xl max-md:leading-none'><span className='text-blue-600'>Front</span>end Developer</h1>
              </div>

              <div className='block border border-blue-600 p-3 sm:p-6 rounded-full w-full h-[440px] max-w-[440px] max-height' data-aos="fade-left">
                <Image
                  src="/me.webp"
                  width={864}
                  height={1184}
                  alt="Picture of the author"
                  className='rounded-[240px] object-cover object-center w-full h-full hover:scale-105 transition-transform duration-300'
                  fetchPriority="high"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
