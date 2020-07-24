<template>
  <v-app>
    <h1>This is a (probably failed) attempt to chrash your browser.</h1>
    <h2>Please avoid if you don't have much ram and/or are on firefox, and make sure nothing is running in the background.<br/>I decline any responsibility if this page actually breaks anything.</h2>
    <v-btn @click="chrash">(probably don't) chrash my browser</v-btn>
  </v-app>
</template>

<script>
export default {
  methods: {
    chrash() {
      let e=Array.from({length:1e9}).fill('x')
      while(true){
        e=e.concat(e)
        console.log(e.length/1e9)
      }
    }
  }
}
</script>
