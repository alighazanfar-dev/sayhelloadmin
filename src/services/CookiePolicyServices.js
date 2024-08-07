import requests from "./httpService";

const CookiePolicyServices = {
  getAllCookiePolicies() {
    return requests.get("/cookiepolicy");
  },
  upsertCookiePolicy(body) {
    return requests.post(`/cookiepolicy/create`, body);
  },
  getCookiePolicyById(id) {
    return requests.get(`/cookiepolicy/${id}`);
  },
  updateCookiePolicy(id, body) {
    return requests.put(`/cookiepolicy/update/${id}`, body);
  },
  deleteCookiePolicyById(id) {
    return requests.delete(`/cookiepolicy/delete/${id}`);
  },
};

export default CookiePolicyServices;
