const { RESTDataSource } = require('apollo-datasource-rest');

// Reducer
const { freeCompanyReducer, memberReducer } = require('./reducers/index');

class XivApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://xivapi.com';
  }

  // This function assumes you are requesting a single Free Company's data and
  // know the name of the Free Company as well as the name of the server it resides on
  // name and server parameters are required in the query Type for members
  async getFreeCompanyMembers({ name = '', server = '' }) {
    try {
      const results = await this.get(`/freecompany/search`, {
        name,
        server
      });

      const res = await this.get(`/freecompany/${results.Results[0].ID}`, {
        data: 'FCM'
      });
      return Array.isArray(res.FreeCompanyMembers)
        ? res.FreeCompanyMembers.map(member => memberReducer(member))
        : {};
    } catch (err) {
      console.error(err);
    }
  }

  async searchForFreeCompany({ name = '', server = '' }) {
    try {
      const res = await this.get(`/freecompany/search`, { name, server });
      return Array.isArray(res.Results)
        ? res.Results.map(fc => freeCompanyReducer(fc, { search: true }))
        : [];
    } catch (err) {
      console.error(err);
    }
  }

  async getFreeCompanyById({ lodestoneID = '', getMembers = false }) {
    try {
      let options = {};
      let freeCompany = {};

      if (getMembers) {
        options = { data: 'FCM' };
      }

      const res = await this.get(`/freecompany/${lodestoneID}`, options);

      if (
        Array.isArray(res.FreeCompanyMembers) &&
        res.FreeCompanyMembers.length > 0
      ) {
        freeCompany = {
          ...res.FreeCompany,
          FreeCompanyMembers: [...res.FreeCompanyMembers]
        };
      } else {
        freeCompany = {
          ...res.FreeCompany
        };
      }

      return freeCompanyReducer(freeCompany, { getMembers });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = XivApi;
