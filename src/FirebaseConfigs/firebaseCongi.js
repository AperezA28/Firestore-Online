// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBLDDaqy5pbSmAn_HWPplEannp3jBx0yKU',
  authDomain: 'ecommerce-cae3d.firebaseapp.com',
  projectId: 'ecommerce-cae3d',
  storageBucket: 'ecommerce-cae3d.appspot.com',
  messagingSenderId: '989647859637',
  appId: '1:989647859637:web:ddce696375de2a6300b3fc',
  measurementId: 'G-6VN1DGH853',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
