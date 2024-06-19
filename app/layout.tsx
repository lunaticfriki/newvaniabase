import './globals.css';
import { incon, metadataContent } from '@/modules';

export const metadata = metadataContent;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={incon.className}>
      <body className="bg-background text-foreground">
        <main className="flex flex-col items-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
