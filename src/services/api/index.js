import requestHandler from "./requestHandler";

export default {
  ...requestHandler,

  async getPeople(page) {
    return await this.get(`https://swapi.dev/api/people/?page=${page}`);
  }
};
