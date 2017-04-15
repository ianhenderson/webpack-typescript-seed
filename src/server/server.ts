// hacky `import * as <localName> from <legacyModule>`
// http://stackoverflow.com/questions/29596714/new-es6-syntax-for-importing-commonjs-amd-modules-i-e-import-foo-require/29598404#29598404
import * as express from 'express'
import { NAME, VERSION } from 'src/shared/shared'
declare var __dirname

const app = express()

app.use( express.static('src/../build') ) // why can't i use app/build...?


app.get('/', function (req, res) {
	res.sendFile('server/views/index.html', { root: 'src'})

})

app.listen(3000, function () {
  console.log(`Current version: ${VERSION}`)
  console.log('Example app listening on port 3000!')
})
