import requests from "./httpService";

const SocialServices = {
  getSocialLinks() {
    return requests.get("/social");
  },
  createSocialLink(body) {
    return requests.post(`/social/create`, body);
  },
  updateSocialLink(id, body) {
    return requests.put(`/social/update/${id}`, body);
  },
  deleteSocialLink(id) {
    return requests.post(`/social/delete/${id}`);
  },
};

export default SocialServices;
