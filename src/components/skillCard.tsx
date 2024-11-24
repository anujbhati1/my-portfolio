import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

interface SkillCardProps {
  Icon: string | IconType;
  name: string;
  des: string;
}

function SkillCard({ name, des, Icon }: SkillCardProps) {
  return (
    <div className='max-sm:mx-auto border text-center border-[#7b4ae2]/50 max-w-72 px-10 py-10 rounded-xl my-4 mx-3'>
      <div>
        {typeof Icon === "string" ? (
          <Image
            src={Icon}
            height={80}
            width={80}
            alt={`${name} icon`}
            className='mx-auto'
          />
        ) : (
          <Icon size={80} className='mx-auto' color='#7b4ae2' />
        )}
        <h1 className='text-white text-xl my-8 font-bold'>{name}</h1>
        <p className='text-white font-light leading-5 text-base'>{des}</p>
      </div>
    </div>
  );
}

export default SkillCard;
