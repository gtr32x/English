const fs = require('fs');
const path = require('path');

// Find all *ToeflWords.ts files
const dataDir = './src/data';
const files = fs.readdirSync(dataDir)
  .filter(file => file.endsWith('ToeflWords.ts') && file !== 'toeflWords.ts')
  .map(file => path.join(dataDir, file));

console.log(`Found ${files.length} vocabulary files to fix:`);
files.forEach(file => console.log(`  - ${file}`));

files.forEach(filePath => {
  console.log(`\nFixing ${filePath}...`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix difficulty values
  content = content.replace(/difficulty: 'intermediate'/g, "difficulty: 'medium'");
  content = content.replace(/difficulty: 'beginner'/g, "difficulty: 'easy'");
  content = content.replace(/difficulty: 'advanced'/g, "difficulty: 'hard'");
  
  // Fix frequency values (convert strings to numbers)
  content = content.replace(/frequency: 'very_high'/g, 'frequency: 5');
  content = content.replace(/frequency: 'high'/g, 'frequency: 5');
  content = content.replace(/frequency: 'medium'/g, 'frequency: 4');
  content = content.replace(/frequency: 'low'/g, 'frequency: 3');
  content = content.replace(/frequency: 'very_low'/g, 'frequency: 2');
  
  // Fix example to examples (single string to array)
  content = content.replace(/example: '([^']+)'/g, "examples: ['$1']");
  content = content.replace(/example: "([^"]+)"/g, 'examples: ["$1"]');
  
  // Fix filter functions that use old difficulty values
  content = content.replace(/word\.difficulty === 'advanced'/g, "word.difficulty === 'hard'");
  content = content.replace(/word\.difficulty === 'intermediate'/g, "word.difficulty === 'medium'");
  content = content.replace(/word\.difficulty === 'beginner'/g, "word.difficulty === 'easy'");
  
  // Fix filter functions that use old frequency values
  content = content.replace(/word\.frequency === 'very_high'/g, 'word.frequency >= 5');
  content = content.replace(/word\.frequency === 'high'/g, 'word.frequency >= 4');
  content = content.replace(/word\.frequency === 'medium'/g, 'word.frequency >= 3');
  content = content.replace(/word\.frequency === 'low'/g, 'word.frequency >= 2');
  
  // Fix complex frequency filter expressions
  content = content.replace(/word\.frequency === 'very_high' \|\| word\.frequency === 'high'/g, 'word.frequency >= 4');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✓ Fixed ${filePath}`);
});

console.log('\n✅ All vocabulary files have been fixed!');
console.log('\nRunning build to verify fixes...');