import { CAT_BREED_URL } from "../constants";
import { Breed, Breeds, BreedsResponse, Image } from "../types";
import { customFetch } from "./client";
import { fetchImagesByBreed } from "./getImages";


// я выбрал этот вариант, потому что при использовании reference_image_id,
// что бы получить картинку,некоторые картинки просто недоступны.
// Так оно работает хотя бы.
const getImagesForBreed = async (breeds:Breeds) => {
    const updatedBreeds = await Promise.all(
        breeds.map(async (breed:Breed) => {
          const images: Image[] = await fetchImagesByBreed(breed.id, 1);
          return {
            ...breed,
          image: images[0]
          };
        })
      );
      
      return updatedBreeds
}


export const getBreeds = async ({limit=10,page=0,}:{limit:number, page:number}):Promise<BreedsResponse> => {
    try{
        const url = new URL(CAT_BREED_URL);
    url.searchParams.append('limit', limit.toString());
    url.searchParams.append('page', page.toString());

    const response = await customFetch(url.toString());
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    
    const breeds: Breeds = await response.json();
    const breedData = await getImagesForBreed(breeds)
 return  breedData
 
    } catch (error) {
      console.error('Error fetching breeds:', error);
      throw new Error('Failed to fetch breeds');
    }
  };