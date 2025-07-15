import { Word } from '../types/word';

// 生物和化学类托福词汇 (ID: 24001-24030)
export const scienceToeflWords: Word[] = [
  {
    id: 24001,
    word: 'organism',
    pronunciation: '/ˈɔːrɡənɪzəm/',
    partOfSpeech: 'noun',
    definition: 'an individual animal, plant, or single-celled life form',
    translation: '有机体，生物',
    example: 'Every organism has unique characteristics that help it survive.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['living being', 'life form', 'creature'],
    antonyms: ['inanimate object', 'non-living matter']
  },
  {
    id: 24002,
    word: 'evolution',
    pronunciation: '/ˌevəˈluːʃən/',
    partOfSpeech: 'noun',
    definition: 'the process by which different kinds of living organisms develop and diversify',
    translation: '进化',
    example: 'Darwin\'s theory of evolution revolutionized biological science.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['development', 'adaptation', 'natural selection'],
    antonyms: ['stagnation', 'devolution', 'regression']
  },
  {
    id: 24003,
    word: 'genetics',
    pronunciation: '/dʒəˈnetɪks/',
    partOfSpeech: 'noun',
    definition: 'the study of heredity and the variation of inherited characteristics',
    translation: '遗传学',
    example: 'Advances in genetics have led to new medical treatments.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['heredity', 'inheritance', 'genomics'],
    antonyms: ['environmental factors', 'acquired traits']
  },
  {
    id: 24004,
    word: 'DNA',
    pronunciation: '/ˌdiː en ˈeɪ/',
    partOfSpeech: 'noun',
    definition: 'deoxyribonucleic acid, a molecule that carries genetic instructions',
    translation: 'DNA，脱氧核糖核酸',
    example: 'DNA testing can determine biological relationships.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['genetic material', 'hereditary code', 'genome'],
    antonyms: ['RNA', 'protein', 'non-genetic material']
  },
  {
    id: 24005,
    word: 'chromosome',
    pronunciation: '/ˈkroʊməsoʊm/',
    partOfSpeech: 'noun',
    definition: 'a threadlike structure of nucleic acids and protein found in the nucleus of cells',
    translation: '染色体',
    example: 'Humans have 23 pairs of chromosomes in each cell.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['genetic structure', 'DNA package', 'hereditary unit'],
    antonyms: ['cytoplasm', 'cell membrane']
  },
  {
    id: 24006,
    word: 'mutation',
    pronunciation: '/mjuːˈteɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the changing of the structure of a gene, resulting in a variant form',
    translation: '突变',
    example: 'Genetic mutations can lead to new traits in organisms.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['genetic change', 'alteration', 'variation'],
    antonyms: ['genetic stability', 'unchanged gene']
  },
  {
    id: 24007,
    word: 'photosynthesis',
    pronunciation: '/ˌfoʊtoʊˈsɪnθəsɪs/',
    partOfSpeech: 'noun',
    definition: 'the process by which green plants use sunlight to synthesize foods',
    translation: '光合作用',
    example: 'Photosynthesis is essential for life on Earth as it produces oxygen.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['light synthesis', 'plant metabolism', 'carbon fixation'],
    antonyms: ['respiration', 'decomposition', 'oxidation']
  },
  {
    id: 24008,
    word: 'metabolism',
    pronunciation: '/məˈtæbəlɪzəm/',
    partOfSpeech: 'noun',
    definition: 'the chemical processes that occur within a living organism',
    translation: '新陈代谢',
    example: 'A fast metabolism helps the body burn calories quickly.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['biochemical processes', 'cellular activity', 'energy conversion'],
    antonyms: ['metabolic shutdown', 'cellular death']
  },
  {
    id: 24009,
    word: 'enzyme',
    pronunciation: '/ˈenzaɪm/',
    partOfSpeech: 'noun',
    definition: 'a substance produced by a living organism that acts as a catalyst',
    translation: '酶',
    example: 'Digestive enzymes help break down food in the stomach.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['biological catalyst', 'protein catalyst', 'biochemical agent'],
    antonyms: ['inhibitor', 'blocker', 'suppressor']
  },
  {
    id: 24010,
    word: 'protein',
    pronunciation: '/ˈproʊtiːn/',
    partOfSpeech: 'noun',
    definition: 'a large molecule composed of amino acids essential for life',
    translation: '蛋白质',
    example: 'Proteins are the building blocks of muscles and tissues.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['amino acid chain', 'polypeptide', 'macromolecule'],
    antonyms: ['carbohydrate', 'lipid', 'nucleic acid']
  },
  {
    id: 24011,
    word: 'cell membrane',
    pronunciation: '/sel ˈmembreɪn/',
    partOfSpeech: 'noun',
    definition: 'the semipermeable membrane surrounding the cytoplasm of a cell',
    translation: '细胞膜',
    example: 'The cell membrane controls what enters and exits the cell.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['plasma membrane', 'cellular boundary', 'lipid bilayer'],
    antonyms: ['cell wall', 'nucleus', 'cytoplasm']
  },
  {
    id: 24012,
    word: 'mitosis',
    pronunciation: '/maɪˈtoʊsɪs/',
    partOfSpeech: 'noun',
    definition: 'a type of cell division that results in two daughter cells',
    translation: '有丝分裂',
    example: 'Mitosis is essential for growth and repair in multicellular organisms.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['cell division', 'nuclear division', 'cellular reproduction'],
    antonyms: ['meiosis', 'cell death', 'apoptosis']
  },
  {
    id: 24013,
    word: 'antibody',
    pronunciation: '/ˈæntɪbɑːdi/',
    partOfSpeech: 'noun',
    definition: 'a blood protein produced in response to counteracting an antigen',
    translation: '抗体',
    example: 'Antibodies help the immune system fight off infections.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['immunoglobulin', 'immune protein', 'defense molecule'],
    antonyms: ['antigen', 'pathogen', 'toxin']
  },
  {
    id: 24014,
    word: 'vaccine',
    pronunciation: '/vækˈsiːn/',
    partOfSpeech: 'noun',
    definition: 'a substance used to stimulate immunity against a disease',
    translation: '疫苗',
    example: 'Vaccines have helped eliminate many deadly diseases.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['immunization', 'inoculation', 'preventive medicine'],
    antonyms: ['disease', 'infection', 'pathogen']
  },
  {
    id: 24015,
    word: 'molecule',
    pronunciation: '/ˈmɑːlɪkjuːl/',
    partOfSpeech: 'noun',
    definition: 'a group of atoms bonded together representing the smallest unit of a compound',
    translation: '分子',
    example: 'Water molecules consist of two hydrogen atoms and one oxygen atom.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['chemical compound', 'atomic group', 'chemical unit'],
    antonyms: ['atom', 'element', 'ion']
  },
  {
    id: 24016,
    word: 'atom',
    pronunciation: '/ˈætəm/',
    partOfSpeech: 'noun',
    definition: 'the smallest unit of ordinary matter that forms a chemical element',
    translation: '原子',
    example: 'Atoms are the basic building blocks of all matter.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['elementary particle', 'basic unit', 'chemical element'],
    antonyms: ['molecule', 'compound', 'mixture']
  },
  {
    id: 24017,
    word: 'element',
    pronunciation: '/ˈelɪmənt/',
    partOfSpeech: 'noun',
    definition: 'a pure substance consisting only of atoms with the same atomic number',
    translation: '元素',
    example: 'Oxygen is an essential element for human survival.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['pure substance', 'chemical element', 'atomic species'],
    antonyms: ['compound', 'mixture', 'alloy']
  },
  {
    id: 24018,
    word: 'compound',
    pronunciation: '/ˈkɑːmpaʊnd/',
    partOfSpeech: 'noun',
    definition: 'a substance formed when two or more chemical elements are chemically bonded',
    translation: '化合物',
    example: 'Salt is a compound made of sodium and chlorine.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['chemical combination', 'molecular substance', 'chemical mixture'],
    antonyms: ['element', 'pure substance', 'single atom']
  },
  {
    id: 24019,
    word: 'reaction',
    pronunciation: '/riˈækʃən/',
    partOfSpeech: 'noun',
    definition: 'a process that involves rearrangement of molecular or ionic structure',
    translation: '反应',
    example: 'The chemical reaction produced heat and light.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['chemical process', 'transformation', 'chemical change'],
    antonyms: ['stability', 'inertness', 'no change']
  },
  {
    id: 24020,
    word: 'catalyst',
    pronunciation: '/ˈkætəlɪst/',
    partOfSpeech: 'noun',
    definition: 'a substance that increases the rate of a chemical reaction',
    translation: '催化剂',
    example: 'The catalyst sped up the reaction without being consumed.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['accelerator', 'facilitator', 'reaction enhancer'],
    antonyms: ['inhibitor', 'retardant', 'blocker']
  },
  {
    id: 24021,
    word: 'oxidation',
    pronunciation: '/ˌɑːksɪˈdeɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the process of combining with oxygen or losing electrons',
    translation: '氧化',
    example: 'Rust is formed through the oxidation of iron.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['oxygen combination', 'electron loss', 'chemical degradation'],
    antonyms: ['reduction', 'electron gain', 'preservation']
  },
  {
    id: 24022,
    word: 'pH',
    pronunciation: '/ˌpiː ˈeɪtʃ/',
    partOfSpeech: 'noun',
    definition: 'a scale used to specify the acidity or basicity of an aqueous solution',
    translation: 'pH值，酸碱度',
    example: 'The pH of pure water is 7, which is neutral.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['acidity level', 'hydrogen ion concentration', 'acid-base measure'],
    antonyms: ['alkalinity', 'basicity', 'neutrality']
  },
  {
    id: 24023,
    word: 'solution',
    pronunciation: '/səˈluːʃən/',
    partOfSpeech: 'noun',
    definition: 'a homogeneous mixture composed of two or more substances',
    translation: '溶液',
    example: 'Salt water is a solution of salt dissolved in water.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['mixture', 'dissolved substance', 'liquid blend'],
    antonyms: ['pure substance', 'solid', 'precipitate']
  },
  {
    id: 24024,
    word: 'concentration',
    pronunciation: '/ˌkɑːnsənˈtreɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the abundance of a constituent divided by the total volume of a mixture',
    translation: '浓度',
    example: 'The concentration of salt in seawater is about 3.5%.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['density', 'strength', 'amount per volume'],
    antonyms: ['dilution', 'weakness', 'low density']
  },
  {
    id: 24025,
    word: 'precipitation',
    pronunciation: '/prɪˌsɪpɪˈteɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the action or process of precipitating a substance from a solution',
    translation: '沉淀',
    example: 'Precipitation occurs when the solution becomes supersaturated.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['settling', 'crystallization', 'solid formation'],
    antonyms: ['dissolution', 'mixing', 'solution formation']
  },
  {
    id: 24026,
    word: 'equilibrium',
    pronunciation: '/ˌiːkwɪˈlɪbriəm/',
    partOfSpeech: 'noun',
    definition: 'a state in which opposing forces or influences are balanced',
    translation: '平衡',
    example: 'Chemical equilibrium is reached when reaction rates are equal.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['balance', 'stability', 'steady state'],
    antonyms: ['imbalance', 'instability', 'disequilibrium']
  },
  {
    id: 24027,
    word: 'hypothesis',
    pronunciation: '/haɪˈpɑːθəsɪs/',
    partOfSpeech: 'noun',
    definition: 'a supposition or proposed explanation made on the basis of limited evidence',
    translation: '假设',
    example: 'Scientists test their hypothesis through controlled experiments.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['theory', 'proposition', 'assumption'],
    antonyms: ['fact', 'proven theory', 'established law']
  },
  {
    id: 24028,
    word: 'experiment',
    pronunciation: '/ɪkˈsperɪmənt/',
    partOfSpeech: 'noun',
    definition: 'a scientific procedure undertaken to make a discovery or test a hypothesis',
    translation: '实验',
    example: 'The experiment confirmed the scientist\'s hypothesis.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['test', 'trial', 'investigation'],
    antonyms: ['theory', 'speculation', 'assumption']
  },
  {
    id: 24029,
    word: 'variable',
    pronunciation: '/ˈveriəbəl/',
    partOfSpeech: 'noun',
    definition: 'an element, feature, or factor that is liable to vary or change',
    translation: '变量',
    example: 'Temperature is an important variable in this chemical reaction.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['factor', 'parameter', 'changeable element'],
    antonyms: ['constant', 'fixed value', 'invariable']
  },
  {
    id: 24030,
    word: 'control group',
    pronunciation: '/kənˈtroʊl ɡruːp/',
    partOfSpeech: 'noun',
    definition: 'a group in an experiment that does not receive the treatment being tested',
    translation: '对照组',
    example: 'The control group helps scientists determine the effect of the treatment.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['reference group', 'comparison group', 'baseline group'],
    antonyms: ['experimental group', 'treatment group', 'test group']
  }
];

// 按生物学分支筛选词汇
export const getGeneticsWords = () => 
  scienceToeflWords.filter(word => 
    ['genetics', 'DNA', 'chromosome', 'mutation'].includes(word.word)
  );

export const getCellBiologyWords = () => 
  scienceToeflWords.filter(word => 
    ['organism', 'cell membrane', 'mitosis', 'protein', 'enzyme'].includes(word.word)
  );

export const getEvolutionWords = () => 
  scienceToeflWords.filter(word => 
    ['evolution', 'organism', 'mutation'].includes(word.word)
  );

export const getImmunologyWords = () => 
  scienceToeflWords.filter(word => 
    ['antibody', 'vaccine'].includes(word.word)
  );

// 按化学分支筛选词汇
export const getGeneralChemistryWords = () => 
  scienceToeflWords.filter(word => 
    ['molecule', 'atom', 'element', 'compound', 'reaction'].includes(word.word)
  );

export const getPhysicalChemistryWords = () => 
  scienceToeflWords.filter(word => 
    ['catalyst', 'equilibrium', 'concentration', 'pH'].includes(word.word)
  );

export const getAnalyticalChemistryWords = () => 
  scienceToeflWords.filter(word => 
    ['solution', 'precipitation', 'concentration', 'pH'].includes(word.word)
  );

// 按生物化学过程筛选词汇
export const getMetabolismWords = () => 
  scienceToeflWords.filter(word => 
    ['metabolism', 'photosynthesis', 'enzyme', 'protein'].includes(word.word)
  );

export const getChemicalProcessesWords = () => 
  scienceToeflWords.filter(word => 
    ['reaction', 'oxidation', 'catalyst', 'equilibrium'].includes(word.word)
  );

// 按科学方法筛选词汇
export const getScientificMethodWords = () => 
  scienceToeflWords.filter(word => 
    ['hypothesis', 'experiment', 'variable', 'control group'].includes(word.word)
  );

// 按频率筛选科学词汇
export const getHighFrequencyScienceWords = () => 
  scienceToeflWords.filter(word => 
    word.frequency === 'very_high' || word.frequency === 'high'
  );

// 按难度筛选科学词汇
export const getAdvancedScienceWords = () => 
  scienceToeflWords.filter(word => word.difficulty === 'advanced');

export const getIntermediateScienceWords = () => 
  scienceToeflWords.filter(word => word.difficulty === 'intermediate');

export const getBeginnerScienceWords = () => 
  scienceToeflWords.filter(word => word.difficulty === 'beginner');

// 按分子生物学筛选词汇
export const getMolecularBiologyWords = () => 
  scienceToeflWords.filter(word => 
    ['DNA', 'protein', 'enzyme', 'molecule', 'chromosome'].includes(word.word)
  );

// 按基础化学概念筛选词汇
export const getBasicChemistryWords = () => 
  scienceToeflWords.filter(word => 
    ['atom', 'molecule', 'element', 'compound', 'solution'].includes(word.word)
  );

// 按实验科学筛选词汇
export const getExperimentalScienceWords = () => 
  scienceToeflWords.filter(word => 
    ['experiment', 'hypothesis', 'variable', 'control group', 'catalyst'].includes(word.word)
  );