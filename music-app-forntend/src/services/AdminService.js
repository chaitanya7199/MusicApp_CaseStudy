import axios from "axios";

const ADMIN_API_BASE_URL = "http://localhost:8000/admins";

class AdminService {
  checkDetails(admin) {
    return axios.post(ADMIN_API_BASE_URL + "/valid", admin);
  }

  updateAdmin(admin, adminId) {
    return axios.put(ADMIN_API_BASE_URL + "/" + adminId, admin);
  }
}

export default new AdminService();
