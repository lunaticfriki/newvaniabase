import { NextResponse } from 'next/server';
import { PATHS } from '@/content';
import { createClientServer } from '@/utils';

export async function GET(request: Request) {
  const { home } = PATHS;

  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const origin = requestUrl.origin;

  if (code) {
    const supabase = createClientServer();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(`${origin}${home}`);
}
