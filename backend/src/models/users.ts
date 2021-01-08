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
        type: String, 
        required: true
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