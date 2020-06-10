<template>
    <iframe :src="`https://immweb.glitch.me/covid-19_sim/simulation.html?${Object.entries($route.query).map(([i,v])=>`${i}=${v}`).join('&')}`" frameBorder="0"></iframe>
</template>

<script>
export default {
  head: {
    script:[
      {src:'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js'},
      {src:'https://cdn.jsdelivr.net/npm/chart.js@2.8.0'},
    ]
  },
  data:()=>({
    menu:{}
  }),
  mounted() {
    this.menu=document.getElementById('menu');
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
iframe {
  width:100%;
  height: 100%;
}
</style>

