import "@/app/globals.css";
import Image from 'next/image';
import { ReactNode } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="ja">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Whisper-net</title>
        </head>
        <body>
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/background.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-black opacity-30" />

          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
