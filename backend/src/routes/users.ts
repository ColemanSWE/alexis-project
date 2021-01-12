import express, { Request, Response } from 'express'
import { User } from '../models/users'

const router = express.Router()

// GET that returns all users. 
router.get('/api/users', [], async (req: Request, res: Response) => {
    const users = await User.find({})
    return res.status(200).send(users) 
})

// GET that returns one user. 
router.get('/api/user/:id', async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id, () => {
    return res.status(200).send(user)
    })
})

// POST that adds or updates a user in the database. 
router.post('/api/user', async (req: Request, res: Response) => {
    const { email, name, avatar } = req.body

    const user = User.build({ email, name, avatar })
    await user.save()
    return res.status(201).send(user)
})

export { router as userRouter }