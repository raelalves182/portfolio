import Button from '@/components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <section className="bg-hero-pattern bg-no-repeat bg-cover bg-center h-screen">
          <div className="container max-w-6xl px-6 m-auto h-full flex justify-center">
            <div className="max-w-5xl m-auto p-16 rounded-[32px] bg-black bg-opacity-75">
              <h1 className="text-6xl text-[#DDDADC] font-bold">Hi, I&apos;m Israel Alves.</h1>

              <p className="text-2xl text-[#DDDADC] my-8">Dev In Training | Front-end Developer</p>

              <div className="flex items-center gap-4">
                <Button>
                  <Link 
                    href="/"
                    className="text-2xl text-[#DDDADC] border px-4 py-2 rounded-full hover:bg-sky-700 transition-all"
                  >
                    Contact
                  </Link>
                </Button>

                <Button>
                  <Link
                    href="/about"
                    className="text-2xl text-[#DDDADC] border px-4 py-2 rounded-full hover:bg-sky-700 transition-all"
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
