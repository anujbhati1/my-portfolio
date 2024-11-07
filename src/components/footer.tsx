import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between bg-[#7b4ae2]/10 py-5 sm:py-7 sm:px-10 md:px-24">
        <div>
          <p className="text-white/50 text-sm max-sm:mt-5">
            Copyright © Anuj Bhati · 2024
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Image
            src={"/linkedinIcon.png"}
            height={30}
            width={30}
            alt="github icon"
          />
          <Image
            src={"/githubIcon.png"}
            height={30}
            width={30}
            alt="github icon"
          />

          <Image
            src={"/behanceIcon.png"}
            height={30}
            width={30}
            alt="github icon"
          />
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
}

export default Footer;
