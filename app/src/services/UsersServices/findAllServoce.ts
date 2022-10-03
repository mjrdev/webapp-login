import { IUser, User } from '../../Models/Model';
import { removePasswordInUserData } from '../../Helpers/Passwords';

export default async function findAll(): Promise<any> {

  const users = await User.find();
  const usersWithPassword = removePasswordInUserData(users)
  
  return usersWithPassword;
}