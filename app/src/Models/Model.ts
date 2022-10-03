import { Schema, model } from 'mongoose';

export interface IUser {
    username: string,
    email: string,
    password: string,
    admin?: boolean
}


const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    admin: { type: Boolean, default: false }
}, {
    timestamps: {
        createdAt: 'create-at', updatedAt: 'updated-at'    
    }
})

export const User = model<IUser>('User', userSchema);