import requests from "./httpService";

const LanguageServices = {
  getLanguages() {
    return requests.get("/language/all");
  },
  createLanguage(body) {
    return requests.post(`/language/create`, body);
  },
  getLanguageById(id) {
    return requests.get(`/language/${id}`);
  },
  updatePayment(id, body) {
    return requests.put(`/language/update/${id}`, body);
  },
  deleteLanguage(id) {
    return requests.delete(`/language/${id}`);
  },
};

export default LanguageServices;
