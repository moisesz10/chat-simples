import { initializeApp, getApps } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
apiKey: 'SUA_API_KEY',
authDomain: 'SEU_DOMINIO.firebaseapp.com',
projectId: 'SEU_PROJECT_ID',
storageBucket: 'SEU_BUCKET.appspot.com',
messagingSenderId: 'SENDER_ID',
appId: 'APP_ID'
};


export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export const ensureAnonymousAuth = (): Promise<string> =>
new Promise((resolve, reject) => {
onAuthStateChanged(auth, async (user) => {
try {
if (!user) {
const res = await signInAnonymously(auth);
resolve(res.user.uid);
} else {
resolve(user.uid);
}
} catch (e) {
reject(e);
}
});
});