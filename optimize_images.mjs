import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      if (/\.(png|jpg|jpeg)$/i.test(name)) {
        files.push(name);
      }
    }
  }
  return files;
}

async function processImages() {
  const targetDirs = ['./public', './src/assets'];
  console.log('Starting high-speed Node sharp image compression pass...');
  let totalSavedMB = 0;

  for (const dir of targetDirs) {
    const images = getFiles(dir);
    for (const imgPath of images) {
      const stat = fs.statSync(imgPath);
      const sizeMB = stat.size / (1024 * 1024);
      
      if (sizeMB > 0.1) { // Compress any image over 100KB
        console.log(`Compressing ${imgPath} (${sizeMB.toFixed(2)} MB)...`);
        const dirName = path.dirname(imgPath);
        const ext = path.extname(imgPath);
        const tempPath = path.join(dirName, `temp_${Date.now()}${ext}`);

        try {
          let pipeline = sharp(imgPath).resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true });
          
          if (ext.toLowerCase() === '.png') {
            pipeline = pipeline.png({ quality: 80, compressionLevel: 8 });
          } else {
            pipeline = pipeline.jpeg({ quality: 80, progressive: true });
          }

          await pipeline.toFile(tempPath);

          const newStat = fs.statSync(tempPath);
          const newSizeMB = newStat.size / (1024 * 1024);
          const savedMB = sizeMB - newSizeMB;

          if (savedMB > 0) {
            fs.unlinkSync(imgPath);
            fs.renameSync(tempPath, imgPath);
            totalSavedMB += savedMB;
            console.log(`  -> Reduced to ${newSizeMB.toFixed(2)} MB (Saved ${savedMB.toFixed(2)} MB / ${((savedMB / sizeMB) * 100).toFixed(1)}%)`);
          } else {
            fs.unlinkSync(tempPath);
            console.log(`  -> Already optimal.`);
          }
        } catch (err) {
          console.error(`Failed to process ${imgPath}:`, err.message);
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
      }
    }
  }

  console.log(`\n🎉 Total payload savings across project: ${totalSavedMB.toFixed(2)} MB!`);
}

processImages();
