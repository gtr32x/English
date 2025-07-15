const fs = require('fs');
const path = require('path');

// Find all *ToeflWords.ts files
const dataDir = './src/data';
const files = fs.readdirSync(dataDir)
  .filter(file => file.endsWith('ToeflWords.ts') && file !== 'toeflWords.ts')
  .map(file => path.join(dataDir, file));

console.log(`Fixing filter functions in ${files.length} files...`);

files.forEach(filePath => {
  console.log(`Fixing ${filePath}...`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix filter functions that use old difficulty values
  content = content.replace(/word\.difficulty === 'advanced'/g, "word.difficulty === 'hard'");
  content = content.replace(/word\.difficulty === 'intermediate'/g, "word.difficulty === 'medium'");
  content = content.replace(/word\.difficulty === 'beginner'/g, "word.difficulty === 'easy'");
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✓ Fixed filter functions in ${filePath}`);
});

console.log('\n✅ All filter functions have been fixed!');