import db from './firebaseConfig'

import { collection, addDoc, getDocs } from 'firebase/firestore'
import {  ref, set } from "firebase/database";

export const getAllData = async (collectionName) => {
  let data = []
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(), id:doc.id    })

  });
  return data
}

export const addChatMessage = async (collectionName, textObject)=>{
  const docRef = await addDoc(collectionName(db, 'chat_rooms'), textObject)
  return docRef
}

