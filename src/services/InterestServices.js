import requests from "./httpService";

const InterestServices = {
  getAllInterests() {
    return requests.get("/intrest/all");
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
    return requests.post(`/intrest/delete/${id}`);
  },
};

export default InterestServices;
