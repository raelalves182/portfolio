// import { Key } from "react";
// export default async function Users() {
//   const res = await fetch('https://api.github.com/users/raelalves182',
//     { next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to fetch the data`)
//   }

//   const repos = await res.json();
//   console.log(repos)

//   return (
//     <section>
//       <ul>
//         {repos.map((el: { id: Key | undefined; login: string }) => (
//           <li key={el.id}>{el.login}</li>
//         ))}
//       </ul>
//     </section>
//   )
// }