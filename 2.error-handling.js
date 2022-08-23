function readFile(path) {
  return '파일의내용';
}

function processFile(path) {
  const content = readFile(path);
  const result = 'hi ' + content;
  return result;
}

const result = processFile('경로');
console.log(result);