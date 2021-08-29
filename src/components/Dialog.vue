<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="350"
    v-if="selectedIssue"
  >
    <v-card>
      <v-card-title class="text-h5">
        {{selectedIssue.title}}
      </v-card-title>
      <v-card-text>{{selectedIssue.body}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="close"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'FilterBy',
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    selectedIssue: {
      type: Object,
      default: null,
    },
  },
  methods: {
    close() {
      this.$emit('closed');
    }
  }
}
</script>
