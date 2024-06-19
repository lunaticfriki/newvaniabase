import './globals.css';

import { Navigation, metadataContent, raj } from '@/modules';

export const metadata = metadataContent;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raj.className}>
      <body className="w-full min-h-screen">
        <Navigation />
        <main className="flex flex-col items-center w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
