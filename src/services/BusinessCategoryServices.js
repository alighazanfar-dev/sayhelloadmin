import requests from "./httpService";

const BusinessCategoryServices = {
  getAllBusinessCategories() {
    return requests.get("/businessCategories");
  },
  createBusinessCategory(body) {
    return requests.post(`/businessCategories`, body);
  },
  // getInterestsById(id) {
  //   return requests.get(`/intrest/${id}`);
  // },
  updateBusinessCategory(id, body) {
    return requests.post(`/businessCategories/update/${id}`, body);
  },
  deleteBusinessCategory(id) {
    return requests.delete(`/businessCategories/${id}`);
  },
};

export default BusinessCategoryServices;
