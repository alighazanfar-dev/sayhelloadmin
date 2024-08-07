import requests from "./httpService";

const GenderServices = {
  getAllGlobalGenderSettings() {
    return requests.get("/genderGlobal/all");
  },
  addSubcategoryToGender(body) {
    return requests.post(`/genderGlobal/add-subcategory`, body);
  },
  
};

export default GenderServices;
