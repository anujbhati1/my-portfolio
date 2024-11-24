import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectCard({
  id,
  title,
  image,
  tech,
  status,
  type,
}: {
  id: number;
  title: string;
  image: string;
  url: string;
  tech: string;
  status: string;
  type: string;
}) {
  return (
    <Link href={`/project-details/${id}`}>
      <div className='max-sm:mx-auto border border-[#7b4ae2]/50 max-w-96 p-8 rounded-2xl my-4 mx-3'>
        <div>
          <h1 className='text-xl text-white font-bold my-3 line-clamp-2'>
            {title}
          </h1>
          <div className='my-5'>
            <button className='text-[#4ae290] bg-[#4ae290]/30 text-sm font-bold px-2 py-1 rounded-lg mx-1'>
              {status}
            </button>
            <button className='text-[#7b4ae2] bg-[#7b4ae2]/10 text-sm font-bold px-2 py-1 rounded-lg mx-1'>
              {tech}
            </button>
          </div>
          <div className='bg-[#4751b3] rounded-lg my-3 h-52 flex items-center'>
            <Image
              src={image}
              height={500}
              width={400}
              alt='p1'
              className={cn("sm:hover:brightness-90 duration-200", {
                "rounded-lg": type === "mobile",
              })}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
