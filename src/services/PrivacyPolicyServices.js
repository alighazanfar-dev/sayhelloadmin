import requests from "./httpService";

const PrivacyPolicyServices = {
  getAllPrivacyPolicies() {
    return requests.get("/privacy");
  },
  upsertPrivacyPolicy(body) {
    return requests.post(`/privacy/create`, body);
  },
  getPrivacyPolicyById(id) {
    return requests.get(`/privacy/${id}`);
  },
  updatePrivacyPolicy(id, body) {
    return requests.put(`/privacy/update/${id}`, body);
  },
  deletePrivacyPolicy(id) {
    return requests.delete(`/privacy/delete/${id}`);
  },
};

export default PrivacyPolicyServices;
