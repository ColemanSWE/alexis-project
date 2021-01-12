import mongoose from 'mongoose'

interface UserDoc extends mongoose.Document {
    email: String
    name: Object
    avatar: Object
}

interface IUser {
    email: String
    name: Object
    avatar: Object
}

interface UserModelInterface extends mongoose.Model<any> {
    build(attr: IUser): UserDoc
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    name: {
        first: {
            type: String,   
            required: true  
        },
    
        last: {
            type: String,
            required: true
        },
    },
    
    avatar: {
        url: {
            type: String,
            required: true
        }
    }
})

userSchema.statics.build = (attr: IUser) => {
    return new User(attr)
}


const User = mongoose.model<UserDoc, UserModelInterface>('User', userSchema)

export { User }