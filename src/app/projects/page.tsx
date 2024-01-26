import { Key } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default async function Users() {
  const res = await fetch('https://api.github.com/users/raelalves182/repos',
    { next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch the data`)
  }

  const repos = await res.json();

  return (
    <section className="bg-hero-pattern bg-no-repeat bg-cover bg-center h-screen">
      <div className="container max-w-6xl px-6 m-auto h-full flex justify-center items-center">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 h-[200px]">
            {repos.map((el: { id: Key | undefined; homepage: string }) => (
              <CarouselItem key={el.id} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <a href={el.homepage} target="_blank" rel="noreferrer">{el.homepage}</a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}