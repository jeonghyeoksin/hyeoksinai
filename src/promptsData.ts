import { ReactNode } from 'react';

type AccessLevel = 'FREE' | 'PREMIUM';
type Category = 'ALL' | 'MARKETING' | 'DESIGN' | 'VIDEO' | 'PLANNING' | 'PROMPT';
type PromptSubCategory = '비즈니스' | '마케팅' | '디자인' | '콘텐츠' | '개발' | '교육' | '일상';

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  customVisual?: ReactNode;
  link?: string;
  access: AccessLevel;
  category: Category;
  tags: string[];
  promptText?: string;
  promptSubCategory?: PromptSubCategory;
}

export const additionalPrompts: Program[] = [
  // --- 콘텐츠 제작 ---
  {
    id: 'prompt-youtube-script',
    title: '유튜브 스크립트 초안',
    description: '시청자를 사로잡는 유튜브 영상 스크립트 초안을 작성합니다.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '콘텐츠',
    tags: ['유튜브', '스크립트', '기획'],
    promptText: `당신은 100만 구독자를 보유한 유튜브 콘텐츠 기획자입니다. [주제]에 대한 5분 분량의 유튜브 스크립트를 작성해 주세요.

- 도입부(15초): 시청자의 이탈을 막는 강력한 훅(Hook)과 공감대 형성
- 본론(4분): 핵심 정보 3가지를 구체적인 예시와 함께 쉽고 재미있게 설명
- 결론(45초): 내용 요약 및 명확한 콜투액션(구독, 좋아요, 댓글 유도)
- 타겟 시청자: [타겟 시청자 연령/관심사]
- 톤앤매너: [원하는 톤앤매너, 예: 친근하고 에너지 넘치는]`
  },
  {
    id: 'prompt-article-title',
    title: '기사 제목 아이디어',
    description: '클릭률을 높이는 매력적인 기사/블로그 제목을 생성합니다.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '콘텐츠',
    tags: ['카피라이팅', '블로그', '제목'],
    promptText: `당신은 클릭을 유발하는 카피라이팅 전문가입니다. '[주제]'에 대한 기사/블로그 포스팅 제목 10가지를 제안해 주세요.

- 호기심 자극형 3개 (예: ~하는 놀라운 이유)
- 리스트형 3개 (예: ~하기 위한 5가지 필수 팁)
- 질문형 2개 (예: 당신은 아직도 ~하고 계신가요?)
- 대조/비교형 2개 (예: ~하는 사람 vs ~하지 않는 사람의 차이)

각 제목 아래에 해당 제목이 효과적인 이유를 1줄로 설명해 주세요.`
  },
  {
    id: 'prompt-story-idea',
    title: '스토리 아이디어 생성',
    description: '키워드를 바탕으로 흥미로운 단편 소설 시놉시스를 기획합니다.',
    image: 'https://images.unsplash.com/photo-1474932430478-367d16b99031?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '콘텐츠',
    tags: ['소설', '스토리텔링', '시놉시스'],
    promptText: `당신은 베스트셀러 소설가입니다. 다음 세 가지 키워드를 중심으로 흥미로운 단편 소설 시놉시스를 작성해 주세요.

키워드: [키워드1], [키워드2], [키워드3]
- 장르: [원하는 장르, 예: 미스터리 스릴러]
- 포함할 내용:
  1. 매력적이고 입체적인 주인공 설정 (숨겨진 동기 포함)
  2. 이야기의 긴장감을 높이는 핵심 갈등 (내적/외적 갈등)
  3. 독자의 예상을 뒤엎는 반전 결말의 실마리
  4. 이야기의 주요 배경과 분위기 묘사`
  },
  {
    id: 'prompt-newsletter-content',
    title: '뉴스레터 콘텐츠 아이디어',
    description: '구독자의 참여를 유도하는 뉴스레터 주제와 구성을 제안합니다.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '마케팅',
    tags: ['뉴스레터', '이메일마케팅', '아이디어'],
    promptText: `당신은 오픈율 50%를 자랑하는 뉴스레터 에디터입니다. [타겟 구독자]를 위한 주간 뉴스레터 콘텐츠 아이디어 3가지를 기획해 주세요.

각 아이디어는 다음 요소를 포함해야 합니다:
1. 시선을 끄는 이메일 제목 (A/B 테스트용 2가지 버전)
2. 메인 토픽 및 핵심 메시지
3. 독자의 참여를 유도하는 섹션 (예: 설문조사, 퀴즈, Q&A)
4. 다음 호를 기대하게 만드는 예고 멘트`
  },
  {
    id: 'prompt-interview-questions',
    title: '인터뷰 질문 목록 작성',
    description: '인터뷰이의 깊이 있는 답변을 이끌어내는 질문 리스트를 만듭니다.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '비즈니스',
    tags: ['인터뷰', '질문', '리서치'],
    promptText: `당신은 심층 인터뷰 전문 기자입니다. [인터뷰 대상자 직업/배경]인 [이름]님을 인터뷰하기 위한 질문 리스트를 작성해 주세요.

- 아이스브레이킹 질문 2개 (가볍고 편안한 분위기 조성)
- 전문성/경험 관련 심층 질문 4개 (구체적인 사례를 이끌어내는 질문)
- 가치관/철학 관련 질문 2개 (인터뷰이의 내면을 보여주는 질문)
- 마무리 질문 2개 (향후 계획 및 독자에게 전하는 메시지)

단순한 '네/아니오' 답변이 아닌, 스토리텔링을 유도하는 개방형 질문으로 구성해 주세요.`
  },
  
  // --- 디자인/UX ---
  {
    id: 'prompt-image-gen-idea',
    title: '이미지 생성 AI 프롬프트',
    description: 'Midjourney 등 AI 이미지 생성기를 위한 상세한 프롬프트를 작성합니다.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '디자인',
    tags: ['AI이미지', '미드저니', '프롬프트'],
    promptText: `당신은 Midjourney 프롬프트 엔지니어입니다. '[원하는 이미지 주제]'를 표현하는 고품질 이미지를 생성하기 위한 영문 프롬프트 3가지를 작성해 주세요.

각 프롬프트는 다음 요소를 포함해야 합니다:
1. 메인 피사체 및 행동 묘사
2. 배경 및 환경 설정
3. 조명 및 색감 (예: cinematic lighting, neon colors)
4. 카메라 앵글 및 렌즈 (예: wide angle, 35mm lens)
5. 아트 스타일 및 렌더링 방식 (예: cyberpunk, unreal engine 5, 8k resolution)

결과는 복사해서 바로 사용할 수 있는 영문 프롬프트 형태로 제공해 주세요.`
  },
  {
    id: 'prompt-uiux-improvement',
    title: '모바일 앱 UI/UX 개선 제안',
    description: '특정 앱 화면의 사용성을 높이기 위한 UI/UX 개선 아이디어를 도출합니다.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '디자인',
    tags: ['UI/UX', '앱디자인', '사용성'],
    promptText: `당신은 10년 차 시니어 UX 디자이너입니다. [앱 종류, 예: 음식 배달 앱]의 [특정 화면, 예: 결제 화면] UI/UX를 개선하기 위한 아이디어를 5가지 제안해 주세요.

- 현재 사용자가 겪을 수 있는 페인포인트(Pain Point) 분석
- 각 페인포인트를 해결하기 위한 구체적인 UI 변경 사항
- 해당 개선이 비즈니스 지표(예: 전환율, 체류 시간)에 미칠 긍정적인 영향
- 접근성(Accessibility) 측면에서의 고려사항 1가지 포함`
  },
  {
    id: 'prompt-color-palette',
    title: '분위기에 맞는 컬러 팔레트',
    description: '브랜드나 프로젝트의 무드에 어울리는 컬러 팔레트를 추천합니다.',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '디자인',
    tags: ['컬러', '브랜딩', '디자인시스템'],
    promptText: `당신은 브랜드 컬러 스페셜리스트입니다. '[원하는 분위기/컨셉, 예: 신뢰감을 주는 친환경 뷰티 브랜드]'에 어울리는 컬러 팔레트를 제안해 주세요.

- Primary Color (주조색): HEX 코드 및 선택 이유
- Secondary Color (보조색): HEX 코드 및 선택 이유
- Accent Color (강조색): HEX 코드 및 선택 이유
- Background/Text Colors (배경/텍스트): HEX 코드 2가지
- 이 컬러 조합이 타겟 고객에게 전달하는 심리적 효과 설명`
  },

  // --- 개발/IT ---
  {
    id: 'prompt-code-refactoring',
    title: '코드 리팩토링 제안',
    description: '기존 코드를 더 깔끔하고 효율적으로 리팩토링하는 방법을 제시합니다.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '개발',
    tags: ['리팩토링', '클린코드', '최적화'],
    promptText: `당신은 클린 코드를 지향하는 시니어 개발자입니다. 아래 제공된 [프로그래밍 언어] 코드를 분석하고 리팩토링해 주세요.

[여기에 코드 삽입]

다음 기준에 따라 리팩토링을 진행해 주세요:
1. 가독성 향상 (변수/함수명 개선, 중첩 조건문 제거)
2. 성능 최적화 (불필요한 연산 제거, 효율적인 자료구조 사용)
3. 유지보수성 (단일 책임 원칙 적용, 모듈화)
4. 리팩토링 전후의 차이점과 개선된 이유를 주석이나 설명으로 추가`
  },
  {
    id: 'prompt-db-schema',
    title: '데이터베이스 스키마 설계',
    description: '요구사항에 맞는 효율적인 데이터베이스 스키마를 설계합니다.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '개발',
    tags: ['데이터베이스', '스키마', '아키텍처'],
    promptText: `당신은 데이터베이스 아키텍트입니다. [서비스 종류, 예: 중고 거래 플랫폼]을 위한 [RDBMS/NoSQL] 데이터베이스 스키마를 설계해 주세요.

- 주요 엔티티(Entity) 4~5개 도출 및 각 엔티티의 핵심 속성 정의
- 엔티티 간의 관계(Relationship) 설정 (1:1, 1:N, N:M)
- 성능 최적화를 위해 인덱스(Index)를 걸어야 할 주요 컬럼 제안
- 결과를 시각적으로 이해하기 쉬운 Markdown 테이블 또는 텍스트 기반 ERD 형태로 출력`
  },
  {
    id: 'prompt-api-docs',
    title: 'API 문서 초안 생성',
    description: 'RESTful API 엔드포인트에 대한 명확한 문서 초안을 작성합니다.',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '개발',
    tags: ['API', '문서화', '백엔드'],
    promptText: `당신은 꼼꼼한 백엔드 개발자입니다. '[기능 설명, 예: 사용자 회원가입 및 로그인]' 기능을 위한 RESTful API 문서 초안을 작성해 주세요.

각 API 엔드포인트에 대해 다음 정보를 포함해야 합니다:
- Endpoint URL 및 HTTP Method (GET, POST, PUT, DELETE 등)
- Request Headers 및 Body 파라미터 (타입, 필수 여부, 설명)
- 성공 시 Response (상태 코드 200/201, JSON 예시)
- 실패 시 Response (상태 코드 400/401/500 등, 에러 메시지 예시)
- cURL 요청 예시 코드`
  },

  // --- 교육/학습 ---
  {
    id: 'prompt-explain-to-5yo',
    title: '복잡한 개념을 5살에게 설명하기',
    description: '어려운 전문 용어나 개념을 누구나 이해할 수 있게 비유를 들어 설명합니다.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '교육',
    tags: ['개념설명', '비유', '쉬운이해'],
    promptText: `당신은 어려운 개념을 세상에서 가장 쉽게 설명하는 일타 강사입니다. '[복잡한 개념, 예: 양자역학, 블록체인]'을 5살 아이도 이해할 수 있도록 설명해 주세요.

- 전문 용어 사용 금지 (불가피한 경우 일상적인 단어로 풀어서 설명)
- 아이들이 친숙하게 느끼는 사물이나 상황(예: 장난감, 놀이터, 과자)을 활용한 찰떡같은 비유 1가지 포함
- 설명의 길이는 3~4문단으로 간결하게 유지
- 마지막에 개념을 완벽하게 이해했는지 확인하는 귀여운 질문 하나 추가`
  },
  {
    id: 'prompt-study-roadmap',
    title: '새로운 기술 학습 로드맵 제안',
    description: '특정 분야나 기술을 마스터하기 위한 단계별 학습 계획을 수립합니다.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '교육',
    tags: ['학습계획', '로드맵', '자기계발'],
    promptText: `당신은 커리어 코치이자 교육 전문가입니다. 완전 초보자가 '[배우고 싶은 기술/분야, 예: 파이썬 데이터 분석]'을 3개월 만에 실무 수준으로 마스터하기 위한 주차별 학습 로드맵을 짜주세요.

- 1~4주차: 기초 개념 및 필수 문법/이론
- 5~8주차: 심화 학습 및 미니 프로젝트 2개 아이디어
- 9~12주차: 실전 포트폴리오 프로젝트 1개 기획 및 완성
- 각 단계별 추천 학습 자료(무료 강의, 공식 문서, 추천 도서 키워드) 포함
- 학습 동기를 잃지 않기 위한 꿀팁 3가지`
  },

  // --- 라이프스타일 ---
  {
    id: 'prompt-custom-travel',
    title: '개인 맞춤형 여행 계획',
    description: '취향과 예산에 딱 맞는 완벽한 여행 일정을 계획합니다.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '일상',
    tags: ['여행', '일정', '계획'],
    promptText: `당신은 현지인만 아는 숨은 명소를 잘 아는 베테랑 여행 가이드입니다. 다음 조건에 맞춰 [여행지] [N]박 [M]일 여행 일정을 짜주세요.

- 동행인: [예: 부모님, 연인, 혼자, 아이와 함께]
- 여행 스타일: [예: 휴양 위주, 빡빡한 관광, 식도락, 액티비티]
- 예산: [대략적인 예산]
- 필수 포함 요소: [꼭 가고 싶은 곳이나 먹고 싶은 것]

일정은 1일차, 2일차 등으로 나누어 오전/오후/저녁으로 상세히 적어주고, 각 장소 간의 이동 동선을 고려해 효율적으로 배치해 주세요. 현지 맛집 추천도 포함해 주세요.`
  },
  {
    id: 'prompt-meal-prep',
    title: '주간 식단표 및 쇼핑 리스트',
    description: '건강 목표에 맞춘 일주일 식단과 효율적인 장보기 목록을 만듭니다.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '일상',
    tags: ['식단', '건강', '레시피'],
    promptText: `당신은 영양학 지식이 풍부한 다이어트 식단 플래너입니다. [목표, 예: 체중 감량, 근육 증량, 비건 유지]를 위한 일주일(월~일) 식단표를 작성해 주세요.

- 하루 3끼 (아침, 점심, 저녁) 및 간식 1회 포함
- 직장인이 평일 저녁에 30분 이내로 요리할 수 있는 간단한 레시피 위주
- 식재료 낭비를 줄일 수 있도록 재료를 돌려쓰는 효율적인 구성
- 식단표 완성 후, 마트에서 바로 사용할 수 있도록 카테고리별(채소, 정육, 유제품 등) 주간 쇼핑 리스트 정리`
  },
  {
    id: 'prompt-polite-refusal',
    title: '어려운 부탁 정중하게 거절하기',
    description: '상대방의 기분을 상하게 하지 않으면서 단호하게 거절하는 메시지를 작성합니다.',
    image: 'https://images.unsplash.com/photo-1577563908411-50cb989766a3?q=80&w=600&auto=format&fit=crop',
    access: 'PREMIUM',
    category: 'PROMPT',
    promptSubCategory: '일상',
    tags: ['커뮤니케이션', '거절', '이메일'],
    promptText: `당신은 프로페셔널한 커뮤니케이션 전문가입니다. [부탁한 사람, 예: 직장 상사, 오랜 친구]가 [부탁 내용, 예: 주말 출근, 돈 빌려달라는 요청]을 해왔을 때, 관계를 망치지 않으면서도 명확하게 거절하는 메시지 초안 3가지를 작성해 주세요.

- 옵션 1: 부드럽고 우회적인 거절 (상황 설명 위주)
- 옵션 2: 단호하지만 예의 바른 거절 (원칙 강조)
- 옵션 3: 대안을 제시하는 거절 (내가 도와줄 수 있는 다른 선 제안)

각 메시지는 복사해서 바로 카카오톡이나 이메일로 보낼 수 있는 자연스러운 말투로 작성해 주세요.`
  }
];
