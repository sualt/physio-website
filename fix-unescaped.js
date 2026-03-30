// fix-unescaped.js
const fs = require('fs')
const path = require('path')

// Dizin tarama
function walkDir(dir, callback) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(file => {
    const fullPath = path.join(dir, file.name)
    if (file.isDirectory()) {
      walkDir(fullPath, callback)
    } else if (file.isFile() && fullPath.endsWith('.tsx')) {
      callback(fullPath)
    }
  })
}

// JSX içinde unescaped karakterleri değiştir
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  const original = content

  // Değişiklikler
  content = content
    .replace(/(?<=<[^>]*>)'/g, "&apos;")    // ' işareti
    .replace(/(?<=<[^>]*>)"/g, "&quot;")    // " işareti

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`✅ Fixed: ${filePath}`)
  }
}

// Proje dizinini tara
walkDir(path.join(__dirname, 'src'), fixFile)

console.log('Tamamlandı! Tüm .tsx dosyaları tarandı.')