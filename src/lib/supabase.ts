import { createClient } from '@supabase/supabase-js';

const envUrl = import.meta.env.VITE_SUPABASE_URL;
const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isValidUrl = (url: string | undefined) => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const supabaseUrl = isValidUrl(envUrl) ? envUrl : 'https://cjrrudaulkkwrpzftieh.supabase.co';
const supabaseAnonKey = envKey && envKey.trim() !== '' ? envKey : 'sb_publishable_8QXSdyaYkFGoFSOpb_X90Q_9wRJxzEH';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
