import { ReactNode } from "react";
import Header from "@/components/layout/Header";

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
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container flex flex-1 justify-center mx-auto px-5 max-w-screeen-lg">
              {children}
            </main>
            <footer className="flex items-center justify-center w-full h-20 text-sm border-t">
              © 2025 Whisteria
            </footer>
          </div>
        </body>
      </html>
    </>
  );
}
