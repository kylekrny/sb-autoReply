import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = { /* Your Firebase Config */ };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.querySelector("#waitlistForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    
    try {
        await addDoc(collection(db, "waitlist"), { email, timestamp: new Date() });
        alert("Thanks for signing up!");
    } catch (error) {
        console.error("Error adding document: ", error);
    }
});