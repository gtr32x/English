import React from 'react';
import { ArrowLeft, Trophy, Target, Calendar, Clock, BookOpen, Heart, TrendingUp } from 'lucide-react';
import { useStudyStore } from '../store/useStudyStore';
import { toeflWords } from '../data/toeflWords';

interface StatsPageProps {
  onBack: () => void;
}

export const StatsPage: React.FC<StatsPageProps> = ({ onBack }) => {
  const { stats, progress, favoriteWords, resetProgress } = useStudyStore();
  
  // 计算各种统计数据
  const totalWords = toeflWords.length;
  const studiedWords = progress.length;
  const masteredWords = progress.filter(p => p.masteryLevel >= 80).length;
  const needReviewWords = progress.filter(p => p.masteryLevel < 50).length;
  const averageMastery = progress.length > 0 
    ? Math.round(progress.reduce((sum, p) => sum + p.masteryLevel, 0) / progress.length)
    : 0;
  
  // 获取学习成就
  const getAchievements = () => {
    const achievements = [];
    
    if (stats.studyStreak >= 7) {
      achievements.push({ icon: '🔥', title: '学习达人', desc: `连续学习${stats.studyStreak}天` });
    }
    
    if (stats.totalWordsStudied >= 50) {
      achievements.push({ icon: '📚', title: '词汇大师', desc: `已学习${stats.totalWordsStudied}个单词` });
    }
    
    if (masteredWords >= 20) {
      achievements.push({ icon: '🎯', title: '记忆专家', desc: `掌握${masteredWords}个单词` });
    }
    
    if (favoriteWords.length >= 10) {
      achievements.push({ icon: '❤️', title: '收藏家', desc: `收藏${favoriteWords.length}个单词` });
    }
    
    if (achievements.length === 0) {
      achievements.push({ icon: '🌟', title: '新手上路', desc: '开始你的学习之旅' });
    }
    
    return achievements;
  };
  
  const achievements = getAchievements();
  
  // 格式化学习时间
  const formatStudyTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes}分钟`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}小时${remainingMinutes > 0 ? remainingMinutes + '分钟' : ''}`;
  };
  
  // 获取学习建议
  const getStudyAdvice = () => {
    if (needReviewWords > 10) {
      return {
        type: 'warning',
        message: `你有${needReviewWords}个单词需要复习，建议优先复习这些单词。`
      };
    }
    
    if (averageMastery < 30) {
      return {
        type: 'info',
        message: '建议放慢学习节奏，多花时间理解每个单词的含义和用法。'
      };
    }
    
    if (stats.studyStreak === 0) {
      return {
        type: 'encourage',
        message: '开始你的学习之旅吧！每天坚持学习几个单词，积少成多。'
      };
    }
    
    return {
      type: 'success',
      message: '学习状态很好！继续保持这个节奏，你会取得更大的进步。'
    };
  };
  
  const advice = getStudyAdvice();
  
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
            
            <h1 className="text-xl font-bold text-gray-800">学习统计</h1>
            
            <button
              onClick={resetProgress}
              className="text-sm text-red-600 hover:text-red-700 transition-colors"
            >
              重置数据
            </button>
          </div>
        </div>
      </div>
      
      {/* 主要内容 */}
      <div className="max-w-4xl mx-auto p-4 pb-8">
        {/* 总体统计卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {stats.totalWordsStudied}
            </div>
            <div className="text-sm text-gray-600">已学单词</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {masteredWords}
            </div>
            <div className="text-sm text-gray-600">已掌握</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {stats.studyStreak}
            </div>
            <div className="text-sm text-gray-600">连续天数</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {averageMastery}%
            </div>
            <div className="text-sm text-gray-600">平均掌握度</div>
          </div>
        </div>
        
        {/* 学习进度 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            学习进度
          </h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>总体进度</span>
                <span>{studiedWords} / {totalWords} ({Math.round((studiedWords / totalWords) * 100)}%)</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(studiedWords / totalWords) * 100}%` }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>掌握程度</span>
                <span>{averageMastery}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${averageMastery}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600">{stats.wordsKnown}</div>
              <div className="text-sm text-gray-600">认识</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-orange-600">{stats.wordsUnknown}</div>
              <div className="text-sm text-gray-600">不认识</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-red-600">{needReviewWords}</div>
              <div className="text-sm text-gray-600">需复习</div>
            </div>
          </div>
        </div>
        
        {/* 学习成就 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            学习成就
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                <div className="text-2xl">{achievement.icon}</div>
                <div>
                  <div className="font-semibold text-gray-800">{achievement.title}</div>
                  <div className="text-sm text-gray-600">{achievement.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 学习时间统计 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            学习时间
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-2">
                {formatStudyTime(stats.totalStudyTime)}
              </div>
              <div className="text-sm text-gray-600">总学习时间</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">
                {stats.studyStreak}
              </div>
              <div className="text-sm text-gray-600">连续学习天数</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {stats.lastStudyDate ? new Date(stats.lastStudyDate).toLocaleDateString() : '未开始'}
              </div>
              <div className="text-sm text-gray-600">最后学习日期</div>
            </div>
          </div>
        </div>
        
        {/* 收藏单词 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-600" />
            收藏单词
          </h2>
          
          {favoriteWords.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {favoriteWords.slice(0, 6).map(wordId => {
                const word = toeflWords.find(w => w.id === wordId);
                if (!word) return null;
                
                return (
                  <div key={wordId} className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="font-semibold text-gray-800">{word.word}</div>
                    <div className="text-sm text-gray-600">{word.translation}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Heart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>还没有收藏的单词</p>
              <p className="text-sm">在学习过程中点击心形图标收藏单词</p>
            </div>
          )}
          
          {favoriteWords.length > 6 && (
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500">
                还有 {favoriteWords.length - 6} 个收藏单词...
              </span>
            </div>
          )}
        </div>
        
        {/* 学习建议 */}
        <div className={`rounded-2xl shadow-lg p-6 ${
          advice.type === 'warning' ? 'bg-orange-50 border border-orange-200' :
          advice.type === 'info' ? 'bg-blue-50 border border-blue-200' :
          advice.type === 'success' ? 'bg-green-50 border border-green-200' :
          'bg-purple-50 border border-purple-200'
        }`}>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Target className={`w-5 h-5 ${
              advice.type === 'warning' ? 'text-orange-600' :
              advice.type === 'info' ? 'text-blue-600' :
              advice.type === 'success' ? 'text-green-600' :
              'text-purple-600'
            }`} />
            学习建议
          </h2>
          
          <p className="text-gray-700 leading-relaxed">
            {advice.message}
          </p>
        </div>
      </div>
    </div>
  );
};