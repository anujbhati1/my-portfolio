"use client";
import BackToTop from "@/components/backToTop";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { projects } from "@/lib/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxArrowTopRight } from "react-icons/rx";

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
                    {pData.status}
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
              <div className='mt-10'>
                <div className='mb-3 font-semibold'>TechStack :</div>
                <div>
                  {pData.techUsed.map((item) => (
                    <button
                      key={item}
                      className='text-[#7b4ae2] bg-[#7b4ae2]/20 tracking-wide text-sm sm:text-base font-bold px-2 py-1 rounded-md mx-1 mb-2'
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className='mt-5'>
                <div className='mb-3 font-semibold'>Project Links :</div>
                <div>
                  {pData.androidUrl ? (
                    <Link href={pData.androidUrl} target='_blank'>
                      <button className='text-[#4ae290] bg-[#4ae290]/10  tracking-wide text-sm sm:text-base font-bold px-3 py-1.5 rounded-md mx-1 mb-2'>
                        <div className='flex justify-center items-center gap-2'>
                          <FaGooglePlay size={17} color='#4ae290' />
                          <span>Open Play Store</span>
                        </div>
                      </button>
                    </Link>
                  ) : null}
                  {pData.iosUrl ? (
                    <Link href={pData.iosUrl} target='_blank'>
                      <button className='text-[#37d1e3] bg-[#37d1e3]/10  tracking-wide text-sm sm:text-base font-bold px-3 py-1.5 rounded-md mx-1 mb-2'>
                        <div className='flex justify-center items-center gap-2'>
                          <FaAppStoreIos size={17} color='#37d1e3' />
                          <span>Open App Store</span>
                        </div>
                      </button>
                    </Link>
                  ) : null}
                  {pData.url ? (
                    <Link href={pData.url} target='_blank'>
                      <button className='text-[#4ae290] bg-[#4ae290]/10 tracking-wide text-sm sm:text-base font-bold px-3 py-1.5 rounded-md mx-1 mb-2'>
                        <div className='flex justify-center items-center gap-2'>
                          <RxArrowTopRight size={17} color='#4ae290' />
                          <span>Go to Website</span>
                        </div>
                      </button>
                    </Link>
                  ) : null}
                </div>
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
        <BackToTop />
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetails;
