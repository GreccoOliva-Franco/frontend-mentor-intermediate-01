import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/styles";
import Header from "@/components/headers/header";
import Providers from "./providers";

const font = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | E-commerce product page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", font.className)}>
        <Providers>
          <div
            className={cn(
              "flex flex-col min-h-screen min-w-screen items-center pb-16 bg-background",
              "sm:min-w-0 sm:max-w-8/10 sm:mx-auto"
            )}
          >
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
