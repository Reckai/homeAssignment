import { CAT_IMAGE_URL } from "../constants";
import { Image } from "../types";
import { customFetch } from "./client";

export const fetchImagesByBreedForGallery = async (breedId: string, limit:number) => {
try {
    const url = new URL(`${CAT_IMAGE_URL}`);
    url.searchParams.append('breed_id', breedId);
    url.searchParams.append('limit', limit.toString());
    console.log(url.toString());
    const response = await customFetch(url.toString(),);

    const image:Image[] = await response.json();
    console.log(image);
    return image;

} catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Failed to fetch images');
    
}}
