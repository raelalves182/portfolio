import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <section className="bg-hero-pattern bg-no-repeat bg-cover bg-center h-screen">
          <div className="container max-w-6xl px-6 m-auto h-full flex justify-center">
            <div className="max-w-5xl m-auto p-6 sm:p-16 rounded-[32px] bg-black bg-opacity-75 text-center">
              <div className="inline-flex overflow-hidden w-[200px] h-[200px] border-2 border-teal-500 rounded-full mb-4 cursor-pointer">
                <Image src="/profile.jpg" width={200} height={200} alt="Profile's Image" className="flex rounded-full m-auto object-cover h-52 object-bottom mb-6 transition-all ease-in hover:scale-125" />
              </div>

              <h1 className="text-4xl text-[#DDDADC] font-bold sm:text-6xl">Israel <span className="text-teal-500">Alves</span></h1>

              <p className="text-base sm:text-2xl text-[#DDDADC] my-2 sm:my-4">Front-end Developer</p>

              <div className="flex items-center justify-center gap-4">
                <Button>
                  <Link
                    href="mailto:ysrael.2009@hotmail.com"
                    className="block text-base sm:text-2xl text-[#DDDADC] border px-4 py-2 rounded-full hover:bg-sky-700 transition-all"
                  >
                    Contact
                  </Link>
                </Button>

                <Button>
                  <Link
                    href="/about"
                    className="block text-base sm:text-2xl text-[#DDDADC] border px-4 py-2 rounded-full hover:bg-sky-700 transition-all"
                  >
                    About
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
