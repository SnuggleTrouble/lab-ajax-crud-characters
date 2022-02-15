const { default: axios } = require("axios");

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (characterId) {
    return axios.get(`${this.BASE_URL}/characters/${characterId}`)
  }

  createOneRegister (characterData) {
    return axios.post(`${this.BASE_URL}/characters`, characterData)
  }

  updateOneRegister (characterId, characterData) {
    return axios.put(`${this.BASE_URL}/characters/${characterId}`, characterData)
  }

  deleteOneRegister (characterId) {
    return axios.delete(`${this.BASE_URL}/characters/${characterId}`)
  }
}