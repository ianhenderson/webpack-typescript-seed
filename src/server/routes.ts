import * as express from 'express'
const router = express.Router()

router.all('/form_demo', (req, res, next) => {
    const d = new Date()
    res.render('table', {
        locals: {
            data: req.body
        },
        partials: { }
    })
})

export default router