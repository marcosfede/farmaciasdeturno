import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: 'https://farmaciasdeturno.firebaseio.com',
})
const db = admin.firestore()
db.settings({ timestampsInSnapshots: true })
const deturnoRef = db.collection('deturno')

async function saveToFirebase(farmacias: any) {
  return deturnoRef.add({ timestamp: new Date(), payload: farmacias })
}

export async function firebaseToPg() {
  const shifts = await deturnoRef.get().then((snapshot) => snapshot.docs.map((doc) => doc.data()))
  for (const shift of shifts) {
    // save to pg
  }
}
