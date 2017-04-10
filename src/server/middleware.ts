import * as es6Renderer from 'express-es6-template-engine'
import * as bodyParser from 'body-parser'
import * as compression from 'compression'

export default function(app) {

        // Enable gzip compression
        app.use( compression() )

        // Set up template engine
        app.engine('html', es6Renderer)
        app.set('views', 'src/server/views')
        app.set('view engine', 'html')

        // POST body parsing
        app.use( bodyParser.json() )
        app.use( bodyParser.urlencoded({
                extended: false
        }) )
}