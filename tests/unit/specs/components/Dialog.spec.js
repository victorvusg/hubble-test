import Vuetify from 'vuetify';
import Dialog from '@/components/Dialog.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
const vuetify = new Vuetify();

describe('Dialog.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Dialog, {
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
