const fs = require('fs');
const urls = fs.readFileSync('urls.txt', 'utf8').split('\n');
const domains = new Set();
urls.forEach(u => {
  const parts = u.split(':https://');
  if (parts.length > 1) {
    try {
      domains.add(new URL('https://' + parts[1]).hostname);
    } catch(e) {}
  } else {
    const parts2 = u.split(':http://');
    if (parts2.length > 1) {
      try {
        domains.add(new URL('http://' + parts2[1]).hostname);
      } catch(e) {}
    }
  }
});
console.log(Array.from(domains).join('\n'));
