import React, { useState } from 'react';
import { Search, Lock, Unlock, ExternalLink, Menu, X, Settings, Zap, Sparkles, ArrowRight, Copy, Check, Bot, Youtube, Star, FileText, AlertTriangle, Wand2, Code, Eye, EyeOff, ChevronLeft, ChevronRight, ChevronDown, Lightbulb, HelpCircle, Mail, Layout, Clock, Users, TrendingUp, Timer, ShieldCheck, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { additionalPrompts } from './promptsData';

// --- Types ---
type AccessLevel = 'FREE' | 'BASIC' | 'PREMIUM' | 'STUDENT' | 'MASTER' | 'DONCLASS' | 'COACHINGPASS' | 'CONSULTING';
type Category = 'ALL' | 'PROGRAM' | 'MARKETING' | 'DESIGN' | 'VIDEO' | 'PLANNING' | 'PROMPT' | 'LECTURE';
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
const PROGRAMS: Program[] = ([
  {
    id: 'lecture-api-key',
    title: '구글 API Key 설정방법',
    description: '구글 API Key 설정 방법에 대한 상세 가이드 문서입니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300 text-xs font-bold w-max mb-4">
            <span className="text-blue-400">📚</span> 수강생 전용 자료
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-3 drop-shadow-lg break-keep leading-snug">
            구글 API Key 설정방법
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'LECTURE',
    tags: ['가이드', 'API', '결제'],
    link: 'https://docs.google.com/presentation/d/10BbgaNbQg60yh3xkNgSahAEm9lyiaZJEUn8W6F6kS3U/edit?slide=id.g3d0ca4dfca9_0_52#slide=id.g3d0ca4dfca9_0_52'
  },
  {
    id: 'lecture-api-tier1',
    title: "구글 API Key 'Tier 1' 표시가 뜰 경우?",
    description: "구글 API Key 'Tier 1' 표시가 뜰 경우의 해결 방법에 대한 가이드 문서입니다.",
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300 text-xs font-bold w-max mb-4">
            <span className="text-blue-400">📚</span> 수강생 전용 자료
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-3 drop-shadow-lg break-keep leading-snug">
            구글 API Key<br/>'Tier 1' 표시가 뜰 경우?
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'LECTURE',
    tags: ['가이드', 'API', 'Tier 1'],
    link: 'https://docs.google.com/document/d/1xl434p1XbyqqYQt4GgKwiDFYd2oDK-sUvItl5Af4efk/edit?usp=sharing'
  },
  {
    id: 'lecture-api-credit-usage',
    title: 'API 크레딧 사용량 확인방법',
    description: 'API 크레딧 사용량 확인 방법에 대한 상세 가이드 문서입니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300 text-xs font-bold w-max mb-4">
            <span className="text-blue-400">📚</span> 수강생 전용 자료
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-3 drop-shadow-lg break-keep leading-snug">
            API 크레딧<br/>사용량 확인방법
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'LECTURE',
    tags: ['가이드', 'API', '크레딧'],
    link: 'https://docs.google.com/document/d/1YxpCMHv_w-TaaXCpy9z-kgQIJj-OEILXX68EWDWDRpo/edit?tab=t.0'
  },
  {
    id: 'lecture-markdown-guide',
    title: '마크다운 파일 생성해야하는 이유와 생성방법',
    description: '마크다운 파일의 필요성과 생성 방법에 대한 상세 가이드입니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300 text-xs font-bold w-max mb-4">
            <span className="text-blue-400">📚</span> 수강생 전용 자료
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-3 drop-shadow-lg break-keep leading-snug">
            마크다운 파일 생성해야하는<br/>이유와 생성방법
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'LECTURE',
    tags: ['가이드', '마크다운', 'Markdown'],
    link: 'https://hyeoksin.notion.site/2ebd4d37e510802a8685ce8ebfb6307e'
  },
  {
    id: 'lecture-md-download-error',
    title: 'MD파일이 다운로드 안되는 경우 해결방법',
    description: 'MD파일이 다운로드 안되는 경우 해결방법에 대한 상세 가이드 문서입니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300 text-xs font-bold w-max mb-4">
            <span className="text-blue-400">📚</span> 수강생 전용 자료
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-3 drop-shadow-lg break-keep leading-snug">
            MD파일이 다운로드 안되는<br/>경우 해결방법
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'LECTURE',
    tags: ['가이드', '마크다운', '오류해결'],
    link: 'https://docs.google.com/document/d/1gn81aKBt3dfZBSacx3K501lhoQRbYusLpMQ23HZo-do/edit?usp=sharing'
  },
  {
    id: 'lecture-api-security',
    title: '구글 API Key 보안을 철저히 해야 하는 이유',
    description: '구글 API Key 보안의 중요성과 관리 방법에 대한 상세 가이드입니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300 text-xs font-bold w-max mb-4">
            <span className="text-blue-400">📚</span> 수강생 전용 자료
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-3 drop-shadow-lg break-keep leading-snug">
            구글 API Key 보안을<br/>철저히 해야 하는 이유
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'LECTURE',
    tags: ['가이드', 'API', '보안'],
    link: 'https://docs.google.com/document/d/1E5R1Eq2s-nl4kKrSsOfrjKA1iDkL-uKtOlWkL5-1eEg/edit?usp=sharing'
  },
  {
    id: 'lecture-api-remote-service',
    title: '구글 API Key 설치 원격 서비스 (수강생 전용)',
    description: '구글 API Key 설치가 어려운 분들을 위한 원격 지원 서비스 안내입니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300 text-xs font-bold w-max mb-4">
            <span className="text-blue-400">📚</span> 수강생 전용 자료
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-3 drop-shadow-lg break-keep leading-snug">
            구글 API Key 설치<br/>원격 서비스
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'LECTURE',
    tags: ['가이드', 'API', '원격지원'],
    link: 'https://docs.google.com/document/d/1WiYeaHaJ2zuR7iJ-z0wwRa8mhQacukenWt3veEjAKEg/edit?usp=sharing'
  },
  {
    id: 'lecture-anydesk-install',
    title: '원격서비스 Anydesk 설치방법 (수강생 전용)',
    description: '원격 지원을 위한 Anydesk 설치 및 설정 가이드입니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300 text-xs font-bold w-max mb-4">
            <span className="text-blue-400">📚</span> 수강생 전용 자료
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-3 drop-shadow-lg break-keep leading-snug">
            원격서비스<br/>Anydesk 설치방법
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'LECTURE',
    tags: ['가이드', '원격지원', '설치'],
    link: 'https://docs.google.com/document/d/153Z0KHMyiD-4cL--eD6j8-nxQMmY_9AVtguDzRRwPjY/edit?usp=sharing'
  },
  {
    id: 'lecture-api-billing-account',
    title: 'API키 결제 등급에 My Billing Account라고 되어있을 경우 해결방법',
    description: 'API키 결제 등급에 My Billing Account라고 표시될 때의 해결 방법에 대한 가이드 문서입니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] relative overflow-hidden flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 text-blue-300 text-xs font-bold w-max mb-4">
            <span className="text-blue-400">📚</span> 수강생 전용 자료
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-3 drop-shadow-lg break-keep leading-snug">
            API키 결제 등급에<br/>My Billing Account 해결방법
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'LECTURE',
    tags: ['가이드', 'API', '결제'],
    link: 'https://docs.google.com/document/d/1rPu0ERoeLaSvAV-xPlPLGrRYd4DcGc4l8WVsXM3bPmU/edit?usp=sharing'
  },
  {
    id: '1',
    title: '혁신 AI Lite',
    description: '블로그, 카드뉴스, 이미지, 동영상을 한 번에 생성하는 올인원 AI 크리에이티브 스튜디오',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#1e1b4b] via-[#172554] to-[#0f172a] relative overflow-hidden flex flex-col items-center justify-center p-6">
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

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> AI Lite
          </h2>
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
      <div className="w-full h-full bg-[#1a0f00] relative overflow-hidden flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#451a03]/90 via-[#78350f]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80"></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500 tracking-tight drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            혁신 수익화 발굴 AI
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'PLANNING',
    tags: ['LLM', '번역'],
    link: 'https://hyeoksin-money.fragrant-flower-7056.workers.dev/'
  },
  {
    id: 'trend',
    title: '혁신 트렌드 AI',
    description: '2026년 AI 수익화 트렌드를 분석하고, 당신만의 완벽한 비즈니스 로드맵과 마케팅 전략을 설계하세요.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-[#082f49] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e]/90 via-[#0369a1]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80"></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-500 tracking-tight drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            혁신 트렌드 AI
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'BUSINESS',
    tags: ['트렌드', '비즈니스', '수익화'],
    link: 'https://hyeoksin-trend.fragrant-flower-7056.workers.dev'
  },
  {
    id: 'calendar',
    title: '혁신 수익화 캘린더 AI',
    description: 'AI를 활용한 2026년 수익화 로드맵을 90일 캘린더로 완성하세요.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-[#2e1065] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#4c1d95]/90 via-[#6d28d9]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80"></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-fuchsia-500 tracking-tight drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            혁신 수익화 캘린더 AI
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
    category: 'PLANNING',
    tags: ['캘린더', '로드맵', '수익화'],
    link: 'https://hyeoksin-calendar.fragrant-flower-7056.workers.dev/'
  },
  {
    id: '3',
    title: '혁신 블로그 AI',
    description: '인공지능의 힘으로 당신만의 독창적이고 전문적인 블로그 포스팅을 완성하세요.',
    image: '',
    customVisual: (
      <div className="w-full h-full bg-gradient-to-br from-[#064e3b] via-[#022c22] to-[#0f172a] relative overflow-hidden flex flex-col items-center justify-center p-6">
        {/* Abstract Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,40 Q30,20 60,50 T100,30 L100,100 L0,100 Z" fill="#047857" opacity="0.2" />
          <path d="M0,60 Q40,40 70,70 T100,50 L100,100 L0,100 Z" fill="#065f46" opacity="0.3" />
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> 블로그 AI
          </h2>
        </div>
      </div>
    ),
    access: 'BASIC',
    category: 'MARKETING',
    tags: ['블로그', '콘텐츠 생성'],
    link: 'https://hyeoksinblog.fragrant-flower-7056.workers.dev'
  },
  {
    id: '4',
    title: '혁신 상세페이지 AI',
    description: '단 10분만에 완성되는 고전환율 맞춤 상세페이지 제작 AI',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/30"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> 상세페이지 AI
          </h2>
        </div>
      </div>
    ),
    access: 'BASIC',
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
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/85 to-black/90 backdrop-blur-[2px]"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 홈페이지 <br/> 개발 AI
          </h2>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PLANNING',
    tags: ['홈페이지', '개발', '프롬프트'],
    link: 'https://hyeoksin-homepage.fragrant-flower-7056.workers.dev'
  },
  {
    id: 'sourcing',
    title: '혁신 소싱 AI',
    description: 'AI를 활용하여 최적의 소싱 아이템을 발굴하고 분석합니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-slate-900/85 to-black/90 backdrop-blur-[2px]"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> 소싱 AI
          </h2>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PLANNING',
    tags: ['소싱', '비즈니스'],
    link: 'https://hyeoksin-sale.fragrant-flower-7056.workers.dev'
  },
  {
    id: 'newsletter',
    title: '혁신 뉴스레터 AI',
    description: 'AI를 활용하여 매력적인 뉴스레터를 기획하고 작성합니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-slate-900/85 to-black/90 backdrop-blur-[2px]"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> 뉴스레터 AI
          </h2>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PLANNING',
    tags: ['뉴스레터', '마케팅'],
    link: 'https://hyeoksin-news.fragrant-flower-7056.workers.dev'
  },
  {
    id: '5',
    title: '혁신 직무역량 강화 AI',
    description: '당신의 잠재력을 깨우고 커리어의 새로운 패러다임을 제시합니다',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> 직무역량 강화 AI
          </h2>
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
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center bg-[#13111C] p-6">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] left-[10%] w-[60%] h-[60%] bg-indigo-900/30 rounded-full blur-[80px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[70%] h-[70%] bg-rose-900/20 rounded-full blur-[80px] mix-blend-screen"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> 키워드 조합 AI
          </h2>
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
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center bg-[#2B0F4C] p-6">
        {/* Background Gradients */}
        <div className="absolute top-[-30%] left-[-20%] w-[100%] h-[100%] bg-[#B86A2E]/40 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-30%] left-[-20%] w-[100%] h-[100%] bg-[#0C4F5A]/60 rounded-full blur-[80px]"></div>
        <div className="absolute top-[10%] right-[-30%] w-[100%] h-[100%] bg-[#4A154B]/50 rounded-full blur-[80px]"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> 카드뉴스 AI
          </h2>
        </div>
      </div>
    ),
    access: 'BASIC',
    category: 'DESIGN',
    tags: ['카드뉴스', '인스타그램']
  },
  {
    id: '8',
    title: '혁신 전자책 AI',
    description: 'Gemini 3.1 Pro의 강력한 추론 능력과 이미지 생성 기능을 결합하여 단 몇 번의 클릭으로 전문가 수준의 전자책을 기획하고 출판하세요.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-[#4A154B]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> 전자책 AI
          </h2>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'PLANNING',
    tags: ['전자책', '출판'],
    link: 'https://hyeoksin-book.fragrant-flower-7056.workers.dev'
  },
  {
    id: '9',
    title: '혁신 유튜브 AI',
    description: '단 몇 번의 클릭으로 완벽한 유튜브 쇼츠와 영상을 제작하세요. AI가 대본부터 음성, 이미지, 영상 렌더링까지 모든 것을 자동으로 완성합니다.',
    image: '',
    customVisual: (
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        {/* Dark/Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b]/90 via-[#312e81]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> 유튜브 AI
          </h2>
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
      <div className="w-full h-full bg-[#4c0519] relative overflow-hidden flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#881337]/90 via-[#be123c]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80"></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-500 tracking-tight drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]">
            혁신 맞춤 프롬프트 생성 AI
          </h2>
        </div>
      </div>
    ),
    access: 'STUDENT',
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
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 유튜브 <br/> 썸네일 AI
          </h2>
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
      <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop)' }}
        ></div>
        {/* Dark/Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b4b]/95 via-[#312e81]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> 제안서 AI
          </h2>
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
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            혁신 <br/> 리뷰 AI
          </h2>
        </div>
      </div>
    ),
    access: 'PREMIUM',
    category: 'MARKETING',
    tags: ['리뷰', '바이럴', '마케팅'],
    link: 'https://hyeoksin-review.fragrant-flower-7056.workers.dev'
  },
  {
    id: 'p-ppt-notebooklm',
    title: 'PPT 디자인 프롬프트 [학원_NotebookLM용]',
    description: 'AI·에듀테크 기반 학원 브랜딩 슬라이드 전문가를 위한 NotebookLM 슬라이드 디자인 가이드 프롬프트입니다.',
    image: '',
    access: 'FREE',
    category: 'PROMPT',
    promptSubCategory: '디자인',
    tags: ['PPT', '디자인', '학원', 'NotebookLM'],
    promptText: `[NotebookLM Slide Design Guide]

Role : AI·에듀테크 기반 학원 브랜딩 슬라이드 전문가
Industry : 학원
Type : 에듀테크 이노베이션 — AI·빅데이터 기반 맞춤 학습 시스템 자료

[Color Guide]
Background : #e8f0fe (라이트 블루)
Text Color : #0a1a2e (딥 네이비) / #3a5070 (블루 그레이)
Accent : #1a73e8 (디지털 블루) / #00c896 (에듀 민트)
Font : DM Sans (제목) / Noto Sans KR (본문)

[Tone & Manner]
AI·빅데이터·디지털 학습 플랫폼을 앞세운 미래지향 학원 이미지. 앱 기반 개인 맞춤 학습·실시간 성취도 분석을 학부모에게 어필. 기술이 만드는 공정한 교육.

[Image Principles]
태블릿·학습 앱 UI 이미지. 민트·블루 에듀 아이콘. 학습 데이터 대시보드. AI 추천 학습 경로 플로우.

[Design Characteristics]
• 라이트 블루 + 민트 배색
• 앱 UI 모형 레이아웃
• 학습 데이터 시각화
• AI 기능 아이콘 카드
• 학부모·학생 피드백 배지

[Layout Guide]
- Title Slide : 라이트 블루 + 앱 UI 모형 + 블루 헤드라인
- Spec Slide : AI 기능 카드 그리드 (진단·추천·분석·리포트)
- Comparison Slide : 일반 수업 vs AI 맞춤 학습 성취도 비교
- CTA Slide : 민트 버튼 + 무료 체험 신청 CTA
- Tone : Innovative / Data-driven / Modern
- Slide count : 7 pages
- Font size contrast : 제목 42pt / 소제목 20pt / 본문 14pt
- Text per slide : 최대 50단어

Apply this style consistently across all slides for a cohesive, professional slides design.`
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
] as Program[]).map((p) => p.category === 'PROMPT' ? { ...p, access: 'BASIC' } : p.category === 'LECTURE' ? { ...p, access: 'STUDENT' } : p);

function PromptCard({ 
  program, 
  authLevel, 
  onRequireAuth 
}: { 
  program: Program; 
  authLevel: 'NONE' | 'BASIC' | 'PREMIUM' | 'STUDENT' | 'MASTER' | 'DONCLASS' | 'COACHINGPASS' | 'CONSULTING';
  onRequireAuth: () => void;
  key?: string;
}) {
  const [copied, setCopied] = useState(false);

  const isLocked = authLevel !== 'MASTER' && authLevel !== 'CONSULTING' && authLevel !== 'COACHINGPASS' && (
    (program.access === 'PREMIUM' && authLevel !== 'PREMIUM' && authLevel !== 'DONCLASS') || 
    (program.access === 'STUDENT' && authLevel !== 'STUDENT') ||
    (program.access === 'BASIC' && authLevel !== 'BASIC' && authLevel !== 'PREMIUM' && authLevel !== 'DONCLASS')
  );

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
        <div className="flex items-start gap-2 mb-3 flex-wrap">
          {program.access === 'STUDENT' && (
            <span className={`inline-flex items-center gap-1 px-2 py-1 ${authLevel === 'STUDENT' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'COACHINGPASS' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'} text-[10px] font-bold rounded-md shrink-0`}>
              {authLevel === 'STUDENT' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'COACHINGPASS' ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
              🎓 수강생 전용
            </span>
          )}
          {(program.access === 'PREMIUM' || program.access === 'BASIC') && (
            <>
              {program.access === 'PREMIUM' && (
                <span className={`inline-flex items-center gap-1 px-2 py-1 ${authLevel === 'PREMIUM' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'DONCLASS' || authLevel === 'COACHINGPASS' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'} text-[10px] font-bold rounded-md shrink-0`}>
                  {authLevel === 'PREMIUM' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'DONCLASS' || authLevel === 'COACHINGPASS' ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                  💎 프리미엄 멤버십 전용
                </span>
              )}
              {program.access === 'BASIC' && (
                <span className={`inline-flex items-center gap-1 px-2 py-1 ${authLevel === 'BASIC' || authLevel === 'PREMIUM' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'DONCLASS' || authLevel === 'COACHINGPASS' ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-100 text-indigo-700'} text-[10px] font-bold rounded-md shrink-0`}>
                  {authLevel === 'BASIC' || authLevel === 'PREMIUM' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'DONCLASS' || authLevel === 'COACHINGPASS' ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                  ⚡ 스탠다드 / 프리미엄 멤버십
                </span>
              )}
            </>
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
              <p className="text-sm font-bold text-gray-900 mb-1">
                {program.access === 'STUDENT' ? '🎓 수강생 전용 프롬프트' : 
                 program.access === 'PREMIUM' ? '💎 프리미엄 멤버십 전용 프롬프트' : 
                 '👑 멤버십 전용 프롬프트'}
              </p>
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
              코드 인증하기
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

const FAQ_DATA = [
  {
    question: '혁신 AI란 무엇인가요?',
    answer: '혁신 AI는 생산성과 효율성의 한계를 뛰어넘어 여러분의 수익화 파이프라인 구축을 돕는 AI 통합 플랫폼입니다. 블로그, 썸네일, 프롬프트 생성 등 다양한 맞춤형 AI 도구를 제공합니다.'
  },
  {
    question: '수강생 전용 도구는 어떻게 이용하나요?',
    answer: '수강생 전용 도구는 혁신 AI 교육 과정을 수강하시는 분들에게 제공되는 프리미엄 기능입니다. 우측 상단의 "코드 인증" 버튼을 클릭하여 발급받으신 인증 코드를 입력하시면 모든 기능을 이용하실 수 있습니다.'
  },
  {
    question: '무료 버전과 멤버십 버전의 차이는 무엇인가요?',
    answer: '무료 버전은 기본적인 AI 도구를 체험해 볼 수 있으며, 멤버십 버전은 더 고도화된 프롬프트와 전문적인 결과물을 생성하는 프리미엄 AI 에이전트 접근 권한을 제공합니다.'
  },
  {
    question: '구글 API Key는 왜 필요한가요?',
    answer: '일부 고급 AI 기능은 구글의 최신 AI 모델을 직접 호출하여 사용합니다. 이를 위해 사용자 본인의 구글 API Key를 입력하여 안전하고 독립적인 환경에서 AI를 활용할 수 있도록 설계되었습니다.'
  },
  {
    question: '구글 API Key 카드 연결은 체크카드로도 가능한가요?',
    answer: '체크카드로도 가능하지만 미리 결제를 하고 환불을 받아야 합니다. 기간은 7일정도 소요됩니다. 가능하면 신용카드로 연결하시는 것을 권장드립니다.'
  },
  {
    question: '구글 API Key는 비용이 드나요?',
    answer: (
      <div className="flex flex-col gap-2">
        <p>구글 API Key는 사용량만큼 비용이 과금되는 시스템입니다. 단, 지금 현재 구글에서 신규가입을 후 카드연결을한 회원들을 대상으로 90일동안 300달러의 무료 크레딧을 제공하고 있습니다.</p>
        <p>90일동안 사용하시고 90일 뒤에 새로운 구글 계정으로 카드연결을 해서 사용하시면 지속적으로 무료로 구글 API Key를 사용하실 수 있습니다.</p>
        <p>자세한 설정방법은 아래 링크를 참고하여 진행해주시면 됩니다.</p>
        <a 
          href="https://docs.google.com/presentation/d/10BbgaNbQg60yh3xkNgSahAEm9lyiaZJEUn8W6F6kS3U/edit?slide=id.g3d0ca4dfca9_0_52#slide=id.g3d0ca4dfca9_0_52" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-300 underline break-all"
        >
          https://docs.google.com/presentation/d/10BbgaNbQg60yh3xkNgSahAEm9lyiaZJEUn8W6F6kS3U/edit?slide=id.g3d0ca4dfca9_0_52#slide=id.g3d0ca4dfca9_0_52
        </a>
      </div>
    )
  },
  {
    question: '인증 코드를 분실했어요.',
    answer: '인증 코드를 분실하신 경우, 구매하신 플랫폼의 메시지나 고객센터 이메일(info@nextin.ai.kr)로 문의해 주시면 본인 확인 후 재발급을 도와드립니다.'
  }
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');
  const [selectedSubCategory, setSelectedSubCategory] = useState<PromptSubCategory | 'ALL'>('ALL');
  const [selectedAccess, setSelectedAccess] = useState<'ALL' | 'FREE' | 'BASIC' | 'PREMIUM' | 'STUDENT' | 'MASTER' | 'DONCLASS' | 'COACHINGPASS'>('ALL');
  const [isVersionDropdownOpen, setIsVersionDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authLevel, setAuthLevel] = useState<'NONE' | 'BASIC' | 'PREMIUM' | 'STUDENT' | 'MASTER' | 'DONCLASS' | 'COACHINGPASS' | 'CONSULTING'>('NONE');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [currentView, setCurrentView] = useState<'HOME' | 'FAQ' | 'MEMBERSHIP' | 'CONSULTING' | 'AGENCY'>('HOME');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [pageMap, setPageMap] = useState<Record<string, number>>({ PROGRAM: 1, PROMPT: 1, LECTURE: 1 });
  const [itemsPerPage, setItemsPerPage] = useState(8);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setItemsPerPage(8); // xl: 4 cols * 2
      else if (window.innerWidth >= 1024) setItemsPerPage(6); // lg: 3 cols * 2
      else if (window.innerWidth >= 768) setItemsPerPage(4); // md: 2 cols * 2
      else setItemsPerPage(2); // sm: 1 col * 2
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [authCode, setAuthCode] = useState('');
  const [authError, setAuthError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authCodeUsed, setAuthCodeUsed] = useState('');

  const handleAuth = () => {
    if (authCode === 'master1004') {
      setAuthLevel('MASTER');
      setShowAuthModal(false);
      setAuthCode('');
      setAuthError('');
      setShowPassword(false);
    } else if (authCode === 'cst1004') {
      setAuthLevel('CONSULTING');
      setShowAuthModal(false);
      setAuthCode('');
      setAuthError('');
      setShowPassword(false);
    } else if (authCode === 'donclass1') {
      setAuthLevel('DONCLASS');
      setShowAuthModal(false);
      setAuthCode('');
      setAuthError('');
      setShowPassword(false);
    } else if (authCode === 'dc1004') {
      const currentDate = new Date();
      const expirationDate = new Date('2027-04-01T00:00:00+09:00');
      if (currentDate < expirationDate) {
        setAuthLevel('DONCLASS');
        setAuthCodeUsed('dc1004');
        setShowAuthModal(false);
        setAuthCode('');
        setAuthError('');
        setShowPassword(false);
      } else {
        setAuthError('만료된 인증 코드입니다.');
      }
    } else if (authCode === 'cp') {
      setAuthLevel('COACHINGPASS');
      setShowAuthModal(false);
      setAuthCode('');
      setAuthError('');
      setShowPassword(false);
    } else if (authCode === 'hsaip0705') {
      setAuthLevel('PREMIUM');
      setShowAuthModal(false);
      setAuthCode('');
      setAuthError('');
      setShowPassword(false);
    } else if (authCode === 'hsedu1004') {
      setAuthLevel('STUDENT');
      setShowAuthModal(false);
      setAuthCode('');
      setAuthError('');
      setShowPassword(false);
    } else if (authCode === '0515') {
      setAuthLevel('BASIC');
      setShowAuthModal(false);
      setAuthCode('');
      setAuthError('');
      setShowPassword(false);
    } else {
      setAuthError('인증 번호가 올바르지 않습니다.');
    }
  };

  // Filter logic
  const filteredPrograms = PROGRAMS.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || 
                            (selectedCategory === 'PROGRAM' ? !['PROMPT', 'LECTURE'].includes(program.category) : program.category === selectedCategory);
    const matchesSubCategory = selectedCategory !== 'PROMPT' || selectedSubCategory === 'ALL' || program.promptSubCategory === selectedSubCategory;
    
    let matchesAccess = false;
    if (selectedAccess === 'ALL') {
      matchesAccess = true;
    } else if (selectedAccess === 'PREMIUM') {
      matchesAccess = program.access === 'PREMIUM' || program.access === 'BASIC';
    } else {
      matchesAccess = program.access === selectedAccess;
    }
    
    return matchesSearch && matchesCategory && matchesSubCategory && matchesAccess;
  }).sort((a, b) => {
    if (a.access === 'STUDENT' && b.access !== 'STUDENT') return 1;
    if (a.access !== 'STUDENT' && b.access === 'STUDENT') return -1;
    return 0;
  });

  const renderProgram = (program: Program) => (
    program.category === 'PROMPT' ? (
      <PromptCard 
        key={program.id} 
        program={program} 
        authLevel={authLevel}
        onRequireAuth={() => setShowAuthModal(true)}
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
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            {program.access === 'STUDENT' ? (
              <div className={`flex items-center gap-1.5 px-2.5 py-1 ${authLevel === 'STUDENT' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'COACHINGPASS' ? 'bg-emerald-500' : 'bg-blue-500'} text-white text-xs font-bold rounded-md shadow-lg backdrop-blur-md transition-colors`}>
                {authLevel === 'STUDENT' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'COACHINGPASS' ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                {authLevel === 'STUDENT' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'COACHINGPASS' ? '인증됨' : '🎓 수강생 전용'}
              </div>
            ) : program.access === 'PREMIUM' ? (
              <div className={`flex items-center gap-1.5 px-2.5 py-1 ${authLevel === 'PREMIUM' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'DONCLASS' || authLevel === 'COACHINGPASS' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-black'} text-xs font-bold rounded-md shadow-lg backdrop-blur-md transition-colors`}>
                {authLevel === 'PREMIUM' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'DONCLASS' || authLevel === 'COACHINGPASS' ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                {authLevel === 'PREMIUM' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'DONCLASS' || authLevel === 'COACHINGPASS' ? '인증됨' : '💎 프리미엄 멤버십'}
              </div>
            ) : program.access === 'BASIC' ? (
              <div className={`flex items-center gap-1.5 px-2.5 py-1 ${authLevel === 'BASIC' || authLevel === 'PREMIUM' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'DONCLASS' || authLevel === 'COACHINGPASS' ? 'bg-emerald-500 text-white' : 'bg-indigo-500 text-white'} text-xs font-bold rounded-md shadow-lg backdrop-blur-md transition-colors`}>
                {authLevel === 'BASIC' || authLevel === 'PREMIUM' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'DONCLASS' || authLevel === 'COACHINGPASS' ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                {authLevel === 'BASIC' || authLevel === 'PREMIUM' || authLevel === 'MASTER' || authLevel === 'CONSULTING' || authLevel === 'DONCLASS' || authLevel === 'COACHINGPASS' ? '인증됨' : '⚡ 스탠다드 / 프리미엄 멤버십'}
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 text-white text-xs font-bold rounded-md shadow-lg backdrop-blur-md border border-white/20">
                🎁 무료버전
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
            {program.access === 'STUDENT' && authLevel !== 'STUDENT' && authLevel !== 'MASTER' && authLevel !== 'CONSULTING' && authLevel !== 'COACHINGPASS' ? (
              <button 
                onClick={() => setShowAuthModal(true)}
                className={`w-full flex items-center justify-center gap-2 py-2.5 font-bold rounded-xl transition-all ${
                  authLevel !== 'NONE'
                    ? 'bg-zinc-800 text-zinc-400 border border-zinc-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                }`}
                disabled={authLevel !== 'NONE'}
              >
                <Lock className="w-4 h-4" />
                {authLevel !== 'NONE' ? '수강생 전용 이용 불가' : '잠금 해제 및 이동'}
              </button>
            ) : program.access === 'PREMIUM' && authLevel !== 'PREMIUM' && authLevel !== 'MASTER' && authLevel !== 'CONSULTING' && authLevel !== 'DONCLASS' && authLevel !== 'COACHINGPASS' ? (
              <button 
                onClick={() => setShowAuthModal(true)}
                className={`w-full flex items-center justify-center gap-2 py-2.5 font-bold rounded-xl transition-all ${
                  authLevel === 'BASIC' || authLevel === 'STUDENT'
                    ? 'bg-zinc-800 text-zinc-400 border border-zinc-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                }`}
                disabled={authLevel === 'BASIC' || authLevel === 'STUDENT'}
              >
                <Lock className="w-4 h-4" />
                {authLevel === 'BASIC' || authLevel === 'STUDENT' ? '프리미엄 멤버십 필요' : '잠금 해제 및 이동'}
              </button>
            ) : program.access === 'BASIC' && authLevel !== 'BASIC' && authLevel !== 'PREMIUM' && authLevel !== 'MASTER' && authLevel !== 'CONSULTING' && authLevel !== 'DONCLASS' && authLevel !== 'COACHINGPASS' ? (
              <button 
                onClick={() => setShowAuthModal(true)}
                className={`w-full flex items-center justify-center gap-2 py-2.5 font-bold rounded-xl transition-all ${
                  authLevel === 'STUDENT'
                    ? 'bg-zinc-800 text-zinc-400 border border-zinc-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                }`}
                disabled={authLevel === 'STUDENT'}
              >
                <Lock className="w-4 h-4" />
                {authLevel === 'STUDENT' ? '스탠다드 / 프리미엄 멤버십 필요' : '잠금 해제 및 이동'}
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
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-red-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur-[8px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full h-full bg-black rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                  <Sparkles className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </div>
              </div>
              <span className="font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
                혁신 AI
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setCurrentView('HOME')}
                className={`${currentView === 'HOME' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'} transition-colors`}
              >
                홈
              </button>
              <button 
                onClick={() => setCurrentView('FAQ')}
                className={`${currentView === 'FAQ' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'} transition-colors`}
              >
                FAQ
              </button>
              <button 
                onClick={() => setCurrentView('MEMBERSHIP')}
                className={`${currentView === 'MEMBERSHIP' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'} transition-colors`}
              >
                멤버십 구독
              </button>
              <button 
                onClick={() => setCurrentView('CONSULTING')}
                className={`${currentView === 'CONSULTING' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'} transition-colors`}
              >
                컨설팅 문의
              </button>
              <button 
                onClick={() => setCurrentView('AGENCY')}
                className={`${currentView === 'AGENCY' ? 'text-white font-bold' : 'text-zinc-300 hover:text-white'} transition-colors`}
              >
                대행 문의
              </button>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-sm font-bold shadow-[0_0_10px_rgba(245,158,11,0.1)] border-r border-zinc-800 mr-2">
                <Sparkles className="w-4 h-4" />
                개발자 : 정혁신
              </div>
              {authLevel !== 'NONE' ? (
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-emerald-400 font-medium">
                      {authLevel === 'MASTER' ? '마스터' : authLevel === 'CONSULTING' ? '1:1 컨설팅' : authLevel === 'COACHINGPASS' ? '협력사 : 코칭패스' : authLevel === 'DONCLASS' ? '돈버는형님들 수강생 전용' : authLevel === 'STUDENT' ? '수강생' : authLevel === 'PREMIUM' ? '프리미엄 멤버십' : '스탠다드 멤버십'} 인증 완료
                    </span>
                    {authCodeUsed === 'dc1004' && (
                      <span className="text-xs text-amber-400 font-medium mt-0.5">
                        (만료일: 2027.04.01)
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={() => {
                      setAuthLevel('NONE');
                      setAuthCodeUsed('');
                    }}
                    className="bg-zinc-800 text-emerald-400 px-4 py-2 rounded-md font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 flex items-center gap-2"
                  >
                    <Unlock className="w-4 h-4" />
                    인증 해제
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowAuthModal(true)}
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-md font-medium hover:from-blue-400 hover:to-cyan-500 transition-colors flex items-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    코드 인증 및 해제
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
                <button 
                  onClick={() => { setCurrentView('HOME'); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${currentView === 'HOME' ? 'text-white bg-white/5' : 'text-zinc-300 hover:text-white hover:bg-white/5'}`}
                >
                  홈
                </button>
                <button 
                  onClick={() => { setCurrentView('FAQ'); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${currentView === 'FAQ' ? 'text-white bg-white/5' : 'text-zinc-300 hover:text-white hover:bg-white/5'}`}
                >
                  FAQ
                </button>
                <button 
                  onClick={() => { setCurrentView('MEMBERSHIP'); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${currentView === 'MEMBERSHIP' ? 'text-white bg-white/5' : 'text-zinc-300 hover:text-white hover:bg-white/5'}`}
                >
                  멤버십 구독
                </button>
                <button 
                  onClick={() => { setCurrentView('CONSULTING'); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${currentView === 'CONSULTING' ? 'text-white bg-white/5' : 'text-zinc-300 hover:text-white hover:bg-white/5'}`}
                >
                  컨설팅 문의
                </button>
                <button 
                  onClick={() => { setCurrentView('AGENCY'); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${currentView === 'AGENCY' ? 'text-white bg-white/5' : 'text-zinc-300 hover:text-white hover:bg-white/5'}`}
                >
                  대행 문의
                </button>
                <div className="px-3 py-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-sm font-bold shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                    <Sparkles className="w-4 h-4" />
                    개발자 : 정혁신
                  </div>
                </div>
                
                <div className="pt-4 pb-2 border-t border-zinc-800">
                  {authLevel !== 'NONE' ? (
                    <div className="flex flex-col gap-2 px-3">
                      <div className="flex flex-col mb-2">
                        <span className="text-sm text-emerald-400 font-medium">
                          {authLevel === 'MASTER' ? '마스터' : authLevel === 'CONSULTING' ? '1:1 컨설팅' : authLevel === 'COACHINGPASS' ? '협력사 : 코칭패스' : authLevel === 'DONCLASS' ? '돈버는형님들 수강생 전용' : authLevel === 'STUDENT' ? '수강생' : authLevel === 'PREMIUM' ? '프리미엄 멤버십' : '스탠다드 멤버십'} 인증 완료
                        </span>
                        {authCodeUsed === 'dc1004' && (
                          <span className="text-xs text-amber-400 font-medium mt-0.5">
                            (만료일: 2027.04.01)
                          </span>
                        )}
                      </div>
                      <button 
                        onClick={() => {
                          setAuthLevel('NONE');
                          setAuthCodeUsed('');
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
                          setShowAuthModal(true);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-md font-medium hover:from-blue-400 hover:to-cyan-500 transition-colors flex items-center justify-center gap-2"
                      >
                        <Lock className="w-4 h-4" />
                        코드 인증 및 해제
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {currentView === 'HOME' ? (
        <>
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-[#030014] border-b border-white/5 min-h-[300px] flex items-center">
        {/* Abstract Background Image */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop)' }}
        />
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/40 blur-[100px] rounded-full pointer-events-none mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/30 blur-[100px] rounded-full pointer-events-none mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] left-[40%] w-[30%] h-[30%] bg-blue-400/20 blur-[80px] rounded-full pointer-events-none mix-blend-screen" 
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full mix-blend-screen"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                boxShadow: '0 0 10px 2px rgba(255,255,255,0.3)'
              }}
              animate={{
                y: [0, -100],
                opacity: [0, Math.random() * 0.5 + 0.3, 0],
                scale: [0, Math.random() + 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        {/* Sweeping Light Beam */}
        <motion.div 
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-20 pointer-events-none mix-blend-screen"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(99, 102, 241, 0.1) 60deg, rgba(168, 85, 247, 0.2) 120deg, transparent 180deg, rgba(99, 102, 241, 0.1) 240deg, rgba(168, 85, 247, 0.2) 300deg, transparent 360deg)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-center flex flex-col items-center w-full">
          
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-2xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-zinc-200 text-[10px] font-semibold tracking-[0.2em] uppercase">Next Generation AI Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 leading-[1.1]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
              AI 통합 플랫폼
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              혁신 AI
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 max-w-2xl mx-auto text-base md:text-lg text-zinc-400 font-medium leading-relaxed"
          >
            혁신AI를 활용해서 생산성과 효율성의 한계를 뛰어넘으세요.
            <br className="hidden md:block" /> 
            <span className="text-zinc-300">여러분의 수익화 파이프라인의 핵심</span>이 될 것입니다.
          </motion.p>
        </div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
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
              placeholder="무엇이든 검색하세요!"
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
                  { id: 'ALL', label: '🌟 전체' },
                  { id: 'PROGRAM', label: '💻 프로그램' },
                  { id: 'MARKETING', label: '📈 마케팅' },
                  { id: 'DESIGN', label: '🎨 디자인' },
                  { id: 'VIDEO', label: '🎬 영상' },
                  { id: 'PLANNING', label: '📝 기획' },
                  { id: 'PROMPT', label: '💬 프롬프트' },
                  { id: 'LECTURE', label: '📚 강의자료' },
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
                    { id: 'ALL', label: '✨ 모든 프롬프트' },
                    { id: '비즈니스', label: '💼 비즈니스' },
                    { id: '마케팅', label: '📈 마케팅' },
                    { id: '디자인', label: '🎨 디자인' },
                    { id: '콘텐츠', label: '📝 콘텐츠' },
                    { id: '개발', label: '💻 개발' },
                    { id: '교육', label: '🎓 교육' },
                    { id: '일상', label: '☕ 일상' },
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
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'ALL', label: '✨ 모든 버전' },
                { id: 'FREE', label: '🎁 무료버전' },
                { id: 'BASIC', label: '⚡ 스탠다드 / 프리미엄 멤버십' },
                { id: 'PREMIUM', label: '💎 프리미엄 멤버십 전용' },
                { id: 'STUDENT', label: '🎓 수강생 전용' },
              ].map((acc) => (
                <button
                  key={acc.id}
                  onClick={() => setSelectedAccess(acc.id as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all border ${
                    selectedAccess === acc.id
                      ? acc.id === 'PREMIUM'
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                        : acc.id === 'BASIC'
                          ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.2)]'
                          : acc.id === 'FREE'
                            ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                            : acc.id === 'STUDENT'
                              ? 'bg-blue-500/20 border-blue-500/50 text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                              : 'bg-zinc-100 border-zinc-100 text-black shadow-[0_0_10px_rgba(255,255,255,0.2)]'
                      : 'bg-black border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                  }`}
                >
                  {acc.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {selectedCategory === 'ALL' ? (
          <div className="space-y-16">
            {['PROGRAM', 'PROMPT', 'LECTURE'].map(catId => {
              const catPrograms = filteredPrograms.filter(p => catId === 'PROGRAM' ? !['PROMPT', 'LECTURE'].includes(p.category) : p.category === catId);
              if (catPrograms.length === 0) return null;
              
              const currentPage = pageMap[catId] || 1;
              const totalPages = Math.ceil(catPrograms.length / itemsPerPage);
              const paginatedPrograms = catPrograms.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

              return (
                <div key={catId}>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      {catId === 'PROGRAM' ? '🚀 프로그램' : catId === 'PROMPT' ? '💡 프롬프트' : '📚 강의자료'}
                    </h2>
                    <button
                      onClick={() => {
                        setSelectedCategory(catId as Category);
                        setSelectedSubCategory('ALL');
                      }}
                      className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      전체보기 <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence>
                      {paginatedPrograms.map(renderProgram)}
                    </AnimatePresence>
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                      <button 
                        onClick={() => setPageMap(prev => ({ ...prev, [catId]: Math.max(1, currentPage - 1) }))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setPageMap(prev => ({ ...prev, [catId]: i + 1 }))}
                          className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${currentPage === i + 1 ? 'bg-red-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'}`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button 
                        onClick={() => setPageMap(prev => ({ ...prev, [catId]: Math.min(totalPages, currentPage + 1) }))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredPrograms.map(renderProgram)}
            </AnimatePresence>
          </div>
        )}

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
      </>
      ) : currentView === 'CONSULTING' ? (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh]">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-bold mb-8"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>대표님, 언제까지 인건비만 감당하시겠습니까?</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1]">
              매달 빠져나가는 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">
                직원 10명의 인건비,
              </span>
              <br />
              언제까지 감당하시겠습니까?
            </h1>
            
            <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
              숨만 쉬어도 나가는 고정비 때문에 밤잠 설치는 날이 많으시죠. <br />
              이제 <span className="text-zinc-200 font-bold">AI 마케팅 코칭</span>을 통해 인건비는 1/10로 줄이고, <br />
              매출은 자동화 시스템으로 24시간 벌어들이세요.
            </p>
          </div>

          {/* Pain Points Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {[
              {
                title: "인건비 부담",
                desc: "직원 한 명 뽑으려면 월 200만 원... 퇴직금에 4대 보험까지 너무 부담스럽습니다.",
                icon: <Users className="w-6 h-6 text-red-400" />
              },
              {
                title: "성과 없는 대행",
                desc: "마케팅 대행사에 수백만 원을 줬는데, 매출은 제자리걸음입니다.",
                icon: <TrendingUp className="w-6 h-6 text-orange-400" />
              },
              {
                title: "막막한 AI 도입",
                desc: "AI가 대세라는데, 정작 내 사업에 어떻게 써야 할지 막막합니다.",
                icon: <HelpCircle className="w-6 h-6 text-amber-400" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Solution Section */}
          <div className="bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 border border-white/10 rounded-[40px] p-8 md:p-16 mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] -z-10"></div>
            
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                단순한 강의가 아닙니다. <br />
                <span className="text-indigo-400">기술 이전 컨설팅</span>입니다.
              </h2>
              <p className="text-zinc-300 text-lg mb-12 leading-relaxed">
                대표님의 사업을 분석하여 당장 실무에 투입 가능한 <span className="text-white font-bold">'맞춤형 AI 에이전트'</span>를 제작해 드립니다. 
                스스로 AI 시스템을 구축하고 무한대로 복제할 수 있는 능력을 갖게 됩니다.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">인건비 혁명</h4>
                    <p className="text-zinc-400 text-sm">월 250만 원 신입 사원 10명의 몫을 AI 1명이 처리</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Timer className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">업무 시간 90% 단축</h4>
                    <p className="text-zinc-400 text-sm">3시간 걸리던 블로그 글쓰기를 단 10분으로</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience Section */}
          <div className="mb-24">
            <h3 className="text-2xl md:text-4xl font-black text-white text-center mb-12">
              누구를 위한 컨설팅인가요?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "기업 및 법인",
                  desc: "비효율적인 업무 프로세스를 AI로 자동화하고, 인건비 절감과 생산성 극대화를 동시에 달성하고 싶은 기업",
                  tag: "CORPORATE"
                },
                {
                  title: "1인 사업가",
                  desc: "혼자서 마케팅부터 CS까지 모든 것을 감당하기 벅찬 대표님. AI 직원을 통해 10명의 몫을 해내고 싶은 분",
                  tag: "SOLOPRENEUR"
                },
                {
                  title: "부업러 & 예비 창업자",
                  desc: "적은 시간 투자로 높은 수익을 내는 자동화 수익 모델을 구축하고, 본업 이상의 가치를 만들고 싶은 분",
                  tag: "SIDE-HUSTLER"
                }
              ].map((item, i) => (
                <div key={i} className="group bg-zinc-900/30 border border-zinc-800/50 p-8 rounded-[32px] hover:border-indigo-500/30 transition-all duration-300">
                  <div className="inline-block px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-[10px] font-bold tracking-wider mb-4">
                    {item.tag}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-zinc-900/50 border border-zinc-800 p-10 rounded-[32px] backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Clock className="w-6 h-6 text-indigo-400" />
                컨설팅 프로그램 구성
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">1:1 맞춤 집중 컨설팅</h4>
                    <p className="text-zinc-400">총 3시간 X 2회 (심층 코칭)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">유연한 장소 선택</h4>
                    <p className="text-zinc-400">온라인 코칭 / 오프라인 (부산 시청 넥스트인 사무실) 중 택 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">컨설팅 비용</h4>
                    <p className="text-zinc-400">220만원 (VAT 별도)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-10 rounded-[32px] backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Zap className="w-6 h-6 text-amber-400" />
                컨설팅으로 얻을 수 있는 것
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">맞춤형 AI 제작</h4>
                    <p className="text-zinc-400">개인/기업 비즈니스에 최적화된 AI 시스템 구축</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">사용 매뉴얼 제공</h4>
                    <p className="text-zinc-400">누구나 쉽게 사용할 수 있는 전용 매뉴얼 제작</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">유지보수 지원</h4>
                    <p className="text-zinc-400">컨설팅 종료 후 1개월간 추가 유지보수 지원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scarcity Section */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-bold mb-6">
              <Clock className="w-3.5 h-3.5" />
              <span>LIMITED AVAILABILITY</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">매월 단 3명, 소수 정예</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              퀄리티 유지를 위해 매월 단 3분의 대표님만 모시고 진행합니다. <br />
              고민하는 순간, 이번 달 스케줄은 마감됩니다.
            </p>
            
            <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/10 mb-12">
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                "2026년, AI를 지배하는 대표님이 되시겠습니까? <br />
                아니면 AI를 쓰는 경쟁사에게 밀려나시겠습니까?"
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[32px] shadow-2xl">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-white mb-4">컨설팅 신청 문의</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  양식을 복사하여 메일로 보내주시면 <br />
                  정혁신이 직접 확인 후 연락드립니다.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Mail className="w-5 h-5 text-indigo-400" />
                    <span>info@nextin.ai.kr</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <ShieldCheck className="w-5 h-5 text-indigo-400" />
                    <span>기술 이전 및 유지보수 지원</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="bg-black/50 p-8 rounded-2xl border border-zinc-800 text-zinc-300 font-mono text-sm whitespace-pre-wrap leading-loose">
                  성함 : {"\n"}
                  회사명 : (개인은 생략 가능) {"\n"}
                  연락처 : {"\n"}
                  희망 일정 : (여러 일정을 남겨주세요) {"\n"}
                  희망 장소 : (온라인 or 오프라인) {"\n"}
                  컨설팅 희망 내용 : (최대한 상세히)
                </div>
                <a 
                  href="mailto:info@nextin.ai.kr"
                  className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-5 rounded-2xl font-black text-lg hover:from-indigo-500 hover:to-purple-500 transition-all shadow-xl shadow-indigo-500/20"
                >
                  <Mail className="w-6 h-6" />
                  지금 바로 컨설팅 신청하기
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : currentView === 'AGENCY' ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh]">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI MARKETING AGENCY</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              혼자서 마케팅 어려우신가요? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                그렇다면 일반 마케팅이 아닌 <br />
                AI마케팅 대행을 시작하세요.
              </span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              혁신 AI 대행 서비스는 단순한 광고 집행이 아닙니다. <br />
              <span className="text-zinc-200 font-bold">비즈니스의 성장을 가속화하는 AI 전략</span>을 당신의 비즈니스에 구축합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl backdrop-blur-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <Layout className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">콘텐츠 제작</h3>
              <p className="text-zinc-500 text-sm">블로그, SNS, 상세페이지 등 AI 최적화 콘텐츠</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl backdrop-blur-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">SEO 최적화</h3>
              <p className="text-zinc-500 text-sm">검색 엔진 상위 노출을 위한 AI 전략 수립</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl backdrop-blur-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI 최적화</h3>
              <p className="text-zinc-500 text-sm">AI가 여러분의 서비스와 상품을 답변하도록 최적화</p>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 p-10 rounded-3xl mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">AI 최적화 마케팅</h3>
            <p className="text-zinc-300 text-center text-lg leading-relaxed mb-10">
              "이제 검색 엔진보다 AI를 통해 질문하여 답변하는 시대입니다." <br />
              <span className="text-emerald-400 font-bold">AI를 통해 여러분의 서비스와 상품이 답변할 수 있도록</span> <br />
              AI 최적화 마케팅을 진행합니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <span className="text-emerald-400 font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">합리적인 비용 체계</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    AI를 활용하여 인건비를 획기적으로 낮췄습니다. 기존 대행사 대비 <span className="text-emerald-400 font-bold">절반 이하의 비용</span>으로 더 높은 퀄리티를 보장합니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <span className="text-emerald-400 font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">데이터 기반 성과 측정</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    단순히 "열심히" 하지 않습니다. AI 분석 도구를 통해 철저하게 데이터로 증명되는 성과만을 추구합니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <span className="text-emerald-400 font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">지속적인 시스템 업데이트</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    급변하는 AI 트렌드에 맞춰 대행 시스템을 매주 업데이트합니다. 가장 앞선 기술을 가장 먼저 적용해드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 p-10 rounded-3xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">대행 신청 문의</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              아래 양식을 복사하여 <span className="text-emerald-400 font-bold">info@nextin.ai.kr</span> 메일로 보내주세요. <br />
              정혁신이 직접 확인 후 개별 연락드립니다.
            </p>
            <div className="bg-black/50 p-6 rounded-2xl border border-zinc-800 text-left font-mono text-sm text-zinc-300 mb-8 whitespace-pre-wrap">
              성함 : {"\n"}
              회사명 : (회사로 대행 신청하시는 경우, 개인은 생략) {"\n"}
              연락처 : {"\n"}
              희망하시는 대행 분야 : (최대한 상세히 남겨주실수록 좋습니다.) {"\n"}
              원하시는 장소 : (온라인 or 오프라인 (부산 시청)) {"\n"}
              궁금하신 점 및 요청사항 : (최대한 상세히 남겨주실수록 좋습니다.)
            </div>
            <a 
              href="mailto:info@nextin.ai.kr"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:from-emerald-500 hover:to-teal-500 transition-all shadow-lg shadow-emerald-500/20"
            >
              <Mail className="w-5 h-5" />
              메일 보내기
            </a>
          </div>
        </div>
      ) : currentView === 'FAQ' ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh]">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              자주 묻는 질문 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">FAQ</span>
            </h1>
            <p className="text-zinc-400 text-lg">혁신 AI에 대해 궁금하신 점을 확인해보세요.</p>
          </div>
          
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <div 
                key={index}
                className={`border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'bg-zinc-900/80 border-zinc-700 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700'}`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <span className="text-blue-400 font-bold text-sm">Q</span>
                    </div>
                    <span className="text-lg font-bold text-white pr-4">{faq.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-blue-400' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-zinc-300 leading-relaxed border-t border-zinc-800/50 mt-2 flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1">
                          <span className="text-emerald-400 font-bold text-sm">A</span>
                        </div>
                        <div className="pt-1.5">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {currentView === 'MEMBERSHIP' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh]">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-bold mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>MEMBERSHIP SUBSCRIPTION</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              하루 커피 한 잔보다 저렴하게 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                AI 수익화 마케팅 시스템을
              </span>
              <br />
              도입해보세요!
            </h1>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
              매일 마시는 커피 한 잔 값으로 당신의 퇴근 시간을 앞당기시겠습니까? <br /> 아니면 매일 밤샘 작업을 반복하시겠습니까?
              <br />
              혁신 AI가 당신의 노동력을 수익으로 바꿔드립니다.
              <br /><br />
              <span className="text-zinc-200 font-bold">하루 커피 한 잔보다 저렴하게</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-bold text-xl">AI 수익화 마케팅 시스템을 도입해보세요!</span>
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-24 overflow-x-auto">
            <div className="min-w-[800px]">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Layout className="w-6 h-6 text-indigo-400" />
                멤버십 등급 및 혜택 최종 비교
              </h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-4 px-6 text-left text-zinc-500 font-medium">구분</th>
                    <th className="py-4 px-6 text-center text-zinc-300 font-bold bg-zinc-900/30 rounded-t-xl">Free (체험)</th>
                    <th className="py-4 px-6 text-center text-indigo-400 font-bold bg-indigo-500/5 rounded-t-xl">Standard (크리에이터)</th>
                    <th className="py-4 px-6 text-center text-amber-400 font-bold bg-amber-500/5 rounded-t-xl">Premium (마스터) 👑</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-zinc-900">
                    <td className="py-4 px-6 text-zinc-400 font-medium">핵심 가치</td>
                    <td className="py-4 px-6 text-center text-zinc-500">AI 기능 단순 맛보기</td>
                    <td className="py-4 px-6 text-center text-zinc-300">콘텐츠 생산성 극대화</td>
                    <td className="py-4 px-6 text-center text-zinc-300">수익 자동화 시스템 구축</td>
                  </tr>
                  <tr className="border-b border-zinc-900">
                    <td className="py-4 px-6 text-zinc-400 font-medium">이용 가능 도구</td>
                    <td className="py-4 px-6 text-center text-zinc-500">혁신 AI Lite (제한적)</td>
                    <td className="py-4 px-6 text-center text-zinc-300">블로그, 상세페이지, 디자인 등</td>
                    <td className="py-4 px-6 text-center text-zinc-300">플랫폼 내 모든 기능 (전부)</td>
                  </tr>
                  <tr className="border-b border-zinc-900">
                    <td className="py-4 px-6 text-zinc-400 font-medium">수익화 발굴 AI</td>
                    <td className="py-4 px-6 text-center text-zinc-600">❌ 불가</td>
                    <td className="py-4 px-6 text-center text-zinc-600">❌ 불가</td>
                    <td className="py-4 px-6 text-center text-zinc-300 font-bold text-amber-400">[독점] 개인 맞춤형 BM 설계</td>
                  </tr>
                  <tr className="border-b border-zinc-900">
                    <td className="py-4 px-6 text-zinc-400 font-medium">2026 트렌드 AI</td>
                    <td className="py-4 px-6 text-center text-zinc-600">❌ 불가</td>
                    <td className="py-4 px-6 text-center text-zinc-600">❌ 불가</td>
                    <td className="py-4 px-6 text-center text-zinc-300 font-bold text-amber-400">[실시간] 상위 1% 시장 분석</td>
                  </tr>
                  <tr className="border-b border-zinc-900">
                    <td className="py-4 px-6 text-zinc-400 font-medium">90일 수익 캘린더</td>
                    <td className="py-4 px-6 text-center text-zinc-600">❌ 불가</td>
                    <td className="py-4 px-6 text-center text-zinc-600">❌ 불가</td>
                    <td className="py-4 px-6 text-center text-zinc-300 font-bold text-amber-400">[완성] 3개월 실행 로드맵</td>
                  </tr>
                  <tr className="border-b border-zinc-900">
                    <td className="py-4 px-6 text-zinc-400 font-medium">홈페이지/직무역량</td>
                    <td className="py-4 px-6 text-center text-zinc-600">❌ 불가</td>
                    <td className="py-4 px-6 text-center text-zinc-600">❌ 불가</td>
                    <td className="py-4 px-6 text-center text-zinc-300 font-bold text-amber-400">[ALL] 홈페이지 개발/역량 강화</td>
                  </tr>
                  <tr className="border-b border-zinc-900">
                    <td className="py-4 px-6 text-zinc-400 font-medium">VVIP 커뮤니티</td>
                    <td className="py-4 px-6 text-center text-zinc-600">권한 없음</td>
                    <td className="py-4 px-6 text-center text-zinc-300">일반 정보 공유방</td>
                    <td className="py-4 px-6 text-center text-zinc-300 font-bold text-amber-400">AI 수익화 노하우방</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-6 text-zinc-400 font-medium">하루 투자 비용</td>
                    <td className="py-4 px-6 text-center text-zinc-500">0원</td>
                    <td className="py-4 px-6 text-center text-indigo-400 font-bold">약 1,280원 (연간 기준)</td>
                    <td className="py-4 px-6 text-center text-amber-400 font-bold">약 2,270원 (연간 기준)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-400" />
                  멤버십 결제 플랜 (월/연 결제)
                </h2>
                <p className="text-zinc-500">사용자 API 비용을 고려하여, 실제 구독료는 최대한 낮게 체감되도록 설계한 가격표입니다.</p>
              </div>
              
              {/* Early Bird Badge */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gradient-to-r from-red-600 to-orange-600 p-[1px] rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)]"
              >
                <div className="bg-black rounded-[15px] px-4 py-3 flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 text-red-500">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm leading-tight">혁신 AI 사이트 신규 오픈 기념</p>
                    <p className="text-red-500 font-bold text-xs">선착순 최대 30% 얼리버드 할인가 <span className="text-zinc-500 font-medium ml-1">(선착순 30명)</span></p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Standard */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-indigo-500/50 transition-all group">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">1. Standard 멤버십</h3>
                  <p className="text-indigo-400 text-sm font-medium">"콘텐츠 제작 시간이 부족한 블로거, 마케터에게 추천!"</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-2xl bg-black/40 border border-zinc-800">
                    <div>
                      <p className="text-zinc-500 text-xs mb-1">월간 구독</p>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-xl">49,000원</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-400 text-xs">일 약 1,630원</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
                    <div>
                      <p className="text-indigo-300 text-xs mb-1 font-bold">연간 구독 (추천)</p>
                      <div className="flex items-center gap-2">
                        <span className="text-indigo-900 line-through text-sm">588,000원</span>
                        <span className="text-white font-black text-2xl">470,400원</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-1 rounded-md bg-red-500 text-white text-[10px] font-black mb-1 animate-pulse">20% OFF 🔥</span>
                      <p className="text-indigo-200 text-sm font-bold">일 약 1,280원</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium */}
              <div className="bg-gradient-to-b from-amber-900/20 to-zinc-900/50 border-2 border-amber-500/50 rounded-3xl p-8 hover:border-amber-400 transition-all group relative shadow-[0_0_30px_rgba(245,158,11,0.15)] transform hover:-translate-y-1">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black text-sm px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                  가장 추천하는 플랜
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Crown className="w-5 h-5 text-amber-400" />
                    2. Premium 멤버십
                  </h3>
                  <p className="text-amber-400 text-sm font-medium">"AI로 비즈니스 시스템을 구축하고 싶은 1인 기업가 추천!"</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-2xl bg-black/40 border border-zinc-800">
                    <div>
                      <p className="text-zinc-500 text-xs mb-1">월간 구독</p>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-xl">99,000원</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-400 text-xs">일 약 3,300원</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-6 rounded-2xl bg-amber-500/20 border border-amber-500/50 relative overflow-hidden shadow-[inset_0_0_20px_rgba(245,158,11,0.2)]">
                    <div className="absolute top-0 right-0 bg-amber-500 text-black text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">Best Value</div>
                    <div>
                      <p className="text-amber-300 text-xs mb-1 font-bold">연간 구독 (추천)</p>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-900/70 line-through text-sm">1,188,000원</span>
                        <span className="text-white font-black text-2xl">831,600원</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-1 rounded-md bg-amber-500 text-black text-[10px] font-black mb-1 animate-pulse">30% OFF 👑</span>
                      <p className="text-amber-200 text-sm font-bold">일 약 2,270원</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">구독 신청 안내</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              구독 신청을 희망하시면 아래 메일에 양식을 작성하여 보내주시면, <br className="hidden md:block" />
              개발자 정혁신이 직접 연락드려서 구독 안내 도와드리겠습니다.
            </p>
            
            <div className="bg-black/50 border border-zinc-800 rounded-2xl p-6 text-left mb-8 max-w-lg mx-auto">
              <p className="text-zinc-500 text-xs mb-4 uppercase tracking-widest font-bold">신청 양식</p>
              <div className="space-y-2 text-zinc-300 font-mono text-sm">
                <p>수신: <span className="text-white font-bold">info@nextin.ai.kr</span></p>
                <div className="h-px bg-zinc-800 my-4"></div>
                <p>성함 :</p>
                <p>연락처 :</p>
                <p>희망하시는 구독 플랜 및 월결제, 연결제 여부 :</p>
                <p>문의사항 (선택) :</p>
              </div>
            </div>

            <a 
              href="mailto:info@nextin.ai.kr?subject=혁신 AI 멤버십 구독 신청&body=성함 : %0D%0A연락처 : %0D%0A희망하시는 구독 플랜 및 월결제, 연결제 여부 : %0D%0A문의사항 (선택) :"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              이메일로 신청하기
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
      
      {/* Auth Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => {
                setShowAuthModal(false);
                setShowPassword(false);
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">
                  코드 인증
                </h3>
                <button onClick={() => {
                  setShowAuthModal(false);
                  setShowPassword(false);
                }} className="text-zinc-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-zinc-400 text-sm mb-2">
                인증 코드를 입력해주세요.
              </p>
              <p className="text-emerald-400 text-xs font-medium mb-2 flex items-center gap-1">
                <Lightbulb className="w-3 h-3" />
                멤버십 전환시 로그아웃(인증 해제) 후 다시 희망하는 코드로 입력하면 됩니다.
              </p>
              <p className="text-amber-400 text-xs font-medium mb-6 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                모든 코드는 영어 소문자로 입력해주세요.
              </p>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="인증 코드 입력"
                    className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 pr-16 text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all font-mono"
                    value={authCode}
                    onChange={(e) => {
                      setAuthCode(e.target.value);
                      setAuthError('');
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                    autoFocus
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors p-1"
                    title={showPassword ? "숨기기" : "보기"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
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

      {/* Terms Modal */}
      <AnimatePresence>
        {showTermsModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowTermsModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-2xl shadow-2xl max-h-[80vh] flex flex-col"
            >
              <div className="flex justify-between items-center mb-4 shrink-0">
                <h3 className="text-xl font-bold text-white">이용약관</h3>
                <button onClick={() => setShowTermsModal(false)} className="text-zinc-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-y-auto pr-2 text-zinc-300 text-sm leading-relaxed space-y-4">
                <p className="font-bold text-white">제 1 조 (목적)</p>
                <p>본 약관은 혁신AI(이하 "사이트")이 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어 사이트와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                
                <p className="font-bold text-white mt-6">제 2 조 (용어의 정의)</p>
                <p>1. "이용자"란 사이트에 접속하여 본 약관에 따라 사이트가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>
                <p>2. "콘텐츠"란 사이트에서 제공하는 정보, 텍스트, 이미지, 프롬프트, 프로그램 등을 말합니다.</p>

                <p className="font-bold text-white mt-6">제 3 조 (약관의 효력 및 변경)</p>
                <p>본 약관은 사이트 화면에 게시함으로써 효력이 발생하며, 사이트는 관련 법령을 위배하지 않는 범위 내에서 약관을 개정할 수 있습니다.</p>

                <p className="font-bold text-white mt-6">제 4 조 (서비스의 제공 및 변경)</p>
                <p>사이트는 AI 관련 정보 제공, 프롬프트 공유, 도구 배포 등의 서비스를 제공하며, 운영상 필요한 경우 서비스의 내용을 변경할 수 있습니다.</p>

                <p className="font-bold text-white mt-6">제 5 조 (저작권의 귀속 및 이용제한)</p>
                <p>1. 사이트가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 사이트에 귀속됩니다.</p>
                <p>2. 이용자는 서비스를 이용함으로써 얻은 정보를 사이트의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</p>

                <p className="font-bold text-white mt-6">제 6 조 (면책조항)</p>
                <p>사이트는 제공하는 정보 및 콘텐츠의 정확성이나 신뢰성에 대해 보증하지 않으며, 서비스 이용으로 인해 발생하는 결과에 대해 책임을 지지 않습니다. AI 모델의 답변이나 도구의 결과물은 사용자의 책임 하에 사용되어야 합니다.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Privacy Modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowPrivacyModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-2xl shadow-2xl max-h-[80vh] flex flex-col"
            >
              <div className="flex justify-between items-center mb-4 shrink-0">
                <h3 className="text-xl font-bold text-white">개인정보처리방침</h3>
                <button onClick={() => setShowPrivacyModal(false)} className="text-zinc-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-y-auto pr-2 text-zinc-300 text-sm leading-relaxed space-y-4">
                <p className="font-bold text-white">1. 개인정보의 수집 항목 및 방법</p>
                <p>혁신AI는 이용자의 개인정보를 일체 수집하지 않습니다. 본 사이트 이용 시 어떠한 형태의 개인정보(이름, 이메일, 연락처 등)도 요구하거나 저장하지 않습니다.</p>
                
                <p className="font-bold text-white mt-6">2. 개인정보 자동 수집 장치의 설치/운영</p>
                <p>본 사이트는 이용자의 정보를 수집하거나 저장하는 별도의 장치나 방법을 일체 운영하지 않습니다.</p>

                <p className="font-bold text-white mt-6">3. 사용자 문의 및 답변</p>
                <p>사용자 문의 및 답변은 사이트 내에서 이루어지지 않으며, 아래 이메일을 통해 문의하셔야 합니다. 정혁신의 AI강의 수강생분들은 정혁신에게 별도 문의 가능합니다. 사이트 내에는 문의를 위한 별도의 개인정보 수집 폼이 존재하지 않습니다.</p>

                <div className="mt-8 p-4 bg-black/50 rounded-lg border border-zinc-800">
                  <p className="mb-2"><span className="text-white font-medium">문의 메일 :</span> info@nextin.ai.kr</p>
                  <p><span className="text-white font-medium">시행날짜 :</span> 2026년 3월 1일</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex items-center justify-center w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-lg blur-[6px] opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative w-full h-full bg-black rounded-lg border border-white/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500 group-hover:from-indigo-400 group-hover:to-pink-400 transition-all duration-500">
              혁신 AI
            </span>
          </div>
          <div className="text-zinc-500 text-sm">
            © 2026 혁신 AI by 정혁신. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm text-zinc-400">
            <button onClick={() => setShowTermsModal(true)} className="hover:text-white transition-colors">이용약관</button>
            <button onClick={() => setShowPrivacyModal(true)} className="hover:text-white transition-colors">개인정보처리방침</button>
            <button onClick={() => setShowSupportModal(true)} className="hover:text-white transition-colors">오류 및 유지보수 문의</button>
          </div>
        </div>
      </footer>
      {/* Support Modal */}
      <AnimatePresence>
        {showSupportModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowSupportModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-md shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-6 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30">
                    <HelpCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">오류 및 유지보수 문의</h3>
                </div>
                <button onClick={() => setShowSupportModal(false)} className="text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-zinc-300 text-sm leading-relaxed mb-6">
                <p className="mb-4">
                  혁신AI 또는 맞춤 AI 제작물에 대한 오류 및 유지보수 문의는 아래 이메일을 통해 문의주시길 바랍니다.
                </p>
                <p className="font-medium text-amber-400">
                  24시간 이내에 확인 후 피드백 드립니다.
                </p>
              </div>
              <a 
                href="mailto:info@nextin.ai.kr"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@nextin.ai.kr
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
