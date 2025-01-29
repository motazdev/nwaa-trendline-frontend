"use server";

import { Locale, defaultLocale } from "@/locales/config";
import { cookies } from "next/headers";

const COOKIE_NAME = "lang";

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
  cookies().set("dir", locale == "ar" ? "rtl" : "ltr");
}
