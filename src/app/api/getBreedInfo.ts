import { BREED_ID, CAT_BREED_URL } from "../constants";
import { Breed } from "../types";
import { customFetch } from "./client";

export const getBreedInfo = async ({breedId}:{breedId:string}):Promise<Breed> => {
    try{
    const url = new URL(`${CAT_BREED_URL}/${breedId}`);
    const response = await customFetch(url.toString());
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }   
    const breed: Breed = await response.json();
 return  breed
 
    } catch (error) {
      console.error('Error fetching breed:', error);
      throw new Error('Failed to fetch breed info');
    }
  };