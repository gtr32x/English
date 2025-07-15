import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Word } from '../data/toeflWords';

interface StudyProgress {
  wordId: number;
  isKnown: boolean;
  reviewCount: number;
  lastReviewed: Date;
  masteryLevel: number; // 0-100
}

interface StudyStats {
  totalWordsStudied: number;
  wordsKnown: number;
  wordsUnknown: number;
  studyStreak: number;
  totalStudyTime: number; // in minutes
  lastStudyDate: Date | null;
}

interface StudyStore {
  // 当前学习状态
  currentWordIndex: number;
  studyWords: Word[];
  progress: StudyProgress[];
  stats: StudyStats;
  favoriteWords: number[];
  
  // 操作方法
  setStudyWords: (words: Word[]) => void;
  nextWord: () => void;
  previousWord: () => void;
  markWordAsKnown: (wordId: number) => void;
  markWordAsUnknown: (wordId: number) => void;
  toggleFavorite: (wordId: number) => void;
  updateStats: () => void;
  resetProgress: () => void;
  
  // 获取方法
  getCurrentWord: () => Word | null;
  getWordProgress: (wordId: number) => StudyProgress | null;
  getStudyStats: () => StudyStats;
}

const initialStats: StudyStats = {
  totalWordsStudied: 0,
  wordsKnown: 0,
  wordsUnknown: 0,
  studyStreak: 0,
  totalStudyTime: 0,
  lastStudyDate: null,
};

export const useStudyStore = create<StudyStore>()(persist(
  (set, get) => ({
    currentWordIndex: 0,
    studyWords: [],
    progress: [],
    stats: initialStats,
    favoriteWords: [],
    
    setStudyWords: (words) => {
      set({ studyWords: words, currentWordIndex: 0 });
    },
    
    nextWord: () => {
      const { currentWordIndex, studyWords } = get();
      if (currentWordIndex < studyWords.length - 1) {
        set({ currentWordIndex: currentWordIndex + 1 });
      }
    },
    
    previousWord: () => {
      const { currentWordIndex } = get();
      if (currentWordIndex > 0) {
        set({ currentWordIndex: currentWordIndex - 1 });
      }
    },
    
    markWordAsKnown: (wordId) => {
      const { progress } = get();
      const existingProgress = progress.find(p => p.wordId === wordId);
      
      if (existingProgress) {
        const updatedProgress = progress.map(p => 
          p.wordId === wordId 
            ? { 
                ...p, 
                isKnown: true, 
                reviewCount: p.reviewCount + 1,
                lastReviewed: new Date(),
                masteryLevel: Math.min(100, p.masteryLevel + 20)
              }
            : p
        );
        set({ progress: updatedProgress });
      } else {
        const newProgress: StudyProgress = {
          wordId,
          isKnown: true,
          reviewCount: 1,
          lastReviewed: new Date(),
          masteryLevel: 20
        };
        set({ progress: [...progress, newProgress] });
      }
      
      get().updateStats();
    },
    
    markWordAsUnknown: (wordId) => {
      const { progress } = get();
      const existingProgress = progress.find(p => p.wordId === wordId);
      
      if (existingProgress) {
        const updatedProgress = progress.map(p => 
          p.wordId === wordId 
            ? { 
                ...p, 
                isKnown: false, 
                reviewCount: p.reviewCount + 1,
                lastReviewed: new Date(),
                masteryLevel: Math.max(0, p.masteryLevel - 10)
              }
            : p
        );
        set({ progress: updatedProgress });
      } else {
        const newProgress: StudyProgress = {
          wordId,
          isKnown: false,
          reviewCount: 1,
          lastReviewed: new Date(),
          masteryLevel: 0
        };
        set({ progress: [...progress, newProgress] });
      }
      
      get().updateStats();
    },
    
    toggleFavorite: (wordId) => {
      const { favoriteWords } = get();
      const isFavorite = favoriteWords.includes(wordId);
      
      if (isFavorite) {
        set({ favoriteWords: favoriteWords.filter(id => id !== wordId) });
      } else {
        set({ favoriteWords: [...favoriteWords, wordId] });
      }
    },
    
    updateStats: () => {
      const { progress } = get();
      const totalWordsStudied = progress.length;
      const wordsKnown = progress.filter(p => p.isKnown).length;
      const wordsUnknown = progress.filter(p => !p.isKnown).length;
      
      // Calculate study streak
      const today = new Date();
      const lastStudyDate = get().stats.lastStudyDate;
      let studyStreak = get().stats.studyStreak;
      
      if (lastStudyDate) {
        const daysDiff = Math.floor((today.getTime() - lastStudyDate.getTime()) / (1000 * 60 * 60 * 24));
        if (daysDiff === 1) {
          studyStreak += 1;
        } else if (daysDiff > 1) {
          studyStreak = 1;
        }
      } else {
        studyStreak = 1;
      }
      
      set({
        stats: {
          ...get().stats,
          totalWordsStudied,
          wordsKnown,
          wordsUnknown,
          studyStreak,
          lastStudyDate: today,
        }
      });
    },
    
    resetProgress: () => {
      set({
        currentWordIndex: 0,
        progress: [],
        stats: initialStats,
        favoriteWords: [],
      });
    },
    
    getCurrentWord: () => {
      const { currentWordIndex, studyWords } = get();
      return studyWords[currentWordIndex] || null;
    },
    
    getWordProgress: (wordId) => {
      const { progress } = get();
      return progress.find(p => p.wordId === wordId) || null;
    },
    
    getStudyStats: () => {
      return get().stats;
    },
  }),
  {
    name: 'study-storage',
    partialize: (state) => ({
      progress: state.progress,
      stats: state.stats,
      favoriteWords: state.favoriteWords,
    }),
  }
));