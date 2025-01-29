"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import LanuageChangeButton from "./LanuageChangeButton";
import NotificationComponent from "./NotificationComponent";
import ShoppingCartIcon from "./svgs/ShoppingCartIcon";
import UserIcon from "./svgs/UserIcon";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import useSettingsStore from "@/store/settings";
const MobileNav = () => {
  const { selectedLanguage } = useSettingsStore();
  const t = useTranslations();
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={selectedLanguage == "ar" ? "left" : "right"}>
        <div className="flex-col flex gap-5 items-center justify-center">
          <div className="text-[#545454] text-sm font-medium">{t("home")}</div>
          <div className="text-sm text-main font-semibold border-b-2 pb-2 border-main">
            {t("categories")}
          </div>
          <div className="text-[#545454] text-sm font-medium">
            {t("about-us")}
          </div>
          <div className="text-[#545454] text-sm font-medium">
            {t("contact-us")}
          </div>
          <div className="text-[#545454] text-sm font-medium">{t("faqs")}</div>
        </div>
        <Separator className="my-2" />
        <div className="flex flex-row gap-5 justify-center items-center">
          <ShoppingCartIcon />
          <NotificationComponent />
          <LanuageChangeButton />
          <Select>
            <SelectTrigger className="bg-transparent p-0 border-none">
              <SelectValue placeholder={<UserIcon />} />
            </SelectTrigger>
            <SelectContent className="relative border-gray-300 shadow-none before:absolute before:rounded-lg before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-white"></SelectContent>
          </Select>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
