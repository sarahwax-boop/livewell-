import {
  createBrowserClient as _createBrowserClient,
  createServerClient as _createServerClient,
} from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

// ─── Environment ──────────────────────────────────────────────────────────────
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !ANON_KEY) {
  throw new Error(
    "[supabase] Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. " +
    "Check your .env.local file."
  );
}

// ─── 1. Browser client ────────────────────────────────────────────────────────
export function createBrowserSupabaseClient() {
  return _createBrowserClient(SUPABASE_URL, ANON_KEY);
}

// ─── 2. Server client ─────────────────────────────────────────────────────────
export async function createServerSupabaseClient() {
  const cookieStore = await cookies();
  return _createServerClient(SUPABASE_URL, ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // setAll can throw in Server Components (read-only context).
        }
      },
    },
  });
}

// ─── 3. Admin / Service-role client ───────────────────────────────────────────
export function createAdminSupabaseClient() {
  if (!SERVICE_KEY) {
    throw new Error(
      "[supabase] SUPABASE_SERVICE_ROLE_KEY is not set. " +
      "This client can only be used in server-side admin contexts."
    );
  }
  return createClient(SUPABASE_URL, SERVICE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// ─── Helper: get the authenticated user (server-side) ────────────────────────
export async function getServerUser() {
  const supabase = await createServerSupabaseClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) return null;
  return user;
}

// ─── Helper: require auth ─────────────────────────────────────────────────────
export async function requireAuth(redirectTo = "/fr") {
  const { redirect } = await import("next/navigation");
  const user = await getServerUser();
  if (!user) redirect(redirectTo);
  return user!;
}