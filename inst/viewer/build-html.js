// wraps src/body.html in a full page, index.html: the title, links and style
// go in the head, the rest in the body
const fs = require('fs');
const src = fs.readFileSync(__dirname + '/src/body.html', 'utf8');
const cut = src.indexOf('</style>') + '</style>'.length;
fs.writeFileSync(__dirname + '/index.html',
  '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' +
  src.slice(0, cut) + '\n</head>\n<body>' + src.slice(cut) + '</body>\n</html>\n');
