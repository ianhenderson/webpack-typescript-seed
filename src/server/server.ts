// hacky `import * as <localName> from <legacyModule>`
// http://stackoverflow.com/questions/29596714/new-es6-syntax-for-importing-commonjs-amd-modules-i-e-import-foo-require/29598404#29598404
import * as express from 'express'
declare var __dirname

const app = express()

app.get('/', function (req, res) {
  res.sendFile('views/index.html', { root: __dirname })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
