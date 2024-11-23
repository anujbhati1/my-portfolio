"use client";
import { cn } from "@/lib/cn";
import { navbarData } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className='bg-black1 border-gray-200 mx-2 my-4 rounded-lg'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 md:p-4'>
        <Link
          href='/'
          className='flex items-center space-x-3 rtl:space-x-reverse px-2'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 37 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.834344 21.348L5.01425 17.8542C5.98291 17.0447 7.40667 17.1957 8.19403 18.1912C8.98176 19.187 8.83486 20.6508 7.8662 21.4602L5.84341 23.1511L20.5299 35.8731C21.4985 36.6825 21.6454 38.1463 20.8577 39.1418C20.4111 39.707 19.7595 39.9999 19.1028 39.9999C18.6018 39.9999 18.0971 39.8295 17.6783 39.4791L0.834344 24.9541C0.306723 24.5128 0 23.8506 0 23.1511C0 22.4515 0.306723 21.7897 0.834344 21.348Z'
              fill='white'
            />
            <path
              d='M19.3954 7.32817e-05C20.5953 0.00996334 21.5606 1.018 21.551 2.25197L21.3642 37.7835C21.3545 39.0175 20.3737 40.0095 19.1738 39.9996C18.8696 39.9974 18.581 39.9308 18.3191 39.8129C17.5476 39.4648 17.0107 38.6694 17.0178 37.7478L17.205 2.21659C17.2146 0.982613 18.1951 -0.00981677 19.3954 7.32817e-05Z'
              fill='white'
            />
            <path
              d='M28.9344 24.4415L30.4781 23.1513L24.9798 18.5551C24.0112 17.7456 23.8647 16.2819 24.652 15.2864C25.4394 14.2901 26.8631 14.1395 27.8318 14.949L35.4867 21.3482C36.0147 21.7899 36.3211 22.4517 36.3211 23.1513C36.3211 23.8508 36.0147 24.513 35.4867 24.9543L31.7864 28.0476C31.3672 28.398 30.8629 28.5683 30.3619 28.5683C29.7047 28.5683 29.0532 28.2755 28.6066 27.7106C27.8192 26.7147 27.9661 25.2514 28.9344 24.4415Z'
              fill='#7B4AE2'
            />
          </svg>

          {/* <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Anuj Bhati
          </span> */}
        </Link>
        <button
          data-collapse-toggle='navbar-default'
          onClick={() => setShowMobileMenu((pre) => !pre)}
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary/50 focus:outline-none focus:ring-1 focus:ring-gray-200 '
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div
          className={cn("w-full md:block md:w-auto", {
            hidden: !showMobileMenu,
          })}
          id='navbar-default'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 border border-primary/10 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 '>
            {navbarData.map((item) => (
              <li key={item.path}>
                <a
                  key={item.path}
                  href='#'
                  className={cn(
                    "block py-2 px-3 text-white/50 rounded hover:text-primary/50 md:hover:bg-transparent md:border-0 md:hover:text-primary/50 md:p-0 sm:duration-200",
                    {
                      "text-white bg-primary/50 hover:text-white md:text-primary/50 md:bg-transparent":
                        item.path === pathname,
                    }
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
