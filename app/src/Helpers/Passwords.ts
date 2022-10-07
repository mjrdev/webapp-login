export function removePasswordInUserData(users: any): object | Array<object> {
  if(Array.isArray(users)) {

    const usersWithPassword = users.map((user: any) => {
      return Object.assign(user, { password: undefined });
    })

    return usersWithPassword;
  } else {
    const userWithPassword = Object.assign(users, { password: undefined });

    return userWithPassword;
  }
}