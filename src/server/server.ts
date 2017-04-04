// hacky `import * as <localName> from <legacyModule>`
// http://stackoverflow.com/questions/29596714/new-es6-syntax-for-importing-commonjs-amd-modules-i-e-import-foo-require/29598404#29598404
import * as express from 'express'
import { BaseData, Entity } from '../shared/shared'
declare var __dirname

const app = express()

const node_modules = __dirname + '/../../node_modules'
console.log('node_modules', node_modules)
const js_src = __dirname + '/../client/dist'
console.log('js_src', js_src)

app.use( express.static(js_src) )
app.use( express.static(node_modules) )


app.get('/', function (req, res) {
  res.sendFile('views/index.html', { root: __dirname })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
