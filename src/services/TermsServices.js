import requests from "./httpService";

const TermsServices = {
  getTermsConditions() {
    return requests.get("/terms/all");
  },
  createTermsCondition(body) {
    return requests.post(`/terms/create`, body);
  },
  getTermsConditionById(id) {
    return requests.get(`/terms/${id}`);
  },
  updateTermsCondition(id, body) {
    return requests.put(`/terms/update/${id}`, body);
  },
  deleteTermsCondition(id) {
    return requests.delete(`/terms/delete/${id}`);
  },
};

export default TermsServices;
