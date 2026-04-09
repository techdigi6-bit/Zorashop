const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  const assetsDir = path.join(__dirname, 'src', 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  console.log('Downloading images to src/assets...');
  
  await download('https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80', path.join(assetsDir, 'hero-electronic.jpg'));
  await download('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80', path.join(assetsDir, 'hero-promo1.jpg'));
  await download('https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&q=80', path.join(assetsDir, 'hero-promo2.jpg'));
  
  // For air fryer and gundam
  await download('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Philips_Airfryer_%2816301389440%29.jpg/640px-Philips_Airfryer_%2816301389440%29.jpg', path.join(assetsDir, 'air.jpg'));
  await download('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/RX-78-2_Gundam_%40_Odaiba_Diver_City_Project_%287635601264%29.jpg/640px-RX-78-2_Gundam_%40_Odaiba_Diver_City_Project_%287635601264%29.jpg', path.join(assetsDir, 'gun.jpg'));
  
  console.log('All images downloaded successfully!');
}

main().catch(console.error);
