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
    const user = await User.findById(req.params.id, () => {})
    console.log(user)
    if (!user) {
        console.log('user does not exist')
        return res.status(404).end()
    }
    return res.status(200).send(user)
})

// DELETE that deletes one user. 
router.delete('/api/user/:id', async (req: Request, res: Response) => {
    const user = await User.findByIdAndRemove(req.params.id).exec()
    return res.status(204).end()
})
    
// POST that adds or updates a user in the database. 
router.post('/api/user', async (req: Request, res: Response) => {
    const { email, name, avatar } = req.body

    const user = User.build({ email, name, avatar })
    await user.save()
    return res.status(201).send(user)
})

export { router as userRouter }