import Vuetify from 'vuetify';
import FilterBy from '@/components/FilterBy.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
const vuetify = new Vuetify();

describe('FilterBy.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FilterBy, {
      localVue,
      vuetify,
    });
  });

  describe('init', () => {
    it('load init', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });
});
