import { getAuth, Auth } from 'firebase-admin/auth';
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';

/**
 * Firebase Admin SDK를 초기화하고 앱 인스턴스를 반환합니다.
 * 필요한 환경 변수가 설정되지 않은 경우 오류를 발생시킵니다.
 *
 * @returns {App} 초기화된 Firebase Admin 앱 인스턴스
 * @throws {Error} 환경 변수 설정이 누락된 경우 오류 발생
 */
function initFirebaseAdmin(): App {
  if (
    !process.env.FIREBASE_ADMIN_PROJECT_ID ||
    !process.env.FIREBASE_ADMIN_CLIENT_EMAIL ||
    !process.env.FIREBASE_ADMIN_PRIVATE_KEY
  ) {
    throw new Error('FIREBASE_ADMIN environment variables are not set');
  }

  // 프라이빗 키 처리
  let privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;
  if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
    privateKey = privateKey.slice(1, -1);
  }
  privateKey = privateKey.replace(/\\n/g, '\n');

  const firebaseAdminConfig = {
    credential: cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: privateKey,
    }),
  };

  if (!getApps().length) {
    return initializeApp(firebaseAdminConfig);
  } else {
    return getApps()[0];
  }
}

/**
 * Firebase Admin 인증 객체를 담는 변수입니다.
 * @type {Auth}
 */
let adminAuth: Auth;

try {
  const adminApp = initFirebaseAdmin();
  adminAuth = getAuth(adminApp);
} catch (error) {
  console.error('Failed to initialize Firebase Admin:', error);
  throw error;
}

if (!adminAuth) {
  throw new Error('Firebase Admin Auth is not initialized');
}

export { adminAuth };
