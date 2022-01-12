<template>
  <v-card class="pa-5" outlined>
    <v-card-title class="text ">
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ date }}
    </v-card-subtitle>

    <v-row no-gutters style="display: flex; flex-wrap: wrap; flex-direction: row;">

      <!-- YouTube -->
      <v-col cols="12" sm="6" md="6" v-if="sdUrl.includes('youtube')">
        <v-row no-gutters class="justify-center">
          <LazyYoutube maxWidth="80%" :src="sdUrl" class="mt-5"/>
        </v-row>
      </v-col>

      <!-- Non YouTube -->
      <v-col sm="6" md="6" v-if="!sdUrl.includes('youtube')">
        <v-img :src="sdUrl" contain style="max-height: calc(100vh - 300px)" class="pa-5 ma-5"/>
        <v-row no-gutters class="justify-center ma-1" v-if="copyright">
          <span class="text-subtitle-2">©{{ copyright }}</span>
        </v-row>
      </v-col>

      <!-- Description with actions -->
      <v-col sm="6" md="6">
        <v-sheet class="mt-5" outlined>
          <ApodCardDescription :explanation="explanation"/>
          <ApodCardActions :hdUrl="hdUrl" :sdUrl="sdUrl"/>
        </v-sheet>
      </v-col>

    </v-row>
  </v-card>
</template>

<script>
import fetcher from "../../mixins/fetcher";
import ApodCardActions from "@/components/Cards/ApodCardActions";
import ApodCardDescription from "@/components/Cards/ApodCardDescription";

export default {
  name: "ApodCard",
  components: {ApodCardDescription, ApodCardActions},
  mixins: [fetcher],

  props: {
    copyright: String,
    explanation: String,
    date: String,
    title: String,
    hdUrl: String,
    sdUrl: String
  },

  data() {
    return {
      apiData: {},
    }
  },

}
</script>

<style scoped>
.text {
  overflow-wrap: break-word;
  word-wrap: break-word;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}
</style>