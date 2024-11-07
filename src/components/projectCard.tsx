import Image from "next/image";
import React from "react";

function ProjectCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="max-sm:mx-auto border border-[#7b4ae2]/50 max-w-96 p-8 rounded-2xl my-4 mx-3">
      <div>
        <h1 className="text-xl text-white font-bold my-3 line-clamp-2">
          {title}
        </h1>
        <div className="my-5">
          <button className="text-[#4ae290] bg-[#4ae290]/30 text-sm font-bold px-2 py-1 rounded-lg mx-1">
            Online
          </button>
          <button className="text-[#7b4ae2] bg-[#7b4ae2]/10 text-sm font-bold px-2 py-1 rounded-lg mx-1">
            Typescript
          </button>
        </div>
        <div className="bg-[#4751b3] rounded-lg my-3">
          <Image src={image} height={500} width={400} alt="p1" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
