'use client';

import * as React from 'react';
import Link from 'next/link';
import { 
  StickyNote, 
  Shield, 
  User as UserIcon, 
  LogOut 
} from 'lucide-react';
import { auth, signOut } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function Navbar({ user, profile }: { user: any, profile: any }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/auth');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-zinc-900/50 backdrop-blur-xl border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <StickyNote className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">혁신 AI</span>
        </Link>
        
        <div className="flex items-center gap-4">
          {profile?.role === 'admin' && (
            <Link 
              href="/admin" 
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all text-sm font-medium"
            >
              <Shield className="w-4 h-4" />
              Admin
            </Link>
          )}
          
          <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="" className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
            ) : (
              <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center">
                <UserIcon className="w-3 h-3 text-zinc-400" />
              </div>
            )}
            <span className="text-xs font-medium text-zinc-300">{profile?.name || user?.displayName || user?.email}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-all"
            title="Sign Out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
