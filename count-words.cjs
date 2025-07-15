// 统计托福词汇总数的脚本
const fs = require('fs');
const path = require('path');

// 读取所有词汇文件并统计数量
const dataDir = './src/data';
const files = [
  'toeflWords.ts',
  'extendedToeflWords.ts', 
  'massiveToeflWords.ts',
  'additionalToeflWords.ts',
  'comprehensiveToeflWords.ts',
  'advancedToeflWords.ts',
  'scientificToeflWords.ts',
  'academicToeflWords.ts',
  'businessToeflWords.ts',
  'literaryToeflWords.ts',
  'historicalToeflWords.ts',
  'environmentalToeflWords.ts',
  'essentialToeflWords.ts',
  'verbToeflWords.ts',
  'adjectiveToeflWords.ts',
  'nounToeflWords.ts',
  'adverbToeflWords.ts',
  'phraseToeflWords.ts',
  'psychologyToeflWords.ts',
  'medicalToeflWords.ts',
  'technologyToeflWords.ts',
  'legalToeflWords.ts',
  'educationToeflWords.ts',
  'economicsToeflWords.ts',
  'artsToeflWords.ts',
  'environmentToeflWords.ts',
  'historyToeflWords.ts',
  'scienceToeflWords.ts',
  'mathPhysicsToeflWords.ts',
  'sociologyToeflWords.ts',
  'linguisticsToeflWords.ts'
];

let totalWords = 0;
let fileStats = {};

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    // 统计 id: 的出现次数来计算单词数量
    const matches = content.match(/id:\s*\d+/g);
    const wordCount = matches ? matches.length : 0;
    fileStats[file] = wordCount;
    totalWords += wordCount;
    console.log(`${file}: ${wordCount} words`);
  }
});

console.log('\n=== 托福词汇库统计 ===');
console.log(`总词汇数量: ${totalWords} 个单词`);
console.log('\n各文件词汇分布:');
Object.entries(fileStats).forEach(([file, count]) => {
  console.log(`  ${file.replace('.ts', '')}: ${count} 个`);
});

if (totalWords >= 1000) {
  console.log('\n✅ 成功！词汇库已包含超过1000个托福单词');
} else {
  console.log(`\n⚠️  当前词汇数量为 ${totalWords}，建议继续添加更多词汇`);
}

console.log('\n词汇库涵盖领域:');
console.log('- 基础核心词汇');
console.log('- 学术研究词汇');
console.log('- 科学技术词汇');
console.log('- 商业经济词汇');
console.log('- 文学艺术词汇');
console.log('- 历史社会词汇');
console.log('- 环境地理词汇');
console.log('- 高级进阶词汇');