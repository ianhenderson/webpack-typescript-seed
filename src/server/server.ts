// External deps
import * as express from 'express'
import * as es6Renderer from 'express-es6-template-engine'

// Internal deps
import router from './routes'
import middleware from './middleware'

declare var __dirname
const app = express()

// Apply middleware
middleware(app)

// Apply routes
app.use('/ui', router)

// Main index
app.get('/', function (req, res) {
  res.render('index.html', {
    locals: {},
    partials: {}
  })
})

// Start app!
const port = 3000
app.listen(port, function () {
  console.log(`Example app listening at:`)
  console.log(`http://localhost:${port}`)
})
