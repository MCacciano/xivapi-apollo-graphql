const { RESTDataSource } = require('apollo-datasource-rest');

// Reducer
const {
  freeCompanyReducer,
  freeCompaniesReducer,
  characterReducer,
  charactersReducer
} = require('./reducers/index');

class XivApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://xivapi.com';
  }

  // * @route : /freecompany/:id
  async freeCompany({ id = '' }) {
    try {
      const res = await this.get(`freecompany/${id}?extended=1&data=FCM`);
      return freeCompanyReducer(res.FreeCompany);
    } catch (err) {
      console.error(err);
    }
  }

  // * @route  : /freecompany/search
  // * @params : name: String, server: String, page: String/Int
  async freeCompanies({ name = '', server = '', page = 1 }) {
    try {
      const res = await this.get(
        `/freecompany/search?name=${name}&server=${server}&page=${page}`
      );

      const { Pagination, Results } = res;

      if (!Array.isArray(Results)) return [];

      return Results.map(freeCompany => freeCompaniesReducer(freeCompany));
    } catch (err) {
      console.error(err);
    }
  }

  // * @route : /character/:id
  async character({ id }) {
    const params = {
      extended: 1
    };

    try {
      // &columns-Character.portrait - add full character portrait to request
      const res = await this.get(
        `/character/${id}?extended=1&data=FC,FCM,AC,FR`
      );
      return characterReducer(res);
    } catch (err) {
      console.error(err);
    }
  }

  // * @route  : /character/search
  // * @params : name: String, server: String, page: String/Int
  async characters({ name = '', server = '', page = 1 }) {
    let searchName =
      name.split(' ').length > 1
        ? `${name.split(' ')[0]}+${name.split(' ')[1]}`
        : name;

    try {
      const res = await this.get(
        `/character/search?name=${searchName}&server=${server}&page=${page}`
      );

      const { Pagination, Results } = res;

      if (!Array.isArray(Results)) return [];

      return Results.map(character => charactersReducer(character));
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = XivApi;
