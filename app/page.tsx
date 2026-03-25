'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
  auth, 
  db, 
  collection, 
  addDoc, 
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  deleteDoc, 
  doc, 
  updateDoc,
  getDoc,
  onAuthStateChanged,
  handleFirestoreError,
  OperationType,
  User
} from '@/lib/firebase';
import { 
  Plus, 
  Trash2, 
  StickyNote, 
  Edit3, 
  Save, 
  X, 
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

interface Note {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: any;
}

interface UserProfile {
  uid: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: any;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [activeTab, setActiveTab] = useState<'portal' | 'notes'>('portal');
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        setUser(user);
        const profileDoc = await getDoc(doc(db, 'users', user.uid));
        if (profileDoc.exists()) {
          setProfile(profileDoc.data() as UserProfile);
        }
      } else {
        router.push('/auth');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (!user || activeTab !== 'notes') return;

    const notesRef = collection(db, 'notes');
    const q = query(
      notesRef, 
      where('authorId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot: any) => {
      const notesData = snapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data()
      })) as Note[];
      setNotes(notesData);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'notes');
    });

    return () => unsubscribe();
  }, [user, activeTab]);

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newNote.title.trim() || !newNote.content.trim()) return;

    try {
      await addDoc(collection(db, 'notes'), {
        title: newNote.title,
        content: newNote.content,
        authorId: user.uid,
        createdAt: new Date()
      });
      setNewNote({ title: '', content: '' });
      setIsAdding(false);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'notes');
    }
  };

  const handleDeleteNote = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'notes', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `notes/${id}`);
    }
  };

  const handleUpdateNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingNote) return;

    try {
      await updateDoc(doc(db, 'notes', editingNote.id), {
        title: editingNote.title,
        content: editingNote.content
      });
      setEditingNote(null);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `notes/${editingNote.id}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <Navbar user={user} profile={profile} />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex gap-4 mb-12 border-b border-zinc-800 pb-4">
          <button 
            onClick={() => setActiveTab('portal')}
            className={`px-6 py-2 rounded-xl font-bold transition-all ${activeTab === 'portal' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Portal
          </button>
          <button 
            onClick={() => setActiveTab('notes')}
            className={`px-6 py-2 rounded-xl font-bold transition-all ${activeTab === 'notes' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            My Notes
          </button>
        </div>

        {activeTab === 'portal' ? (
          <div className="space-y-12">
            <section className="text-center py-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
              >
                혁신 AI <span className="text-indigo-500">통합 플랫폼</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
              >
                혁신AI의 다양한 인공지능 시스템을 한곳에서 관리하고 이용하세요. 
                더욱 스마트한 업무 환경을 제공합니다.
              </motion.p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'AI 노트', desc: '생각을 정리하고 AI와 함께 노트를 작성하세요.', icon: StickyNote, color: 'bg-indigo-600', tab: 'notes' },
                { title: 'AI 분석', desc: '데이터를 업로드하고 즉각적인 인사이트를 얻으세요.', icon: Edit3, color: 'bg-emerald-600', tab: 'portal' },
                { title: 'AI 상담', desc: '전문적인 AI 상담원과 대화하며 문제를 해결하세요.', icon: Save, color: 'bg-amber-600', tab: 'portal' }
              ].map((service, i) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  onClick={() => setActiveTab(service.tab as any)}
                  className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/5"
                >
                  <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="mb-12">
              {!isAdding ? (
                <button 
                  onClick={() => setIsAdding(true)}
                  className="w-full py-4 border-2 border-dashed border-zinc-800 rounded-2xl text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 transition-all flex items-center justify-center gap-2 group"
                >
                  <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-bold">Create a new note</span>
                </button>
              ) : (
                <motion.form 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onSubmit={handleAddNote}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-zinc-400 uppercase text-xs tracking-widest">New Note</h3>
                    <button type="button" onClick={() => setIsAdding(false)} className="text-zinc-500 hover:text-white">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Title"
                    className="w-full bg-transparent text-2xl font-bold text-white placeholder-zinc-700 focus:outline-none mb-4"
                    value={newNote.title}
                    onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                    autoFocus
                  />
                  <textarea 
                    placeholder="Start writing..."
                    className="w-full bg-transparent text-zinc-300 placeholder-zinc-700 focus:outline-none min-h-[150px] resize-none leading-relaxed"
                    value={newNote.content}
                    onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                  />
                  <div className="flex justify-end mt-6">
                    <button 
                      type="submit"
                      className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Save Note
                    </button>
                  </div>
                </motion.form>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {notes.map((note) => (
                  <motion.div 
                    layout
                    key={note.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all flex flex-col h-[280px]"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-white line-clamp-2">{note.title}</h3>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => setEditingNote(note)}
                          className="p-2 text-zinc-500 hover:text-indigo-400 hover:bg-indigo-400/10 rounded-lg transition-all"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteNote(note.id)}
                          className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-6 flex-grow">
                      {note.content}
                    </p>
                    <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                        {note.createdAt?.toDate ? note.createdAt.toDate().toLocaleDateString() : 'Just now'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </main>

      <AnimatePresence>
        {editingNote && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setEditingNote(null)}
            />
            <motion.form 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onSubmit={handleUpdateNote}
              className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 w-full max-w-2xl shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-zinc-400 uppercase text-xs tracking-widest">Edit Note</h3>
                <button type="button" onClick={() => setEditingNote(null)} className="text-zinc-500 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <input 
                type="text" 
                className="w-full bg-transparent text-3xl font-bold text-white placeholder-zinc-700 focus:outline-none mb-6"
                value={editingNote.title}
                onChange={(e) => setEditingNote({...editingNote, title: e.target.value})}
              />
              <textarea 
                className="w-full bg-transparent text-zinc-300 placeholder-zinc-700 focus:outline-none min-h-[300px] resize-none text-lg leading-relaxed"
                value={editingNote.content}
                onChange={(e) => setEditingNote({...editingNote, content: e.target.value})}
              />
              <div className="flex justify-end mt-8">
                <button 
                  type="submit"
                  className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  Update Note
                </button>
              </div>
            </motion.form>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
