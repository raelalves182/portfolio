import { Key } from "react";
export default async function Users() {
  const res = await fetch('https://api.github.com/users/raelalves182/repos',
    { next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch the data`)
  }

  const repos = await res.json();
  console.log(repos)

  return (
    <section className="bg-hero-pattern bg-no-repeat bg-cover bg-center h-screen">
      <div className="container max-w-6xl px-6 pt-10 m-auto h-full flex justify-center">
        <ul className="flex flex-col items-center">
          {repos.map((el: { id: Key | undefined; homepage: string }) => (
            <li key={el.id} className="text-white">
              <a href={el.homepage} target="_blank" rel="noreferrer">{el.homepage}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}