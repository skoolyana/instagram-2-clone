// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore";

import {getStorage} from "firebase/storage";

import * as firebase from '@firebase/app';
import '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_vSAAXkIJMhr4V-9eDtK-QXqsD_URkRQ",
  authDomain: "insta-clone-42ff2.firebaseapp.com",
  projectId: "insta-clone-42ff2",
  storageBucket: "insta-clone-42ff2.appspot.com",
  messagingSenderId: "102156334313",
  appId: "1:102156334313:web:b5cb6d89de2f4ab16c2c78",
  measurementId: "G-TH9NEDRLQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore();

const storage = getStorage();

export {app, db, storage}