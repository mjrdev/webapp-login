import { IUser, User } from '../../Models/Model';
import { removePasswordInUserData } from '../../Helpers/Passwords';

export default async function deleteOne(id: string): Promise<any> {

  const user = await User.findByIdAndDelete(id)
  return
}