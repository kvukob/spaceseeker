<template>
  <v-container>
    <div class="ma-5">
      <div>
        <v-icon x-large>
          mdi-earth
        </v-icon>
        <span class="text-h4 text-decoration-overline">
          Space Seeker
        </span>
      </div>
      <div class="text-subtitle-2 ml-10">
        Brought to you by NASA's Free API
      </div>
    </div>

    <v-card v-if="loading">
      <div class="overline text-h4 ma-5 pt-5">
        Loading
      </div>
      <v-row no-gutters>
        <v-col cols="12" sm="6">
          <v-skeleton-loader :loading="loading" type="image"/>
        </v-col>
        <v-col cols="12" sm="6">
          <v-skeleton-loader :loading="loading" type="article"/>
        </v-col>
      </v-row>
    </v-card>

    <v-sheet v-for="(item,i) in apiData" :key="i" color="transparent">
      <ApodCard
          :title="item['title']"
          :copyright="item['copyright']"
          :explanation="item['explanation']"
          :date="item['date']"
          :hd-url="item['hdurl']"
          :sd-url="item['url']"
      />
      <v-divider class="ma-5"/>
    </v-sheet>

  </v-container>
</template>

<script>
import fetcher from "@/mixins/fetcher";

import ApodCard from "../components/Cards/ApodCard";

export default {
  name: 'Home',

  mixins: [fetcher],

  components: {
    ApodCard
  },

  mounted() {
    this.fetchApod()
  },

  data() {
    return {
      apiData: [],
      loading: false,
      todayDate: new Date()
    }
  },

  methods: {
    fetchApod: async function () {
      // Display skeleton loader
      this.loading = true;

      // Format dates
      let endDate = this.todayDate.toISOString().split('T')[0];
      let twentyDaysAgo = this.todayDate.setDate(this.todayDate.getDate() - 19);
      let startDate = new Date(twentyDaysAgo).toISOString().split('T')[0];

      // Fetch data with parameters
      this.apiData = await this.$_getData(
          '&start_date=' + startDate +
          '&end_date=' + endDate);

      // Reverse the results to display new images first
      this.apiData.reverse();

      // Hide skeleton loader
      this.loading = false;
    },
  }
}
</script>
