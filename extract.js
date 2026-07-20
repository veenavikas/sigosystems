const fs = require('fs');
const data = fs.readFileSync('full_prompt_198.json', 'utf8');
const json = JSON.parse(data);
const content = json.content;
const htmlMatch = content.match(/<!DOCTYPE html>[\s\S]*<\/html>/i);
if (htmlMatch) {
  fs.writeFileSync('landing.html', htmlMatch[0], 'utf8');
  console.log('Extracted landing.html');
} else {
  console.log('No HTML found');
}
