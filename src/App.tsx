import React, { useState } from 'react';
import { StudyPage } from './pages/StudyPage';
import { WordDetailPage } from './pages/WordDetailPage';
import { StatsPage } from './pages/StatsPage';
import { useStudyStore } from './store/useStudyStore';
import { Word } from './data/toeflWords';

type AppView = 'study' | 'detail' | 'stats';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('study');
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const { getCurrentWord } = useStudyStore();

  const handleShowDetails = () => {
    const currentWord = getCurrentWord();
    if (currentWord) {
      setSelectedWord(currentWord);
      setCurrentView('detail');
    }
  };

  const handleShowStats = () => {
    setCurrentView('stats');
  };

  const handleBackToStudy = () => {
    setCurrentView('study');
    setSelectedWord(null);
  };

  return (
    <div className="App">
      {currentView === 'study' && (
        <StudyPage 
          onShowDetails={handleShowDetails}
          onShowStats={handleShowStats}
        />
      )}
      
      {currentView === 'detail' && selectedWord && (
        <WordDetailPage 
          word={selectedWord}
          onBack={handleBackToStudy}
        />
      )}
      
      {currentView === 'stats' && (
        <StatsPage 
          onBack={handleBackToStudy}
        />
      )}
    </div>
  );
}

export default App
