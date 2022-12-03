// common js, every file is module (by default)
// modules - encapsulated code (only share minimum)
const sayHi = require('./5-utils')
const names = require('./4-names')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') // if a function is invoked on that file it will automatically run when you run this app.

sayHi(names.jose)
sayHi(names.peter)
sayHi('dogerland')

