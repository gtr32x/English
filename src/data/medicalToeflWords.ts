import { Word } from '../types/word';

// 医学和健康类托福词汇 (ID: 16001-16030)
export const medicalToeflWords: Word[] = [
  {
    id: 16001,
    word: 'diagnosis',
    pronunciation: '/ˌdaɪəɡˈnoʊsɪs/',
    partOfSpeech: 'noun',
    definition: 'the identification of the nature of an illness or other problem',
    translation: '诊断',
    example: 'Early diagnosis of cancer can improve treatment outcomes.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['identification', 'detection', 'assessment'],
    antonyms: ['misdiagnosis', 'ignorance']
  },
  {
    id: 16002,
    word: 'treatment',
    pronunciation: '/ˈtriːtmənt/',
    partOfSpeech: 'noun',
    definition: 'medical care given to a patient for an illness or injury',
    translation: '治疗，处理',
    example: 'The new treatment shows promising results for diabetes.',
    difficulty: 'beginner',
    frequency: 'very_high',
    synonyms: ['therapy', 'care', 'medication'],
    antonyms: ['neglect', 'abandonment']
  },
  {
    id: 16003,
    word: 'symptom',
    pronunciation: '/ˈsɪmptəm/',
    partOfSpeech: 'noun',
    definition: 'a physical or mental feature indicating a condition of disease',
    translation: '症状',
    example: 'Fever is a common symptom of infection.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['sign', 'indication', 'manifestation'],
    antonyms: ['health', 'wellness']
  },
  {
    id: 16004,
    word: 'prevention',
    pronunciation: '/prɪˈvenʃən/',
    partOfSpeech: 'noun',
    definition: 'the action of stopping something from happening or arising',
    translation: '预防，防止',
    example: 'Prevention is better than cure in healthcare.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['avoidance', 'protection', 'precaution'],
    antonyms: ['causation', 'promotion']
  },
  {
    id: 16005,
    word: 'vaccination',
    pronunciation: '/ˌvæksɪˈneɪʃən/',
    partOfSpeech: 'noun',
    definition: 'treatment with a vaccine to produce immunity against a disease',
    translation: '疫苗接种',
    example: 'Vaccination programs have eliminated many diseases.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['immunization', 'inoculation', 'injection'],
    antonyms: ['exposure', 'infection']
  },
  {
    id: 16006,
    word: 'immunity',
    pronunciation: '/ɪˈmjuːnəti/',
    partOfSpeech: 'noun',
    definition: 'the ability of an organism to resist a particular infection',
    translation: '免疫力',
    example: 'Natural immunity develops after recovering from certain diseases.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['resistance', 'protection', 'defense'],
    antonyms: ['susceptibility', 'vulnerability']
  },
  {
    id: 16007,
    word: 'infection',
    pronunciation: '/ɪnˈfekʃən/',
    partOfSpeech: 'noun',
    definition: 'the process of infecting or the state of being infected',
    translation: '感染',
    example: 'Proper hygiene can prevent bacterial infections.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['contamination', 'disease', 'contagion'],
    antonyms: ['sterility', 'cleanliness']
  },
  {
    id: 16008,
    word: 'antibiotic',
    pronunciation: '/ˌæntibaɪˈɑːtɪk/',
    partOfSpeech: 'noun',
    definition: 'a medicine that inhibits the growth of or destroys microorganisms',
    translation: '抗生素',
    example: 'Antibiotics are effective against bacterial infections.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['antimicrobial', 'bactericide', 'medicine'],
    antonyms: ['probiotic', 'pathogen']
  },
  {
    id: 16009,
    word: 'surgery',
    pronunciation: '/ˈsɜːrdʒəri/',
    partOfSpeech: 'noun',
    definition: 'the treatment of injuries or disorders by incision or manipulation',
    translation: '外科手术',
    example: 'Heart surgery requires highly skilled surgeons.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['operation', 'procedure', 'intervention'],
    antonyms: ['conservative treatment', 'medication']
  },
  {
    id: 16010,
    word: 'anesthesia',
    pronunciation: '/ˌænəsˈθiːziə/',
    partOfSpeech: 'noun',
    definition: 'insensitivity to pain, especially artificially induced',
    translation: '麻醉',
    example: 'General anesthesia is used for major surgical procedures.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['numbness', 'sedation', 'unconsciousness'],
    antonyms: ['consciousness', 'sensation']
  },
  {
    id: 16011,
    word: 'rehabilitation',
    pronunciation: '/ˌriːhəˌbɪlɪˈteɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the action of restoring someone to health or normal life',
    translation: '康复，复健',
    example: 'Physical rehabilitation helps stroke patients regain mobility.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['recovery', 'restoration', 'therapy'],
    antonyms: ['deterioration', 'decline']
  },
  {
    id: 16012,
    word: 'chronic',
    pronunciation: '/ˈkrɑːnɪk/',
    partOfSpeech: 'adjective',
    definition: 'persisting for a long time or constantly recurring',
    translation: '慢性的，长期的',
    example: 'Chronic diseases require ongoing medical management.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['persistent', 'long-term', 'ongoing'],
    antonyms: ['acute', 'temporary', 'short-term']
  },
  {
    id: 16013,
    word: 'acute',
    pronunciation: '/əˈkjuːt/',
    partOfSpeech: 'adjective',
    definition: 'having a sudden onset, sharp rise, and short course',
    translation: '急性的，严重的',
    example: 'Acute appendicitis requires immediate surgical intervention.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['severe', 'sudden', 'intense'],
    antonyms: ['chronic', 'mild', 'gradual']
  },
  {
    id: 16014,
    word: 'epidemic',
    pronunciation: '/ˌepɪˈdemɪk/',
    partOfSpeech: 'noun',
    definition: 'a widespread occurrence of an infectious disease in a community',
    translation: '流行病',
    example: 'The flu epidemic affected thousands of people.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['outbreak', 'plague', 'pandemic'],
    antonyms: ['endemic', 'sporadic']
  },
  {
    id: 16015,
    word: 'pathogen',
    pronunciation: '/ˈpæθədʒən/',
    partOfSpeech: 'noun',
    definition: 'a bacterium, virus, or other microorganism that can cause disease',
    translation: '病原体',
    example: 'Scientists study pathogens to develop new treatments.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['microbe', 'germ', 'virus'],
    antonyms: ['probiotic', 'beneficial bacteria']
  },
  {
    id: 16016,
    word: 'metabolism',
    pronunciation: '/məˈtæbəlɪzəm/',
    partOfSpeech: 'noun',
    definition: 'the chemical processes that occur within a living organism',
    translation: '新陈代谢',
    example: 'Exercise can boost your metabolism and help with weight loss.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['biochemistry', 'physiology', 'processing'],
    antonyms: ['stasis', 'inactivity']
  },
  {
    id: 16017,
    word: 'nutrition',
    pronunciation: '/nuˈtrɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the process of providing or obtaining food necessary for health',
    translation: '营养，营养学',
    example: 'Good nutrition is essential for proper growth and development.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['nourishment', 'diet', 'sustenance'],
    antonyms: ['malnutrition', 'starvation']
  },
  {
    id: 16018,
    word: 'hormone',
    pronunciation: '/ˈhɔːrmoʊn/',
    partOfSpeech: 'noun',
    definition: 'a regulatory substance produced in an organism',
    translation: '激素，荷尔蒙',
    example: 'Insulin is a hormone that regulates blood sugar levels.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['chemical messenger', 'secretion', 'regulator'],
    antonyms: ['inhibitor', 'blocker']
  },
  {
    id: 16019,
    word: 'cardiovascular',
    pronunciation: '/ˌkɑːrdioʊˈvæskjələr/',
    partOfSpeech: 'adjective',
    definition: 'relating to the heart and blood vessels',
    translation: '心血管的',
    example: 'Regular exercise improves cardiovascular health.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['cardiac', 'circulatory', 'vascular'],
    antonyms: ['non-cardiac', 'peripheral']
  },
  {
    id: 16020,
    word: 'respiratory',
    pronunciation: '/ˈrespərətɔːri/',
    partOfSpeech: 'adjective',
    definition: 'relating to breathing or the organs of respiration',
    translation: '呼吸的，呼吸系统的',
    example: 'Smoking can cause serious respiratory problems.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['breathing', 'pulmonary', 'lung-related'],
    antonyms: ['non-respiratory', 'cardiac']
  },
  {
    id: 16021,
    word: 'neurological',
    pronunciation: '/ˌnʊrəˈlɑːdʒɪkəl/',
    partOfSpeech: 'adjective',
    definition: 'relating to the anatomy, functions, and diseases of nerves',
    translation: '神经的，神经学的',
    example: 'Alzheimer\'s disease is a neurological disorder.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['neural', 'nervous system', 'brain-related'],
    antonyms: ['non-neurological', 'peripheral']
  },
  {
    id: 16022,
    word: 'pharmaceutical',
    pronunciation: '/ˌfɑːrməˈsuːtɪkəl/',
    partOfSpeech: 'adjective',
    definition: 'relating to medicinal drugs, or their preparation, use, or sale',
    translation: '药物的，制药的',
    example: 'The pharmaceutical industry develops new medications.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['medicinal', 'drug-related', 'therapeutic'],
    antonyms: ['non-medicinal', 'natural']
  },
  {
    id: 16023,
    word: 'dosage',
    pronunciation: '/ˈdoʊsɪdʒ/',
    partOfSpeech: 'noun',
    definition: 'the size or frequency of a dose of a medicine or drug',
    translation: '剂量，用量',
    example: 'The doctor adjusted the dosage based on the patient\'s response.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['dose', 'amount', 'quantity'],
    antonyms: ['overdose', 'underdose']
  },
  {
    id: 16024,
    word: 'side effect',
    pronunciation: '/ˈsaɪd ɪˌfekt/',
    partOfSpeech: 'noun',
    definition: 'a secondary, typically undesirable effect of a drug or medical treatment',
    translation: '副作用',
    example: 'Drowsiness is a common side effect of this medication.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['adverse effect', 'reaction', 'complication'],
    antonyms: ['benefit', 'therapeutic effect']
  },
  {
    id: 16025,
    word: 'prognosis',
    pronunciation: '/prɑːɡˈnoʊsɪs/',
    partOfSpeech: 'noun',
    definition: 'the likely course of a disease or ailment',
    translation: '预后，预测',
    example: 'The patient\'s prognosis is good with proper treatment.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['outlook', 'forecast', 'prediction'],
    antonyms: ['uncertainty', 'unknown outcome']
  },
  {
    id: 16026,
    word: 'clinical',
    pronunciation: '/ˈklɪnɪkəl/',
    partOfSpeech: 'adjective',
    definition: 'relating to the observation and treatment of actual patients',
    translation: '临床的',
    example: 'Clinical trials test the safety and effectiveness of new drugs.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['medical', 'therapeutic', 'practical'],
    antonyms: ['theoretical', 'laboratory']
  },
  {
    id: 16027,
    word: 'therapeutic',
    pronunciation: '/ˌθerəˈpjuːtɪk/',
    partOfSpeech: 'adjective',
    definition: 'relating to the healing of disease',
    translation: '治疗的，有疗效的',
    example: 'Music has therapeutic benefits for mental health.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['healing', 'curative', 'medicinal'],
    antonyms: ['harmful', 'toxic', 'detrimental']
  },
  {
    id: 16028,
    word: 'anatomy',
    pronunciation: '/əˈnætəmi/',
    partOfSpeech: 'noun',
    definition: 'the branch of science concerned with bodily structure',
    translation: '解剖学，解剖',
    example: 'Medical students study human anatomy in detail.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['structure', 'physiology', 'morphology'],
    antonyms: ['function', 'behavior']
  },
  {
    id: 16029,
    word: 'physiology',
    pronunciation: '/ˌfɪziˈɑːlədʒi/',
    partOfSpeech: 'noun',
    definition: 'the branch of biology dealing with functions of living organisms',
    translation: '生理学',
    example: 'Exercise physiology studies how the body responds to physical activity.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['function', 'biology', 'biochemistry'],
    antonyms: ['anatomy', 'structure']
  },
  {
    id: 16030,
    word: 'genetic',
    pronunciation: '/dʒəˈnetɪk/',
    partOfSpeech: 'adjective',
    definition: 'relating to genes or heredity',
    translation: '遗传的，基因的',
    example: 'Genetic factors can influence disease susceptibility.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['hereditary', 'inherited', 'chromosomal'],
    antonyms: ['acquired', 'environmental']
  }
];

// 按医学专科筛选词汇
export const getCardiologyWords = () => 
  medicalToeflWords.filter(word => 
    ['cardiovascular', 'chronic', 'acute'].includes(word.word)
  );

export const getNeurologyWords = () => 
  medicalToeflWords.filter(word => 
    ['neurological', 'rehabilitation', 'chronic'].includes(word.word)
  );

export const getPharmacologyWords = () => 
  medicalToeflWords.filter(word => 
    ['pharmaceutical', 'antibiotic', 'dosage', 'side effect'].includes(word.word)
  );

export const getPublicHealthWords = () => 
  medicalToeflWords.filter(word => 
    ['prevention', 'vaccination', 'epidemic', 'nutrition'].includes(word.word)
  );

// 按频率筛选高频医学词汇
export const getHighFrequencyMedicalWords = () => 
  medicalToeflWords.filter(word => 
    word.frequency === 'very_high' || word.frequency === 'high'
  );

// 按难度筛选医学词汇
export const getAdvancedMedicalWords = () => 
  medicalToeflWords.filter(word => word.difficulty === 'hard');

export const getIntermediateMedicalWords = () => 
  medicalToeflWords.filter(word => word.difficulty === 'medium');

export const getBeginnerMedicalWords = () => 
  medicalToeflWords.filter(word => word.difficulty === 'easy');

// 按治疗类型筛选词汇
export const getTreatmentWords = () => 
  medicalToeflWords.filter(word => 
    ['treatment', 'therapy', 'surgery', 'rehabilitation', 'therapeutic'].includes(word.word)
  );

export const getDiagnosticWords = () => 
  medicalToeflWords.filter(word => 
    ['diagnosis', 'symptom', 'clinical', 'prognosis'].includes(word.word)
  );