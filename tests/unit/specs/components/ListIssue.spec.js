import Vuetify from 'vuetify';
import ListIssue from '@/components/ListIssue.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import storeMock from '../../mocks/store';

const localVue = createLocalVue();
const vuetify = new Vuetify();
const store = storeMock;

describe('ListIssue.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ListIssue, {
      localVue,
      vuetify,
      store,
    });
  });

  describe('init', () => {
    it('load init', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
