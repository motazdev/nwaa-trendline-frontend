"use client";
import { useTranslations } from "next-intl";
import React from "react";

const NavbarItems = () => {
  const t = useTranslations();
  return (
    <div className="md:flex z-50 flex-row gap-10 hidden">
      <div className="nav-item text-[#545454] text-sm font-medium">
        {t("home")}
      </div>
      <div className="nav-item text-sm text-main font-semibold border-b-2 pb-2 border-main">
        {t("categories")}
      </div>
      <div className="nav-item text-[#545454] text-sm font-medium">
        {t("about-us")}
      </div>
      <div className="nav-item text-[#545454] text-sm font-medium">
        {t("contact-us")}
      </div>
      <div className="nav-item text-[#545454] text-sm font-medium">
        {t("faqs")}
      </div>
    </div>
  );
};

export default NavbarItems;
