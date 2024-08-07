import requests from "./httpService";

const BusinessCategoryServices = {
  getAllBusinessCategories() {
    return requests.get("/businessCategories");
  },
  createBusinessCategory(body) {
    return requests.post(`/businessCategories/create`, body);
  },
  // getInterestsById(id) {
  //   return requests.get(`/intrest/${id}`);
  // },
  updateBusinessCategory(id, body) {
    return requests.post(`/businessCategories/update/${id}`, body);
  },
  deleteBusinessCategory(id) {
    return requests.post(`/businessCategories/delete/${id}`);
  },
};

export default BusinessCategoryServices;
