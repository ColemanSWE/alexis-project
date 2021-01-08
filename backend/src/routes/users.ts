import express from 'express'

const router = express.Router()

router.get('/api/user', (req, res) => {
    return res.send('the user')
})

router.post('api/user', (req, res) => {
    return res.send('new user created')
})

export { router as userRouter }