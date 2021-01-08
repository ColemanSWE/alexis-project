import mongoose from 'mongoose'

interface UserDoc extends mongoose.Document {
    id: Number
    email: String
    firstName: String
    lastName: String
    avatarUrl: String
}

interface IUser {
    id: Number
    email: String
    firstName: String
    lastName: String
    avatarUrl: String
}

interface UserModelInterface extends mongoose.Model<any> {
    build(attr: IUser): UserDoc
}

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    firstName: {
        type: String,  // Not Sure yet if these names and Url can be nested before I 
        required: true // use them in a javascipt object so this will be the setup for now. 
    },

    lastName: {
        type: String,
        required: true
    },

    avatarUrl: {
        type: String,
        required: true
    }
})

userSchema.statics.build = (attr: IUser) => {
    return new User(attr)
}

const User = mongoose.model<UserDoc, UserModelInterface>('User', userSchema)

export { User }