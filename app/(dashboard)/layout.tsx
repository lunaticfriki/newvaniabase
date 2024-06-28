import { Header } from '@/modules';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen grid grid-rows-[auto,1fr]">
      <Header />
      <div className="flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}
