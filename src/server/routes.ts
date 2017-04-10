import * as express from 'express'
const router = express.Router()

router.all('/form_demo', (req, res, next) => {
    const d = new Date()
    let data = []
    for (let i = 0; i < 10000; i++ ) {
        data.push({
            key: i,
            val: Math.random()
        })
    }
    res.render('table.html', {
        locals: {
            // data: req.body
            data
        },
        partials: { }
    })
})

export default router