import axios from "axios";

const baseUrl = " https://api-core.entrego.org/v1/locations";

const instance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

const getReq = function (url) {
  const baseURL = `${baseUrl}${url}`;
  return instance
    .get(baseURL)
    .then(function (response) {
      return response;
    })
    .catch((errResponse) => {
      return errResponse;
    });
};

export default getReq;
