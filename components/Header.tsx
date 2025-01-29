"use client";
import { useTranslations } from "next-intl";
import Navbar from "./Navbar";
import GridBG from "./svgs/GridBG";

const Header = () => {
  const t = useTranslations();
  return (
    <div className="relative size-full items-center justify-center overflow-hidden rounded-lg border bg-[#E8EDF2] lg:px-[120px] md:px-10 px-5 pb-16 ">
      <GridBG className="absolute z-0 w-full h-full lg:block hidden" />
      <Navbar />

      <div className="relative z-50 mt-16">
        <p className="absolute z-10  whitespace-pre-wrap text-center text-8xl opacity-5 font-semibold top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 tracking-tighter text-black/50 dark:text-white">
          {/* bags */}
          {t("bags").toLowerCase()}
        </p>
        <p className="z-10 capitalize whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          {/* Bags */}
          {t("bags")}
        </p>
      </div>
    </div>
  );
};

export default Header;
