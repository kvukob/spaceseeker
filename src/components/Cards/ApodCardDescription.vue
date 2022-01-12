<template>
  <div>
    <div class="hidden-md-and-up">
      <v-card flat>
        <v-card-subtitle v-if="!fullDescription">
          {{ explanation.split('.')[0] }}.
        </v-card-subtitle>
        <v-card-subtitle v-if="fullDescription">
          {{ explanation }}
        </v-card-subtitle>
        <v-card-actions>
          <v-btn block @click="toggleDescription" outlined>
            <span v-if="!fullDescription">Read More</span>
            <span v-if="fullDescription">Read Less</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <div class="hidden-sm-and-down">
      <v-card flat>
        <v-card-title>Description</v-card-title>
        <v-card-subtitle>
          {{ explanation }}
        </v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApodCardDescription",

  props:{
    explanation: String
  },

  data(){
    return{
      fullDescription: false
    }
  },

  methods: {
    toggleDescription: function () {
      this.fullDescription = !this.fullDescription
    },
  }
}
</script>

<style scoped>

</style>