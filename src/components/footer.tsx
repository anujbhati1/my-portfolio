import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className='flex flex-col-reverse sm:flex-row items-center justify-between bg-[#7b4ae2]/10 py-5 sm:py-7 sm:px-10 md:px-24'>
        <div>
          <p className='text-white/50 text-sm max-sm:mt-5'>
            Copyright © Anuj Bhati · {new Date().getFullYear()}
          </p>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <Link
            target='_blank'
            href={"https://www.linkedin.com/in/anujbhati11"}
            className='md:hover:scale-110 duration-200'
          >
            <FaLinkedin size={30} color='#8a8a95' />
          </Link>
          <Link
            target='_blank'
            href={"https://github.com/anujbhati1"}
            className='md:hover:scale-110 duration-200'
          >
            <FaGithub size={30} color='#8a8a95' />
          </Link>
          <Link
            target='_blank'
            href={"https://x.com/anuj_bhati99"}
            className='md:hover:scale-110 duration-200'
          >
            <FaSquareXTwitter size={30} color='#8a8a95' />
          </Link>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
}

export default Footer;
