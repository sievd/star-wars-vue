import requestHandler from "./requestHandler";

export default {
  ...requestHandler,

  async getPeople(page) {
    return await this.get(`https://swapi.dev/api/people/?page=${page}`);
  },
  async getPlanets(page) {
    return await this.get(`https://swapi.dev/api/planets/?page=${page}`);
  },
  async getStarships(page) {
    return await this.get(`https://swapi.dev/api/starships/?page=${page}`);
  },
};
