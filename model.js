const mongoose = require('mongoose') 
const Schema = mongoose.Schema

const rol_schema = new Schema({
    rol: {
        type: Schema.ObjectId,
        ref: 'rol',
    }
})

const userSchema = new Schema({
    username: { 
        type: String, 
        unique: true 
    },
    email: { 
        type: String, 
        unique: true },
    password: { 
        type: String, 
        required: true },
    roles: [rol_schema]
}, {
    timestamps: true,
    versionKey: false
})

const model = mongoose.model('user', userSchema)
module.exports = model