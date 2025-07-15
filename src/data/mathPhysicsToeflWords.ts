import { Word } from '../types/word';

// 数学和物理类托福词汇 (ID: 25001-25030)
export const mathPhysicsToeflWords: Word[] = [
  {
    id: 25001,
    word: 'equation',
    pronunciation: '/ɪˈkweɪʒən/',
    partOfSpeech: 'noun',
    definition: 'a statement that the values of two mathematical expressions are equal',
    translation: '方程式',
    example: 'Students learned to solve quadratic equations in algebra class.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['formula', 'mathematical statement', 'expression'],
    antonyms: ['inequality', 'approximation', 'estimate']
  },
  {
    id: 25002,
    word: 'variable',
    pronunciation: '/ˈveriəbəl/',
    partOfSpeech: 'noun',
    definition: 'a quantity that may assume any one of a set of values',
    translation: '变量',
    example: 'In the equation y = 2x + 3, both x and y are variables.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['unknown', 'parameter', 'factor'],
    antonyms: ['constant', 'fixed value', 'invariable']
  },
  {
    id: 25003,
    word: 'function',
    pronunciation: '/ˈfʌŋkʃən/',
    partOfSpeech: 'noun',
    definition: 'a relation between a set of inputs and outputs',
    translation: '函数',
    example: 'The function f(x) = x² represents a parabola.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['mapping', 'relation', 'correspondence'],
    antonyms: ['constant', 'fixed relationship']
  },
  {
    id: 25004,
    word: 'derivative',
    pronunciation: '/dɪˈrɪvətɪv/',
    partOfSpeech: 'noun',
    definition: 'a measure of how a function changes as its input changes',
    translation: '导数',
    example: 'Calculus students study derivatives to understand rates of change.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['rate of change', 'slope', 'differential'],
    antonyms: ['integral', 'antiderivative', 'accumulation']
  },
  {
    id: 25005,
    word: 'integral',
    pronunciation: '/ˈɪntɪɡrəl/',
    partOfSpeech: 'noun',
    definition: 'a function of which a given function is the derivative',
    translation: '积分',
    example: 'Integration is the reverse process of differentiation.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['antiderivative', 'area under curve', 'accumulation'],
    antonyms: ['derivative', 'differential', 'rate of change']
  },
  {
    id: 25006,
    word: 'probability',
    pronunciation: '/ˌprɑːbəˈbɪləti/',
    partOfSpeech: 'noun',
    definition: 'the extent to which an event is likely to occur',
    translation: '概率',
    example: 'The probability of rolling a six on a die is 1/6.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['likelihood', 'chance', 'odds'],
    antonyms: ['certainty', 'impossibility', 'determinism']
  },
  {
    id: 25007,
    word: 'statistics',
    pronunciation: '/stəˈtɪstɪks/',
    partOfSpeech: 'noun',
    definition: 'the practice of collecting and analyzing numerical data',
    translation: '统计学',
    example: 'Statistics help researchers understand patterns in data.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['data analysis', 'numerical study', 'quantitative analysis'],
    antonyms: ['qualitative analysis', 'subjective assessment']
  },
  {
    id: 25008,
    word: 'geometry',
    pronunciation: '/dʒiˈɑːmətri/',
    partOfSpeech: 'noun',
    definition: 'the branch of mathematics concerned with properties of space',
    translation: '几何学',
    example: 'Euclidean geometry studies shapes and their properties.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['spatial mathematics', 'shape study', 'geometric analysis'],
    antonyms: ['algebra', 'arithmetic', 'calculus']
  },
  {
    id: 25009,
    word: 'theorem',
    pronunciation: '/ˈθiːərəm/',
    partOfSpeech: 'noun',
    definition: 'a general proposition not self-evident but proved by reasoning',
    translation: '定理',
    example: 'The Pythagorean theorem relates the sides of a right triangle.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['mathematical principle', 'proven statement', 'mathematical law'],
    antonyms: ['conjecture', 'hypothesis', 'assumption']
  },
  {
    id: 25010,
    word: 'algorithm',
    pronunciation: '/ˈælɡərɪðəm/',
    partOfSpeech: 'noun',
    definition: 'a process or set of rules to be followed in calculations',
    translation: '算法',
    example: 'Computer scientists design algorithms to solve complex problems.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['procedure', 'method', 'systematic approach'],
    antonyms: ['random process', 'intuitive approach', 'trial and error']
  },
  {
    id: 25011,
    word: 'velocity',
    pronunciation: '/vəˈlɑːsəti/',
    partOfSpeech: 'noun',
    definition: 'the speed of something in a given direction',
    translation: '速度',
    example: 'The car\'s velocity increased as it went down the hill.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['speed', 'rate', 'pace'],
    antonyms: ['stillness', 'rest', 'immobility']
  },
  {
    id: 25012,
    word: 'acceleration',
    pronunciation: '/ækˌseləˈreɪʃən/',
    partOfSpeech: 'noun',
    definition: 'increase in the rate or speed of something',
    translation: '加速度',
    example: 'Gravity causes acceleration of falling objects.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['speeding up', 'rate increase', 'momentum gain'],
    antonyms: ['deceleration', 'slowing down', 'constant speed']
  },
  {
    id: 25013,
    word: 'momentum',
    pronunciation: '/moʊˈmentəm/',
    partOfSpeech: 'noun',
    definition: 'the quantity of motion of a moving body',
    translation: '动量',
    example: 'A heavy truck has more momentum than a small car at the same speed.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['inertia', 'force', 'impetus'],
    antonyms: ['stillness', 'rest', 'static state']
  },
  {
    id: 25014,
    word: 'energy',
    pronunciation: '/ˈenərdʒi/',
    partOfSpeech: 'noun',
    definition: 'the capacity for doing work',
    translation: '能量',
    example: 'Kinetic energy is the energy of motion.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['power', 'force', 'strength'],
    antonyms: ['inertia', 'weakness', 'exhaustion']
  },
  {
    id: 25015,
    word: 'force',
    pronunciation: '/fɔːrs/',
    partOfSpeech: 'noun',
    definition: 'strength or energy as an attribute of physical action',
    translation: '力',
    example: 'Newton\'s laws describe the relationship between force and motion.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['power', 'strength', 'pressure'],
    antonyms: ['weakness', 'gentleness', 'passivity']
  },
  {
    id: 25016,
    word: 'gravity',
    pronunciation: '/ˈɡrævəti/',
    partOfSpeech: 'noun',
    definition: 'the force that attracts a body toward the center of the earth',
    translation: '重力',
    example: 'Gravity keeps objects on the Earth\'s surface.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['gravitational force', 'attraction', 'pull'],
    antonyms: ['weightlessness', 'levitation', 'anti-gravity']
  },
  {
    id: 25017,
    word: 'friction',
    pronunciation: '/ˈfrɪkʃən/',
    partOfSpeech: 'noun',
    definition: 'the resistance that one surface encounters when moving over another',
    translation: '摩擦力',
    example: 'Friction between tires and road helps cars stop.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['resistance', 'drag', 'opposition'],
    antonyms: ['smoothness', 'lubrication', 'frictionless']
  },
  {
    id: 25018,
    word: 'wave',
    pronunciation: '/weɪv/',
    partOfSpeech: 'noun',
    definition: 'a disturbance that travels through space and matter',
    translation: '波',
    example: 'Sound travels through air as pressure waves.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['oscillation', 'vibration', 'undulation'],
    antonyms: ['stillness', 'calm', 'steady state']
  },
  {
    id: 25019,
    word: 'frequency',
    pronunciation: '/ˈfriːkwənsi/',
    partOfSpeech: 'noun',
    definition: 'the rate at which something occurs over a particular period',
    translation: '频率',
    example: 'Radio stations broadcast at different frequencies.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['rate', 'occurrence', 'periodicity'],
    antonyms: ['rarity', 'infrequency', 'irregularity']
  },
  {
    id: 25020,
    word: 'amplitude',
    pronunciation: '/ˈæmplɪtuːd/',
    partOfSpeech: 'noun',
    definition: 'the maximum extent of a vibration or oscillation',
    translation: '振幅',
    example: 'The amplitude of a sound wave determines its loudness.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['magnitude', 'extent', 'range'],
    antonyms: ['minimum', 'baseline', 'zero point']
  },
  {
    id: 25021,
    word: 'wavelength',
    pronunciation: '/ˈweɪvleŋθ/',
    partOfSpeech: 'noun',
    definition: 'the distance between successive crests of a wave',
    translation: '波长',
    example: 'Different colors of light have different wavelengths.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['wave distance', 'periodic length', 'cycle distance'],
    antonyms: ['frequency', 'wave speed', 'amplitude']
  },
  {
    id: 25022,
    word: 'electromagnetic',
    pronunciation: '/ɪˌlektroʊmæɡˈnetɪk/',
    partOfSpeech: 'adjective',
    definition: 'relating to the interrelation of electric and magnetic fields',
    translation: '电磁的',
    example: 'Light is a form of electromagnetic radiation.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['electric-magnetic', 'EM', 'electrodynamic'],
    antonyms: ['mechanical', 'gravitational', 'nuclear']
  },
  {
    id: 25023,
    word: 'radiation',
    pronunciation: '/ˌreɪdiˈeɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the emission of energy as electromagnetic waves or particles',
    translation: '辐射',
    example: 'Solar radiation provides energy for photosynthesis.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['emission', 'energy waves', 'electromagnetic energy'],
    antonyms: ['absorption', 'containment', 'shielding']
  },
  {
    id: 25024,
    word: 'quantum',
    pronunciation: '/ˈkwɑːntəm/',
    partOfSpeech: 'noun',
    definition: 'a discrete quantity of energy proportional in magnitude to frequency',
    translation: '量子',
    example: 'Quantum mechanics describes the behavior of subatomic particles.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['energy packet', 'discrete unit', 'photon'],
    antonyms: ['continuous energy', 'classical physics', 'macroscopic']
  },
  {
    id: 25025,
    word: 'relativity',
    pronunciation: '/ˌreləˈtɪvəti/',
    partOfSpeech: 'noun',
    definition: 'the dependence of various physical phenomena on relative motion',
    translation: '相对论',
    example: 'Einstein\'s theory of relativity changed our understanding of space and time.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['relative motion theory', 'space-time theory', 'Einstein\'s theory'],
    antonyms: ['absolute motion', 'classical mechanics', 'Newtonian physics']
  },
  {
    id: 25026,
    word: 'thermodynamics',
    pronunciation: '/ˌθɜːrmoʊdaɪˈnæmɪks/',
    partOfSpeech: 'noun',
    definition: 'the branch of physical science that deals with heat and temperature',
    translation: '热力学',
    example: 'The laws of thermodynamics govern energy transfer in systems.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['heat science', 'thermal physics', 'energy dynamics'],
    antonyms: ['static systems', 'cold physics', 'non-thermal']
  },
  {
    id: 25027,
    word: 'entropy',
    pronunciation: '/ˈentrəpi/',
    partOfSpeech: 'noun',
    definition: 'a measure of the disorder or randomness in a system',
    translation: '熵',
    example: 'According to thermodynamics, entropy in an isolated system always increases.',
    difficulty: 'advanced',
    frequency: 'low',
    synonyms: ['disorder', 'randomness', 'chaos measure'],
    antonyms: ['order', 'organization', 'structure']
  },
  {
    id: 25028,
    word: 'plasma',
    pronunciation: '/ˈplæzmə/',
    partOfSpeech: 'noun',
    definition: 'an ionized gas consisting of positive ions and free electrons',
    translation: '等离子体',
    example: 'Stars are made of plasma at extremely high temperatures.',
    difficulty: 'advanced',
    frequency: 'low',
    synonyms: ['ionized gas', 'fourth state of matter', 'charged particles'],
    antonyms: ['solid', 'liquid', 'gas']
  },
  {
    id: 25029,
    word: 'hypothesis',
    pronunciation: '/haɪˈpɑːθəsɪs/',
    partOfSpeech: 'noun',
    definition: 'a supposition or proposed explanation made on limited evidence',
    translation: '假设',
    example: 'Scientists test their hypothesis through careful experimentation.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['theory', 'proposition', 'conjecture'],
    antonyms: ['fact', 'proven law', 'established truth']
  },
  {
    id: 25030,
    word: 'coefficient',
    pronunciation: '/ˌkoʊɪˈfɪʃənt/',
    partOfSpeech: 'noun',
    definition: 'a numerical or constant quantity placed before a variable',
    translation: '系数',
    example: 'In the equation 3x + 2y = 5, the coefficients are 3 and 2.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['multiplier', 'factor', 'constant'],
    antonyms: ['variable', 'unknown', 'changing value']
  }
];

// 按数学分支筛选词汇
export const getAlgebraWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['equation', 'variable', 'function', 'coefficient'].includes(word.word)
  );

export const getCalculusWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['derivative', 'integral', 'function'].includes(word.word)
  );

export const getGeometryWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['geometry', 'theorem'].includes(word.word)
  );

export const getStatisticsWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['statistics', 'probability'].includes(word.word)
  );

// 按物理分支筛选词汇
export const getMechanicsWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['velocity', 'acceleration', 'momentum', 'force', 'gravity', 'friction'].includes(word.word)
  );

export const getWavePhysicsWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['wave', 'frequency', 'amplitude', 'wavelength'].includes(word.word)
  );

export const getElectromagnetismWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['electromagnetic', 'radiation'].includes(word.word)
  );

export const getModernPhysicsWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['quantum', 'relativity', 'plasma'].includes(word.word)
  );

export const getThermodynamicsWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['thermodynamics', 'entropy', 'energy'].includes(word.word)
  );

// 按计算科学筛选词汇
export const getComputationalWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['algorithm', 'function', 'variable'].includes(word.word)
  );

// 按频率筛选数学物理词汇
export const getHighFrequencyMathPhysicsWords = () => 
  mathPhysicsToeflWords.filter(word => 
    word.frequency === 'very_high' || word.frequency === 'high'
  );

// 按难度筛选数学物理词汇
export const getAdvancedMathPhysicsWords = () => 
  mathPhysicsToeflWords.filter(word => word.difficulty === 'advanced');

export const getIntermediateMathPhysicsWords = () => 
  mathPhysicsToeflWords.filter(word => word.difficulty === 'intermediate');

export const getBeginnerMathPhysicsWords = () => 
  mathPhysicsToeflWords.filter(word => word.difficulty === 'beginner');

// 按基础概念筛选词汇
export const getBasicMathWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['equation', 'variable', 'function', 'probability', 'statistics'].includes(word.word)
  );

export const getBasicPhysicsWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['energy', 'force', 'velocity', 'gravity', 'wave'].includes(word.word)
  );

// 按理论物理筛选词汇
export const getTheoreticalPhysicsWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['quantum', 'relativity', 'thermodynamics', 'entropy'].includes(word.word)
  );

// 按应用数学筛选词汇
export const getAppliedMathWords = () => 
  mathPhysicsToeflWords.filter(word => 
    ['algorithm', 'statistics', 'probability', 'function'].includes(word.word)
  );