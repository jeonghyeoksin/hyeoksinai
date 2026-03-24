import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || 'https://cjrrudaulkkwrpzftieh.supabase.co';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_8QXSdyaYkFGoFSOpb_X90Q_9wRJxzEH';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
