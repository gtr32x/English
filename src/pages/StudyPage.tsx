import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, BarChart3 } from 'lucide-react';
import { WordCard } from '../components/WordCard';
import { useStudyStore } from '../store/useStudyStore';
import { toeflWords, getRandomWords } from '../data/toeflWords';

interface StudyPageProps {
  onShowDetails?: () => void;
  onShowStats?: () => void;
}

export const StudyPage: React.FC<StudyPageProps> = ({
  onShowDetails,
  onShowStats
}) => {
  const {
    studyWords,
    currentWordIndex,
    setStudyWords,
    nextWord,
    previousWord,
    markWordAsKnown,
    markWordAsUnknown,
    getCurrentWord,
    getStudyStats
  } = useStudyStore();
  
  const [showResult, setShowResult] = useState<'known' | 'unknown' | null>(null);
  const currentWord = getCurrentWord();
  const stats = getStudyStats();
  
  // 初始化学习单词
  useEffect(() => {
    if (studyWords.length === 0) {
      setStudyWords(getRandomWords(20)); // 加载20个随机单词
    }
  }, [studyWords.length, setStudyWords]);
  
  // 处理向右滑动（认识）
  const handleSwipeRight = () => {
    if (!currentWord) return;
    
    markWordAsKnown(currentWord.id);
    setShowResult('known');
    
    setTimeout(() => {
      setShowResult(null);
      nextWord();
    }, 800);
  };
  
  // 处理向左滑动（不认识）
  const handleSwipeLeft = () => {
    if (!currentWord) return;
    
    markWordAsUnknown(currentWord.id);
    setShowResult('unknown');
    
    setTimeout(() => {
      setShowResult(null);
      nextWord();
    }, 800);
  };
  
  // 重新开始学习
  const handleRestart = () => {
    setStudyWords(getRandomWords(20));
  };
  
  // 计算进度
  const progress = studyWords.length > 0 ? ((currentWordIndex + 1) / studyWords.length) * 100 : 0;
  const remainingWords = studyWords.length - currentWordIndex - 1;
  
  if (!currentWord) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">恭喜完成学习！</h2>
          <p className="text-gray-600 mb-6">你已经完成了所有单词的学习</p>
          <button
            onClick={handleRestart}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            重新开始
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 顶部导航栏 */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-gray-800">托福背单词</h1>
              <div className="text-sm text-gray-600">
                {currentWordIndex + 1} / {studyWords.length}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={onShowStats}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="学习统计"
              >
                <BarChart3 className="w-5 h-5 text-gray-600" />
              </button>
              
              <button
                onClick={handleRestart}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="重新开始"
              >
                <RotateCcw className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* 进度条 */}
          <div className="mt-3">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>进度: {Math.round(progress)}%</span>
              <span>剩余: {remainingWords} 个单词</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 主要内容区域 */}
      <div className="flex-1 flex items-center justify-center p-4 pt-8">
        <div className="w-full max-w-md relative">
          {/* 结果反馈覆盖层 */}
          {showResult && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/20 rounded-2xl">
              <div className={`text-4xl font-bold ${
                showResult === 'known' ? 'text-green-600' : 'text-orange-600'
              }`}>
                {showResult === 'known' ? '认识 ✓' : '不认识 ✗'}
              </div>
            </div>
          )}
          
          {/* 单词卡片 */}
          <WordCard
            word={currentWord}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
            onShowDetails={onShowDetails}
          />
          
          {/* 滑动提示 */}
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>👈 向左滑动：不认识 | 向右滑动：认识 👉</p>
            <p className="mt-1">点击卡片查看详情</p>
          </div>
        </div>
      </div>
      
      {/* 底部操作栏 */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            {/* 上一个单词 */}
            <button
              onClick={previousWord}
              disabled={currentWordIndex === 0}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              上一个
            </button>
            
            {/* 不认识按钮 */}
            <button
              onClick={handleSwipeLeft}
              className="flex-1 max-w-32 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              不认识
            </button>
            
            {/* 认识按钮 */}
            <button
              onClick={handleSwipeRight}
              className="flex-1 max-w-32 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              认识
            </button>
            
            {/* 下一个单词 */}
            <button
              onClick={nextWord}
              disabled={currentWordIndex >= studyWords.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              下一个
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* 学习统计简要信息 */}
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-600">
            <div className="text-center">
              <div className="font-medium text-green-600">{stats.wordsKnown}</div>
              <div>认识</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-orange-600">{stats.wordsUnknown}</div>
              <div>不认识</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-blue-600">{stats.totalWordsStudied}</div>
              <div>总计</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};