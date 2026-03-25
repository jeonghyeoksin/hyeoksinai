import { NextResponse } from 'next/server';
import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from '@/lib/firebase';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create user profile in Firestore
    const profile = {
      uid: user.uid,
      name: name,
      email: email,
      role: email === 'info@nextin.ai.kr' ? 'admin' : 'user',
      createdAt: new Date()
    };

    await setDoc(doc(db, 'users', user.uid), profile);

    return NextResponse.json({ message: 'User registered successfully', profile });
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
