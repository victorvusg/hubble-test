<template>
  <v-app>
    <v-main>
      <ListIssue />
    </v-main>
  </v-app>
</template>

<script>

import ListIssue from '@/components/ListIssue';

export default {
  name: 'App',
  components: {
    ListIssue
  },
};
</script>
