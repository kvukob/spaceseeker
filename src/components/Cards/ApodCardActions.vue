<template>
  <v-card-actions>

    <v-btn @click="likeImage()" :ripple="false">
      <v-icon large :color="likeColor">mdi-heart</v-icon>
      Like
    </v-btn>

    <v-spacer class="hidden-lg-and-up"/>
    <v-divider vertical class="ma-2 hidden-md-and-down"/>

    <v-btn @click="shareLinkHandler()">
      <v-icon large>mdi-share</v-icon>
      Share
    </v-btn>
    <v-snackbar
        multi-line
        v-model="snackBar"
        timeout="5000"
    >
      Link has been copied to your clipboard

      <template v-slot:action="{ attrs }">
        <v-btn
            outlined
            color="red"
            v-bind="attrs"
            @click="snackBar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

  </v-card-actions>
</template>

<script>
export default {
  name: "ApodCardActions",

  props:{
    hdUrl: String,
    sdUrl: String
  },

  data(){
    return{
      snackBar: false,
      likeColor: 'white',
    }
  },

  methods: {
    shareLinkHandler: function(){
      this.snackBar = true;
      if(this.sdUrl.includes('youtube')){
        navigator.clipboard.writeText(this.sdUrl);
      }else{
        navigator.clipboard.writeText(this.hdUrl);
      }
    },
    likeImage: function () {
      if (this.likeColor === 'white') this.likeColor = 'red'
      else
        this.likeColor = 'white'
    }
  }
}
</script>

<style scoped>

</style>