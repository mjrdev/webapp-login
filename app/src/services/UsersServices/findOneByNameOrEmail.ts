import { IUser, User } from '../../Models/Model';
import { removePasswordInUserData } from '../../Helpers/Passwords';

export default async function findOne(key: string): Promise<any> {
  

    if(!key) {
      throw Error('Not data');
    }  

    const user = await User.findOne({ username: key });
    
  
    if(user) {
      
      const usersWithPassword = removePasswordInUserData(user);
      return usersWithPassword;
    } else {
      throw new Error('Not found user');
  
      return
    }
  }