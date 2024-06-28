import '@/assets/styles/globals.css';

import { metadataContent } from '@/modules';
import { raj } from '@/assets/fonts';

export const metadata = metadataContent;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raj.className}>
      <body className="w-full min-h-screen grid grid-rows-[auto,1fr]">
        <main className="flex flex-col items-center justify-center w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
