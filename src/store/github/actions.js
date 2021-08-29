import axios from 'axios';

export default {
  async getIssues({ commit }, filterBy) {
    commit('setValue', {
      key: 'listIssues',
      value: []
    });
    try {
      const response = await axios.get('https://api.github.com/repos/nnluukhtn/employment_bot/issues?state=' + filterBy);
      if (response.status === 200 && response.data) {
        commit('setValue', {
          key: 'listIssues',
          value: response.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};
