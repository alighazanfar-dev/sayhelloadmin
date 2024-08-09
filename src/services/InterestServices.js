import requests from "./httpService";

const InterestServices = {
  getAllInterests() {
    return requests.get("/intrest/all");
  },
  updateStatus(id, body) {
    return requests.put(`/intrest/update-intrest/${id}`);
  },
  addInterest(body) {
    return requests.post(`/intrest/create`, body);
  },
  getInterestsById(id) {
    return requests.get(`/intrest/${id}`);
  },
  updateInterest(id, body) {
    return requests.post(`/intrest/update/${id}`, body);
  },
  deleteInterest(id) {
    return requests.delete(`/intrest/delete-intrest/${id}`);
  },
};

export default InterestServices;
