<template>
  <div class="mt-10">
    <div>Filter by</div>
    <v-select
        v-model="filterBy"
        :items="items"
        label="Select Filter"
        single-line
        item-text="label"
        item-value="value"
        @change="select"
      ></v-select>
  </div>
</template>

<script>

export default {
  name: 'FilterBy',
  data() {
    return {
      filterBy: 'open',
      items: [
        {
          label: 'Open',
          value: 'open',
        },
        {
          label: 'Closed',
          value: 'closed',
        },
        {
          label: 'All',
          value: 'all',
        },
        {
          label: 'Test No Issue',
          value: 'no',
        },
      ],
    }
  },
  methods: {
    async select(filterBy) {
      await this.$store.dispatch('github/getIssues', { filterBy });
    },
  },
}
</script>
