"use client";
import ChairImage from "@/app/chair.png";
import { getCategories } from "@/lib/actions/categories";
import { Category } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import LoadingSpinner from "./loading-spinner";
import { Skeleton } from "./ui/skeleton";
import useSettingsStore from "@/store/settings";

const CategoriesSlider = () => {
  const [slides, setSlides] = useState<Category[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(null); // Last page from API
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef<SwiperRef | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 320px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const { selectedLanguage } = useSettingsStore();

  useEffect(() => {
    const fetchCategories = async () => {
      if (lastPage && page > lastPage) {
        return;
      }
      setIsLoading(true);
      const data = await getCategories(page);
      if (page === 1) {
        setSlides(data.data.data);
      } else {
        setIsBeginning(false);
        setIsEnd(false);
        setSlides((prev) => [...prev, ...data.data.data]);
      }
      setLastPage(data.data.meta.last_page);
      setIsLoading(false);
    };
    fetchCategories();
  }, [page, lastPage, selectedLanguage]);
  const t = useTranslations();
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="relative w-full">
      {isLoading && !slides.length && (
        <div className="flex flex-row gap-[26px] mb-7">
          {Array.from({
            length: isSmallDevice ? 3 : isMediumDevice ? 5 : 7,
          }).map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-4 ">
              <Skeleton className="md:h-40 md:w-40 sm:h-28 sm:w-28 h-24 w-24 rounded-3xl" />
              <Skeleton className="md:w-[100px] md:h-[25px] w-[100px] h-[25px] rounded-3xl" />
            </div>
          ))}
        </div>
      )}
      <Swiper
        ref={sliderRef}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="select-none"
        breakpoints={{
          340: { slidesPerView: 3 },
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
        }}
        onReachEnd={() => {
          if (slides.length > 0) {
            setPage((prev) => prev + 1);
          }
        }}
        dir={selectedLanguage === "ar" ? "rtl" : "ltr"} // Set direction dynamically
        key={selectedLanguage} // This forces re-render when language changes
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="p-2"
            dir={selectedLanguage == "ar" ? "rtl" : "ltr"}
          >
            <div className="flex flex-col justify-center items-center gap-4 ">
              <div className="relative md:h-40 md:w-40 sm:h-28 sm:w-28 h-24 w-24 bg-[#F5F5F5] rounded-3xl">
                <Image
                  src={ChairImage}
                  alt={slide.name}
                  fill
                  className="object-cover p-4"
                />
              </div>
              <h1 className="select-none">{t(slide.name)}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={cn("flex justify-center gap-4")}>
        <div
          className={cn(
            "p-3 rounded-xl flex text-center cursor-pointer justify-center ",
            !isEnd && slides.length > 1
              ? "bg-main text-white"
              : "bg-[#E8EDF2] text-slate-900"
          )}
          onClick={!isEnd || !isLoading ? handleNext : undefined}
        >
          {isLoading && slides.length > 0 && page > 1 ? (
            <LoadingSpinner size="sm" />
          ) : (
            <ChevronLeft
              className={cn(
                "m-auto",
                selectedLanguage == "ar" ? "rotate-180" : "rotate-0"
              )}
              size={20}
            />
          )}
        </div>
        <div
          className={cn(
            "p-3 rounded-xl flex text-center cursor-pointer justify-center ",
            !isBeginning && slides.length > 1
              ? "bg-main text-white"
              : "bg-[#E8EDF2] text-slate-900"
          )}
          onClick={!isBeginning || !isLoading ? handlePrev : undefined}
        >
          <ChevronRight
            size={20}
            className={cn(
              "m-auto",
              selectedLanguage == "ar" ? "rotate-180" : "rotate-0"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesSlider;
