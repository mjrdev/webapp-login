import { Schema, model } from 'mongoose';

interface IUser {
    username: string,
    email: string,
    password: string,
    admin?: boolean
}


const userSchema = new Schema<IUser>({
    username: { type: String, required: true  },
    email: { type: String, required: true  },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false }
})

const User = model<IUser>('User', userSchema);

export default User;