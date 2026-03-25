import { NextResponse } from 'next/server';
import { db, doc, deleteDoc, getDoc } from '@/lib/firebase';

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const uidToDelete = searchParams.get('uid');

    if (!uidToDelete) {
      return NextResponse.json({ error: 'Missing UID' }, { status: 400 });
    }

    // In a real app, you'd check the session/auth token here to ensure the requester is an admin.
    // Since we're using client-side auth, we'd ideally pass a token and verify it.
    // For this demonstration, we'll assume the request is authorized if it reaches here,
    // but in production, you MUST verify the admin role server-side.

    await deleteDoc(doc(db, 'users', uidToDelete));

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error: any) {
    console.error('Delete error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
