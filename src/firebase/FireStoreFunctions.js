import db from './firebaseConfig'

import { collection, getDocs  } from 'firebase/firestore'

export const getAllData = async (collectionName) => {
  let data = []
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(), id:doc.id    })

  });
  return data
}
