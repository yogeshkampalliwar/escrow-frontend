const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Fix all select/category styling
html = html.replace(
  'select.input{cursor:pointer}',
  'select.input{cursor:pointer;color:#fff;background:#0d0d1a} select.input option{background:#1a1a35;color:#fff}'
);

// Make sure projCat has proper value check
html = html.replace(
  "if(!freelancer||!m1){",
  "const cat = (document.getElementById('projCat')?.value) || ""; if(!freelancer||!m1||!cat){"
);

fs.writeFileSync('index.html', html);
console.log("Done!");
