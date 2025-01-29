"use client";
import { Category } from "@/lib/types";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import ChairImage from "@/app/chair.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
const CategoriesSlider = ({ categories }: { categories: Category[] }) => {
  const sliderRef = useRef<Slider | null>(null);
  console.log({ categories });
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-4">
      <Slider
        className="flex gap-32"
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
      >
        {categories?.map((category) => (
          <div key={category.id}>
            <div className="flex flex-col justify-center items-center gap-4 px-10">
              <div className="relative h-40 w-40  bg-[#F5F5F5] rounded-3xl">
                <Image
                  src={ChairImage}
                  alt={category.name}
                  fill
                  className="object-cover p-4"
                />
              </div>
              <h1>{t(category.name)}</h1>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center gap-4" dir="ltr">
        <div
          className="bg-[#E8EDF2] p-3 rounded-xl flex text-center cursor-pointer justify-center "
          onClick={previous}
        >
          <ChevronLeft className="text-slate-900 m-auto" size={20} />
        </div>
        <div
          className="bg-main p-3 flex text-center rounded-xl cursor-pointer"
          onClick={next}
        >
          <ChevronRight size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
