import requests from "./httpService";

const PaymentServices = {
  getPayments() {
    return requests.get("/payment/all");
  },
  createPayment(body) {
    return requests.post(`/payment/create`, body);
  },
  // getInterestsById(id) {
  //   return requests.get(`/intrest/${id}`);
  // },
  updatePayment(id, body) {
    return requests.post(`/payment/update/${id}`, body);
  },
  deletePayment(id) {
    return requests.post(`/payment/delete/${id}`);
  },
};

export default PaymentServices;
