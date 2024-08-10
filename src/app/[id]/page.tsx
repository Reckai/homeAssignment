import React, { Suspense } from "react";
import { getBreedInfo } from "../api/getBreedInfo";
import { Info } from "./_components/Info/Info";
import BreedGallery from "./_components/BreedGallery/BreedGallery";
import Spinner from "../_components/Spinner/Spinner";
import Link from "next/link";

const AboutBreedPage = async (params: { params: { id: string } }) => {
  const data = await getBreedInfo({ breedId: params.params.id });
  return (
    <div className="lg:mx-40 h-full flex-col flex items-center justify-center mt-8 sm:mt-8 md:mt-8 px-4 lg:mt-8">
      <Link href={"/"} className="self-start border-b-2">
        Back
      </Link>
      <Info {...data} />
      <Suspense fallback={<Spinner />}>
        <BreedGallery breedId={params.params.id} />
      </Suspense>
    </div>
  );
};

export default AboutBreedPage;
