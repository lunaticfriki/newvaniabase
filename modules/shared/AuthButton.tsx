import Link from 'next/link';
import { LucideIcons } from './icons';
import { TOOLTIP_MESSAGES } from '@/content';
import { Tooltip } from '@nextui-org/tooltip';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function AuthButton() {
  const { logout_tooltip } = TOOLTIP_MESSAGES;

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    'use server';

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect('/login');
  };

  return user ? (
    <div className="flex items-center gap-4">
      Hey, <span>{user.email}!</span>
      <form action={signOut}>
        <button className="px-4 py-2 no-underline rounded-md hover:text-[var(--primary)]">
          <Tooltip showArrow content={logout_tooltip}>
            <LucideIcons.out />
          </Tooltip>
        </button>
      </form>
    </div>
  ) : (
    <Link href="/login" className="flex px-3 py-2 no-underline rounded-md">
      Login
    </Link>
  );
}
