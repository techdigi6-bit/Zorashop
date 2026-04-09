const fs = require('fs');
const path = require('path');

async function download(url, dest) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(buffer));
}

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
  await download('https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80', path.join(assetsDir, 'air.jpg'));
  await download('https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?w=400&q=80', path.join(assetsDir, 'gun.jpg'));
  
  console.log('All images downloaded successfully!');
}

main().catch(console.error);
