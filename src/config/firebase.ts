import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBxR3pxBR3HZvvFtOh_HNxH0JHjXvHHzz8",
  authDomain: "sports-dashboard-demo.firebaseapp.com",
  projectId: "sports-dashboard-demo",
  storageBucket: "sports-dashboard-demo.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);