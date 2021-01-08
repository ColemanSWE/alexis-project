import mongoose from 'mongoose'
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

const User = mongoose.model('User', userSchema)

export { User }