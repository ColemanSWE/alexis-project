import express, { Request, Response } from 'express'
import { User } from '../models/users'

const router = express.Router()

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

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

// PUT that updates a user. 
router.put('/api/user/:id', async (req: Request, res: Response) => {
    const { email, name, avatar } = req.body

    const userId = req.params.id;
    const user =  { "email": email, "name": name, "avatar": avatar } 
    User.findByIdAndUpdate(userId, user, {upsert: false}, 
        (err, docs) => { 
        if (err){ 
            console.log(err) 
        } 
        else { 
            console.log("Updated User : ", docs)
            return res.status(200).json(docs).end()
        } 
    })
})
    
// POST that adds a user to the database. 
router.post('/api/user', async (req: Request, res: Response) => {
    const { email, name, avatar } = req.body

    const user = User.build({ email, name, avatar })
    await user.save()
    return res.status(201).send(user)
})

export { router as userRouter }