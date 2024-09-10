'use client';
import { cn } from '@/lib/cn';
import { navbarData } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const pathname = usePathname();
  console.log('This is parhname', pathname);

  return (
    <nav className="bg-primary/5 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Anuj Bhati
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          onClick={() => setShowMobileMenu((pre) => !pre)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary/50 focus:outline-none focus:ring-1 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={cn('w-full md:block md:w-auto', {
            hidden: !showMobileMenu,
          })}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {navbarData.map((item) => (
              <li>
                <a
                  key={item.path}
                  href="#"
                  className={cn(
                    'block py-2 px-3 text-white/50 rounded hover:text-primary/50 md:hover:bg-transparent md:border-0 md:hover:text-primary/50 md:p-0',
                    {
                      'text-white bg-primary/50 hover:text-white md:text-primary/50 md:bg-transparent':
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
