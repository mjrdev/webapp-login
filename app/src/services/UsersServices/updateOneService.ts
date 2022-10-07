import { IUser, User } from '../../Models/Model';
import { removePasswordInUserData } from '../../Helpers/Passwords';

export default async function updateOne(id: string ,up: any): Promise<any> {

    await User.findByIdAndUpdate(id, up);
    const user = await User.findById(id);

    const userToSend = removePasswordInUserData(user)
     
    return userToSend;
  }