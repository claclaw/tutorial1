const path = require('path')

console.log(path.sep)

const filepath = path.join('/content','subfolder','test.txt')
console.log(filepath)

const filename = path.basename(filepath)
console.log(filename)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)