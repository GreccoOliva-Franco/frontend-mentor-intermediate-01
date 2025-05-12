import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/styles";
import Header from "@/components/headers/header";
import Providers from "./providers";
import { Separator } from "@/components/ui/separator";

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
              "md:min-w-0 lg:max-w-8/10 lg:mx-auto"
            )}
          >
            <Header />
            <Separator />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
