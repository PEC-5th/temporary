import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getApp, getApps, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

/**
 * Firebase 앱 인스턴스를 초기화합니다.
 * 현재 초기화된 인스턴스가 없으면 제공된 설정을 사용하여 새로운 앱 인스턴스를 생성합니다.
 * 그렇지 않으면 기존 앱 인스턴스를 가져옵니다.
 *
 * @constant
 * @type {FirebaseApp}
 */
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

/**
 * 현재 앱 인스턴스에 대한 Firebase 인증을 초기화합니다.
 *
 * @constant
 * @type {Auth}
 */
const auth = getAuth(app);

/**
 * 현재 앱 인스턴스에 대한 Firestore 데이터베이스를 초기화합니다.
 * 이를 통해 Firestore 데이터베이스와 상호작용할 수 있습니다.
 *
 * @constant
 * @type {Firestore}
 */
const db = getFirestore(app);

export { auth, app, db };
