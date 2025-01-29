"use client";
import { Category } from "@/lib/types";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ChairImage from "@/app/chair.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { getCategories } from "@/lib/actions/categories";
import { Skeleton } from "@/components/ui/skeleton";

const CategoriesSlider = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const data = await getCategories(currentPage);
      console.log({ data });
      setCategories(data.data.data); // Extract category list
      setLastPage(data.data.meta.last_page); // Extract last page
      setLoading(false);
    };
    fetchCategories();
  }, [currentPage]);

  console.log({ categories });
  const next = () => {
    if (currentPage < lastPage) {
      setCurrentPage((prev) => prev + 1);
    }
    // if (sliderRef.current) {
    //   sliderRef.current.slickNext();
    // }
  };
  const previous = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
    // if (sliderRef.current) {
    //   sliderRef.current.slickPrev();
    // }
  };
  const sliderSettings = {
    dots: false,
    infinite: false,
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
      {loading ? (
        <Slider className="flex gap-32 overflow-hidden" {...sliderSettings}>
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className=" ">
              <div className="flex flex-col items-center gap-4 px-10">
                <Skeleton className="md:h-40 md:w-40 sm:h-28 sm:w-28 h-24 w-24 rounded-3xl" />
                <Skeleton className="md:w-[100px] md:h-[30px] w-[100px] mb-4 h-[30px] rounded-3xl" />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <>
          <Slider
            className="flex gap-32 overflow-hidden"
            ref={(slider) => {
              sliderRef.current = slider;
            }}
            {...sliderSettings}
          >
            {categories?.map((category) => (
              <div key={category.id}>
                <div className="flex flex-col justify-center items-center gap-4 ">
                  <div className="relative md:h-40 md:w-40 sm:h-28 sm:w-28 h-24 w-24 bg-[#F5F5F5] rounded-3xl">
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
        </>
      )}
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
