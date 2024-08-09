import requests from "./httpService";

const AdminServices = {
  loginAdmin(body) {
    return requests.post(`/users/login`, body);
  },
  ImageUpload(body) {
    return requests.post(`/upload`, body);
  },
};

export default AdminServices;
