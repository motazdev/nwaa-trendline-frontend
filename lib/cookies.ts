"use server";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export const setCookie = ({ name, value }: { name: string; value: string }) => {
  cookies().set(name, value);
};

export const getCookie = (name: string): RequestCookie | null => {
  return cookies().get(name) || null;
};
