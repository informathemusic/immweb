<template>
  <v-app>
    <h1>This is a (probably failed) attempt to chrash your browser.</h1>
    <v-btn @click="chrash">(probably don't) chrash my browser</v-btn>
  </v-app>
</template>

<script>
export default {
  methods: {
    chrash() {
      let e=Array.from({length:1e9})
      while(true){
        e.fill(e)
      }
    }
  }
}
</script>