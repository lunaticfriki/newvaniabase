import { Category } from '@/modules/categories';

type CategoryListContentType = {
  name: string;
  value: Category;
}[];

export const CategoryListContent: CategoryListContentType = [
  {
    name: 'Books',
    value: 'books',
  },
  {
    name: 'Music',
    value: 'music',
  },
  {
    name: 'Games',
    value: 'games',
  },
  {
    name: 'Comics',
    value: 'comics',
  },
  {
    name: 'Magazines',
    value: 'magazines',
  },
];
