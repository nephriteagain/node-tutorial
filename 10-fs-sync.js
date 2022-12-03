const {readFileSync, writeFileSync} = require('fs')


const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


console.log(first, second)

writeFileSync('./content/result-sync.txt', // file name
                 `here is the result : /n ${first}, /n ${second}`, // file content
                 {flag: 'a'} // append the file if this is present
                 ) 