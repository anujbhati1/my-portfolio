"use client";
import React from "react";
import { GoArrowUp } from "react-icons/go";

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-20 mt-20 text-[#7b4ae2]/50 flex justify-center">
      <button
        onClick={scrollToTop}
        className="flex justify-center items-center gap-4"
      >
        <p>Back to top</p>
        <GoArrowUp size={25} color="#7B4AE280" />
      </button>
    </div>
  );
}

export default BackToTop;
