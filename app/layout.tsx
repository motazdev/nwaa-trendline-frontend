import type { Metadata } from "next";
import { Poppins, Cairo } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import GlobalProvider from "@/providers/GlobalProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const cairo = Cairo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const langCookie = cookies().get("lang")?.value || "en";

  const messages = await getMessages();
  return (
    <html
      lang={locale}
      dir={locale == "ar" ? "rtl" : "ltr"}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${
          locale === "ar" ? cairo.className : poppins.className
        } antialiased`}
      >
        <GlobalProvider language={langCookie}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
