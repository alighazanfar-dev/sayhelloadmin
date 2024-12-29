import requests from "./httpService";

const BusinessCategoryServices = {
  getAllBusinessCategories() {
    return requests.get("/businessCategories");
  },
  updateBusinessCat(id, body) {
    return requests.put(`/business/category/${id}`, body);
  },
  createBusinessCategory(body) {
    return requests.post(`/businessCategories`, body);
  },
  GetBusinessDetails(id) {
    return requests.get(`/business/${id}`);
  },
  updateBusinessCategory(id, body) {
    return requests.post(`/businessCategories/update/${id}`, body);
  },
  deleteBusinessCategory(id) {
    return requests.delete(`/businessCategories/${id}`);
  },
};

export default BusinessCategoryServices;
