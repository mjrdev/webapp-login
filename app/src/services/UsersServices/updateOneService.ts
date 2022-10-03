import { IUser, User } from '../../Models/Model';
import bcrypt from "bcryptjs";
import { removePasswordInUserData } from '../../Helpers/Passwords';

export default async function updateOne(user: any): Promise<any> {
    const password = bcrypt.hashSync(user.password, 10);
    user.password = password;
  
    const userCreation: any = await User.create(user);
    userCreation.password = undefined;
     
    return userCreation;
  }