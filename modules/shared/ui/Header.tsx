import { HeaderContent } from '@/content';
import { Navigation } from './Navigation';

export const Header = () => {
  const { h1, span } = HeaderContent;

  return (
    <header className="flex flex-col items-center justify-center lg:flex-row">
      <h1 className="p-4 text-4xl">
        <span>{span}</span>
        {h1}
      </h1>
      <Navigation />
    </header>
  );
};
