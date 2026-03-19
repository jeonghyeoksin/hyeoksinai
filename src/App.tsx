import React, { useState } from 'react';
import { Search, Lock, Unlock, ExternalLink, Menu, X, Settings, Zap, Sparkles, ArrowRight, Copy, Check, Bot, Youtube, Star, FileText, AlertTriangle, Wand2, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { additionalPrompts } from './promptsData';

// --- Types ---
type AccessLevel = 'FREE' | 'PREMIUM';
type Category = 'ALL' | 'MARKETING' | 'DESIGN' | 'VIDEO' | 'PLANNING' | 'PROMPT';
type PromptSubCategory = '비즈니스' | '마케팅' | '디자인' | '콘텐츠' | '개발' | '교육' | '일상';

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  customVisual?: React.ReactNode;
  link?: string;
  access: AccessLevel;
  category: Category;
  tags: string[];
  promptText?: string;
  promptSubCategory?: PromptSubCategory;
}

// --- Mock Data ---
const PROGRAMS: Program[] = [
  {
    id: '1',
    title: '혁신 AI Lite',
    description: '블로그, 카드뉴스, 이미지, 동영상을 한 번에 생성하는 올인원 AI 크리에이티브 스튜디오',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#1e1b4b] via-[#172554] to-[#0f172a] relative overflow-hidden flex items-end p-5">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
        
        {/* Wavy lines placeholder */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M-10,50 Q25,10 50,50 T110,50" fill="none" stroke="#60a5fa" strokeWidth="0.3" />
          <path d="M-10,70 Q30,110 60,50 T110,30" fill="none" stroke="#818cf8" strokeWidth="0.3" />
          <path d="M-10,30 Q40,-10 70,60 T110,80" fill="none" stroke="#60a5fa" strokeWidth="0.3" />
          <path d="M-10,40 Q35,20 55,60 T110,40" fill="none" stroke="#818cf8" strokeWidth="0.3" />
          <path d="M-10,60 Q45,90 65,40 T110,60" fill="none" stroke="#60a5fa" strokeWidth="0.3" />
        </svg>

        {/* Big AI Text */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 text-[140px] font-black text-[#1e3a8a] opacity-60 leading-none tracking-tighter select-none" style={{ textShadow: '10px 10px 20px rgba(0,0,0,0.5)' }}>
          AI
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">✨</span>
            </div>
            <h2 className="text-2xl font-bold text-white leading-tight">
              혁신 AI Lite
            </h2>
          </div>
          <p className="text-zinc-300 text-[10px] leading-relaxed max-w-[85%]">
            블로그, 카드뉴스, 이미지, 동영상을 한 번에 생성하는 올인원 AI 크리에이티브 스튜디오
          </p>
        </div>
      </div>
    ),
    access: 'FREE',
    category: 'VIDEO',
    tags: ['이미지 생성', '3D 모델링'],
    link: 'https://hyeoksinailite.fragrant-flower-7056.workers.dev'
  },
  {
    id: '2',
    title: '혁신 수익화 발굴 AI',
    description: '여러분의 잠재력을 깨워서 형식적이고 실행불가한 AI수익화가 아닌 나만의 맞춤 AI수익화의 자세한 방향을 찾아드립니다!',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#16162c] to-[#0a0a14] relative overflow-hidden flex items-center">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
        
        {/* Wavy lines placeholder */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M-10,50 Q25,10 50,50 T110,50" fill="none" stroke="#4a4ae2" strokeWidth="0.2" />
          <path d="M-10,70 Q30,110 60,50 T110,30" fill="none" stroke="#4a4ae2" strokeWidth="0.2" />
          <path d="M-10,30 Q40,-10 70,60 T110,80" fill="none" stroke="#4a4ae2" strokeWidth="0.2" />
          <path d="M-10,40 Q35,20 55,60 T110,40" fill="none" stroke="#4a4ae2" strokeWidth="0.2" />
          <path d="M-10,60 Q45,90 65,40 T110,60" fill="none" stroke="#4a4ae2" strokeWidth="0.2" />
        </svg>

        {/* Big AI Text */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 text-[140px] font-black text-[#1e293b] opacity-80 leading-none tracking-tighter select-none" style={{ textShadow: '10px 10px 20px rgba(0,0,0,0.5)' }}>
          AI
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 flex flex-col justify-center h-full w-full">
          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[9px] font-bold w-max mb-3">
            <span className="text-amber-400">✨</span> 정혁신 AI 솔루션
          </div>
          <h2 className="text-xl font-bold text-white leading-tight mb-1">
            AI로 시작하는
          </h2>
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500 mb-2">
            무자본 수익화 혁명
          </h2>
          <p className="text-zinc-400 text-[9px] leading-relaxed max-w-[75%]">
            당신의 숨겨진 잠재력을 찾아내어, 당장 오늘부터 시작할 수 있는 가장 현실적인 수익화 로드맵을 설계합니다.
          </p>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PLANNING',
    tags: ['LLM', '번역']
  },
  {
    id: '3',
    title: '혁신 블로그 AI',
    description: '인공지능의 힘으로 당신만의 독창적이고 전문적인 블로그 포스팅을 완성하세요.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#064e3b] via-[#022c22] to-[#0f172a] relative overflow-hidden flex items-end p-5">
        {/* Abstract Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,40 Q30,20 60,50 T100,30 L100,100 L0,100 Z" fill="#047857" opacity="0.2" />
          <path d="M0,60 Q40,40 70,70 T100,50 L100,100 L0,100 Z" fill="#065f46" opacity="0.3" />
        </svg>

        {/* Big BLOG Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[130px] font-black text-[#065f46] opacity-40 leading-none tracking-tighter select-none w-full text-center">
          BLOG
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="inline-flex items-center px-2 py-0.5 rounded-full border border-[#10b981]/50 bg-[#10b981]/10 text-[#10b981] text-[8px] font-bold tracking-wider mb-2">
            2026 FUTURE EDITION
          </div>
          <h2 className="text-2xl font-bold text-white leading-tight mb-2">
            혁신 블로그 AI
          </h2>
          <p className="text-zinc-300 text-[10px] leading-relaxed max-w-[80%] mb-3">
            인공지능의 힘으로 당신만의 독창적이고 전문적인 블로그 포스팅을 완성하세요.
          </p>
          <div className="flex justify-end w-full">
            <div className="bg-[#10b981] text-white text-[10px] font-bold py-1.5 px-3 rounded-full flex items-center gap-1 shadow-lg">
              새 포스팅 작성하기 ⚡
            </div>
          </div>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'MARKETING',
    tags: ['블로그', '콘텐츠 생성'],
    link: 'https://hyeoksin-blog-ver20.vercel.app'
  },
  {
    id: '4',
    title: '혁신 상세페이지 AI',
    description: '단 10분만에 완성되는 고전환율 맞춤 상세페이지 제작 AI',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex items-end justify-center pb-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/30"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center w-full px-4">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
            혁신 <span className="text-[#38bdf8]">AI 상세페이지</span>
          </h2>
          <p className="text-zinc-200 text-[11px] font-medium drop-shadow-md">
            단 10분만에 완성되는 고전환율 맞춤 상세페이지 제작 AI
          </p>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'DESIGN',
    tags: ['상세페이지', '디자인'],
    link: 'https://hyeoksin-sangsepage-ver16.vercel.app'
  },
  {
    id: '16',
    title: '혁신 홈페이지 개발 AI',
    description: '당신의 아이디어를 구글 AI 스튜디오를 위한 완벽한 프롬프트로 변환합니다',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
        {/* Background Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full">
          {/* Top Icon */}
          <div className="w-12 h-12 rounded-2xl border border-indigo-400/30 bg-indigo-500/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Sparkles className="w-6 h-6 text-indigo-300" />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl font-bold tracking-tight leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-300 drop-shadow-sm">
            혁신 홈페이지 개발 AI
          </h2>
          
          {/* Subtitle */}
          <p className="text-zinc-300 text-sm font-medium tracking-wide leading-relaxed mb-8 drop-shadow-md">
            당신의 아이디어를 구글 AI 스튜디오를 위한<br/>완벽한 프롬프트로 변환합니다
          </p>
          
          {/* Developer Badge */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
            <Code className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-zinc-300 text-xs font-medium tracking-wider">개발자: 정혁신</span>
          </div>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PLANNING',
    tags: ['홈페이지', '개발', '프롬프트'],
    link: 'https://hyeoksin-homepage.fragrant-flower-7056.workers.dev'
  },
  {
    id: '5',
    title: '혁신 직무역량 강화 AI',
    description: '당신의 잠재력을 깨우고 커리어의 새로운 패러다임을 제시합니다',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center w-full px-4 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-4">
            <span className="text-yellow-500 text-xs">✨</span>
            <span className="text-zinc-300 text-[10px] font-medium tracking-wide">AI-Powered Career Growth</span>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight drop-shadow-lg">
            혁신 직무역량 강화 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">AI</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-zinc-200 text-[11px] font-medium drop-shadow-md">
            당신의 잠재력을 깨우고 커리어의 새로운 패러다임을 제시합니다
          </p>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PLANNING',
    tags: ['직무역량', '커리어']
  },
  {
    id: '6',
    title: '혁신 키워드 조합 AI',
    description: '데이터 기반 키워드 전략 엔진으로 최적의 키워드 조합을 생성합니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center bg-[#13111C]">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] left-[10%] w-[60%] h-[60%] bg-indigo-900/30 rounded-full blur-[80px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[70%] h-[70%] bg-rose-900/20 rounded-full blur-[80px] mix-blend-screen"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center w-full px-4 flex flex-col items-center">
          {/* Icon Box */}
          <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-5 shadow-xl">
            <Zap className="w-5 h-5 text-zinc-200" strokeWidth={1.5} />
          </div>
          
          {/* Title */}
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
            혁신 키워드 조합 AI
          </h2>
          
          {/* Subtitle */}
          <p className="text-zinc-400 text-[10px] font-medium tracking-[0.15em] uppercase">
            Data-Driven Keyword Strategy Engine
          </p>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'MARKETING',
    tags: ['키워드', '마케팅']
  },
  {
    id: '7',
    title: '혁신 카드뉴스 AI',
    description: '단 한 줄의 텍스트로 시작하는 전문가 수준의 인스타그램 카드뉴스를 생성합니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center bg-[#2B0F4C]">
        {/* Background Gradients */}
        <div className="absolute top-[-30%] left-[-20%] w-[100%] h-[100%] bg-[#B86A2E]/40 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-30%] left-[-20%] w-[100%] h-[100%] bg-[#0C4F5A]/60 rounded-full blur-[80px]"></div>
        <div className="absolute top-[10%] right-[-30%] w-[100%] h-[100%] bg-[#4A154B]/50 rounded-full blur-[80px]"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center w-full px-4 flex flex-col items-center">
          {/* Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-4">
            <Sparkles className="w-3 h-3 text-indigo-300" />
            <span className="text-white text-[10px] font-medium">Gemini 3.1 Pro & Nano Banana</span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            혁신 카드뉴스 AI
          </h2>
          
          {/* Subtitle */}
          <p className="text-zinc-300 text-sm font-medium leading-relaxed mb-6">
            단 한 줄의 텍스트로 시작하는<br/>전문가 수준의 인스타그램 카드뉴스
          </p>
          
          {/* Button */}
          <div className="bg-white text-black px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg hover:bg-zinc-100 transition-colors">
            지금 바로 시작하기 <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'DESIGN',
    tags: ['카드뉴스', '인스타그램']
  },
  {
    id: '8',
    title: '혁신 전자책 AI',
    description: 'Gemini 3.1 Pro의 강력한 추론 능력과 이미지 생성 기능을 결합하여 단 몇 번의 클릭으로 전문가 수준의 전자책을 기획하고 출판하세요.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-[#4A154B]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center w-full px-4 flex flex-col items-center">
          {/* Icon Box */}
          <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center mb-5 shadow-xl">
            <Sparkles className="w-7 h-7 text-indigo-200" strokeWidth={1.5} />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            혁신 전자책 AI
          </h2>
          
          {/* Subtitle */}
          <p className="text-zinc-100 text-sm font-medium leading-relaxed drop-shadow-md">
            Gemini 3.1 Pro의 강력한 추론 능력과 이미지 생성 기능을 결합하여<br/>
            단 몇 번의 클릭으로 전문가 수준의 전자책을 기획하고 출판하세요.
          </p>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PLANNING',
    tags: ['전자책', '출판'],
    link: 'https://hyeoksin-book-ver3.vercel.app'
  },
  {
    id: '9',
    title: '혁신 유튜브 AI',
    description: '단 몇 번의 클릭으로 완벽한 유튜브 쇼츠와 영상을 제작하세요. AI가 대본부터 음성, 이미지, 영상 렌더링까지 모든 것을 자동으로 완성합니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col justify-center p-8">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        {/* Dark/Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b]/90 via-[#312e81]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-[85%]">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-900/50 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
            <span className="text-indigo-200 text-[11px] font-semibold tracking-wide">Next-Gen Video Creation</span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg flex items-center gap-3">
            혁신 <span className="text-[#38bdf8]">유튜브 AI</span>
          </h2>
          
          {/* Description */}
          <p className="text-zinc-200 text-sm leading-relaxed drop-shadow-md">
            단 몇 번의 클릭으로 완벽한 유튜브 쇼츠와 영상을 제작하세요. AI가 대본부터 음성, 이미지, 영상 렌더링까지 모든 것을 자동으로 완성합니다.
          </p>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'VIDEO',
    tags: ['유튜브', '영상제작']
  },
  {
    id: '10',
    title: '혁신 맞춤 프롬프트 생성 AI',
    description: '나만의 맞춤형 프롬프트를 생성해주는 강력한 AI 에이전트',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex items-center justify-center p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        {/* Neon Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#1e1b4b]/70 to-[#0f172a]/90"></div>
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center w-full flex flex-col items-center">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mb-3 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            <Bot className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 mb-1 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] tracking-tight">
            맞춤 프롬프트
          </h2>
          <h2 className="text-xl font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] tracking-tight">
            생성 에이전트
          </h2>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PLANNING',
    tags: ['프롬프트', 'AI 에이전트'],
    link: 'https://gemini.google.com/gem/1GG3OdPsLk3Ra_MfrDe-MlomHajQr-tXe?usp=sharing'
  },
  {
    id: '11',
    title: '혁신 유튜브 썸네일 AI',
    description: '알고리즘의 선택을 받는 완벽한 썸네일을 설계하세요. 당신의 콘텐츠에 날개를 달아줄 AI 디자인 스튜디오입니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center bg-[#0a0a0a] p-6">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-600/20 blur-[60px] rounded-full"></div>
        
        {/* YouTube Icon with Glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-red-600 blur-xl opacity-20 animate-pulse"></div>
          <div className="relative bg-white rounded-2xl p-3 shadow-2xl">
            <Youtube className="w-12 h-12 text-[#FF0000] fill-[#FF0000]" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/30 backdrop-blur-sm mb-4">
          <Sparkles className="w-3 h-3 text-red-400" />
          <span className="text-red-200 text-[10px] font-bold tracking-wider uppercase">Next-Gen Thumbnail Generator</span>
        </div>
        
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-2xl font-black text-white tracking-tight mb-1">
            혁신 유튜브 <span className="text-red-500">썸네일 AI</span>
          </h2>
          <p className="text-zinc-400 text-[10px] font-medium leading-tight">
            알고리즘의 선택을 받는<br/>완벽한 썸네일 디자인
          </p>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'DESIGN',
    tags: ['유튜브', '썸네일', '디자인'],
    link: 'https://hyeoksinthumbnailver1.vercel.app/'
  },
  {
    id: '12',
    title: '혁신 제안서 AI',
    description: '단 몇 번의 클릭으로 완벽하게 구조화된 비즈니스 제안서를 완성하세요. AI가 당신의 아이디어를 설득력 있는 문서와 시각 자료로 변환합니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col justify-center p-8">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        {/* Dark/Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b]/95 via-[#312e81]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-[90%]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-900/60 backdrop-blur-md mb-4">
            <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
            <span className="text-indigo-100 text-[11px] font-semibold tracking-wide">AI-Powered Business Solutions</span>
          </div>
          
          <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">
            혁신 제안서 AI
          </h2>
          <p className="text-indigo-100/90 text-sm leading-relaxed drop-shadow-md font-medium">
            단 몇 번의 클릭으로 완벽하게 구조화된 비즈니스 제안서를 완성하세요.<br/>
            AI가 당신의 아이디어를 설득력 있는 문서와 시각 자료로 변환합니다.
          </p>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PLANNING',
    tags: ['제안서', '비즈니스'],
    link: 'https://hyeoksin-proposal.vercel.app/'
  },
  {
    id: '13',
    title: '혁신 리뷰 AI',
    description: '프리미엄 바이럴 크리에이터. 설득력 있고 자연스러운 고품질 리뷰를 자동으로 생성합니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center bg-[#1a1b41] p-6">
        {/* Background Circles */}
        <div className="absolute top-[-10%] left-[-10%] w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Icon Container */}
        <div className="relative mb-6 flex flex-col items-center">
          <div className="relative w-20 h-24 border-2 border-slate-600/50 rounded-lg bg-slate-800/30 backdrop-blur-sm flex flex-col p-3 shadow-lg">
            {/* Document Lines */}
            <div className="w-10 h-1 bg-slate-500/60 rounded-full mb-2"></div>
            <div className="w-12 h-1 bg-slate-500/60 rounded-full mb-2"></div>
            <div className="w-8 h-1 bg-slate-500/60 rounded-full mb-4"></div>
            
            {/* Stars */}
            <div className="flex gap-0.5 mt-auto">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.8)]" />
              ))}
            </div>
            
            {/* Pen Icon (Positioned absolutely) */}
            <div className="absolute -right-3 bottom-6 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] transform rotate-12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Title Section */}
        <div className="text-center z-10">
          <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 tracking-tight mb-1 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]">
            혁신 리뷰 AI
          </h2>
          <p className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">
            Premium Viral Creator
          </p>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'MARKETING',
    tags: ['리뷰', '바이럴', '마케팅'],
    link: 'https://hyeoksin-review.fragrant-flower-7056.workers.dev'
  },
  {
    id: '14',
    title: 'AI 비즈니스 팩트 폭격기 & 리스크 분석가 에이전트',
    description: '비즈니스 아이디어와 전략의 팩트를 점검하고 잠재적 리스크를 철저하게 분석하는 AI 에이전트입니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col justify-between p-6 bg-slate-950">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 via-slate-900/80 to-rose-900/60"></div>
        
        {/* Cyberpunk Grid/Lines */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        {/* Top Section: Facts & Risk */}
        <div className="relative z-10 flex justify-between items-start w-full">
          <div className="flex flex-col gap-1">
            <span className="text-cyan-400 font-black text-[10px] tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">Facts</span>
            <div className="w-8 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <span className="text-rose-500 font-black text-[10px] tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]">Risk Analyst</span>
            <div className="w-8 h-0.5 bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"></div>
          </div>
        </div>

        {/* Center: Holographic UI Elements */}
        <div className="relative z-10 flex-grow flex items-center justify-center w-full my-4">
          <div className="absolute left-6 w-14 h-14 border border-cyan-500/30 rounded bg-cyan-500/10 flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <Zap className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </div>
          <div className="absolute right-6 w-14 h-14 border border-rose-500/30 rounded bg-rose-500/10 flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <AlertTriangle className="w-6 h-6 text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
          </div>
          
          {/* Center Target */}
          <div className="w-24 h-24 rounded-full border border-dashed border-slate-400/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
            <div className="w-16 h-16 rounded-full border border-slate-400/20 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-slate-400/10"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Title */}
        <div className="relative z-10 w-full text-center">
          <h2 className="text-2xl font-black text-white tracking-tight leading-tight drop-shadow-lg flex flex-col gap-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100">AI 비즈니스 팩트 폭격기</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-rose-300 text-xl">& 리스크 분석가</span>
          </h2>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PLANNING',
    tags: ['비즈니스', '분석', '리스크'],
    link: 'https://gemini.google.com/gem/1KpshogfylCy9GoY4QGNZACEfJ81FkCjd?usp=sharing'
  },
  {
    id: '15',
    title: '혁신 맞춤 프롬프트 AI',
    description: '당신의 비즈니스와 마케팅을 위한 완벽한 프롬프트를 설계해 드립니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6 bg-slate-900">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full mt-8">
          {/* Badge */}
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-slate-800/50 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <Wand2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-50 text-xs font-medium tracking-wider">PROMPT ENGINEERING</span>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl font-black text-white tracking-tight leading-tight drop-shadow-lg mb-4">
            혁신 맞춤 프롬프트 AI
          </h2>
          
          {/* Subtitle */}
          <p className="text-slate-300 text-sm font-medium tracking-wide max-w-[90%] drop-shadow-md">
            당신의 비즈니스와 마케팅을 위한<br/>완벽한 프롬프트를 설계해 드립니다.
          </p>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PROMPT',
    tags: ['프롬프트', '엔지니어링', '맞춤형'],
    link: 'https://hyeoksin-custum.vercel.app'
  },
  {
    id: 'p1',
    title: '1초 만에 끝내는 완벽한 회의록 및 액션 플랜',
    description: '두서없는 회의 내용을 구조화하여 핵심만 짚어주고, 누가 언제까지 무엇을 해야 하는지 명확한 액션 플랜으로 변환합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['요약', '회의록'],
    promptText: '당신은 10년 차 전문 비서이자 프로젝트 매니저입니다. 아래 제공된 회의 녹취록/메모를 바탕으로 다음 구조에 맞춰 완벽한 회의록을 작성해 주세요.\n\n1. 회의 핵심 요약 (3줄 이내)\n2. 주요 논의 및 결정 사항 (불릿 포인트)\n3. 실행 항목 (Action Items)\n   - [담당자명] [해야 할 일] (기한: [명시된 경우 기한, 없으면 \'미정\'])\n4. 미해결 과제 및 다음 회의 안건\n\n[회의 내용 붙여넣기]'
  },
  {
    id: 'p2',
    title: '승률 99% 비즈니스 이메일 자동 작성기',
    description: '까다로운 고객의 클레임부터 중요한 제안까지, 상대방의 마음을 움직이는 세련되고 프로페셔널한 이메일을 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['이메일', '비즈니스'],
    promptText: '당신은 글로벌 기업의 커뮤니케이션 전문가입니다. 아래 수신한 이메일 내용을 분석하여, 가장 적절하고 프로페셔널한 답장 초안을 작성해 주세요.\n\n- 목적: [예: 고객 불만 해결, 미팅 제안 수락 등]\n- 톤앤매너: 정중하고, 공감하며, 해결책을 명확히 제시하는 톤\n- 필수 포함 내용: [예: 환불 규정 안내, 다음 주 화요일 미팅 가능 여부]\n\n[수신한 이메일 내용 붙여넣기]'
  },
  {
    id: 'p3',
    title: '꿰뚫어 보는 입체적 SWOT 분석 마스터',
    description: '단순한 나열을 넘어, 시장 트렌드와 경쟁사 동향까지 반영한 심도 있는 인사이트와 전략적 방향성을 도출합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['분석', '기획'],
    promptText: '당신은 탑티어 전략 컨설턴트입니다. [분석 대상 기업/제품/프로젝트명]에 대한 심층적인 SWOT 분석을 수행해 주세요.\n\n1. S, W, O, T 각 항목별로 가장 치명적이고 핵심적인 요인 3가지씩 도출 (구체적인 근거 포함)\n2. 단순 분석을 넘어선 크로스 SWOT 전략 제시:\n   - SO 전략 (강점 극대화 및 기회 선점)\n   - WT 전략 (약점 보완 및 위협 회피)\n3. 최종적으로 이 비즈니스가 나아가야 할 핵심 전략 방향 1줄 요약'
  },
  {
    id: 'p4',
    title: '투자자를 홀리는 마스터 비즈니스 플랜',
    description: '머릿속의 아이디어를 투자자와 이해관계자를 완벽하게 설득할 수 있는 논리적이고 탄탄한 사업 계획서로 구체화합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['기획', '사업계획'],
    promptText: '당신은 수백억 원의 투자를 유치한 연쇄 창업가이자 벤처캐피탈(VC) 심사역입니다. [신규 사업 아이템/아이디어]를 바탕으로, 투자자를 설득할 수 있는 비즈니스 계획서 초안을 작성해 주세요.\n\n다음 목차를 반드시 포함하고, 각 섹션별로 핵심적으로 들어가야 할 내용을 2~3문장으로 작성해 주세요.\n1. Executive Summary (엘리베이터 피치 포함)\n2. Problem & Solution (고객의 페인포인트와 우리의 해결책)\n3. Market Size & Target Audience (TAM-SAM-SOM)\n4. Business Model (수익 창출 방안)\n5. Go-to-Market Strategy (초기 고객 확보 전략)'
  },
  {
    id: 'p5',
    title: '100% 수주를 부르는 필승 제안서',
    description: '클라이언트의 숨겨진 니즈를 파악하고, 우리의 솔루션이 유일한 정답임을 증명하는 압도적인 제안서를 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['제안서', '기획'],
    promptText: '당신은 B2B 세일즈 및 제안 전략 최고 전문가입니다. 클라이언트에게 제안할 "[프로젝트 이름]"에 대한 설득력 있는 제안서 초안을 작성해 주세요.\n\n아래 요소를 포함하여 왜 지금, 왜 우리와 함께 해야 하는가가 돋보이도록 작성해 주세요.\n- 배경 및 목적: 클라이언트가 현재 겪고 있는 문제점 공감\n- 제안 핵심 요약: 우리가 제공할 솔루션의 차별점\n- 기대 효과: 정량적/정성적 ROI (투자 대비 효과)\n- 실행 계획 및 타임라인: [예: 3개월 단위 마일스톤]'
  },
  {
    id: 'p6',
    title: '상위 1% 인재를 끌어당기는 매력적인 JD',
    description: '딱딱하고 지루한 채용 공고를 벗어나, 최고의 인재들이 합류하고 싶어 가슴 뛰게 만드는 매력적인 직무 기술서를 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['HR', '채용'],
    promptText: '당신은 실리콘밸리 유니콘 기업의 시니어 리크루터입니다. [채용 포지션명, 예: 5년 차 이상 프로덕트 디자이너] 채용을 위한 매력적인 직무 기술서(JD)를 작성해 주세요.\n\n단순한 업무 나열이 아닌, 지원자가 이 역할에 매력을 느끼도록 다음 항목을 포함해 주세요.\n1. 포지션 소개 (이 역할이 우리 회사에서 왜 중요하고, 어떤 임팩트를 낼 수 있는지)\n2. 주요 업무 (합류 후 첫 3개월, 1년 동안 달성해야 할 목표 위주로)\n3. 자격 요건 (반드시 필요한 핵심 역량 3~4가지)\n4. 우대 사항 (있으면 좋은 경험이나 스킬)\n5. 이 포지션만의 특별한 성장 기회'
  },
  {
    id: 'p7',
    title: '청중을 사로잡는 발표 자료 구조화',
    description: '특정 주제에 대한 발표의 슬라이드별 핵심 메시지와 내용을 탄탄하게 구성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '콘텐츠',
    tags: ['발표', '콘텐츠'],
    promptText: '당신은 TED 강연 기획자입니다. [발표 주제]에 대해 15분간 발표해야 합니다. 오프닝, 본론(3가지 핵심), 클로징으로 구성된 10장 분량의 슬라이드 콘텐츠를 개조식으로 작성해 주세요. 각 슬라이드마다 청중의 시선을 끌 수 있는 핵심 메시지(Hook)를 포함해 주세요.'
  },
  {
    id: 'p8',
    title: '팀의 가슴을 뛰게 하는 OKR 목표 설정',
    description: '한 분기 동안 팀이 집중해야 할 도전적인 목표(Objectives)와 측정 가능한 핵심 결과(Key Results)를 설정합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['목표', 'OKR'],
    promptText: '당신은 OKR 코치입니다. 우리 [팀 이름]의 다음 분기 목표는 [팀의 상위 목표]입니다. 이 목표를 달성하기 위한 도전적이고 영감을 주는 Objective 1개와, 이를 측정할 수 있는 구체적인 Key Result 3개를 설정해 주세요.'
  },
  {
    id: 'p9',
    title: '답장률을 200% 높이는 콜드 메일 템플릿',
    description: '잠재 고객에게 제품이나 서비스를 소개하고 미팅을 이끌어내는 효과적인 콜드 메일 템플릿을 만듭니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['영업', '콜드메일'],
    promptText: '당신은 B2B 세일즈 마스터입니다. 잠재 고객에게 우리 [서비스 이름]를 소개하는 콜드 메일 템플릿을 작성해 주세요. 상대방의 문제에 공감하고, 우리가 어떻게 도울 수 있는지 간결하게 제시하며, 부담 없는 콜 투 액션(CTA)을 포함해 주세요.'
  },
  {
    id: 'p10',
    title: '유리한 고지를 점하는 전략적 협상 시나리오',
    description: '중요한 협상을 앞두고 목표, 최선/최악의 시나리오, 대응 전략을 치밀하게 수립합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['협상', '전략'],
    promptText: '당신은 전문 협상가입니다. [상대방]과 [협상 안건]에 대해 협상을 해야 합니다. 우리의 목표, 양보 가능한 지점(walk-away point), 그리고 예상되는 상대방의 주장에 대한 논리적인 대응 시나리오를 3가지로 나누어 정리해 주세요.'
  },
  {
    id: 'p11',
    title: '실패 확률을 0으로 만드는 시장 조사 계획',
    description: '신제품 출시 전 타겟 고객과 시장 동향을 파악하기 위한 구체적인 리서치 계획을 수립합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['시장조사', '기획'],
    promptText: '당신은 시니어 마켓 리서처입니다. 신제품 [제품 종류] 출시를 앞두고 시장 조사를 하려고 합니다. 조사 목표, 타겟 그룹, 조사 방법(설문, 인터뷰 등), 그리고 반드시 확인해야 할 핵심 질문 리스트 5가지를 포함한 계획을 세워주세요.'
  },
  {
    id: 'p12',
    title: '1분 만에 결재받는 임원용 핵심 요약',
    description: '장문의 보고서를 바쁜 의사결정자가 빠르게 파악하고 결정할 수 있도록 한 페이지로 요약합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['보고서', '요약'],
    promptText: '당신은 C-레벨 임원의 수석 보좌관입니다. 다음 보고서의 핵심 내용을 경영진이 1분 안에 파악할 수 있도록 Executive Summary를 작성해 주세요. 문제, 분석, 결론, 제언이 명확하게 드러나야 합니다.\n\n[보고서 내용 요약]'
  },
  {
    id: 'p13',
    title: '틀을 깨는 창의적 브레인스토밍 아이디어',
    description: '특정 문제 해결을 위해 전통적인 방식을 벗어난 다양하고 혁신적인 아이디어를 생성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '콘텐츠',
    tags: ['아이디어', '기획'],
    promptText: '당신은 세계적인 크리에이티브 디렉터입니다. [우리 회사가 겪고 있는 문제]를 해결하기 위한 창의적인 아이디어 10가지를 브레인스토밍해 주세요. 전통적인 방식에서 벗어난 만약에(what if) 질문을 활용해 파격적인 접근법을 포함해 주세요.'
  },
  {
    id: 'p14',
    title: '칼퇴를 부르는 아이젠하워 업무 우선순위',
    description: '여러 업무들 사이에서 중요도와 긴급도를 기준으로 우선순위를 정하고 실행 방법을 제시합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '일상',
    tags: ['생산성', '업무관리'],
    promptText: '당신은 생산성 전문가입니다. 현재 처리해야 할 업무가 [업무 1], [업무 2], [업무 3], [업무 4]가 있습니다. 아이젠하워 매트릭스(긴급성/중요성)를 사용하여 이 업무들의 우선순위를 정하고, 각 업무를 즉시 실행, 계획, 위임, 제거 중 어떻게 처리해야 할지 이유와 함께 설명해 주세요.'
  },
  {
    id: 'p15',
    title: '팀원의 성장을 이끄는 건설적 성과 피드백',
    description: '팀원의 성과에 대해 감정을 배제하고 구체적이고 건설적인 피드백을 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['HR', '피드백'],
    promptText: '당신은 훌륭한 리더십을 갖춘 팀장입니다. 팀원 [이름]의 성과 평가를 위해 피드백을 작성해야 합니다. [잘한 점]과 [개선이 필요한 점]에 대해 구체적인 사례를 들어 긍정적이고 건설적인 피드백 초안을 작성해 주세요. 다음 분기를 위한 액션 플랜도 제안해 주세요.'
  },
  {
    id: 'p16',
    title: '갈등을 해결하는 부드러운 1:1 면담 스크립트',
    description: '성과가 저조한 팀원에게 피드백을 전달하고 개선 의지를 이끌어내는 대화 시나리오를 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['HR', '면담'],
    promptText: '당신은 공감 능력이 뛰어난 HR 코치입니다. 성과가 기대에 미치지 못하는 팀원 [이름]과 1:1 면담을 해야 합니다. 상대방이 방어적으로 나오지 않으면서도, 문제점을 명확히 인지하고 개선 의지를 갖도록 유도하는 대화 스크립트를 작성해 주세요.'
  },
  {
    id: 'p17',
    title: '30초 만에 투자자의 마음을 훔치는 엘리베이터 피치',
    description: '우리 스타트업을 짧은 시간 안에 매력적으로 소개하고 호기심을 유발하는 스크립트를 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['스타트업', '피칭'],
    promptText: '당신은 피칭 전문가입니다. 우리는 [문제점]을 해결하는 [우리 제품/서비스]를 만드는 스타트업입니다. 투자자에게 30초 안에 우리 사업을 매력적으로 설명하고 다음 미팅을 이끌어낼 수 있는 엘리베이터 피치 스크립트를 만들어 주세요.'
  },
  {
    id: 'p18',
    title: '프로젝트 성공을 위한 이해관계자 소통 플랜',
    description: '프로젝트의 주요 이해관계자들에게 진행 상황을 어떻게, 얼마나 자주 공유할지 체계적인 계획을 세웁니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['프로젝트', '커뮤니케이션'],
    promptText: '당신은 시니어 프로젝트 매니저입니다. [프로젝트 이름]의 주요 이해관계자(내부 팀, 경영진, 클라이언트 등)를 정의하고, 각 그룹에게 어떤 내용을, 어떤 채널로, 얼마나 자주 공유해야 하는지 커뮤니케이션 계획을 수립해 주세요.'
  },
  {
    id: 'p19',
    title: '생산성을 200% 끌어올리는 완벽한 회의 안건',
    description: '회의의 목적과 시간을 명확히 하고, 참석자들의 사전 준비를 돕는 회의 안건 템플릿을 만듭니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['회의', '생산성'],
    promptText: '당신은 퍼실리테이터입니다. 팀 주간 회의의 생산성을 높이고 싶습니다. 회의 목적, 참석자, 논의할 안건(예상 소요 시간 포함), 그리고 사전 준비사항이 포함된 효과적인 회의 안건(Agenda) 템플릿을 만들어 주세요.'
  },
  {
    id: 'p20',
    title: '어색함 제로, 팀워크를 다지는 아이스브레이킹',
    description: '팀워크를 강화하고 소통을 활성화할 수 있는 온라인/오프라인 팀 빌딩 활동 아이디어를 제안합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '교육',
    tags: ['팀빌딩', '아이스브레이킹'],
    promptText: '당신은 조직 문화 담당자입니다. 새로운 팀원들이 기존 팀원들과 빨리 친해질 수 있도록, 어색하지 않고 재미있게 참여할 수 있는 아이스브레이킹 활동 5가지를 추천해 주세요. 온라인과 오프라인 모두 가능한 방법으로 구성해 주세요.'
  },
  {
    id: 'p21',
    title: '실행력을 극대화하는 SMART 목표 설정 가이드',
    description: '막연한 목표를 구체적이고 측정 가능하며 달성 가능한 SMART 원칙에 따라 재구성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '일상',
    tags: ['목표', '자기계발'],
    promptText: '당신은 라이프 코치입니다. "올해는 영어 공부를 열심히 하겠다"는 막연한 목표를 SMART(Specific, Measurable, Achievable, Relevant, Time-bound) 원칙에 따라 구체적이고 실행 가능한 목표로 다시 설정해 주세요.'
  },
  {
    id: 'p22',
    title: '딥워크를 위한 완벽한 타임 블록킹 스케줄',
    description: '특정 직업의 생산성을 극대화하기 위한 이상적인 하루 일과를 타임 블록킹 방식으로 계획합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '일상',
    tags: ['시간관리', '생산성'],
    promptText: '당신은 시간 관리 전문가입니다. 프리랜서 디자이너로서 재택근무를 하고 있습니다. 집중력을 유지하고 생산성을 높일 수 있도록, 이상적인 하루 일과를 타임 블록킹(Time Blocking) 방식으로 계획해 주세요. (예: 9-11시 디자인 집중, 11-12시 이메일 처리 등)'
  },
  {
    id: 'p23',
    title: '번아웃을 막고 팀을 성장시키는 업무 위임 전략',
    description: '팀장으로서 팀원들에게 효과적으로 업무를 위임하고 권한을 부여하는 방법에 대해 조언합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['리더십', '위임'],
    promptText: '당신은 리더십 코치입니다. 내가 모든 일을 다 하려고 해서 번아웃이 올 것 같습니다. 팀원들에게 업무를 효과적으로 위임하는 구체적인 방법 3가지를 알려주세요. 어떤 업무를 위임하고, 어떻게 위임해야 할지 가이드를 제시해 주세요.'
  },
  {
    id: 'p24',
    title: '한눈에 파악하는 9블록 비즈니스 모델 캔버스',
    description: '새로운 서비스 아이디어를 비즈니스 모델 캔버스의 9가지 블록에 맞춰 분석하고 정리합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['기획', '비즈니스모델'],
    promptText: '당신은 비즈니스 전략가입니다. "반려동물을 위한 맞춤형 영양제 구독 서비스"라는 사업 아이템을 비즈니스 모델 캔버스의 9가지 구성 요소(고객, 가치 제안, 채널, 수익 등)에 맞춰 논리적으로 정리해 주세요.'
  },
  {
    id: 'p25',
    title: '경쟁사를 압도하는 차별화된 경쟁 우위 분석',
    description: '우리 제품이 경쟁 제품에 비해 갖는 차별적인 경쟁 우위를 제시하고, 이를 강화할 방안을 설명합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['경쟁분석', '전략'],
    promptText: '당신은 프로덕트 마케팅 매니저입니다. 우리 제품은 [제품 이름]이고, 주요 경쟁사는 [경쟁사 이름]입니다. 우리 제품이 경쟁사 대비 갖는 차별적인 경쟁 우위 3가지를 분석하고, 이 강점을 고객에게 어떻게 더 잘 어필할 수 있을지 전략을 알려주세요.'
  },
  {
    id: 'p26',
    title: '투자 유치 성공률을 높이는 피치덱 핵심 목차',
    description: '초기 스타트업을 위한 투자 제안서에 포함되어야 할 필수 슬라이드와 각 슬라이드의 핵심 내용을 알려줍니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['투자', '피치덱'],
    promptText: '당신은 벤처캐피탈 파트너입니다. 초기 스타트업이 투자 유치를 위해 준비해야 하는 피치덱(Pitch Deck)에 반드시 포함되어야 할 10가지 슬라이드의 제목과 각 슬라이드에서 설명해야 할 핵심 내용을 알려주세요.'
  },
  {
    id: 'p27',
    title: '스쳐간 인연도 내 편으로 만드는 네트워킹 후속 메일',
    description: '행사에서 만난 사람에게 나를 다시 상기시키고 좋은 관계를 이어가기 위한 후속 이메일 템플릿을 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['네트워킹', '이메일'],
    promptText: '당신은 커리어 컨설턴트입니다. 어제 [행사 이름]에서 만난 [상대방 이름]님께 네트워킹 후속 이메일을 보내고 싶습니다. 대화했던 내용을 언급하며 자연스럽게 관계를 이어갈 수 있는 정중하고 인상 깊은 이메일 초안을 작성해 주세요.'
  },
  {
    id: 'p28',
    title: 'GTD 기반의 나만의 완벽한 생산성 시스템',
    description: '할 일을 체계적으로 관리하고 실행할 수 있는 개인적인 시스템을 설계합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '일상',
    tags: ['생산성', '시스템'],
    promptText: '당신은 생산성 해커입니다. GTD(Getting Things Done) 방법론을 활용하여, 이메일, 메신저, 회의 등 다양한 경로로 들어오는 할 일들을 체계적으로 수집하고, 처리하고, 정리하는 나만의 생산성 시스템을 구축하는 방법을 단계별로 알려주세요.'
  },
  {
    id: 'p29',
    title: '팀장님께 칭찬받는 깔끔한 주간 업무 회고',
    description: '한 주 동안 진행한 업무 성과, 배운 점, 그리고 다음 주 계획을 담은 간결한 주간 회고 보고서 템플릿을 만듭니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['보고서', '회고'],
    promptText: '당신은 일잘러 직장인입니다. 팀장님께 보고할 주간 업무 보고서 템플릿을 만들어 주세요. 이번 주에 완료한 일, 진행 중인 일, 다음 주 계획, 그리고 도움이 필요한 점을 간결하고 명확하게 정리할 수 있도록 구성해 주세요.'
  },
  {
    id: 'p30',
    title: '신뢰를 쌓는 분기별 투자자 업데이트 메일',
    description: '분기별로 투자자들에게 회사의 주요 성과와 현황을 알리는 이메일 초안을 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['투자자', '커뮤니케이션'],
    promptText: '당신은 스타트업 CEO입니다. 우리 스타트업의 투자자들에게 보낼 2분기 성과 보고 이메일의 초안을 작성해 주세요. 주요 KPI 달성 현황, 제품 업데이트, 팀 소식, 그리고 다음 분기 계획을 신뢰감 있는 어조로 포함해 주세요.'
  },
  {
    id: 'p31',
    title: '소통의 오해를 없애는 완벽한 원격 근무 가이드',
    description: '효율적인 원격 근무를 위한 팀 내 커뮤니케이션 규칙과 기대 사항을 정의합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['원격근무', '가이드라인'],
    promptText: '당신은 리모트 워크 전문가입니다. 우리 팀이 전면 재택근무를 도입하려고 합니다. 근무 시간, 응답 가능 시간, 화상 회의 에티켓, 업무 공유 방식 등을 포함한 "원격 근무 가이드라인" 초안을 명확하고 친근한 어조로 작성해 주세요.'
  },
  {
    id: 'p32',
    title: '조직의 진짜 문제를 파악하는 퇴사 인터뷰',
    description: '퇴사하는 직원으로부터 조직 개선을 위한 솔직한 피드백을 얻을 수 있는 질문을 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['HR', '인터뷰'],
    promptText: '당신은 인사 책임자입니다. 퇴사하는 직원과 마지막 면담을 진행하려고 합니다. 회사의 문화, 관리 방식, 보상 등에 대한 솔직한 피드백을 듣고 조직을 개선할 수 있는 핵심 질문 5가지를 추천해 주세요.'
  },
  {
    id: 'p33',
    title: '지속가능한 성장을 위한 ESG 경영 보고서 뼈대',
    description: '기업의 환경, 사회, 지배구조 활동을 알리는 보고서의 목차를 구성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['ESG', '보고서'],
    promptText: '당신은 ESG 컨설턴트입니다. [IT 스타트업]의 첫 ESG 보고서를 발간하려고 합니다. 우리 업종에 적합한 주요 ESG 활동 지표와 보고서의 전체적인 목차 구성을 제안해 주세요.'
  },
  {
    id: 'p34',
    title: '핵심 성과를 한눈에 보여주는 KPI 대시보드 기획',
    description: '팀의 핵심 성과 지표를 한눈에 모니터링할 수 있는 대시보드 레이아웃을 기획합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['데이터', '대시보드'],
    promptText: '당신은 데이터 분석가입니다. 마케팅 팀의 성과를 측정하기 위한 KPI 대시보드를 만들고 싶습니다. 트래픽, 전환율, CAC(고객 획득 비용) 등 반드시 포함해야 할 지표와 이를 시각화하는 방법(그래프 종류 등)을 제안해 주세요.'
  },
  {
    id: 'p35',
    title: '진정성으로 위기를 돌파하는 공식 사과문',
    description: '제품 결함이나 서비스 장애 등 위기 상황 발생 시 대외적으로 발표할 사과문을 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '콘텐츠',
    tags: ['위기관리', 'PR'],
    promptText: '당신은 위기 관리 홍보 전문가입니다. 우리 서비스의 서버 장애로 인해 고객들이 3시간 동안 접속하지 못했습니다. 불편을 끼친 점에 대해 사과하고, 원인 규명 및 재발 방지 대책을 약속하는 진정성 있는 공식 성명서 초안을 작성해 주세요.'
  },
  {
    id: 'p36',
    title: '첫 출근의 불안을 없애는 완벽한 온보딩 플랜',
    description: '새로 합류한 직원이 첫 주에 원활하게 적응할 수 있도록 돕는 온보딩 체크리스트를 만듭니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '교육',
    tags: ['HR', '온보딩'],
    promptText: '당신은 온보딩 매니저입니다. 신규 입사자의 첫 출근일부터 1주일 동안의 온보딩 체크리스트를 만들어 주세요. 계정 세팅, 팀 소개, 주요 문서 숙지, 멘토링 세션 등 필수 항목을 시간 순서대로 정리해 주세요.'
  },
  {
    id: 'p37',
    title: '거절을 두려워하지 않는 B2B 콜드 콜 스크립트',
    description: '영업 담당자가 잠재 고객에게 전화를 걸어 미팅 약속을 잡기 위한 효과적인 스크립트를 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['영업', '스크립트'],
    promptText: '당신은 탑 세일즈맨입니다. B2B 소프트웨어를 판매하는 영업 사원이 잠재 고객에게 전화를 걸어(콜드 콜) 제품을 소개하고 미팅을 잡기 위한 대화 스크립트를 작성해 주세요. 거절 처리(Objection Handling) 멘트도 포함해 주세요.'
  },
  {
    id: 'p38',
    title: '윈윈을 이끌어내는 전략적 파트너십 제안',
    description: '잠재적 파트너 사에게 협력을 제안하는 문서의 설득력 있는 구조와 핵심 내용을 정리합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['제안서', '파트너십'],
    promptText: '당신은 사업 개발(BD) 전문가입니다. [상대방 회사]에게 전략적 파트너십을 제안하려고 합니다. 제안 배경, 협력 모델, 양사의 기대 효과, 향후 로드맵이 포함된 제안서의 목차와 각 슬라이드별 핵심 메시지를 정리해 주세요.'
  },
  {
    id: 'p39',
    title: '주니어의 폭풍 성장을 돕는 사내 멘토링 기획',
    description: '선배 사원과 신입 사원을 매칭하여 성장을 돕는 사내 멘토링 프로그램의 운영 방안을 기획합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '교육',
    tags: ['HR', '멘토링'],
    promptText: '당신은 인재 개발 담당자입니다. 주니어 직원의 성장을 돕기 위한 사내 멘토링 프로그램을 기획해 주세요. 멘토/멘티 선정 기준, 3개월간의 주요 활동 내용, 그리고 멘토링 효과를 측정하는 방법을 제안해 주세요.'
  },
  {
    id: 'p40',
    title: '오해 없이 명확하게 전달하는 비즈니스 글쓰기 원칙',
    description: '사내 문서나 이메일 작성 시 간결하고 명확한 커뮤니케이션을 위한 원칙을 정의합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '콘텐츠',
    tags: ['글쓰기', '커뮤니케이션'],
    promptText: '당신은 커뮤니케이션 코치입니다. 우리 회사의 "비즈니스 글쓰기 가이드라인"을 만들고 싶습니다. 보고서나 이메일을 쓸 때 지켜야 할 원칙(두괄식, 간결함, 명확한 수치 사용 등) 5가지와 나쁜 예/좋은 예시를 들어주세요.'
  },
  {
    id: 'p41',
    title: '시선을 사로잡는 랜딩 페이지 UI/UX 기획',
    description: '전환율을 높이기 위한 효과적인 랜딩 페이지 구조와 사용자 경험을 설계합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '디자인',
    tags: ['UIUX', '기획'],
    promptText: '당신은 시니어 프로덕트 디자이너입니다. [서비스 이름]의 신규 고객 유치를 위한 랜딩 페이지를 기획해 주세요. 히어로 섹션부터 콜 투 액션(CTA)까지, 전환율을 극대화할 수 있는 5단계 페이지 구조와 각 섹션별 핵심 카피라이팅 방향을 제시해 주세요.'
  },
  {
    id: 'p42',
    title: '버그 없는 깔끔한 리액트 컴포넌트 구조화',
    description: '유지보수가 쉽고 재사용성이 높은 프론트엔드 컴포넌트 아키텍처를 설계합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '개발',
    tags: ['프론트엔드', '아키텍처'],
    promptText: '당신은 프론트엔드 테크 리드입니다. 복잡한 대시보 화면을 개발하기 위해 React 컴포넌트 구조를 설계하려고 합니다. 관심사 분리(Separation of Concerns) 원칙에 따라 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 어떻게 나눌지, 상태 관리는 어떻게 할지 가이드를 작성해 주세요.'
  },
  {
    id: 'p43',
    title: '소셜 미디어 게시물 아이디어',
    description: '특정 제품이나 이벤트를 위한 매력적인 소셜 미디어 게시물 아이디어를 생성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['소셜미디어', '아이디어'],
    promptText: '당신은 10년 차 소셜 미디어 마케팅 전문가입니다. 신제품 [제품 이름]을 홍보하기 위한 인스타그램 게시물 아이디어 5가지를 생성해 주세요. 타겟 고객은 [타겟 고객 설명]이고, 목표는 참여도 증진입니다. 각 아이디어에는 시각적 콘셉트, 핵심 메시지, 그리고 추천 해시태그를 포함해 주세요.'
  },
  {
    id: 'p44',
    title: '블로그 게시물 개요 작성',
    description: '특정 키워드에 최적화된 SEO 친화적인 블로그 게시물 개요를 만듭니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['블로그', 'SEO'],
    promptText: '당신은 SEO 콘텐츠 전략가입니다. [주제]에 대한 블로그 게시물 개요를 작성해 주세요. 주요 키워드는 "[키워드]"이고, 독자들이 [달성하고자 하는 목표]를 달성하는 데 도움이 되는 실용적인 팁을 포함해야 합니다. 서론, 본론(3-4개 소제목), 결론 형식으로 구성하고, 각 섹션별 핵심 내용을 요약해 주세요.'
  },
  {
    id: 'p45',
    title: 'A/B 테스트 이메일 제목',
    description: '뉴스레터 또는 프로모션 캠페인의 오픈율을 높이기 위한 여러 버전의 이메일 제목을 생성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['이메일', 'AB테스트'],
    promptText: '당신은 이메일 마케팅 카피라이터입니다. [제품 또는 서비스]에 대한 특별 할인 혜택을 알리는 이메일 캠페인을 진행할 예정입니다. 오픈율을 비교하기 위한 A/B 테스트용 이메일 제목 3가지를 제안해 주세요. 하나는 긴급성을 강조하고, 다른 하나는 혜택을 강조하고, 마지막 하나는 질문 형식으로 작성해 주세요.'
  },
  {
    id: 'p46',
    title: '고객 페르소나 생성',
    description: '제품이나 서비스의 타겟 고객을 대표하는 상세한 페르소나를 만듭니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['페르소나', '타겟분석'],
    promptText: '당신은 시장 조사 전문가입니다. [우리 제품/서비스]의 이상적인 고객 페르소나를 만들어 주세요. 이름, 나이, 직업, 목표, 어려움(Pain Point), 기술 숙련도, 주로 이용하는 소셜 미디어 채널 등의 정보를 상세하게 포함해 주세요.'
  },
  {
    id: 'p47',
    title: 'SEO 키워드 전략',
    description: '특정 주제에 대한 메인 키워드와 롱테일 키워드 목록을 생성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['SEO', '키워드'],
    promptText: '당신은 SEO 전문가입니다. 주제 "[주제]"에 대한 블로그 콘텐츠를 기획 중입니다. 검색량이 높고 경쟁이 낮은 메인 키워드 1개와 관련 롱테일 키워드 10개를 찾아주세요. 각 키워드별로 예상 검색 의도(정보 탐색, 구매 등)도 함께 분류해 주세요.'
  },
  {
    id: 'p48',
    title: '경쟁사 분석 보고서',
    description: '주요 경쟁사의 강점과 약점을 분석하는 보고서의 개요를 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['경쟁사분석', '전략'],
    promptText: '당신은 전략 기획자입니다. 경쟁사 "[경쟁사 이름]"에 대한 분석 보고서의 개요를 작성해 주세요. 주요 제품, 가격 전략, 마케팅 활동, 고객 리뷰 기반의 강점과 약점, 그리고 우리가 취해야 할 대응 전략을 포함해 주세요.'
  },
  {
    id: 'p49',
    title: '광고 카피 A/B 테스트',
    description: '페이스북 또는 구글 광고를 위한 두 가지 버전의 광고 문구를 생성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['광고카피', 'AB테스트'],
    promptText: '당신은 퍼포먼스 마케터입니다. [제품/서비스]를 홍보하는 페이스북 광고를 만들려고 합니다. 하나는 문제점을 강조하고(Pain Point), 다른 하나는 해결책의 혜택을 강조하는(Benefit) 두 가지 버전의 광고 헤드라인과 본문을 작성해 주세요.'
  },
  {
    id: 'p50',
    title: '보도자료 초안 작성',
    description: '신제품 출시나 회사 소식을 알리는 언론 보도자료의 초안을 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['PR', '보도자료'],
    promptText: '당신은 홍보(PR) 전문가입니다. 우리 회사 [회사 이름]이 신제품 [제품 이름]을 출시했습니다. 이 소식을 알리는 보도자료 초안을 작성해 주세요. 매력적인 헤드라인, 핵심 요약, 회사 소개, 그리고 대표의 인용문을 포함하여 언론사 배포에 적합한 형식으로 작성해 주세요.'
  },
  {
    id: 'p51',
    title: '인플루언서 협업 제안 이메일',
    description: '제품 리뷰나 협업을 제안하기 위해 인플루언서에게 보낼 이메일 템플릿을 만듭니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['인플루언서', '이메일'],
    promptText: '당신은 인플루언서 마케팅 매니저입니다. [인플루언서 이름]님께 우리 제품 [제품 이름] 협업을 제안하는 이메일 초안을 작성해 주세요. 왜 그들이 우리 브랜드와 잘 맞는지 진정성 있게 언급하고, 윈윈할 수 있는 협업 아이디어와 제공할 수 있는 혜택을 명확하게 제안해 주세요.'
  },
  {
    id: 'p52',
    title: '제품 상세페이지(PDP) 카피라이팅',
    description: '고객의 구매를 유도하는 매력적인 제품 상세페이지 문구를 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['상세페이지', '카피라이팅'],
    promptText: '당신은 이커머스 전문 카피라이터입니다. [제품 이름]의 상세페이지에 들어갈 카피를 작성해 주세요. 제품의 특징을 단순 나열하기보다, 고객이 얻을 수 있는 핵심적인 혜택 3가지를 중심으로 스토리를 만들어 주세요. 고객의 구매 욕구를 자극하는 후킹 문구도 포함해 주세요.'
  },
  {
    id: 'p53',
    title: '콘텐츠 캘린더 아이디어',
    description: '한 달 동안 소셜 미디어 채널에 올릴 콘텐츠 아이디어가 담긴 캘린더를 생성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['콘텐츠기획', '캘린더'],
    promptText: '당신은 콘텐츠 마케터입니다. [우리 브랜드]의 인스타그램 채널을 위한 다음 달 콘텐츠 캘린더 아이디어를 주 3회 기준으로 제안해 주세요. 제품 정보, 비하인드 스토리, 고객 참여 이벤트 등 다양한 형식을 포함하여 표 형태로 정리해 주세요.'
  },
  {
    id: 'p54',
    title: '브랜드 스토리텔링 콘셉트',
    description: '고객과 감성적인 유대를 형성할 수 있는 브랜드 스토리텔링 콘셉트를 제안합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['브랜딩', '스토리텔링'],
    promptText: '당신은 브랜드 디렉터입니다. 우리는 [제품/서비스 종류]를 판매하는 브랜드입니다. 고객들에게 우리 브랜드의 [핵심 가치]를 전달할 수 있는 감성적인 스토리텔링 콘셉트 3가지를 제안해 주세요. 각 콘셉트별로 어떤 메시지를 중심으로 소통할지 설명해 주세요.'
  },
  {
    id: 'p55',
    title: '유튜브 영상 광고 스크립트',
    description: '15초 길이의 건너뛸 수 없는 유튜브 광고 영상 스크립트를 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['유튜브', '광고스크립트'],
    promptText: '당신은 영상 광고 기획자입니다. 10대~20대를 타겟으로 하는 [제품 이름]의 15초 유튜브 범퍼 광고 스크립트를 작성해 주세요. 초반 3초 안에 시선을 사로잡고, 제품의 핵심 매력을 간결하게 전달하며, 명확한 CTA(행동 유도)로 마무리되도록 구성해 주세요.'
  },
  {
    id: 'p56',
    title: '고객 만족도 설문조사 질문',
    description: '제품이나 서비스 개선을 위한 인사이트를 얻을 수 있는 고객 설문조사 질문을 만듭니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['설문조사', '고객경험'],
    promptText: '당신은 고객 경험(CX) 전문가입니다. 최근 [서비스 이름]을 이용한 고객들을 대상으로 만족도 설문조사를 하려고 합니다. 서비스 개선에 도움이 될 만한 객관식 질문 4개와 주관식 질문 1개를 만들어 주세요. 응답률을 높일 수 있도록 간결하고 명확하게 작성해 주세요.'
  },
  {
    id: 'p57',
    title: '랜딩 페이지 카피 최적화',
    description: '전환율을 높이기 위해 랜딩 페이지의 핵심 카피를 개선하는 아이디어를 제안합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['랜딩페이지', 'CRO'],
    promptText: '당신은 전환율 최적화(CRO) 전문가입니다. 현재 우리 랜딩 페이지의 메인 헤드라인은 "[현재 헤드라인]"입니다. 이보다 더 고객의 클릭을 유도하고 가치 제안을 명확히 할 수 있는 새로운 헤드라인과 부제(sub-headline) 아이디어 5가지를 제안해 주세요.'
  },
  {
    id: 'p58',
    title: '고객 여정 지도 개요',
    description: '고객이 제품을 인지하고 구매하기까지의 과정을 시각화합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['고객여정', 'CX'],
    promptText: '당신은 서비스 기획자입니다. [우리 제품]을 구매하는 고객의 여정 지도(Customer Journey Map) 개요를 만들어 주세요. 인지, 고려, 구매, 유지, 옹호의 5단계에 걸쳐 고객의 주요 행동, 생각, 감정, 그리고 각 단계별 불편한 점(Pain Point)을 분석해 주세요.'
  },
  {
    id: 'p59',
    title: '바이럴 마케팅 캠페인 아이디어',
    description: '소셜 미디어에서 자연스럽게 공유될 만한 창의적인 캠페인 아이디어를 생성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['바이럴', '캠페인'],
    promptText: '당신은 크리에이티브 디렉터입니다. 젊은 층을 타겟으로 하는 [우리 브랜드]의 인지도를 높이기 위한 바이럴 마케팅 캠페인 아이디어 3가지를 제안해 주세요. 챌린지, 재미있는 밈(Meme), 혹은 감동적인 스토리 형식을 사용하여 자발적인 공유를 유도할 수 있는 기획안을 작성해 주세요.'
  },
  {
    id: 'p60',
    title: '제휴 마케팅 프로그램 기획',
    description: '파트너(어필리에이트)를 모집하고 운영하기 위한 프로그램의 기본 구조를 설계합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['제휴마케팅', '기획'],
    promptText: '당신은 파트너십 매니저입니다. [우리 서비스]를 홍보해 줄 인플루언서나 블로거를 위한 제휴(Affiliate) 마케팅 프로그램을 기획하고 싶습니다. 파트너에게 제공할 혜택, 수수료 구조, 그리고 홍보 가이드라인의 초안을 작성해 주세요.'
  },
  {
    id: 'p61',
    title: '팟캐스트 광고 스크립트',
    description: '30초 분량의 팟캐스트 중간 광고 스크립트 초안을 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['팟캐스트', '오디오광고'],
    promptText: '당신은 오디오 광고 카피라이터입니다. 30초 분량의 팟캐스트 오디오 광고 스크립트를 작성해 주세요. 타겟 청취자는 [청취자 특징]이고, 광고할 제품은 [제품 이름]입니다. 듣는 사람의 귀에 쏙 들어오는 흥미로운 오프닝과 자연스러운 제품 소개로 구성해 주세요.'
  },
  {
    id: 'p62',
    title: '고객 유지(Retention) 전략',
    description: '기존 고객의 이탈을 막고 충성도를 높이기 위한 전략을 제안합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['리텐션', 'CRM'],
    promptText: '당신은 CRM 마케터입니다. 우리 온라인 쇼핑몰의 재구매율을 높이고 싶습니다. 기존 고객의 충성도를 높일 수 있는 고객 유지(Retention) 전략 5가지를 제안해 주세요. 등급별 혜택, 재구매 쿠폰, 개인화 추천 등 구체적인 실행 방안을 포함해 주세요.'
  },
  {
    id: 'p63',
    title: '브랜드 이름 아이디어',
    description: '새로운 브랜드나 제품에 어울리는 기억하기 쉬운 이름 아이디어를 생성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['네이밍', '브랜딩'],
    promptText: '당신은 전문 네이미스트입니다. 새로 런칭할 [제품 카테고리] 브랜드의 이름을 짓고 있습니다. [브랜드 핵심 가치]를 잘 나타내면서도 기억하기 쉽고 발음하기 좋은 이름 아이디어 10가지를 제안해 주세요. 각 이름의 의미도 간략히 설명해 주세요.'
  },
  {
    id: 'p64',
    title: '슬로건/태그라인 제작',
    description: '브랜드의 핵심 가치를 한 문장으로 압축한 슬로건이나 태그라인을 만듭니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['슬로건', '카피라이팅'],
    promptText: '당신은 수석 카피라이터입니다. [우리 회사]는 [회사의 미션]을 가지고 있습니다. 이 미션을 함축적으로 보여주는 감성적이면서도 인상적인 브랜드 슬로건 5가지를 제안해 주세요. 고객의 뇌리에 깊이 박힐 수 있는 짧고 강렬한 문장으로 작성해 주세요.'
  },
  {
    id: 'p65',
    title: 'B2B 타겟 링크드인 게시물',
    description: '잠재 비즈니스 고객을 타겟으로 하는 전문적인 링크드인 게시물 콘텐츠를 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['B2B', '링크드인'],
    promptText: '당신은 B2B 마케팅 전문가입니다. B2B SaaS 솔루션인 [우리 제품]의 잠재 고객을 타겟으로 링크드인에 게시할 콘텐츠를 작성해 주세요. 업계의 문제점을 지적하고, 우리 솔루션이 어떻게 그 문제를 해결하는지 보여주는 전문적이고 신뢰감 있는 톤앤매너로 구성해 주세요.'
  },
  {
    id: 'p66',
    title: '제품 FAQ 페이지 콘텐츠',
    description: '고객들이 자주 묻는 질문(FAQ)과 그에 대한 명확한 답변을 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['FAQ', '고객지원'],
    promptText: '당신은 고객 지원 매니저입니다. [우리 제품]에 대해 고객들이 가장 궁금해할 만한 질문 10가지와 그에 대한 명확하고 친절한 답변을 작성해 주세요. 구매 전, 사용 중, 문제 해결 카테고리로 나누어 정리해 주세요.'
  },
  {
    id: 'p67',
    title: '사용자 온보딩 이메일 시퀀스',
    description: '신규 가입자가 서비스에 잘 적응하도록 돕는 3단계 이메일 시리즈를 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['온보딩', '이메일'],
    promptText: '당신은 그로스 해커입니다. [우리 서비스]에 새로 가입한 사용자를 위해 3일 동안 발송될 온보딩 이메일 시리즈의 내용을 작성해 주세요. 1일차는 환영 및 핵심 기능 소개, 2일차는 활용 팁, 3일차는 고급 기능 소개로 구성하여 사용자의 활성화를 유도해 주세요.'
  },
  {
    id: 'p68',
    title: '고객 이탈 방지 이메일',
    description: '서비스를 사용하지 않는 고객의 재방문을 유도하는 이메일 초안을 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['이탈방지', '이메일'],
    promptText: '당신은 리텐션 매니저입니다. 최근 30일 동안 접속이 없는 휴면 고객에게 재방문을 유도하는 이메일 초안을 작성해 주세요. "그동안 잘 지내셨나요?"와 같은 부드러운 톤으로 새로운 기능이나 특별한 복귀 혜택을 알려주어 다시 서비스를 이용하고 싶게 만들어 주세요.'
  },
  {
    id: 'p69',
    title: '팝업 스토어 이벤트 기획',
    description: '오프라인 팝업 스토어의 콘셉트와 고객 참여를 유도할 프로그램을 기획합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['오프라인', '이벤트기획'],
    promptText: '당신은 오프라인 공간 기획자입니다. 신제품 출시를 기념하여 팝업 스토어를 열려고 합니다. 방문객들의 참여를 유도하고 SNS 공유를 이끌어낼 수 있는 재미있는 현장 이벤트 아이디어 3가지를 제안해 주세요. 포토존, 체험형 프로그램 등을 포함해 주세요.'
  },
  {
    id: 'p70',
    title: '경쟁사 소셜 미디어 분석',
    description: '경쟁사의 SNS 활동을 분석하고, 우리 브랜드가 벤치마킹할 점과 차별화할 점을 도출합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['경쟁사분석', '소셜미디어'],
    promptText: '당신은 소셜 미디어 전략가입니다. 경쟁사인 [경쟁사 이름]의 인스타그램 채널을 분석해 주세요. 주로 어떤 콘텐츠를 올리는지, 고객 반응은 어떤지 파악하고, 우리가 그들과 차별화하기 위해 시도해볼 만한 전략 3가지를 제안해 주세요.'
  },
  {
    id: 'p71',
    title: '콘텐츠 재활용(Repurposing) 전략',
    description: '기존 블로그 포스팅 하나를 비디오, 카드뉴스, 뉴스레터 등 다양한 포맷으로 재활용하는 전략을 제안합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['콘텐츠전략', '재활용'],
    promptText: '당신은 콘텐츠 디렉터입니다. 가장 인기 있었던 블로그 포스트 "[포스트 제목]"을 재활용하여 더 많은 사람들에게 도달하고 싶습니다. 이 포스트를 유튜브 쇼츠 영상, 인스타그램 카드뉴스, 이메일 뉴스레터로 재가공하기 위한 구체적인 기획안을 제안해 주세요.'
  },
  {
    id: 'p72',
    title: '시즈널 마케팅 캠페인 아이디어',
    description: '특정 시즌(예: 연말, 여름 휴가)에 맞는 마케팅 캠페인 아이디어를 제안합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['시즈널', '캠페인'],
    promptText: '당신은 캠페인 기획자입니다. 다가오는 [특정 시즌, 예: 연말] 시즌을 맞아 우리 온라인 쇼핑몰에서 진행할 만한 특별한 마케팅 캠페인 아이디어를 3가지 제안해 주세요. 고객들에게 따뜻하고 즐거운 경험을 선사하면서도 매출을 견인할 수 있는 프로모션을 기획해 주세요.'
  },
  {
    id: 'p73',
    title: 'UGC(사용자 제작 콘텐츠) 캠페인',
    description: '고객이 직접 브랜드 콘텐츠를 만들고 공유하도록 유도하는 캠페인을 기획합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['UGC', '캠페인'],
    promptText: '당신은 커뮤니티 매니저입니다. [우리 제품]을 사용하는 고객들이 자연스럽게 사진이나 영상을 찍어 SNS에 올리도록 유도하는 UGC 캠페인 아이디어 3가지를 제안해 주세요. 참여 동기(리워드, 재미 요소)를 명확히 하고, 캠페인 전용 해시태그도 추천해 주세요.'
  },
  {
    id: 'p74',
    title: '웨비나(Webinar) 기획안',
    description: '잠재 고객을 모으고 전문성을 보여주기 위한 온라인 세미나(웨비나)를 기획합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['웨비나', '기획'],
    promptText: '당신은 B2B 이벤트 기획자입니다. [B2B 솔루션] 잠재 고객을 위한 웨비나를 기획하려고 합니다. 타겟 고객이 흥미로워할 만한 주제 3가지를 제안하고, 그 중 하나를 선택하여 예상 목차(45분 분량)와 사전 등록을 높이기 위한 홍보 문구를 작성해 주세요.'
  },
  {
    id: 'p75',
    title: 'SNS 위기 관리 대응 매뉴얼',
    description: '브랜드에 부정적인 이슈가 발생했을 때 소셜 미디어에서 신속하게 대응하는 가이드라인을 만듭니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['위기관리', '소셜미디어'],
    promptText: '당신은 PR 위기 관리 전문가입니다. 소셜 미디어에서 우리 브랜드에 대한 부정적인 여론이 확산될 때를 대비한 위기 관리 매뉴얼을 만들어 주세요. 초기 대응 시간, 사과문 작성 원칙, 담당자 보고 체계, 그리고 댓글 대응 가이드라인을 포함해 주세요.'
  },
  {
    id: 'p76',
    title: '챗봇 시나리오 기획',
    description: '웹사이트 방문자의 문의를 자동으로 처리하고 구매로 유도하는 챗봇 대화 흐름을 설계합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['챗봇', 'CX'],
    promptText: '당신은 대화형 UX 디자이너입니다. 쇼핑몰 방문자에게 상품을 추천하고 상담하는 챗봇 시나리오를 짜주세요. "선물 추천", "사이즈 문의", "배송 조회" 등 주요 버튼 메뉴를 구성하고, 각 선택에 따른 자연스러운 대화 흐름을 트리 구조로 설계해 주세요.'
  },
  {
    id: 'p77',
    title: '크로스 프로모션 아이디어',
    description: '타겟 고객이 겹치는 다른 브랜드와 협력하여 서로 윈윈하는 마케팅 아이디어를 제안합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['제휴', '프로모션'],
    promptText: '당신은 제휴 마케팅 전문가입니다. 우리는 [커피 브랜드]입니다. 타겟 고객층(2030 직장인)이 겹치는 다른 업종의 브랜드와 크로스 프로모션을 하려고 합니다. 적합한 파트너 업종 3가지를 추천하고, 각 업종별 구체적인 협업 아이디어를 제안해 주세요.'
  },
  {
    id: 'p78',
    title: '커뮤니티 활성화 전략',
    description: '브랜드 팬덤을 구축하고 고객 커뮤니티의 활동성을 높이는 전략을 수립합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['커뮤니티', '팬덤'],
    promptText: '당신은 커뮤니티 빌더입니다. 우리 브랜드의 온라인 커뮤니티(네이버 카페/디스코드)가 정체되어 있습니다. 회원들의 자발적인 글쓰기와 댓글 참여를 늘릴 수 있는 커뮤니티 활성화 전략 5가지를 제안해 주세요. 게이미피케이션 요소나 우수 회원 보상 제도를 포함해 주세요.'
  },
  {
    id: 'p79',
    title: '리퍼럴(추천인) 마케팅 프로그램',
    description: '기존 고객이 지인을 데려오도록 유도하는 추천인 프로그램의 구조와 혜택을 설계합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['리퍼럴', '그로스'],
    promptText: '당신은 그로스 마케터입니다. 기존 고객이 친구를 초대하면 양쪽 모두에게 혜택을 주는 리퍼럴 프로그램을 만들고 싶습니다. 매력적인 보상 구조(크레딧, 할인쿠폰 등)를 설계하고, 고객이 친구에게 공유할 때 사용할 추천 메시지 문구를 3가지 버전으로 작성해 주세요.'
  },
  {
    id: 'p80',
    title: '오프라인 게릴라 마케팅',
    description: '적은 예산으로 큰 화제를 모을 수 있는 기발한 오프라인 마케팅 아이디어를 제안합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['오프라인', '게릴라마케팅'],
    promptText: '당신은 게릴라 마케팅 전문가입니다. 도심 한복판에서 [우리 음료]를 알리기 위한 기발한 오프라인 마케팅 아이디어를 제안해 주세요. 행인들의 시선을 사로잡고 SNS에 자발적으로 공유될 만한 재미있는 퍼포먼스나 설치물 아이디어를 구체적으로 묘사해 주세요.'
  },
  {
    id: 'p81',
    title: 'CRM 문자/알림톡 시나리오',
    description: '고객의 생애 주기(가입, 구매, 재구매 등)에 맞춰 발송할 자동화 메시지를 작성합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['CRM', '알림톡'],
    promptText: '당신은 CRM 스페셜리스트입니다. 회원가입 후 1주일 동안 구매가 없는 고객에게 보낼 카카오 알림톡 메시지 3단계 시나리오를 작성해 주세요. 1일차는 웰컴 혜택 리마인드, 3일차는 인기 상품 추천, 7일차는 깜짝 히든 쿠폰 증정 내용으로 구성하여 구매 전환을 유도해 주세요.'
  },
  {
    id: 'p82',
    title: '숏폼 챌린지 기획',
    description: '틱톡이나 릴스에서 유행할 만한 댄스 또는 참여형 챌린지를 기획합니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['숏폼', '챌린지'],
    promptText: '당신은 숏폼 콘텐츠 디렉터입니다. MZ세대를 타겟으로 [우리 과자]를 활용한 틱톡 챌린지를 기획해 주세요. 누구나 쉽게 따라 할 수 있는 동작이나 재미있는 상황 설정을 구상하고, 챌린지에 어울릴 만한 배경음악(BGM) 스타일과 필수 해시태그를 제안해 주세요.'
  },
  ...additionalPrompts
].map(p => p.category === 'PROMPT' ? { ...p, access: 'PREMIUM' } : p);

function PromptCard({ 
  program, 
  authLevel, 
  onRequireAuth 
}: { 
  program: Program; 
  authLevel: 'NONE' | 'BASIC' | 'PREMIUM';
  onRequireAuth: () => void;
  key?: string;
}) {
  const [copied, setCopied] = useState(false);

  const isLocked = program.access === 'PREMIUM' && authLevel === 'NONE';

  const handleCopy = () => {
    if (isLocked) {
      onRequireAuth();
      return;
    }
    
    if (program.promptText) {
      navigator.clipboard.writeText(program.promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl overflow-hidden flex flex-col h-[460px] border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative"
    >
      <div className="p-6 flex flex-col flex-grow overflow-hidden">
        <div className="flex items-start gap-2 mb-3">
          {program.access === 'PREMIUM' && (
            <span className={`inline-flex items-center gap-1 px-2 py-1 ${isLocked ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'} text-[10px] font-bold rounded-md shrink-0`}>
              {isLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
              멤버십 전용
            </span>
          )}
          {program.promptSubCategory && (
            <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md w-fit shrink-0">
              {program.promptSubCategory}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 shrink-0 line-clamp-1">
          {program.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed shrink-0 line-clamp-2">
          {program.description}
        </p>
        
        <div className={`bg-[#F8F9FA] border border-gray-200 rounded-xl p-4 mb-4 flex-grow overflow-y-auto min-h-0 relative ${isLocked ? 'overflow-hidden' : ''}`}>
          <pre className={`text-[13px] text-gray-700 whitespace-pre-wrap font-sans leading-relaxed font-medium ${isLocked ? 'blur-[4px] select-none opacity-50' : ''}`}>
            {program.promptText}
          </pre>
          
          {isLocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-[2px] z-10">
              <div className="bg-white p-3 rounded-full shadow-md mb-3">
                <Lock className="w-6 h-6 text-amber-500" />
              </div>
              <p className="text-sm font-bold text-gray-900 mb-1">멤버십 전용 프롬프트</p>
              <p className="text-xs text-gray-600 text-center px-4">
                인증 코드를 입력하고<br/>모든 프롬프트를 확인하세요
              </p>
            </div>
          )}
        </div>
        
        <button 
          onClick={handleCopy}
          className={`shrink-0 w-full font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-sm border ${
            isLocked
              ? 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'
              : copied 
                ? 'bg-green-600 border-green-500 text-white shadow-[0_0_15px_rgba(22,163,74,0.3)]' 
                : 'bg-gradient-to-r from-zinc-950 to-red-950 hover:from-black hover:to-red-900 border-red-900/50 text-red-50 hover:text-white hover:border-red-500 hover:shadow-[0_4px_20px_rgba(220,38,38,0.25)]'
          }`}
        >
          {isLocked ? (
            <>
              <Lock className="w-4 h-4" />
              멤버십 인증하기
            </>
          ) : copied ? (
            <>
              <Check className="w-4 h-4" />
              복사 완료!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              프롬프트 복사
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');
  const [selectedSubCategory, setSelectedSubCategory] = useState<PromptSubCategory | 'ALL'>('ALL');
  const [selectedAccess, setSelectedAccess] = useState<'ALL' | 'FREE' | 'PREMIUM'>('ALL');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authLevel, setAuthLevel] = useState<'NONE' | 'BASIC' | 'PREMIUM'>('NONE');
  const [showAuthModal, setShowAuthModal] = useState<false | 'BASIC' | 'PREMIUM'>(false);
  const [authCode, setAuthCode] = useState('');
  const [authError, setAuthError] = useState('');

  const handleAuth = () => {
    if (showAuthModal === 'PREMIUM' && authCode === '0705') {
      setAuthLevel('PREMIUM');
      setShowAuthModal(false);
      setAuthCode('');
      setAuthError('');
    } else if (showAuthModal === 'BASIC' && authCode === '0515') {
      setAuthLevel('BASIC');
      setShowAuthModal(false);
      setAuthCode('');
      setAuthError('');
    } else {
      setAuthError('인증 번호가 올바르지 않습니다.');
    }
  };

  // Filter logic
  const filteredPrograms = PROGRAMS.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || program.category === selectedCategory;
    const matchesSubCategory = selectedCategory !== 'PROMPT' || selectedSubCategory === 'ALL' || program.promptSubCategory === selectedSubCategory;
    const matchesAccess = selectedAccess === 'ALL' || program.access === selectedAccess;
    
    return matchesSearch && matchesCategory && matchesSubCategory && matchesAccess;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-red-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">혁신 AI</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-zinc-300 hover:text-white transition-colors">홈</a>
              <a href="#" className="text-zinc-300 hover:text-white transition-colors">프로그램</a>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://docs.google.com/presentation/d/10BbgaNbQg60yh3xkNgSahAEm9lyiaZJEUn8W6F6kS3U/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors border-r border-zinc-800 pr-4 flex items-center gap-1.5 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                API KEY 설정방법
              </a>
              <div className="text-sm text-zinc-500 border-r border-zinc-800 pr-4">
                Dev: 정혁신
              </div>
              <button className="p-2 text-zinc-400 hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              {authLevel !== 'NONE' ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-emerald-400 font-medium">
                    {authLevel === 'PREMIUM' ? '프리미엄 멤버십' : '멤버십'}
                  </span>
                  {authLevel === 'BASIC' && (
                    <button 
                      onClick={() => setShowAuthModal('PREMIUM')}
                      className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-2 rounded-md font-medium hover:from-amber-400 hover:to-amber-500 transition-colors flex items-center gap-2"
                    >
                      <Lock className="w-4 h-4" />
                      프리미엄 인증
                    </button>
                  )}
                  <button 
                    onClick={() => setAuthLevel('NONE')}
                    className="bg-zinc-800 text-emerald-400 px-4 py-2 rounded-md font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 flex items-center gap-2"
                  >
                    <Unlock className="w-4 h-4" />
                    인증 해제
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowAuthModal('BASIC')}
                    className="bg-zinc-800 text-white px-4 py-2 rounded-md font-medium hover:bg-zinc-700 transition-colors border border-zinc-700"
                  >
                    멤버십 인증
                  </button>
                  <button 
                    onClick={() => setShowAuthModal('PREMIUM')}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-2 rounded-md font-medium hover:from-amber-400 hover:to-amber-500 transition-colors"
                  >
                    프리미엄 인증
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-400 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-white/10 bg-[#0a0a0a]"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className="block px-3 py-2 text-base font-medium text-white bg-white/5 rounded-md">홈</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-md">프로그램</a>
                <a 
                  href="https://docs.google.com/presentation/d/10BbgaNbQg60yh3xkNgSahAEm9lyiaZJEUn8W6F6kS3U/edit?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-base font-medium text-blue-400 hover:text-blue-300 hover:bg-white/5 rounded-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  API KEY 설정방법
                </a>
                <div className="px-3 py-2 text-sm text-amber-500 font-medium">Dev: 정혁신</div>
                
                <div className="pt-4 pb-2 border-t border-zinc-800">
                  {authLevel !== 'NONE' ? (
                    <div className="flex flex-col gap-2 px-3">
                      <span className="text-sm text-emerald-400 font-medium mb-2">
                        {authLevel === 'PREMIUM' ? '프리미엄 멤버십' : '멤버십'} 인증 완료
                      </span>
                      {authLevel === 'BASIC' && (
                        <button 
                          onClick={() => {
                            setShowAuthModal('PREMIUM');
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-2 rounded-md font-medium hover:from-amber-400 hover:to-amber-500 transition-colors flex items-center justify-center gap-2"
                        >
                          <Lock className="w-4 h-4" />
                          프리미엄 인증
                        </button>
                      )}
                      <button 
                        onClick={() => {
                          setAuthLevel('NONE');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-zinc-800 text-emerald-400 px-4 py-2 rounded-md font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 flex items-center justify-center gap-2"
                      >
                        <Unlock className="w-4 h-4" />
                        인증 해제
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 px-3">
                      <button 
                        onClick={() => {
                          setShowAuthModal('BASIC');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md font-medium hover:bg-zinc-700 transition-colors border border-zinc-700"
                      >
                        멤버십 인증
                      </button>
                      <button 
                        onClick={() => {
                          setShowAuthModal('PREMIUM');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-2 rounded-md font-medium hover:from-amber-400 hover:to-amber-500 transition-colors"
                      >
                        프리미엄 인증
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              미래를 앞당기는
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-red-600">
              혁신 AI
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-zinc-400"
          >
            혁신AI를 활용해서 AI를 혁신적으로 사용하여 생산성과 효율성을 극대화하세요!
            <br /> 멤버십 전용 AI는 여러분에게 더 큰 특별한 경쟁력을 제공합니다.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filters & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 items-center justify-between bg-zinc-900/50 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
          
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-zinc-800 rounded-xl leading-5 bg-black text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-colors sm:text-sm"
              placeholder="프로그램 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Category Filter */}
            <div className="flex flex-col gap-3">
              <div className="flex bg-black rounded-xl p-1 border border-zinc-800 overflow-x-auto">
                {[
                  { id: 'ALL', label: '전체' },
                  { id: 'MARKETING', label: '마케팅' },
                  { id: 'DESIGN', label: '디자인' },
                  { id: 'VIDEO', label: '영상' },
                  { id: 'PLANNING', label: '기획' },
                  { id: 'PROMPT', label: '프롬프트' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id as Category);
                      if (cat.id !== 'PROMPT') setSelectedSubCategory('ALL');
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-zinc-800 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Sub-Category Filter for PROMPT */}
              {selectedCategory === 'PROMPT' && (
                <div className="flex bg-black/50 rounded-xl p-1 border border-zinc-800/50 overflow-x-auto">
                  {[
                    { id: 'ALL', label: '전체' },
                    { id: '비즈니스', label: '비즈니스' },
                    { id: '마케팅', label: '마케팅' },
                    { id: '디자인', label: '디자인' },
                    { id: '콘텐츠', label: '콘텐츠' },
                    { id: '개발', label: '개발' },
                    { id: '교육', label: '교육' },
                    { id: '일상', label: '일상' },
                  ].map((subCat) => (
                    <button
                      key={subCat.id}
                      onClick={() => setSelectedSubCategory(subCat.id as PromptSubCategory | 'ALL')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                        selectedSubCategory === subCat.id
                          ? 'bg-zinc-700 text-white shadow-sm'
                          : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50'
                      }`}
                    >
                      {subCat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Access Filter */}
            <div className="flex bg-black rounded-xl p-1 border border-zinc-800">
              {[
                { id: 'ALL', label: '전체' },
                { id: 'FREE', label: '공개' },
                { id: 'PREMIUM', label: '멤버십 전용' },
              ].map((acc) => (
                <button
                  key={acc.id}
                  onClick={() => setSelectedAccess(acc.id as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedAccess === acc.id
                      ? acc.id === 'PREMIUM' 
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-sm' 
                        : 'bg-zinc-800 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                  }`}
                >
                  {acc.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredPrograms.map((program) => (
              program.category === 'PROMPT' ? (
                <PromptCard 
                  key={program.id} 
                  program={program} 
                  authLevel={authLevel}
                  onRequireAuth={() => setShowAuthModal('BASIC')}
                />
              ) : (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={program.id}
                className="group flex flex-col bg-[#121212] rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] h-[460px]"
              >
                {/* Image Container */}
                <div className="relative h-[220px] shrink-0 overflow-hidden bg-zinc-900">
                  {program.customVisual ? (
                    <div className="w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                      {program.customVisual}
                    </div>
                  ) : (
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {program.access === 'PREMIUM' ? (
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 ${authLevel === 'PREMIUM' ? 'bg-emerald-500' : 'bg-amber-500'} text-black text-xs font-bold rounded-md shadow-lg backdrop-blur-md transition-colors`}>
                        {authLevel === 'PREMIUM' ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                        {authLevel === 'PREMIUM' ? '인증됨' : '프리미엄 멤버십'}
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 text-white text-xs font-bold rounded-md shadow-lg backdrop-blur-md border border-white/20">
                        공개
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-1">
                    {program.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4 line-clamp-3 flex-grow leading-relaxed">
                    {program.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="mt-auto pt-4">
                    {program.access === 'PREMIUM' && authLevel !== 'PREMIUM' ? (
                      <button 
                        onClick={() => setShowAuthModal('PREMIUM')}
                        className={`w-full flex items-center justify-center gap-2 py-2.5 font-bold rounded-xl transition-all ${
                          authLevel === 'BASIC' 
                            ? 'bg-zinc-800 text-zinc-400 border border-zinc-700 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                        }`}
                        disabled={authLevel === 'BASIC'}
                      >
                        <Lock className="w-4 h-4" />
                        {authLevel === 'BASIC' ? '프리미엄 멤버십 이용 불가' : '잠금 해제 및 이동'}
                      </button>
                    ) : program.link ? (
                      <a 
                        href={program.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-all border border-zinc-700 hover:border-zinc-600"
                      >
                        <ExternalLink className="w-4 h-4" />
                        바로가기
                      </a>
                    ) : (
                      <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-all border border-zinc-700 hover:border-zinc-600">
                        <ExternalLink className="w-4 h-4" />
                        바로가기
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 mb-4">
              <Search className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-xl font-medium text-zinc-300">검색 결과가 없습니다</h3>
            <p className="text-zinc-500 mt-2">다른 검색어나 필터를 적용해보세요.</p>
          </div>
        )}
      </div>
      
      {/* Auth Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowAuthModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  {showAuthModal === 'PREMIUM' ? '프리미엄 멤버십 인증' : '멤버십 인증'}
                </h3>
                <button onClick={() => setShowAuthModal(false)} className="text-zinc-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-zinc-400 text-sm mb-6">
                {showAuthModal === 'PREMIUM' ? '프리미엄 멤버십 코드를 입력해주세요.' : '멤버십 전용 코드를 입력해주세요.'}
              </p>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="인증 번호 (4자리)"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                  value={authCode}
                  onChange={(e) => {
                    setAuthCode(e.target.value);
                    setAuthError('');
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                  autoFocus
                />
                {authError && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {authError}
                  </motion.p>
                )}
              </div>
              <button
                onClick={handleAuth}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
              >
                인증하기
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-red-600" />
            <span className="font-bold text-lg">혁신 AI</span>
          </div>
          <div className="text-zinc-500 text-sm">
            © 2026 혁신 AI by 정혁신. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm text-zinc-400">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white">개인정보처리방침</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
