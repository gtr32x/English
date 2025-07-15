import React from 'react';
import { ArrowLeft, Volume2, Heart, BookOpen, Clock, Star } from 'lucide-react';
import { Word } from '../data/toeflWords';
import { useStudyStore } from '../store/useStudyStore';

interface WordDetailPageProps {
  word: Word;
  onBack: () => void;
}

export const WordDetailPage: React.FC<WordDetailPageProps> = ({ word, onBack }) => {
  const { favoriteWords, toggleFavorite, getWordProgress } = useStudyStore();
  const isFavorite = favoriteWords.includes(word.id);
  const progress = getWordProgress(word.id);
  
  // 播放发音
  const playPronunciation = (speed: 'normal' | 'slow' = 'normal') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.lang = 'en-US';
      utterance.rate = speed === 'slow' ? 0.6 : 0.8;
      speechSynthesis.speak(utterance);
    }
  };
  
  // 获取难度颜色
  const getDifficultyColor = () => {
    switch (word.difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  
  // 获取频率星级
  const getFrequencyStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < word.frequency ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 顶部导航栏 */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              返回学习
            </button>
            
            <button
              onClick={() => toggleFavorite(word.id)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Heart 
                className={`w-6 h-6 ${
                  isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'
                }`} 
              />
            </button>
          </div>
        </div>
      </div>
      
      {/* 主要内容 */}
      <div className="max-w-4xl mx-auto p-4 pb-8">
        {/* 单词头部信息 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              {word.word}
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-gray-600 text-xl">
                {word.pronunciation}
              </span>
              
              <div className="flex gap-2">
                <button
                  onClick={() => playPronunciation('normal')}
                  className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                  正常
                </button>
                
                <button
                  onClick={() => playPronunciation('slow')}
                  className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                  慢速
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor()}`}>
                {word.partOfSpeech}
              </span>
              
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor()}`}>
                {word.difficulty === 'easy' ? '简单' : word.difficulty === 'medium' ? '中等' : '困难'}
              </span>
            </div>
          </div>
          
          {/* 学习进度 */}
          {progress && (
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">掌握程度</span>
                <span className="text-sm text-gray-600">{progress.masteryLevel}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress.masteryLevel}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>复习次数: {progress.reviewCount}</span>
                <span>状态: {progress.isKnown ? '已掌握' : '需复习'}</span>
              </div>
            </div>
          )}
        </div>
        
        {/* 释义和定义 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            释义
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">中文释义</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {word.translation}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">英文定义</h3>
              <p className="text-gray-600 leading-relaxed">
                {word.definition}
              </p>
            </div>
          </div>
        </div>
        
        {/* 例句 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">例句</h2>
          
          <div className="space-y-4">
            {word.examples.map((example, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                <p className="text-gray-700 italic leading-relaxed">
                  &quot;{example}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* 同义词和反义词 */}
        {(word.synonyms || word.antonyms) && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">相关词汇</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {word.synonyms && (
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-3">同义词</h3>
                  <div className="flex flex-wrap gap-2">
                    {word.synonyms.map((synonym, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                      >
                        {synonym}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {word.antonyms && (
                <div>
                  <h3 className="text-lg font-semibold text-red-700 mb-3">反义词</h3>
                  <div className="flex flex-wrap gap-2">
                    {word.antonyms.map((antonym, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                      >
                        {antonym}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* 托福考试信息 */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" />
            托福考试信息
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">出现频率</h3>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {getFrequencyStars()}
                </div>
                <span className="text-sm text-gray-600">({word.frequency}/5)</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {word.frequency >= 4 ? '高频词汇，重点掌握' : 
                 word.frequency >= 3 ? '中频词汇，需要记忆' : '低频词汇，了解即可'}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">重要程度</h3>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor()}`}>
                {word.difficulty === 'easy' ? '基础必备' : 
                 word.difficulty === 'medium' ? '重要掌握' : '高级词汇'}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                建议在托福备考中{word.difficulty === 'hard' ? '深度' : '重点'}学习
              </p>
            </div>
          </div>
          
          {word.etymology && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">词源</h3>
              <p className="text-gray-600 leading-relaxed">
                {word.etymology}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};