import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Loader2, AlertCircle, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthView = 'LOGIN' | 'SIGNUP' | 'FIND_ID' | 'FIND_PASSWORD';

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<AuthView>('LOGIN');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || '구글 로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (view === 'LOGIN') {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        onClose();
      } else if (view === 'SIGNUP') {
 const { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: {
      phone: phone, // 여기서 phone은 입력창에서 받은 변수값입니다.
      full_name: fullName, // 이름 등 다른 정보도 있다면 여기에 추가
    }
  }
})
        if (error) throw error;
        setMessage('회원가입 확인 메일이 발송되었습니다. 이메일을 확인해 주세요.');
      } else if (view === 'FIND_PASSWORD') {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) throw error;
        setMessage('비밀번호 재설정 메일이 발송되었습니다. 이메일을 확인해 주세요.');
      } else if (view === 'FIND_ID') {
        // In a real app, you'd call a server function to find email by name/phone
        // Since we don't have that, we'll show a contact message
        setMessage('아이디(이메일) 찾기 요청이 접수되었습니다. 가입 시 입력하신 연락처로 안내해 드리겠습니다. (문의: info@nextin.ai.kr)');
      }
    } catch (err: any) {
      setError(err.message || '인증 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const getTitle = () => {
    switch (view) {
      case 'LOGIN': return '로그인';
      case 'SIGNUP': return '회원가입';
      case 'FIND_ID': return '아이디 찾기';
      case 'FIND_PASSWORD': return '비밀번호 찾기';
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 w-full max-w-md shadow-2xl overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[60px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[60px] -z-10"></div>

        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-white">
            {getTitle()}
          </h3>
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/5"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {message ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
            </div>
            <p className="text-zinc-300 mb-6 leading-relaxed">{message}</p>
            <button
              onClick={() => {
                setMessage(null);
                setView('LOGIN');
              }}
              className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all"
            >
              로그인하러 가기
            </button>
          </div>
        ) : (
          <form onSubmit={handleAuth} className="space-y-5">
            {(view === 'SIGNUP' || view === 'FIND_ID') && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">이름</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full bg-black/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                  />
                </div>
              </div>
            )}

            {(view === 'SIGNUP' || view === 'FIND_ID') && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">연락처</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full bg-black/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                  />
                </div>
              </div>
            )}

            {(view === 'LOGIN' || view === 'SIGNUP' || view === 'FIND_PASSWORD') && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">이메일</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="w-full bg-black/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                  />
                </div>
              </div>
            )}

            {(view === 'LOGIN' || view === 'SIGNUP') && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">비밀번호</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-black/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {view === 'LOGIN' ? '로그인' : view === 'SIGNUP' ? '회원가입' : '요청하기'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {view === 'LOGIN' && (
              <>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zinc-800"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-zinc-900 px-2 text-zinc-500">또는</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className="w-full py-4 bg-zinc-800 text-white font-bold rounded-2xl hover:bg-zinc-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                  구글로 로그인
                </button>
              </>
            )}

            {view === 'LOGIN' && (
              <div className="flex justify-center gap-4 text-xs text-zinc-500">
                <button 
                  type="button" 
                  onClick={() => setView('FIND_ID')}
                  className="hover:text-white transition-colors"
                >
                  아이디 찾기
                </button>
                <span className="text-zinc-800">|</span>
                <button 
                  type="button" 
                  onClick={() => setView('FIND_PASSWORD')}
                  className="hover:text-white transition-colors"
                >
                  비밀번호 찾기
                </button>
              </div>
            )}

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => {
                  setError(null);
                  setView(view === 'LOGIN' ? 'SIGNUP' : 'LOGIN');
                }}
                className="text-zinc-400 hover:text-white text-sm transition-colors"
              >
                {view === 'LOGIN' ? (
                  <>계정이 없으신가요? <span className="text-white font-bold underline underline-offset-4 ml-1">회원가입</span></>
                ) : (
                  <>이미 계정이 있으신가요? <span className="text-white font-bold underline underline-offset-4 ml-1">로그인</span></>
                )}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
