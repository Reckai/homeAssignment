import BreedCard from "./_components/BreedCard/BreedCard";
import { getBreeds } from "./api";

export default async function Home() {
  const breeds = await getBreeds({ limit: 30, page: 0 });
  console.log(breeds);
  return (
    <main className="p-2 md:p-4 columns-2 md:columns-3  lg:columns-4 gap-4 pt-2 mx-auto">
      {breeds.map((breed) => (
        <BreedCard key={breed.id} {...breed} imageURL={breed.image.url} />
      ))}
    </main>
  );
}
