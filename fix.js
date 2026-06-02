const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Fix JS error - remove milestone2/3 references
html = html.replace("const m2 = (document.getElementById(\"milestone2\")?.value) || "";", "const m2 = null;");
html = html.replace("const m3 = (document.getElementById(\"milestone3\")?.value) || "";", "const m3 = null;");

// Fix all Hindi
const fixes = [
  ["Project submit karne ke liye pehle ETH lock karo", "Lock ETH to submit your project"],
  ["ETH Lock karo pehle", "Lock ETH First"],
  ["ETH lock hone ke baad submit kar sakte ho", "Submit work after locking ETH"],
  ["Wallet connect karo pehle", "Connect wallet first"],
  ["Project ID aur proof daalo", "Enter Project ID and proof link"],
  ["Koi gig nahi", "No gigs yet"],
  ["Category Chuno", "Select Category"],
  ["apne baare mein likho", "Write about yourself"],
  ["Kya complete kiya", "Describe what you completed"],
];

fixes.forEach(([h, e]) => { html = html.split(h).join(e); });
fs.writeFileSync('index.html', html);
console.log("Done!");
