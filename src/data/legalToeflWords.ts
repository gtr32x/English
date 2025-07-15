import { Word } from '../types/word';

// 法律和政治类托福词汇 (ID: 18001-18030)
export const legalToeflWords: Word[] = [
  {
    id: 18001,
    word: 'constitution',
    pronunciation: '/ˌkɑːnstɪˈtuːʃən/',
    partOfSpeech: 'noun',
    definition: 'a body of fundamental principles or established precedents according to which a state is governed',
    translation: '宪法',
    example: 'The constitution guarantees fundamental rights to all citizens.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['charter', 'fundamental law', 'basic law'],
    antonyms: ['anarchy', 'lawlessness']
  },
  {
    id: 18002,
    word: 'legislation',
    pronunciation: '/ˌledʒɪsˈleɪʃən/',
    partOfSpeech: 'noun',
    definition: 'laws, considered collectively',
    translation: '立法，法律',
    example: 'New legislation was passed to protect consumer rights.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['laws', 'statutes', 'regulations'],
    antonyms: ['lawlessness', 'anarchy']
  },
  {
    id: 18003,
    word: 'jurisdiction',
    pronunciation: '/ˌdʒʊrɪsˈdɪkʃən/',
    partOfSpeech: 'noun',
    definition: 'the official power to make legal decisions and judgments',
    translation: '司法权，管辖权',
    example: 'This case falls under federal jurisdiction.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['authority', 'power', 'control'],
    antonyms: ['powerlessness', 'lack of authority']
  },
  {
    id: 18004,
    word: 'precedent',
    pronunciation: '/ˈpresɪdənt/',
    partOfSpeech: 'noun',
    definition: 'an earlier event or action that is regarded as an example or guide',
    translation: '先例，判例',
    example: 'The court\'s decision set an important legal precedent.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['example', 'standard', 'model'],
    antonyms: ['innovation', 'departure']
  },
  {
    id: 18005,
    word: 'litigation',
    pronunciation: '/ˌlɪtɪˈɡeɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the process of taking legal action',
    translation: '诉讼',
    example: 'The company faced expensive litigation over patent disputes.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['lawsuit', 'legal action', 'court case'],
    antonyms: ['settlement', 'agreement']
  },
  {
    id: 18006,
    word: 'contract',
    pronunciation: '/ˈkɑːntrækt/',
    partOfSpeech: 'noun',
    definition: 'a written or spoken agreement that is intended to be enforceable by law',
    translation: '合同，契约',
    example: 'Both parties signed the employment contract.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['agreement', 'pact', 'deal'],
    antonyms: ['breach', 'violation']
  },
  {
    id: 18007,
    word: 'liability',
    pronunciation: '/ˌlaɪəˈbɪləti/',
    partOfSpeech: 'noun',
    definition: 'the state of being responsible for something, especially by law',
    translation: '责任，义务',
    example: 'The company accepted liability for the environmental damage.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['responsibility', 'obligation', 'accountability'],
    antonyms: ['immunity', 'exemption']
  },
  {
    id: 18008,
    word: 'plaintiff',
    pronunciation: '/ˈpleɪntɪf/',
    partOfSpeech: 'noun',
    definition: 'a person who brings a case against another in a court of law',
    translation: '原告',
    example: 'The plaintiff sought damages for breach of contract.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['complainant', 'petitioner', 'claimant'],
    antonyms: ['defendant', 'respondent']
  },
  {
    id: 18009,
    word: 'defendant',
    pronunciation: '/dɪˈfendənt/',
    partOfSpeech: 'noun',
    definition: 'an individual, company, or institution sued or accused in a court of law',
    translation: '被告',
    example: 'The defendant pleaded not guilty to all charges.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['accused', 'respondent', 'party'],
    antonyms: ['plaintiff', 'complainant']
  },
  {
    id: 18010,
    word: 'testimony',
    pronunciation: '/ˈtestɪmoʊni/',
    partOfSpeech: 'noun',
    definition: 'a formal written or spoken statement given in a court of law',
    translation: '证词，证言',
    example: 'The witness gave compelling testimony about the incident.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['evidence', 'statement', 'declaration'],
    antonyms: ['silence', 'concealment']
  },
  {
    id: 18011,
    word: 'verdict',
    pronunciation: '/ˈvɜːrdɪkt/',
    partOfSpeech: 'noun',
    definition: 'a decision on a disputed issue in a civil or criminal case',
    translation: '裁决，判决',
    example: 'The jury reached a unanimous verdict of guilty.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['decision', 'judgment', 'ruling'],
    antonyms: ['indecision', 'mistrial']
  },
  {
    id: 18012,
    word: 'appeal',
    pronunciation: '/əˈpiːl/',
    partOfSpeech: 'noun',
    definition: 'an application to a higher court for a decision to be reversed',
    translation: '上诉，申诉',
    example: 'The defense attorney filed an appeal against the conviction.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['petition', 'request', 'application'],
    antonyms: ['acceptance', 'acquiescence']
  },
  {
    id: 18013,
    word: 'democracy',
    pronunciation: '/dɪˈmɑːkrəsi/',
    partOfSpeech: 'noun',
    definition: 'a system of government by the whole population through elected representatives',
    translation: '民主，民主制度',
    example: 'Democracy requires active participation from citizens.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['self-government', 'popular government', 'republic'],
    antonyms: ['dictatorship', 'autocracy', 'tyranny']
  },
  {
    id: 18014,
    word: 'sovereignty',
    pronunciation: '/ˈsɑːvrənti/',
    partOfSpeech: 'noun',
    definition: 'supreme power or authority',
    translation: '主权',
    example: 'National sovereignty is a fundamental principle of international law.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['supremacy', 'authority', 'independence'],
    antonyms: ['subjugation', 'dependence']
  },
  {
    id: 18015,
    word: 'amendment',
    pronunciation: '/əˈmendmənt/',
    partOfSpeech: 'noun',
    definition: 'a minor change or addition designed to improve a text or piece of legislation',
    translation: '修正案，修改',
    example: 'The First Amendment protects freedom of speech.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['modification', 'revision', 'change'],
    antonyms: ['original', 'unchanged']
  },
  {
    id: 18016,
    word: 'impeachment',
    pronunciation: '/ɪmˈpiːtʃmənt/',
    partOfSpeech: 'noun',
    definition: 'the action of calling into question the integrity or validity of something',
    translation: '弹劾',
    example: 'The president faced impeachment proceedings.',
    difficulty: 'advanced',
    frequency: 'low',
    synonyms: ['accusation', 'indictment', 'charge'],
    antonyms: ['exoneration', 'vindication']
  },
  {
    id: 18017,
    word: 'diplomacy',
    pronunciation: '/dɪˈploʊməsi/',
    partOfSpeech: 'noun',
    definition: 'the profession, activity, or skill of managing international relations',
    translation: '外交',
    example: 'Diplomacy is essential for maintaining peaceful international relations.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['negotiation', 'statecraft', 'international relations'],
    antonyms: ['warfare', 'hostility']
  },
  {
    id: 18018,
    word: 'treaty',
    pronunciation: '/ˈtriːti/',
    partOfSpeech: 'noun',
    definition: 'a formally concluded and ratified agreement between countries',
    translation: '条约',
    example: 'The peace treaty ended the long-standing conflict.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['agreement', 'pact', 'accord'],
    antonyms: ['conflict', 'disagreement']
  },
  {
    id: 18019,
    word: 'sanction',
    pronunciation: '/ˈsæŋkʃən/',
    partOfSpeech: 'noun',
    definition: 'a threatened penalty for disobeying a law or rule',
    translation: '制裁，处罚',
    example: 'Economic sanctions were imposed on the country.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['penalty', 'punishment', 'restriction'],
    antonyms: ['reward', 'approval']
  },
  {
    id: 18020,
    word: 'embargo',
    pronunciation: '/ɪmˈbɑːrɡoʊ/',
    partOfSpeech: 'noun',
    definition: 'an official ban on trade or other commercial activity with a particular country',
    translation: '禁运，贸易禁令',
    example: 'The trade embargo affected the country\'s economy.',
    difficulty: 'advanced',
    frequency: 'low',
    synonyms: ['ban', 'prohibition', 'blockade'],
    antonyms: ['free trade', 'open commerce']
  },
  {
    id: 18021,
    word: 'referendum',
    pronunciation: '/ˌrefəˈrendəm/',
    partOfSpeech: 'noun',
    definition: 'a general vote by the electorate on a single political question',
    translation: '公民投票',
    example: 'The referendum will decide the country\'s future membership.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['plebiscite', 'ballot', 'vote'],
    antonyms: ['appointment', 'designation']
  },
  {
    id: 18022,
    word: 'coalition',
    pronunciation: '/ˌkoʊəˈlɪʃən/',
    partOfSpeech: 'noun',
    definition: 'an alliance for combined action, especially a temporary alliance of political parties',
    translation: '联盟，联合政府',
    example: 'The coalition government included members from three parties.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['alliance', 'partnership', 'union'],
    antonyms: ['opposition', 'rivalry']
  },
  {
    id: 18023,
    word: 'bureaucracy',
    pronunciation: '/bjʊˈrɑːkrəsi/',
    partOfSpeech: 'noun',
    definition: 'a system of government in which most decisions are made by state officials',
    translation: '官僚制度',
    example: 'The bureaucracy slowed down the approval process.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['administration', 'civil service', 'red tape'],
    antonyms: ['efficiency', 'streamlined process']
  },
  {
    id: 18024,
    word: 'prosecution',
    pronunciation: '/ˌprɑːsɪˈkjuːʃən/',
    partOfSpeech: 'noun',
    definition: 'the institution and conducting of legal proceedings against someone',
    translation: '起诉，检控',
    example: 'The prosecution presented strong evidence against the accused.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['legal action', 'indictment', 'charges'],
    antonyms: ['defense', 'acquittal']
  },
  {
    id: 18025,
    word: 'subpoena',
    pronunciation: '/səˈpiːnə/',
    partOfSpeech: 'noun',
    definition: 'a writ ordering a person to attend a court',
    translation: '传票',
    example: 'The witness received a subpoena to testify in court.',
    difficulty: 'advanced',
    frequency: 'low',
    synonyms: ['summons', 'court order', 'writ'],
    antonyms: ['dismissal', 'release']
  },
  {
    id: 18026,
    word: 'injunction',
    pronunciation: '/ɪnˈdʒʌŋkʃən/',
    partOfSpeech: 'noun',
    definition: 'an authoritative warning or order',
    translation: '禁令，强制令',
    example: 'The court issued an injunction to stop the construction.',
    difficulty: 'advanced',
    frequency: 'low',
    synonyms: ['restraining order', 'prohibition', 'ban'],
    antonyms: ['permission', 'authorization']
  },
  {
    id: 18027,
    word: 'arbitration',
    pronunciation: '/ˌɑːrbɪˈtreɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the use of an arbitrator to settle a dispute',
    translation: '仲裁',
    example: 'The labor dispute was resolved through arbitration.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['mediation', 'settlement', 'adjudication'],
    antonyms: ['litigation', 'court trial']
  },
  {
    id: 18028,
    word: 'statute',
    pronunciation: '/ˈstætʃuːt/',
    partOfSpeech: 'noun',
    definition: 'a written law passed by a legislative body',
    translation: '法令，成文法',
    example: 'The new statute requires companies to report emissions.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['law', 'act', 'regulation'],
    antonyms: ['custom', 'tradition']
  },
  {
    id: 18029,
    word: 'felony',
    pronunciation: '/ˈfeləni/',
    partOfSpeech: 'noun',
    definition: 'a crime, typically one involving violence, regarded as more serious than a misdemeanor',
    translation: '重罪',
    example: 'Armed robbery is classified as a felony.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['serious crime', 'major offense', 'grave crime'],
    antonyms: ['misdemeanor', 'minor offense']
  },
  {
    id: 18030,
    word: 'misdemeanor',
    pronunciation: '/ˌmɪsdɪˈmiːnər/',
    partOfSpeech: 'noun',
    definition: 'a minor wrongdoing',
    translation: '轻罪，不当行为',
    example: 'Petty theft is usually classified as a misdemeanor.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['minor offense', 'petty crime', 'infraction'],
    antonyms: ['felony', 'serious crime']
  }
];

// 按法律领域筛选词汇
export const getCriminalLawWords = () => 
  legalToeflWords.filter(word => 
    ['felony', 'misdemeanor', 'prosecution', 'defendant', 'verdict'].includes(word.word)
  );

export const getCivilLawWords = () => 
  legalToeflWords.filter(word => 
    ['contract', 'liability', 'litigation', 'plaintiff', 'arbitration'].includes(word.word)
  );

export const getConstitutionalLawWords = () => 
  legalToeflWords.filter(word => 
    ['constitution', 'amendment', 'sovereignty', 'impeachment'].includes(word.word)
  );

export const getInternationalLawWords = () => 
  legalToeflWords.filter(word => 
    ['treaty', 'diplomacy', 'sanction', 'embargo', 'sovereignty'].includes(word.word)
  );

// 按政治制度筛选词汇
export const getDemocracyWords = () => 
  legalToeflWords.filter(word => 
    ['democracy', 'referendum', 'coalition', 'bureaucracy'].includes(word.word)
  );

export const getGovernmentWords = () => 
  legalToeflWords.filter(word => 
    ['legislation', 'jurisdiction', 'bureaucracy', 'sovereignty'].includes(word.word)
  );

// 按频率筛选高频法律政治词汇
export const getHighFrequencyLegalWords = () => 
  legalToeflWords.filter(word => 
    word.frequency === 'very_high' || word.frequency === 'high'
  );

// 按难度筛选法律政治词汇
export const getAdvancedLegalWords = () => 
  legalToeflWords.filter(word => word.difficulty === 'advanced');

export const getIntermediateLegalWords = () => 
  legalToeflWords.filter(word => word.difficulty === 'intermediate');

export const getBeginnerLegalWords = () => 
  legalToeflWords.filter(word => word.difficulty === 'beginner');

// 按法庭程序筛选词汇
export const getCourtProcedureWords = () => 
  legalToeflWords.filter(word => 
    ['testimony', 'verdict', 'appeal', 'subpoena', 'injunction'].includes(word.word)
  );

export const getLegalDocumentWords = () => 
  legalToeflWords.filter(word => 
    ['contract', 'statute', 'precedent', 'legislation'].includes(word.word)
  );