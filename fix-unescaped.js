// fix-jsx-chatbot.js
// Kullanımı: node fix-jsx-chatbot.js

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, 'src'); // src klasör yolu
const chatBotOld = 'Chatbot.tsx';
const chatBotNew = 'ChatBot.tsx';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

// 1️⃣ Dosya isimlerini ChatBot olarak değiştir
const chatBotOldPath = path.join(projectRoot, 'components/ui', chatBotOld);
const chatBotNewPath = path.join(projectRoot, 'components/ui', chatBotNew);
if (fs.existsSync(chatBotOldPath)) {
  fs.renameSync(chatBotOldPath, chatBotNewPath);
  console.log(`✅ ${chatBotOld} → ${chatBotNew} olarak değiştirildi`);
}

// 2️⃣ Tüm .tsx dosyalarında düzeltmeleri uygula
const tsxFiles = walk(projectRoot);

tsxFiles.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');

  // JSX karakter hatalarını düzelt
  content = content.replace(/'/g, '&apos;');
  content = content.replace(/"/g, '&quot;');

  // ChatBot importlarını düzelt
  content = content.replace(
    /import\s+Chatbot\s+from\s+['"]@\/components\/ui\/Chatbot['"]/g,
    `import ChatBot from '@\/components\/ui\/ChatBot'`
  );

  fs.writeFileSync(file, content, 'utf8');
  console.log(`📝 ${file} güncellendi`);
});

console.log('🎉 Tüm JSX karakter ve ChatBot düzeltmeleri tamamlandı!');