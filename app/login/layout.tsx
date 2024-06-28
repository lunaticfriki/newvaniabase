export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen place-items-center">
      {children}
    </div>
  );
}
