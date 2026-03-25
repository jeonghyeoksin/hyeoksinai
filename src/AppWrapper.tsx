import React, { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import { Session } from '@supabase/supabase-js';
import App from './App';
import { Sparkles } from 'lucide-react';

export default function AppWrapper() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="relative flex items-center justify-center w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur-[8px] opacity-80"></div>
            <div className="relative w-full h-full bg-black rounded-xl border border-white/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white animate-spin" />
            </div>
          </div>
          <p className="text-zinc-400 font-medium tracking-widest text-sm">LOADING...</p>
        </div>
      </div>
    );
  }

  return <App session={session} />;
}
