import { IUser, User } from '../../Models/Model';
import { removePasswordInUserData } from '../../Helpers/Passwords';

interface IFindUser {
  username?: string, email?: string
}

export default async function findOne(id: string): Promise<any> {

    const user = await User.findById(id)
  
    if(user) {
      
      const usersWithPassword = removePasswordInUserData(user)
      return usersWithPassword;
    } else {
      throw Error('Not found user id');
    }
  }