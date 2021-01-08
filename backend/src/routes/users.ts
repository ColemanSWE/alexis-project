import express, { Request, Response } from 'express'
import { User } from '../models/users'

const router = express.Router()

router.get('/api/user', [], async (req: Request, res: Response) => {
    const user = await User.find({})
    return res.status(200).send(user) 
})

router.post('api/user', async (req: Request, res: Response) => {
    const { id, email, firstName, lastName, avatarUrl } = req.body

    const user = User.build({ id, email, firstName, lastName, avatarUrl })
    await user.save()
    return res.status(201).send(user)
})

export { router as userRouter }