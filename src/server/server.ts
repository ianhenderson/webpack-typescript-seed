// External deps
import * as express from 'express'
import * as es6Renderer from 'express-es6-template-engine'

// Internal deps
import router from './routes'

declare var __dirname
const app = express()

// Set up template engine
app.engine('html', es6Renderer)
app.set('views', 'src/server/views')
app.set('view engine', 'html');

// Apply routes
app.use('/ui', router)

app.get('/', function (req, res) {
  res.render('index', {
    locals: {
      date: new Date()
    },
    partials: {}
  })
})

// Start app!
const port = 3000
app.listen(port, function () {
  console.log(`Example app listening at:`)
  console.log(`http://localhost:${port}`)
})
