# Supabase 관리자 페이지 설정 가이드

## 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 접속하여 새 프로젝트를 생성합니다
2. 프로젝트 생성 후 Settings > API에서 다음 정보를 확인합니다:
   - Project URL
   - anon/public key

## 2. 환경 변수 설정

`.env.local` 파일을 열고 다음 값을 입력합니다:

```
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## 3. 데이터베이스 테이블 생성

Supabase Dashboard > SQL Editor에서 다음 SQL을 실행합니다:

```sql
-- inquiries 테이블 생성
CREATE TABLE inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- RLS (Row Level Security) 활성화
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- 공개 삽입 정책 (문의 폼에서 사용)
CREATE POLICY "Anyone can insert inquiries"
ON inquiries FOR INSERT
WITH CHECK (true);

-- 인증된 사용자만 조회 가능
CREATE POLICY "Authenticated users can view inquiries"
ON inquiries FOR SELECT
USING (auth.role() = 'authenticated');

-- 인증된 사용자만 업데이트 가능
CREATE POLICY "Authenticated users can update inquiries"
ON inquiries FOR UPDATE
USING (auth.role() = 'authenticated');

-- 인증된 사용자만 삭제 가능
CREATE POLICY "Authenticated users can delete inquiries"
ON inquiries FOR DELETE
USING (auth.role() = 'authenticated');
```

## 4. 관리자 계정 생성

Supabase Dashboard > Authentication > Users에서:
1. "Add user" 클릭
2. 이메일과 비밀번호 입력
3. "Create user" 클릭

## 5. 접속 방법

- 관리자 로그인: `http://localhost:5173/cretoworks-landing/admin/login`
- 생성한 이메일과 비밀번호로 로그인
- 대시보드에서 문의 관리 가능

## 주요 기능

### 대시보드 (`/admin/dashboard`)
- 전체 문의 수
- 오늘 문의 수
- 대기 중인 문의 수

### 문의 관리 (`/admin/inquiries`)
- 문의 목록 조회
- 검색 기능 (이름, 이메일, 제목)
- 상태 필터 (전체, 대기 중, 완료)
- 상태 변경 (대기 중 ↔ 완료)
- 문의 삭제

## 보안 주의사항

- `.env.local` 파일은 절대 Git에 커밋하지 마세요
- Supabase API 키는 안전하게 보관하세요
- 프로덕션 환경에서는 RLS 정책을 더 엄격하게 설정하세요
