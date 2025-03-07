import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  /* Your Firebase Config */
};
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

export const submitWaitlistForm = async (email: string) => {
  try {
    await addDoc(collection(db, 'waitlist'), {
      email,
      timestamp: new Date(),
    });
    alert('Thanks for signing up!');
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
