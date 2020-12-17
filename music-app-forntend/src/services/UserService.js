import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8000/users";

class UserService {
  checkDetails(userId, userPassword) {
    return axios.get(
      USER_API_BASE_URL + "/validate/" + userId + "/" + userPassword
    );
  }

  createUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }

  getUser(userId) {
    return axios.get(USER_API_BASE_URL + "/" + userId)
  }

  updateUser(user, userId) {
    return axios.put(USER_API_BASE_URL + "/" + userId, user);
  }

  deleteUserAccount(userId) {
    return axios.delete(USER_API_BASE_URL + "/" + userId);
  }
}

export default new UserService();
