import React, { useState, useRef, useEffect } from 'react';
import { Heart, Info, Volume2 } from 'lucide-react';
import { Word } from '../data/toeflWords';
import { useStudyStore } from '../store/useStudyStore';

interface WordCardProps {
  word: Word;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onShowDetails?: () => void;
  className?: string;
}

export const WordCard: React.FC<WordCardProps> = ({
  word,
  onSwipeLeft,
  onSwipeRight,
  onShowDetails,
  className = ''
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const { favoriteWords, toggleFavorite, getWordProgress } = useStudyStore();
  
  const isFavorite = favoriteWords.includes(word.id);
  const progress = getWordProgress(word.id);
  
  // 处理触摸开始
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };
  
  // 处理触摸移动
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const offset = currentX - startX;
    setDragOffset(offset);
  };
  
  // 处理触摸结束
  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const threshold = 100; // 滑动阈值
    
    if (dragOffset > threshold) {
      // 向右滑动 - 认识
      onSwipeRight?.();
    } else if (dragOffset < -threshold) {
      // 向左滑动 - 不认识
      onSwipeLeft?.();
    }
    
    // 重置状态
    setIsDragging(false);
    setDragOffset(0);
    setStartX(0);
  };
  
  // 处理鼠标事件（桌面端）
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const offset = e.clientX - startX;
    setDragOffset(offset);
  };
  
  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const threshold = 100;
    
    if (dragOffset > threshold) {
      onSwipeRight?.();
    } else if (dragOffset < -threshold) {
      onSwipeLeft?.();
    }
    
    setIsDragging(false);
    setDragOffset(0);
    setStartX(0);
  };
  
  // 播放发音
  const playPronunciation = () => {
    // 使用Web Speech API播放发音
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };
  
  // 计算卡片样式
  const getCardStyle = () => {
    const rotation = dragOffset * 0.1; // 轻微旋转效果
    const opacity = Math.max(0.7, 1 - Math.abs(dragOffset) * 0.002);
    
    return {
      transform: `translateX(${dragOffset}px) rotate(${rotation}deg)`,
      opacity,
      transition: isDragging ? 'none' : 'all 0.3s ease-out',
    };
  };
  
  // 获取背景颜色基于滑动方向
  const getBackgroundColor = () => {
    if (dragOffset > 50) {
      return 'bg-green-50 border-green-200'; // 认识 - 绿色
    } else if (dragOffset < -50) {
      return 'bg-orange-50 border-orange-200'; // 不认识 - 橙色
    }
    return 'bg-white border-gray-200';
  };
  
  // 获取难度颜色
  const getDifficultyColor = () => {
    switch (word.difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const offset = e.clientX - startX;
        setDragOffset(offset);
      }
    };
    
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };
    
    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, startX]);
  
  return (
    <div
      ref={cardRef}
      className={`relative w-full max-w-sm mx-auto h-80 rounded-2xl border-2 shadow-lg cursor-grab active:cursor-grabbing select-none ${getBackgroundColor()} ${className}`}
      style={getCardStyle()}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* 顶部操作栏 */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <button
          onClick={onShowDetails}
          className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
        >
          <Info className="w-5 h-5 text-blue-600" />
        </button>
        
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
            {word.difficulty}
          </span>
          
          <button
            onClick={() => toggleFavorite(word.id)}
            className="p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
          >
            <Heart 
              className={`w-5 h-5 ${
                isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'
              }`} 
            />
          </button>
        </div>
      </div>
      
      {/* 主要内容 */}
      <div className="flex flex-col items-center justify-center h-full p-6 pt-16">
        {/* 单词 */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {word.word}
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-gray-600 text-lg">
              {word.pronunciation}
            </span>
            <button
              onClick={playPronunciation}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <Volume2 className="w-4 h-4 text-blue-600" />
            </button>
          </div>
          
          <span className="text-blue-600 font-medium text-sm">
            {word.partOfSpeech}
          </span>
        </div>
        
        {/* 释义 */}
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-3 leading-relaxed">
            {word.translation}
          </p>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {word.definition}
          </p>
        </div>
        
        {/* 学习进度指示器 */}
        {progress && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress.masteryLevel}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 text-center mt-1">
              掌握度: {progress.masteryLevel}%
            </div>
          </div>
        )}
      </div>
      
      {/* 滑动提示 */}
      {dragOffset !== 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`text-2xl font-bold ${
            dragOffset > 0 ? 'text-green-600' : 'text-orange-600'
          }`}>
            {dragOffset > 0 ? '认识 ✓' : '不认识 ✗'}
          </div>
        </div>
      )}
    </div>
  );
};