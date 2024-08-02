import requests from "./httpService";

const AdminServices = {
  loginAdmin(body) {
    return requests.post(`/users/login`, body);
  }
};

export default AdminServices;
