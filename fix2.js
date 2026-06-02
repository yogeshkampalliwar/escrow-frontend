const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Fix category - add onchange
html = html.replace(
  'id="projCat"',
  'id="projCat" onchange="this.style.color=\'#fff\'"'
);

// Remove ETH lock requirement from submit work
html = html.replace(
  'if(!ethLocked){ alert("Pehle ETH lock karo!"); return; }',
  ''
);
html = html.replace(
  'if(!ethLocked){ alert("Lock ETH first!"); return; }',
  ''
);

// Submit button always enabled
html = html.replace(
  'id="submitBtn" onclick="submitWork()" disabled',
  'id="submitBtn" onclick="submitWork()"'
);

// Add AI review fee info above submit button
html = html.replace(
  '<button class="btn" style="width:100%" id="submitBtn"',
  '<div class="fee-info" style="margin-bottom:0.8rem"><div class="fee-row"><span>Submit Work</span><span style="color:var(--green)">FREE</span></div><div class="fee-row"><span>AI Review Fee</span><span style="color:var(--red)">0.0001 ETH</span></div></div><button class="btn" style="width:100%" id="submitBtn"'
);

fs.writeFileSync('index.html', html);
console.log("Done!");
