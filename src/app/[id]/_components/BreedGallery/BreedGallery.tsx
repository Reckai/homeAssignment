import { fetchImagesByBreedForGallery } from "@/app/api";
import React from "react";
import Image from "next/image";

const BreedGallery = async ({ breedId }: { breedId: string }) => {
  const images = await fetchImagesByBreedForGallery(breedId, 20);
  console.log(images);

  return (
    <div className="p-2 md:p-4 columns-2 md:columns-3  lg:columns-4 gap-4 pt-2 mx-auto">
      {images.map((image) => (
        <div
          key={image.id}
          className="rounded-lg dark:bg-white dark:text-black shadow-md hover:shadow-lg break-inside-avoid "
        >
          <Image
            className="w-full  h-auto rounded-lg  mt-4 bg-white "
            src={image.url}
            width={300}
            height={300}
            alt={`image of ${breedId}`}
          />
        </div>
      ))}
    </div>
  );
};

export default BreedGallery;
