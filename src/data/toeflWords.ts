// 托福词汇数据
export interface Word {
  id: number;
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  translation: string;
  examples: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  frequency: number; // 1-5, 5 being most frequent
  synonyms?: string[];
  antonyms?: string[];
  etymology?: string;
}

// 导入扩展词汇
import { extendedToeflWords } from './extendedToeflWords';
import { massiveToeflWords } from './massiveToeflWords';
import { additionalToeflWords } from './additionalToeflWords';
import { comprehensiveToeflWords } from './comprehensiveToeflWords';
import { advancedToeflWords } from './advancedToeflWords';
import { scientificToeflWords } from './scientificToeflWords';
import { academicToeflWords } from './academicToeflWords';
import { businessToeflWords } from './businessToeflWords';
import { literaryToeflWords } from './literaryToeflWords';
import { historicalToeflWords } from './historicalToeflWords';
import { environmentalToeflWords } from './environmentalToeflWords';
import { essentialToeflWords } from './essentialToeflWords';
import { verbToeflWords } from './verbToeflWords';
import { adjectiveToeflWords } from './adjectiveToeflWords';
import { nounToeflWords } from './nounToeflWords';
import { adverbToeflWords } from './adverbToeflWords';
import { phraseToeflWords } from './phraseToeflWords';
import { psychologyToeflWords } from './psychologyToeflWords';
import { medicalToeflWords } from './medicalToeflWords';
import { technologyToeflWords } from './technologyToeflWords';
import { legalToeflWords } from './legalToeflWords';
import { educationToeflWords } from './educationToeflWords';
import { economicsToeflWords } from './economicsToeflWords';
import { artsToeflWords } from './artsToeflWords';
import { environmentToeflWords } from './environmentToeflWords';
import { historyToeflWords } from './historyToeflWords';
import { scienceToeflWords } from './scienceToeflWords';
import { mathPhysicsToeflWords } from './mathPhysicsToeflWords';
import { sociologyToeflWords } from './sociologyToeflWords';
import { linguisticsToeflWords } from './linguisticsToeflWords';

export const baseToeflWords: Word[] = [
  {
    id: 1,
    word: "abandon",
    pronunciation: "/əˈbændən/",
    partOfSpeech: "v.",
    definition: "to give up completely; to desert",
    translation: "放弃；抛弃",
    examples: [
      "The sailors had to abandon the sinking ship.",
      "She decided to abandon her original plan."
    ],
    difficulty: "medium",
    frequency: 4,
    synonyms: ["desert", "forsake", "leave"],
    antonyms: ["keep", "maintain", "continue"]
  },
  {
    id: 2,
    word: "abstract",
    pronunciation: "/ˈæbstrækt/",
    partOfSpeech: "adj.",
    definition: "existing in thought or as an idea but not having a physical existence",
    translation: "抽象的；理论的",
    examples: [
      "Love is an abstract concept.",
      "The painting was very abstract and difficult to understand."
    ],
    difficulty: "hard",
    frequency: 5,
    synonyms: ["theoretical", "conceptual", "intangible"],
    antonyms: ["concrete", "tangible", "physical"]
  },
  {
    id: 3,
    word: "abundant",
    pronunciation: "/əˈbʌndənt/",
    partOfSpeech: "adj.",
    definition: "existing in large quantities; plentiful",
    translation: "丰富的；充裕的",
    examples: [
      "The region has abundant natural resources.",
      "There was abundant evidence to support the theory."
    ],
    difficulty: "medium",
    frequency: 4,
    synonyms: ["plentiful", "copious", "ample"],
    antonyms: ["scarce", "rare", "insufficient"]
  },
  {
    id: 4,
    word: "accelerate",
    pronunciation: "/əkˈseləreɪt/",
    partOfSpeech: "v.",
    definition: "to increase speed; to cause to happen sooner",
    translation: "加速；促进",
    examples: [
      "The car began to accelerate down the highway.",
      "The new policy will accelerate economic growth."
    ],
    difficulty: "medium",
    frequency: 3,
    synonyms: ["speed up", "quicken", "hasten"],
    antonyms: ["decelerate", "slow down", "delay"]
  },
  {
    id: 5,
    word: "accommodate",
    pronunciation: "/əˈkɒmədeɪt/",
    partOfSpeech: "v.",
    definition: "to provide lodging or sufficient space for; to adapt or adjust",
    translation: "容纳；适应；调节",
    examples: [
      "The hotel can accommodate 200 guests.",
      "We need to accommodate different learning styles."
    ],
    difficulty: "hard",
    frequency: 4,
    synonyms: ["house", "lodge", "adapt"],
    antonyms: ["reject", "refuse", "exclude"]
  },
  {
    id: 6,
    word: "accurate",
    pronunciation: "/ˈækjərət/",
    partOfSpeech: "adj.",
    definition: "correct in all details; exact",
    translation: "准确的；精确的",
    examples: [
      "The weather forecast was surprisingly accurate.",
      "Please provide accurate information on the form."
    ],
    difficulty: "medium",
    frequency: 5,
    synonyms: ["precise", "exact", "correct"],
    antonyms: ["inaccurate", "wrong", "imprecise"]
  },
  {
    id: 7,
    word: "achieve",
    pronunciation: "/əˈtʃiːv/",
    partOfSpeech: "v.",
    definition: "to successfully bring about or reach a desired objective",
    translation: "实现；达到；完成",
    examples: [
      "She worked hard to achieve her goals.",
      "The company achieved record profits this year."
    ],
    difficulty: "easy",
    frequency: 5,
    synonyms: ["accomplish", "attain", "reach"],
    antonyms: ["fail", "lose", "miss"]
  },
  {
    id: 8,
    word: "acquire",
    pronunciation: "/əˈkwaɪər/",
    partOfSpeech: "v.",
    definition: "to buy or obtain for oneself; to learn or develop",
    translation: "获得；取得；学到",
    examples: [
      "The museum acquired several new paintings.",
      "Children acquire language naturally."
    ],
    difficulty: "medium",
    frequency: 4,
    synonyms: ["obtain", "gain", "get"],
    antonyms: ["lose", "give up", "surrender"]
  },
  {
    id: 9,
    word: "adapt",
    pronunciation: "/əˈdæpt/",
    partOfSpeech: "v.",
    definition: "to change or adjust to suit new conditions",
    translation: "适应；改编；调整",
    examples: [
      "Animals must adapt to survive in new environments.",
      "The novel was adapted for television."
    ],
    difficulty: "medium",
    frequency: 4,
    synonyms: ["adjust", "modify", "accommodate"],
    antonyms: ["resist", "maintain", "preserve"]
  },
  {
    id: 10,
    word: "adequate",
    pronunciation: "/ˈædɪkwət/",
    partOfSpeech: "adj.",
    definition: "satisfactory or acceptable in quality or quantity",
    translation: "足够的；适当的",
    examples: [
      "The salary is adequate for basic living expenses.",
      "We need adequate preparation for the exam."
    ],
    difficulty: "medium",
    frequency: 4,
    synonyms: ["sufficient", "enough", "satisfactory"],
    antonyms: ["inadequate", "insufficient", "lacking"]
  }
];

// 合并所有词汇数组，包含基础词汇、扩展词汇、大量词汇、额外词汇、全面词汇、高级词汇、科学词汇、学术词汇、商业词汇、文学词汇、历史词汇、环境词汇、必备词汇、动词词汇、形容词词汇、名词词汇、副词词汇、短语词汇、心理学词汇、医学词汇、技术词汇、法律词汇、教育词汇、经济词汇、艺术词汇、环境词汇、历史词汇和科学词汇
export const toeflWords: Word[] = [
  ...baseToeflWords,
  ...extendedToeflWords,
  ...massiveToeflWords,
  ...additionalToeflWords,
  ...comprehensiveToeflWords,
  ...advancedToeflWords,
  ...scientificToeflWords,
  ...academicToeflWords,
  ...businessToeflWords,
  ...literaryToeflWords,
  ...historicalToeflWords,
  ...environmentalToeflWords,
  ...essentialToeflWords,
  ...verbToeflWords,
  ...adjectiveToeflWords,
  ...nounToeflWords,
  ...adverbToeflWords,
  ...phraseToeflWords,
  ...psychologyToeflWords,
  ...medicalToeflWords,
  ...technologyToeflWords,
  ...legalToeflWords,
  ...educationToeflWords,
  ...economicsToeflWords,
  ...artsToeflWords,
  ...environmentToeflWords,
  ...historyToeflWords,
  ...scienceToeflWords,
  ...mathPhysicsToeflWords,
  ...sociologyToeflWords,
  ...linguisticsToeflWords,
  // 继续添加更多托福核心词汇
  {
    id: 31,
    word: "comprehensive",
    pronunciation: "/ˌkɑːmprɪˈhensɪv/",
    partOfSpeech: "adj.",
    definition: "complete and including everything that is necessary",
    translation: "全面的；综合的；详尽的",
    examples: [
      "The report provides a comprehensive analysis.",
      "Students need comprehensive health insurance."
    ],
    difficulty: "hard",
    frequency: 4,
    synonyms: ["complete", "thorough", "extensive"],
    antonyms: ["partial", "incomplete", "limited"]
  },
  {
    id: 32,
    word: "comprise",
    pronunciation: "/kəmˈpraɪz/",
    partOfSpeech: "v.",
    definition: "to consist of; to include",
    translation: "包含；由...组成",
    examples: [
      "The committee comprises five members.",
      "The course comprises both theory and practice."
    ],
    difficulty: "medium",
    frequency: 4,
    synonyms: ["include", "contain", "consist of"],
    antonyms: ["exclude", "omit", "lack"]
  },
  {
    id: 33,
    word: "conceive",
    pronunciation: "/kənˈsiːv/",
    partOfSpeech: "v.",
    definition: "to form an idea; to imagine; to become pregnant",
    translation: "构想；设想；怀孕",
    examples: [
      "It's hard to conceive of life without technology.",
      "The artist conceived a brilliant new design."
    ],
    difficulty: "hard",
    frequency: 3,
    synonyms: ["imagine", "envision", "think up"],
    antonyms: ["misunderstand", "ignore", "reject"]
  },
  {
    id: 34,
    word: "conduct",
    pronunciation: "/kənˈdʌkt/",
    partOfSpeech: "v./n.",
    definition: "to organize and carry out; behavior",
    translation: "进行；实施；行为；品行",
    examples: [
      "The professor will conduct the experiment.",
      "His conduct was exemplary."
    ],
    difficulty: "medium",
    frequency: 5,
    synonyms: ["carry out", "perform", "behavior"],
    antonyms: ["neglect", "abandon", "misbehavior"]
  },
  {
    id: 35,
    word: "consecutive",
    pronunciation: "/kənˈsekjətɪv/",
    partOfSpeech: "adj.",
    definition: "following each other in uninterrupted succession",
    translation: "连续的；连贯的",
    examples: [
      "It rained for five consecutive days.",
      "She won three consecutive championships."
    ],
    difficulty: "medium",
    frequency: 3,
    synonyms: ["successive", "continuous", "sequential"],
    antonyms: ["interrupted", "sporadic", "random"]
  },
  {
    id: 36,
    word: "constitute",
    pronunciation: "/ˈkɑːnstɪtuːt/",
    partOfSpeech: "v.",
    definition: "to be a part of a whole; to establish formally",
    translation: "构成；组成；设立",
    examples: [
      "Women constitute 60% of the workforce.",
      "This action constitutes a violation of the rules."
    ],
    difficulty: "hard",
    frequency: 4,
    synonyms: ["form", "make up", "establish"],
    antonyms: ["destroy", "dissolve", "dismantle"]
  },
  {
    id: 37,
    word: "contemporary",
    pronunciation: "/kənˈtempəreri/",
    partOfSpeech: "adj./n.",
    definition: "belonging to the present time; a person living at the same time",
    translation: "当代的；现代的；同时代的人",
    examples: [
      "Contemporary art is often controversial.",
      "Shakespeare and Marlowe were contemporaries."
    ],
    difficulty: "hard",
    frequency: 4,
    synonyms: ["modern", "current", "present-day"],
    antonyms: ["ancient", "historical", "outdated"]
  },
  {
    id: 38,
    word: "contradict",
    pronunciation: "/ˌkɑːntrəˈdɪkt/",
    partOfSpeech: "v.",
    definition: "to assert the opposite of; to be inconsistent with",
    translation: "反驳；与...矛盾",
    examples: [
      "Don't contradict your teacher in public.",
      "The evidence contradicts his testimony."
    ],
    difficulty: "medium",
    frequency: 3,
    synonyms: ["oppose", "deny", "refute"],
    antonyms: ["agree", "confirm", "support"]
  },
  {
    id: 39,
    word: "controversy",
    pronunciation: "/ˈkɑːntrəvɜːrsi/",
    partOfSpeech: "n.",
    definition: "disagreement or argument about something important",
    translation: "争议；争论；辩论",
    examples: [
      "The new policy sparked controversy.",
      "He avoided getting involved in the controversy."
    ],
    difficulty: "medium",
    frequency: 4,
    synonyms: ["debate", "dispute", "argument"],
    antonyms: ["agreement", "consensus", "harmony"]
  },
  {
    id: 40,
    word: "conventional",
    pronunciation: "/kənˈvenʃənl/",
    partOfSpeech: "adj.",
    definition: "based on what is generally done or believed",
    translation: "传统的；常规的；惯例的",
    examples: [
      "She prefers conventional teaching methods.",
      "His ideas challenge conventional wisdom."
    ],
    difficulty: "medium",
    frequency: 4,
    synonyms: ["traditional", "standard", "orthodox"],
    antonyms: ["unconventional", "innovative", "radical"]
  }
];

// 获取随机单词
export const getRandomWords = (count: number = 5): Word[] => {
  const shuffled = [...toeflWords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// 根据难度筛选单词
export const getWordsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): Word[] => {
  return toeflWords.filter(word => word.difficulty === difficulty);
};

// 根据ID获取单词
export const getWordById = (id: number): Word | undefined => {
  return toeflWords.find(word => word.id === id);
};

// 获取词汇总数
export const getTotalWordCount = (): number => {
  return toeflWords.length;
};

// 按字母顺序获取单词
export const getWordsSorted = (): Word[] => {
  return [...toeflWords].sort((a, b) => a.word.localeCompare(b.word));
};

// 获取高频词汇 (频率 >= 4)
export const getHighFrequencyWords = (): Word[] => {
  return toeflWords.filter(word => word.frequency >= 4);
};

// 搜索单词
export const searchWords = (query: string): Word[] => {
  const lowerQuery = query.toLowerCase();
  return toeflWords.filter(word => 
    word.word.toLowerCase().includes(lowerQuery) ||
    word.translation.includes(query) ||
    word.definition.toLowerCase().includes(lowerQuery)
  );
};