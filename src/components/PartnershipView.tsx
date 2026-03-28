import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Coins, Gift, TrendingUp, Users, CheckCircle2, ChevronRight, Mail, Copy } from 'lucide-react';

export default function PartnershipView() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-20">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-[#0a0a0a] to-[#0a0a0a]"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium mb-8">
            <TrendingUp className="w-4 h-4" />
            <span>혁신 AI 파트너십 프로그램</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            혁신 AI와 함께 성장하고, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              압도적인 수익을 쉐어하세요.
            </span>
          </h1>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            당신은 <strong className="text-white">결제액의 20%</strong>를 평생 가져가고, 추천을 해주신 대상자는 <strong className="text-white">10% 즉시 할인</strong> 혜택을 받습니다. 진정한 Win-Win 파트너십의 시작.
          </p>
        </motion.div>
      </div>

      {/* Benefit Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Partner Benefit */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">파트너 (나)</h3>
            </div>
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
              20% 지급
            </div>
            <p className="text-zinc-400 mb-8">판매 금액의 20%를 수익으로 지급받습니다.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>매달 재결제 시마다 수익 발생</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>안정적인 패시브 인컴 구축</span>
              </li>
            </ul>
          </motion.div>

          {/* Buyer Benefit */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-pink-500/20 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">구매자 (지인)</h3>
            </div>
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 mb-4">
              10% 할인
            </div>
            <p className="text-zinc-400 mb-8">결제 금액의 10%를 즉시 할인받습니다.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-pink-400" />
                <span>추천인 코드 입력 시 자동 적용</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-pink-400" />
                <span>최저가로 혁신 AI 이용 가능</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Earnings Calculator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">수익 시뮬레이션</h2>
          <p className="text-xl text-purple-400 font-medium">"단 10명만 추천해도 매달 19만 8천 원의 수익!"</p>
        </div>
        <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700/50">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <div className="text-zinc-400 mb-1">월 9만 9천원 플랜</div>
                <div className="text-xl font-bold">10명 유지 시</div>
              </div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                월 198,000원 수익
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700/50">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <div className="text-zinc-400 mb-1">연 83만원 플랜</div>
                <div className="text-xl font-bold">5명 유치 시</div>
              </div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                830,000원 즉시 수익
              </div>
            </div>
            <p className="text-center text-zinc-500 italic mt-6">
              * 지속적인 재결제 시 수익은 눈덩이처럼 불어납니다.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">활동 방법</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: '코드 발급',
              desc: '파트너 신청 후 본인만의 고유 코드 확인'
            },
            {
              step: '02',
              title: '공유하기',
              desc: '블로그, 유튜브, 오픈채팅방 등에 혁신 AI 소개'
            },
            {
              step: '03',
              title: '수익 정산',
              desc: '대시보드에서 실시간 수익 확인 후 매달 정산 신청'
            }
          ].map((item, i) => (
            <div key={i} className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 text-center">
              <div className="text-5xl font-black text-zinc-800 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-400">{item.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-zinc-700">
                  <ChevronRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* How to Apply */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">신청 및 혜택 받는 방법</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Partner Code Request */}
          <div className="bg-zinc-900/50 border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Mail className="w-5 h-5" />
              </div>
              파트너 코드 발급하기
            </h3>
            <p className="text-zinc-400 mb-6">
              <a href="mailto:info@nextin.ai.kr" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">info@nextin.ai.kr</a>로 아래 양식으로 메일을 남기시면, 실시간으로 파트너 코드를 발급하여 실시간 정산 대시보드와 함께 메일 답변드립니다.
            </p>
            <div className="bg-black/50 border border-zinc-800 rounded-xl p-6 relative group">
              <pre className="text-sm text-zinc-300 whitespace-pre-wrap font-mono leading-relaxed">
{`성함 : (ex. 실명)
연락처 : (ex. 010-1234-5678)
혁신 AI 사용 여부 : (결제한 멤버십을 작성)`}
              </pre>
              <button 
                onClick={() => navigator.clipboard.writeText('성함 : (ex. 실명)\\n연락처 : (ex. 010-1234-5678)\\n혁신 AI 사용 여부 : (결제한 멤버십을 작성)')}
                className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white hover:bg-zinc-700"
                title="양식 복사하기"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Buyer Discount Request */}
          <div className="bg-zinc-900/50 border border-pink-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                <Gift className="w-5 h-5" />
              </div>
              구매자 (지인) 파트너 할인 10% 혜택받는 법
            </h3>
            <p className="text-zinc-400 mb-6">
              <a href="mailto:info@nextin.ai.kr" className="text-pink-400 hover:text-pink-300 underline underline-offset-4">info@nextin.ai.kr</a>로 아래 양식으로 메일을 남기시면, 실시간으로 할인 결제계좌를 안내드립니다.
            </p>
            <div className="bg-black/50 border border-zinc-800 rounded-xl p-6 relative group">
              <pre className="text-sm text-zinc-300 whitespace-pre-wrap font-mono leading-relaxed">
{`성함 : (ex. 실명)
연락처 : (ex. 010-1234-5678)
신청 희망하는 멤버십 : (ex. 프리미엄 멤버십 1년)
파트너 할인 코드 : (파트너에게 받은 할인코드를 작성)`}
              </pre>
              <button 
                onClick={() => navigator.clipboard.writeText('성함 : (ex. 실명)\\n연락처 : (ex. 010-1234-5678)\\n신청 희망하는 멤버십 : (ex. 프리미엄 멤버십 1년)\\n파트너 할인 코드 : (파트너에게 받은 할인코드를 작성)')}
                className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white hover:bg-zinc-700"
                title="양식 복사하기"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Trust Builder */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">왜 '혁신 AI' 파트너여야 할까요?</h2>
        <div className="space-y-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-1">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">높은 전환율</h3>
              <p className="text-zinc-400">이미 검증된 자동화 툴로, 소개 시 구매 전환이 매우 빠릅니다.</p>
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-1">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">투명한 대시보드</h3>
              <p className="text-zinc-400">누가 언제 결제했는지 실시간으로 투명하게 대시보드를 통해 공개됩니다. (대시보드 링크 즉시공유)</p>
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-1">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">정기 정산 보장</h3>
              <p className="text-zinc-400">정해진 날짜에 정확하게 수익금을 지급해 드립니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
        <div className="space-y-4">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="text-purple-400">Q.</span> 정산은 언제 되나요?
            </h3>
            <p className="text-zinc-400 pl-6">
              매월 1일~말일 수익을 익월 5일에 정산내역 공유 후 익월 10일에 지급해 드립니다.
            </p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="text-purple-400">Q.</span> 누구나 참여 가능한가요?
            </h3>
            <p className="text-zinc-400 pl-6">
              혁신AI를 1회라도 결제하신 분이라면 누구나 참여 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
