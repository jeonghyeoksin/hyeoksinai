import { NextResponse } from 'next/server';
import { db, getDoc, setDoc, doc } from '@/lib/firebase';

export async function POST(request: Request) {
  try {
    const { uid, email, name } = await request.json();

    if (!uid || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const profileDoc = await getDoc(doc(db, 'users', uid));
    if (!profileDoc.exists()) {
      const profile = {
        uid: uid,
        name: name || 'Anonymous',
        email: email,
        role: email === 'info@nextin.ai.kr' ? 'admin' : 'user',
        createdAt: new Date()
      };
      await setDoc(doc(db, 'users', uid), profile);
      return NextResponse.json({ message: 'Profile created', profile });
    }

    return NextResponse.json({ message: 'Profile already exists' });
  } catch (error: any) {
    console.error('Profile sync error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
