import { Word } from './toeflWords';

// 环境和地理类托福词汇 (ID: 22001-22030)
export const environmentToeflWords: Word[] = [
  {
    id: 22001,
    word: 'ecosystem',
    pronunciation: '/ˈiːkoʊsɪstəm/',
    partOfSpeech: 'noun',
    definition: 'a biological community of interacting organisms and their physical environment',
    translation: '生态系统',
    example: 'The rainforest ecosystem supports incredible biodiversity.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['biome', 'habitat', 'environment'],
    antonyms: ['artificial environment', 'sterile environment']
  },
  {
    id: 22002,
    word: 'biodiversity',
    pronunciation: '/ˌbaɪoʊdaɪˈvɜːrsəti/',
    partOfSpeech: 'noun',
    definition: 'the variety of life in the world or in a particular habitat',
    translation: '生物多样性',
    example: 'Conservation efforts aim to protect biodiversity in threatened regions.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['biological diversity', 'species variety', 'ecological richness'],
    antonyms: ['monoculture', 'species uniformity', 'biological poverty']
  },
  {
    id: 22003,
    word: 'sustainability',
    pronunciation: '/səˌsteɪnəˈbɪləti/',
    partOfSpeech: 'noun',
    definition: 'the ability to be maintained at a certain rate or level',
    translation: '可持续性',
    example: 'The company focuses on sustainability in all its operations.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['durability', 'maintainability', 'long-term viability'],
    antonyms: ['unsustainability', 'depletion', 'exhaustion']
  },
  {
    id: 22004,
    word: 'conservation',
    pronunciation: '/ˌkɑːnsərˈveɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the action of conserving something, especially the environment',
    translation: '保护，保存',
    example: 'Wildlife conservation is essential for maintaining ecological balance.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['preservation', 'protection', 'safeguarding'],
    antonyms: ['destruction', 'waste', 'depletion']
  },
  {
    id: 22005,
    word: 'deforestation',
    pronunciation: '/diːˌfɔːrəˈsteɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the action of clearing a wide area of trees',
    translation: '森林砍伐',
    example: 'Deforestation contributes significantly to climate change.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['forest clearing', 'tree removal', 'woodland destruction'],
    antonyms: ['reforestation', 'afforestation', 'tree planting']
  },
  {
    id: 22006,
    word: 'pollution',
    pronunciation: '/pəˈluːʃən/',
    partOfSpeech: 'noun',
    definition: 'the presence in the environment of substances with harmful effects',
    translation: '污染',
    example: 'Air pollution in major cities poses serious health risks.',
    difficulty: 'beginner',
    frequency: 'very_high',
    synonyms: ['contamination', 'toxicity', 'environmental damage'],
    antonyms: ['purity', 'cleanliness', 'environmental health']
  },
  {
    id: 22007,
    word: 'greenhouse effect',
    pronunciation: '/ˈɡriːnhaʊs ɪˈfekt/',
    partOfSpeech: 'noun',
    definition: 'the trapping of the sun\'s warmth in a planet\'s lower atmosphere',
    translation: '温室效应',
    example: 'The greenhouse effect is intensified by carbon dioxide emissions.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['global warming', 'climate warming', 'atmospheric heating'],
    antonyms: ['cooling effect', 'heat reflection']
  },
  {
    id: 22008,
    word: 'carbon footprint',
    pronunciation: '/ˈkɑːrbən ˈfʊtprɪnt/',
    partOfSpeech: 'noun',
    definition: 'the amount of carbon dioxide released into the atmosphere',
    translation: '碳足迹',
    example: 'Reducing your carbon footprint helps combat climate change.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['carbon emissions', 'environmental impact', 'CO2 output'],
    antonyms: ['carbon neutrality', 'zero emissions']
  },
  {
    id: 22009,
    word: 'renewable energy',
    pronunciation: '/rɪˈnuːəbəl ˈenərdʒi/',
    partOfSpeech: 'noun',
    definition: 'energy from a source that is not depleted when used',
    translation: '可再生能源',
    example: 'Solar and wind power are examples of renewable energy.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['sustainable energy', 'clean energy', 'green energy'],
    antonyms: ['fossil fuels', 'non-renewable energy', 'finite energy']
  },
  {
    id: 22010,
    word: 'fossil fuels',
    pronunciation: '/ˈfɑːsəl ˈfjuːəlz/',
    partOfSpeech: 'noun',
    definition: 'natural fuel formed from the remains of living organisms',
    translation: '化石燃料',
    example: 'The world is gradually moving away from fossil fuels.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['coal', 'oil', 'natural gas'],
    antonyms: ['renewable energy', 'clean energy', 'sustainable fuel']
  },
  {
    id: 22011,
    word: 'erosion',
    pronunciation: '/ɪˈroʊʒən/',
    partOfSpeech: 'noun',
    definition: 'the process of eroding or being eroded by wind, water, or other natural agents',
    translation: '侵蚀',
    example: 'Soil erosion is a major problem in agricultural areas.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['weathering', 'wearing away', 'degradation'],
    antonyms: ['deposition', 'accumulation', 'preservation']
  },
  {
    id: 22012,
    word: 'habitat',
    pronunciation: '/ˈhæbɪtæt/',
    partOfSpeech: 'noun',
    definition: 'the natural home or environment of an animal, plant, or organism',
    translation: '栖息地',
    example: 'Polar bears are losing their natural habitat due to ice melting.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['environment', 'dwelling', 'natural home'],
    antonyms: ['artificial environment', 'captivity', 'unnatural setting']
  },
  {
    id: 22013,
    word: 'extinction',
    pronunciation: '/ɪkˈstɪŋkʃən/',
    partOfSpeech: 'noun',
    definition: 'the state or process of a species ceasing to exist',
    translation: '灭绝',
    example: 'Many species face extinction due to human activities.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['elimination', 'disappearance', 'dying out'],
    antonyms: ['survival', 'preservation', 'continuation']
  },
  {
    id: 22014,
    word: 'endangered species',
    pronunciation: '/ɪnˈdeɪndʒərd ˈspiːʃiːz/',
    partOfSpeech: 'noun',
    definition: 'a species of animal or plant that is seriously at risk of extinction',
    translation: '濒危物种',
    example: 'The giant panda was once an endangered species.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['threatened species', 'at-risk species', 'vulnerable species'],
    antonyms: ['abundant species', 'thriving species', 'stable population']
  },
  {
    id: 22015,
    word: 'climate change',
    pronunciation: '/ˈklaɪmət tʃeɪndʒ/',
    partOfSpeech: 'noun',
    definition: 'long-term shifts in global or regional climate patterns',
    translation: '气候变化',
    example: 'Climate change is affecting weather patterns worldwide.',
    difficulty: 'intermediate',
    frequency: 'very_high',
    synonyms: ['global warming', 'climate shift', 'environmental change'],
    antonyms: ['climate stability', 'weather consistency']
  },
  {
    id: 22016,
    word: 'ozone layer',
    pronunciation: '/ˈoʊzoʊn ˈleɪər/',
    partOfSpeech: 'noun',
    definition: 'a layer in the earth\'s stratosphere containing a high concentration of ozone',
    translation: '臭氧层',
    example: 'The ozone layer protects Earth from harmful ultraviolet radiation.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['ozone shield', 'atmospheric protection', 'UV barrier'],
    antonyms: ['ozone depletion', 'atmospheric hole']
  },
  {
    id: 22017,
    word: 'recycling',
    pronunciation: '/riːˈsaɪklɪŋ/',
    partOfSpeech: 'noun',
    definition: 'the action or process of converting waste into reusable material',
    translation: '回收利用',
    example: 'Recycling helps reduce the amount of waste in landfills.',
    difficulty: 'beginner',
    frequency: 'high',
    synonyms: ['reprocessing', 'reusing', 'waste conversion'],
    antonyms: ['disposal', 'waste', 'throwing away']
  },
  {
    id: 22018,
    word: 'landfill',
    pronunciation: '/ˈlændfɪl/',
    partOfSpeech: 'noun',
    definition: 'a site for the disposal of waste materials by burial',
    translation: '垃圾填埋场',
    example: 'The city is running out of space for new landfills.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['dump', 'waste site', 'garbage disposal'],
    antonyms: ['recycling center', 'clean site', 'preserved land']
  },
  {
    id: 22019,
    word: 'watershed',
    pronunciation: '/ˈwɔːtərʃed/',
    partOfSpeech: 'noun',
    definition: 'an area of land that drains all streams and rainfall to a common outlet',
    translation: '流域，分水岭',
    example: 'Protecting the watershed is crucial for water quality.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['drainage basin', 'catchment area', 'river basin'],
    antonyms: ['water divide', 'ridge line']
  },
  {
    id: 22020,
    word: 'aquifer',
    pronunciation: '/ˈækwɪfər/',
    partOfSpeech: 'noun',
    definition: 'a body of permeable rock that can contain or transmit groundwater',
    translation: '含水层',
    example: 'The aquifer provides fresh water to the entire region.',
    difficulty: 'advanced',
    frequency: 'low',
    synonyms: ['groundwater reservoir', 'water-bearing rock', 'underground water source'],
    antonyms: ['impermeable layer', 'dry rock', 'water barrier']
  },
  {
    id: 22021,
    word: 'desertification',
    pronunciation: '/dɪˌzɜːrtɪfɪˈkeɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the process by which fertile land becomes desert',
    translation: '沙漠化',
    example: 'Desertification threatens agricultural productivity in many regions.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['land degradation', 'soil deterioration', 'aridification'],
    antonyms: ['land restoration', 'reforestation', 'soil improvement']
  },
  {
    id: 22022,
    word: 'urbanization',
    pronunciation: '/ˌɜːrbənəˈzeɪʃən/',
    partOfSpeech: 'noun',
    definition: 'the process whereby the proportion of people living in urban areas increases',
    translation: '城市化',
    example: 'Rapid urbanization has led to increased environmental challenges.',
    difficulty: 'intermediate',
    frequency: 'high',
    synonyms: ['city development', 'metropolitan growth', 'urban expansion'],
    antonyms: ['ruralization', 'countryside development', 'urban decline']
  },
  {
    id: 22023,
    word: 'topography',
    pronunciation: '/təˈpɑːɡrəfi/',
    partOfSpeech: 'noun',
    definition: 'the arrangement of the natural and artificial features of an area',
    translation: '地形，地貌',
    example: 'The region\'s mountainous topography makes transportation difficult.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['terrain', 'landscape', 'physical features'],
    antonyms: ['flat terrain', 'uniform landscape']
  },
  {
    id: 22024,
    word: 'continental drift',
    pronunciation: '/ˌkɑːntɪˈnentəl drɪft/',
    partOfSpeech: 'noun',
    definition: 'the gradual movement of the continents across the earth\'s surface',
    translation: '大陆漂移',
    example: 'Continental drift explains why similar fossils are found on different continents.',
    difficulty: 'advanced',
    frequency: 'low',
    synonyms: ['plate tectonics', 'continental movement', 'geological drift'],
    antonyms: ['continental stability', 'fixed landmasses']
  },
  {
    id: 22025,
    word: 'tectonic plates',
    pronunciation: '/tekˈtɑːnɪk pleɪts/',
    partOfSpeech: 'noun',
    definition: 'large pieces of the Earth\'s crust that move slowly over the mantle',
    translation: '构造板块',
    example: 'Earthquakes often occur at the boundaries of tectonic plates.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['crustal plates', 'geological plates', 'lithospheric plates'],
    antonyms: ['stable crust', 'fixed surface']
  },
  {
    id: 22026,
    word: 'seismic activity',
    pronunciation: '/ˈsaɪzmɪk ækˈtɪvəti/',
    partOfSpeech: 'noun',
    definition: 'the frequency and magnitude of earthquakes in a given area',
    translation: '地震活动',
    example: 'The region shows increased seismic activity near fault lines.',
    difficulty: 'advanced',
    frequency: 'medium',
    synonyms: ['earthquake activity', 'ground movement', 'geological instability'],
    antonyms: ['seismic stability', 'geological calm', 'tectonic quiet']
  },
  {
    id: 22027,
    word: 'volcanic eruption',
    pronunciation: '/vɑːlˈkænɪk ɪˈrʌpʃən/',
    partOfSpeech: 'noun',
    definition: 'an explosion of lava, ash, and gases from a volcano',
    translation: '火山爆发',
    example: 'The volcanic eruption affected air travel across the region.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['volcanic explosion', 'lava eruption', 'volcanic outburst'],
    antonyms: ['volcanic dormancy', 'geological calm']
  },
  {
    id: 22028,
    word: 'glacier',
    pronunciation: '/ˈɡleɪʃər/',
    partOfSpeech: 'noun',
    definition: 'a slowly moving mass or river of ice formed by snow accumulation',
    translation: '冰川',
    example: 'Many glaciers are retreating due to global warming.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['ice sheet', 'ice mass', 'frozen river'],
    antonyms: ['liquid water', 'flowing river', 'melted ice']
  },
  {
    id: 22029,
    word: 'permafrost',
    pronunciation: '/ˈpɜːrməfrɔːst/',
    partOfSpeech: 'noun',
    definition: 'a thick subsurface layer of soil that remains frozen throughout the year',
    translation: '永久冻土',
    example: 'Permafrost in the Arctic is melting due to rising temperatures.',
    difficulty: 'advanced',
    frequency: 'low',
    synonyms: ['permanently frozen ground', 'frozen subsoil', 'ice-bound earth'],
    antonyms: ['thawed ground', 'unfrozen soil', 'temperate earth']
  },
  {
    id: 22030,
    word: 'coral reef',
    pronunciation: '/ˈkɔːrəl riːf/',
    partOfSpeech: 'noun',
    definition: 'a ridge of rock in the sea formed by the growth and deposit of coral',
    translation: '珊瑚礁',
    example: 'Coral reefs are among the most biodiverse ecosystems on Earth.',
    difficulty: 'intermediate',
    frequency: 'medium',
    synonyms: ['coral formation', 'marine reef', 'underwater ecosystem'],
    antonyms: ['barren seabed', 'lifeless ocean floor']
  }
];

// 按环境问题筛选词汇
export const getEnvironmentalProblemsWords = () => 
  environmentToeflWords.filter(word => 
    ['pollution', 'deforestation', 'climate change', 'extinction', 'desertification'].includes(word.word)
  );

export const getConservationWords = () => 
  environmentToeflWords.filter(word => 
    ['conservation', 'sustainability', 'biodiversity', 'endangered species', 'ecosystem'].includes(word.word)
  );

export const getEnergyWords = () => 
  environmentToeflWords.filter(word => 
    ['renewable energy', 'fossil fuels', 'carbon footprint', 'greenhouse effect'].includes(word.word)
  );

// 按地理特征筛选词汇
export const getPhysicalGeographyWords = () => 
  environmentToeflWords.filter(word => 
    ['topography', 'glacier', 'volcanic eruption', 'tectonic plates', 'continental drift'].includes(word.word)
  );

export const getWaterResourcesWords = () => 
  environmentToeflWords.filter(word => 
    ['watershed', 'aquifer', 'coral reef'].includes(word.word)
  );

export const getGeologicalProcessesWords = () => 
  environmentToeflWords.filter(word => 
    ['erosion', 'seismic activity', 'volcanic eruption', 'continental drift'].includes(word.word)
  );

// 按气候相关筛选词汇
export const getClimateWords = () => 
  environmentToeflWords.filter(word => 
    ['climate change', 'greenhouse effect', 'ozone layer', 'permafrost', 'glacier'].includes(word.word)
  );

// 按人类活动影响筛选词汇
export const getHumanImpactWords = () => 
  environmentToeflWords.filter(word => 
    ['urbanization', 'deforestation', 'pollution', 'recycling', 'landfill'].includes(word.word)
  );

// 按频率筛选环境地理词汇
export const getHighFrequencyEnvironmentWords = () => 
  environmentToeflWords.filter(word => 
    word.frequency === 'very_high' || word.frequency === 'high'
  );

// 按难度筛选环境地理词汇
export const getAdvancedEnvironmentWords = () => 
  environmentToeflWords.filter(word => word.difficulty === 'advanced');

export const getIntermediateEnvironmentWords = () => 
  environmentToeflWords.filter(word => word.difficulty === 'intermediate');

export const getBeginnerEnvironmentWords = () => 
  environmentToeflWords.filter(word => word.difficulty === 'beginner');

// 按生态系统类型筛选词汇
export const getTerrestrialEcosystemWords = () => 
  environmentToeflWords.filter(word => 
    ['ecosystem', 'habitat', 'deforestation', 'biodiversity', 'desertification'].includes(word.word)
  );

export const getMarineEcosystemWords = () => 
  environmentToeflWords.filter(word => 
    ['coral reef', 'ozone layer'].includes(word.word)
  );

// 按环境解决方案筛选词汇
export const getEnvironmentalSolutionsWords = () => 
  environmentToeflWords.filter(word => 
    ['renewable energy', 'recycling', 'conservation', 'sustainability'].includes(word.word)
  );