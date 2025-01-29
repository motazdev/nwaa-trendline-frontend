"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { setUserLocale } from "@/locales/locale";
import useSettingsStore from "@/store/settings";
import { getCookie } from "cookies-next";
import { useEffect, useState, useTransition } from "react";
import { Separator } from "./ui/separator";
import { useTranslations } from "next-intl";
const LanuageChangeButton = () => {
  const [, startTransition] = useTransition();

  const { updateSelectedLanguage, selectedLanguage } = useSettingsStore();

  const langCookie = getCookie("lang") || "en";

  const [clientLanguage, setClientLanguage] = useState<string | null>(null);

  useEffect(() => {
    setClientLanguage(langCookie);
  }, [langCookie]);

  function onChange(value: string) {
    const locale = value as "en" | "ar";
    startTransition(() => {
      setUserLocale(locale);
      updateSelectedLanguage(locale);
    });
  }
  const t = useTranslations();
  return (
    <Select value={selectedLanguage} onValueChange={onChange}>
      <SelectTrigger className="bg-transparent p-0 border-none m-0">
        <span>{clientLanguage?.toUpperCase()}</span>
      </SelectTrigger>
      <SelectContent className="relative border-gray-300 shadow-none before:absolute before:rounded-lg before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-white">
        <SelectItem value="en" className="font-semibold">
          {t("english")}
        </SelectItem>
        <Separator className="my-2 " />
        <SelectItem value="ar" className="font-semibold">
          {t("arabic")}
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanuageChangeButton;
