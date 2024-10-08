# MSW 모의 서버 실행 및 API 호출 가이드

## 모의 서버 실행

1. `package.json`에 다음 스크립트가 있는지 확인합니다:

   ```json
   {
     "scripts": {
       "mock": "npx tsx watch ./src/app/msw/mocks/http.ts"
     }
   }
   ```

2. 터미널에서 다음 명령어를 실행하여 모의 서버를 시작합니다:

   ```bash
   yarn run mock
   ```

3. 서버가 성공적으로 시작되면 다음과 같은 메시지가 표시됩니다:

   ```
   Mock server is running on port: 9090
   ```

## API 호출

모의 서버가 실행 중일 때, API 호출을 할 때는 반드시 서버의 포트 번호를 맞춰야 합니다.

### 클라이언트 코드 예시

```typescript
const API_BASE_URL = 'http://localhost:9090'; // 모의 서버 주소

async function fetchUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}
```

### 주의사항

1. 모의 서버 주소(`http://localhost:9090`)를 하드코딩하는 대신, 환경 변수를 사용하는 것이 좋습니다.

2. Next.js 프로젝트의 경우, `.env.local` 파일에 다음과 같이 설정할 수 있습니다:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:9090
   ```

   그리고 코드에서는 다음과 같이 사용합니다:

   ```typescript
   const API_BASE_URL =
     process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
   ```

3. 개발 환경과 프로덕션 환경에서 API 주소를 쉽게 전환할 수 있도록 환경 변수를 활용하세요.

4. CORS (Cross-Origin Resource Sharing) 이슈가 발생할 수 있으므로, 모의 서버에서 CORS 설정이 올바르게 되어 있는지 확인하세요.

이 가이드를 따라 모의 서버를 실행하고 API를 호출하면, 실제 백엔드 서버 없이도 프론트엔드 개발을 진행할 수 있습니다.
