const axios = require("axios");
const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: parseInt(TIMEOUT), // jika setelah 5 detik tidak ada maka akan ada return setelah 5 detik
  });
};
