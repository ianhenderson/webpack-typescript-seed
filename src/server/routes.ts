import * as express from 'express'
const router = express.Router()

router.all('/form_demo', (req, res, next) => {
    const d = new Date()
    res.send(d)
})

export default router