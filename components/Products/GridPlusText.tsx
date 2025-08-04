import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  title: string;
  images: string[];
  descriptions: string[];
  className: string;
}

const GridPlusText = ({
  title,
  images,
  descriptions,
  className = "",
}: Props) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 place-items-center gap-[22px]"
      )}
    >
      <div className={cn("flex flex-col gap-5 px-5", className)}>
        <h3>{title}</h3>
        <ul className="list-disc pl-5">
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
      <div className="max-w-[542px] w-full grid grid-cols-2 gap-[22px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="max-w-[260px] w-full h-auto aspect-[4/3] rounded-[12px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default GridPlusText;
