"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
type BreedCardProps = {
  name: string;
  id: string;
  imageURL: string;
};

const BreedCard: React.FC<BreedCardProps> = ({ name, imageURL, id }) => {
  return (
    <Link href={`/${id}`}>
      <div className=" rounded-lg dark:bg-white dark:text-black shadow-md hover:shadow-lg break-inside-avoid cursor-pointer">
        <Image
          className="h-auto max-w-full  rounded-lg  mt-4 bg-white "
          id={id}
          width={400}
          height={400}
          alt="catImage"
          src={imageURL}
        />
        {
          <div className="p-4">
            <h1 className="font-bold text-lg">{name}</h1>
          </div>
        }
      </div>
    </Link>
  );
};

export default BreedCard;
