import { FIREBASE_ADMIN } from "$env/static/private";
import { WEEK_IN_MILLISECONDS } from "$lib/constants";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth, type DecodedIdToken } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const adminConfig = JSON.parse(FIREBASE_ADMIN);
console.log("adminConfig", adminConfig);
const initializeFirebase = () => {
  if (!getApps().length) {
    initializeApp({
      credential: cert(adminConfig),
    });
  }
};

export async function verifySession(
  token: string,
): Promise<DecodedIdToken | null> {
  if (!token) return null;
  try {
    initializeFirebase();
    return await getAuth().verifySessionCookie(token);
  } catch (err) {
    console.error("An error occurred validating token", (err as Error).message);
    return null;
  }
}

export async function createSessionCookie(uid: string): Promise<string | null> {
  if (!uid) return null;
  try {
    initializeFirebase();
    return await getAuth().createSessionCookie(uid, {
      expiresIn: WEEK_IN_MILLISECONDS,
    });
  } catch (err) {
    console.error("An error occurred validating token", (err as Error).message);
    return null;
  }
}

export async function saveResponse(data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phone: string;
  subject: string;
}) {
  if (!data) return null;
  try {
    initializeFirebase();
    const res = await getFirestore().collection("queries").add(data);
    return res.id;
  } catch (err) {
    console.error("An error occurred validating token", (err as Error).message);
    return null;
  }
}
