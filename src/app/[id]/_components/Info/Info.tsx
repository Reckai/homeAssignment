import { Breed } from "@/app/types";
import React from "react";

export const Info = ({
  name,
  origin,
  life_span,
  temperament,
  description,
  wikipedia_url,
}: Breed) => {
  return (
    <div className="flex flex-col  font-sans mb-2">
      <h1 className="text-2xl font-bold">{name}</h1>
      <h2 className=" ">Description:</h2>
      <p>{description}</p>
      <span className="flex">
        <h2>Where are they from:</h2> <p>{origin}</p>
      </span>
      <span className="flex">
        <h2>Life Span:</h2>
        <p>{life_span} years</p>
      </span>
      <span className="flex ">
        <h2 className="mr-2">Temperament:</h2>
        <p>{temperament}</p>
      </span>
      <span className="flex">
        <h2 className="mr-2">More about this breed:</h2>
        <a
          className="relative font-light inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black dark:after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          href={wikipedia_url}
        >
          Wikipedia {name}
        </a>
      </span>
    </div>
  );
};
