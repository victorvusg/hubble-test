<template>
  <div class="mx-10">
    <FilterBy />
    <template v-if="listIssues.length > 0">
      <v-card>
        <v-list>
          <div class="text-h6 ml-2">List Issues</div>
          <v-list-item
            v-for="(issue, key) in listIssues"
            :key="key" 
            class="mt-5 d-flex"
          >
            <v-list-item-content>
              <v-list-item-title>
                <span class="text-h6 mr-2">{{ `#${issue.number}`}}</span>
                <span class="title" @click="click(key)">{{issue.title}}</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                <p>{{issue.created_at | formatDate}}</p>
                <p>{{`by ${issue.user.login}`}}</p>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>

      <Dialog
        @closed="closeDialog" 
        :dialog="dialog" 
        :selected-issue="selectedIssue"
      />
    </template>
    <template v-else>
      <p>There is no any issue</p>
    </template>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import Dialog from './Dialog.vue';
import FilterBy from './FilterBy.vue';

export default {
  components: { FilterBy, Dialog },
  name: 'ListIssue',
  computed: {
    ...mapState('github', ['listIssues']),
  },
  data() {
    return {
      dialog: false,
      selectedIssue: null,
    }
  },
  methods: {
    click(key) {
      this.dialog = true;
      this.selectedIssue = this.listIssues.find((e, k) => k === key);
    },
    closeDialog() {
      this.dialog = false;
      this.selectedIssue = null;
    }
  },
  async created() {
    await this.$store.dispatch('github/getIssues', { filterBy: 'open'});
    this.$store.dispatch('github/getIssues', { filterBy: 'all', isCached: true });
  }
}
</script>

<style lang="scss" scoped>
.title {
  &:hover {
    cursor: pointer;
  }
}
</style>

