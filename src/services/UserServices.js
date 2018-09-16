import axios from 'axios';

import User from '../models/User';

class UserService {
  getUsers() {
    return axios
      .get('https://randomuser.me/api/?results=45')
      .then(result => {
        return result.data.results;
      })
      .then(result => {
        return result.map(
          user =>
            new User(
              user.picture,
              user.name,
              user.email,
              user.dob.date,
              user.gender
            )
        );
      });
  }
}

export const userService = new UserService();
