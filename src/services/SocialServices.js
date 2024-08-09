import requests from "./httpService";

const SocialServices = {
  getSocialLinks() {
    return requests.get("/social");
  },
  createSocialLink(body) {
    return requests.post(`/social`, body);
  },
  updateSocialLink(id, body) {
    return requests.put(`/social/update/${id}`, body);
  },
  deleteSocialLink(id) {
    return requests.delete(`/social/${id}`);
  },
};

export default SocialServices;
