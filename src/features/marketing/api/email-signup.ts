const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const initializeFirebase = async () => {
  const { initializeApp } = await import('firebase/app');
  const { getAuth, signInAnonymously } = await import('firebase/auth');
  const { getFirestore, collection, addDoc } = await import(
    'firebase/firestore'
  );

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  signInAnonymously(auth)
    .then(() => {
      console.log('Signed in anonymously');
    })
    .catch((error) => {
      console.error('Error signing in anonymously: ', error);
    });

  return { db, collection, addDoc };
};

export const submitWaitlistForm = async (email: string) => {
  try {
    const { db, collection, addDoc } = await initializeFirebase();
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
