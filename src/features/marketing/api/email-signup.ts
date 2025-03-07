import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, connectAuthEmulator } from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  connectFirestoreEmulator,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'sb-autoreply',
  authDomain: 'sb-autoreply.firebaseapp.com',
  projectId: 'sb-autoreply',
  storageBucket: 'sb-autoreply.appspot.com',
  messagingSenderId: 'sb-autoreplySenderId',
  appId: 'sb-autoreply',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Connect to Firebase emulators
connectAuthEmulator(auth, 'http://localhost:9099');
connectFirestoreEmulator(db, 'localhost', 8080);

signInAnonymously(auth)
  .then(() => {
    console.log('Signed in anonymously');
  })
  .catch((error) => {
    console.error('Error signing in anonymously: ', error);
  });

export const submitWaitlistForm = async (email: string) => {
  try {
    await addDoc(collection(db, 'waitlist'), {
      email,
      timestamp: new Date(),
    });
    console.log('Document successfully written!');
    return true;
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
