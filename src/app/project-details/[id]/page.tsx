"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { projects } from "@/lib/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

function ProjectDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const pData = projects[parseInt(params.id) - 1];

  return (
    <>
      <div className='bg-black container mx-auto min-h-svh'>
        <Header onNavigate={() => {}} />
        <div className='h-full max-sm:p-3 max-lg:p-3 text-gray-200'>
          <div className='sm:py-10'>
            <div>
              <div className='sm:flex sm:items-center sm:mt-5 mb-10'>
                <button
                  onClick={() => {
                    router.back();
                  }}
                  className='mr-5'
                >
                  <IoIosArrowRoundBack size={40} color='#ffffff' />
                </button>
                <div className='flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between sm:flex-grow'>
                  <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
                    {pData.title}
                  </h1>
                  <button className='text-[#4ae290] bg-[#4ae290]/30 text-sm max-sm:self-end font-bold px-2 py-1 rounded-lg mx-1 max-sm:mb-4'>
                    Online
                  </button>
                </div>
              </div>
              <div className='space-y-5'>
                {pData.des.map((item) => (
                  <p key={item.id} className='max-sm:text-sm'>
                    {item.para}
                  </p>
                ))}
              </div>
              {pData.type === "mobile" ? (
                <div className='flex mt-10 overflow-x-scroll sm:justify-center no-scrollbar sm:flex-wrap'>
                  {pData.images.map((item) => (
                    <div
                      key={item.id}
                      className='m-2 w-60 max-sm:64 flex-shrink-0'
                    >
                      <img
                        src={item.url}
                        alt='Project Images'
                        className='max-sm:w-64 w-60 rounded'
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className='mt-10 max-w-4xl mx-auto'>
                  <Link target='_blank' href={pData.url}>
                    <img
                      src={pData.image}
                      alt='Project Images'
                      className='rounded hover:brightness-90 duration-200'
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetails;
