import { PATHS } from '@/content';
import { redirect } from 'next/navigation';

export default async function Index() {
  return redirect(PATHS.home);
}
