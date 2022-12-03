const {createReadStream} = require('fs')
// stream - set data by chunks
const stream = createReadStream('./content/big.txt', {
    highWaterMark: 9000,
    encoding: 'utf-8'
})


// default 64kb
// last buffer - remainder
// highWaterMark -control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})

stream.on('data',(result) => {
    console.log(result)
})

stream.on('error', (err) => console.log(err))