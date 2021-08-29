import axios from 'axios';

export default {
  async getIssues({ state, commit }, { filterBy = null, isCached = false }) {
    try {
      const response = await axios.get('https://api.github.com/repos/nnluukhtn/employment_bot/issues?state=' + filterBy);
      if (response.status === 200 && response.data) {
        if (!isCached) {
          commit('setValue', {
            key: 'listIssues',
            value: response.data,
          });
        } else {
          commit('setValue', {
            key: 'listIssuesCached',
            value: response.data,
          });
        }
      }
    } catch (error) {
      const cachedData = state.listIssuesCached.filter(e => e.state === filterBy);
      commit('setValue', {
        key: 'listIssues',
        value: cachedData,
      });
    }
  },
};
