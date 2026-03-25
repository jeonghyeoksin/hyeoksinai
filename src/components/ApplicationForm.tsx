import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ApplicationFormProps {
  type: 'CONSULTING' | 'AGENCY';
  title: string;
  description: string;
  buttonColor: string;
  buttonHoverColor: string;
  shadowColor: string;
}

export default function ApplicationForm({
  type,
  title,
  description,
  buttonColor,
  buttonHoverColor,
  shadowColor,
}: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    scheduleOrField: '',
    location: '',
    details: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('applications')
        .insert([
          {
            type,
            name: formData.name,
            company: formData.company,
            contact: formData.contact,
            schedule_or_field: formData.scheduleOrField,
            location: formData.location,
            details: formData.details,
          },
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        company: '',
        contact: '',
        scheduleOrField: '',
        location: '',
        details: '',
      });
    } catch (error: any) {
      console.error('Error submitting application:', error);
      setStatus('error');
      setErrorMessage(error.message || '신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-black/50 p-8 rounded-2xl border border-zinc-800 text-center flex flex-col items-center justify-center min-h-[400px]">
        <CheckCircle2 className={`w-16 h-16 mb-6 ${type === 'CONSULTING' ? 'text-indigo-400' : 'text-emerald-400'}`} />
        <h3 className="text-2xl font-bold text-white mb-2">신청이 완료되었습니다!</h3>
        <p className="text-zinc-400 leading-relaxed mb-8">
          빠른 시일 내에 확인 후 연락드리겠습니다.<br />
          감사합니다.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className={`px-6 py-3 rounded-xl font-bold text-white transition-all ${buttonColor} ${buttonHoverColor}`}
        >
          새로운 신청하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-black/50 p-8 rounded-2xl border border-zinc-800">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm mb-8">{description}</p>

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">성함 *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="홍길동"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-1">회사명 (개인은 생략 가능)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="넥스트인"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-zinc-300 mb-1">연락처 *</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="010-0000-0000"
          />
        </div>

        <div>
          <label htmlFor="scheduleOrField" className="block text-sm font-medium text-zinc-300 mb-1">
            {type === 'CONSULTING' ? '희망 일정 (여러 일정을 남겨주세요) *' : '희망하시는 대행 분야 *'}
          </label>
          <input
            type="text"
            id="scheduleOrField"
            name="scheduleOrField"
            required
            value={formData.scheduleOrField}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder={type === 'CONSULTING' ? "예: 10월 15일 오후 2시, 10월 16일 오전 10시" : "예: 블로그 마케팅, SEO 최적화"}
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-zinc-300 mb-1">희망 장소 *</label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="온라인 or 오프라인 (부산 시청)"
          />
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-medium text-zinc-300 mb-1">
            {type === 'CONSULTING' ? '컨설팅 희망 내용 *' : '궁금하신 점 및 요청사항 *'}
          </label>
          <textarea
            id="details"
            name="details"
            required
            value={formData.details}
            onChange={handleChange}
            rows={4}
            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
            placeholder="최대한 상세히 남겨주실수록 좋습니다."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`mt-8 w-full inline-flex items-center justify-center gap-3 text-white px-8 py-5 rounded-2xl font-black text-lg transition-all shadow-xl ${buttonColor} ${buttonHoverColor} ${shadowColor} disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-6 h-6 animate-spin" />
            신청 중...
          </>
        ) : (
          <>
            <Mail className="w-6 h-6" />
            지금 바로 신청하기
          </>
        )}
      </button>
      
      <p className="text-zinc-500 text-xs text-center mt-4">
        * 제출된 정보는 상담 목적으로만 사용되며, 안전하게 관리됩니다.<br/>
        * Supabase에 'applications' 테이블이 생성되어 있어야 정상적으로 접수됩니다.
      </p>
    </form>
  );
}
