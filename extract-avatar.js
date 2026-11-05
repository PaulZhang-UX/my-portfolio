const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'public/touxiang.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const match = html.match(/const IMAGE_SRC = "(data:image\/[^;]+;base64,([^"]+))";/);

if (match) {
  const base64Data = match[2];
  fs.writeFileSync(path.join(__dirname, 'public/avatar.png'), base64Data, 'base64');
  
  const newHtml = html.replace(match[0], 'const IMAGE_SRC = "/avatar.png";');
  fs.writeFileSync(htmlPath, newHtml);
  console.log("Successfully extracted base64 image to /avatar.png and updated HTML.");
} else {
  console.log("Could not find base64 image in HTML.");
}
