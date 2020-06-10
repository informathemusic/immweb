<template>
  <v-container>
<h1>COVID-19 simulation</h1>
    <h3>Made by InforMatheMusic</h3>
    <div>
      <p>
        Country:
        <input id="country" type="text" placeholder="FR,US,IN,CH (More soon)" class="nes-input"/>
        <br />
        Dimentions:
        <input id="w" type="number" placeholder="Width (Leave empty to fill)" class="nes-input"/>
        <input
          id="h"
          type="number"
          placeholder="Height (Leave empty to fill)"
          class="nes-input"
        />
        <br />
        Number of spots:
        <input
          id="spots"
          type="number"
          placeholder="Number of spots (1-infinity, if your computer can handle it ;), defaulting to 6)"
          class="nes-input"
        />
        <br/>
        Representation of meters (in Px):
        <input
          id="fictiveM"
          type="number"
          placeholder="Representation of meters (in Px) (1-infinity, if your screen can handle it ;), defaulting to 10)"
          class="nes-input"
        />
        <br />
        <label><input id="stop" type="checkbox" class="nes-checkbox"/><span>Stop simulation at the end</span></label>
        <br />
        <label><input id="download" type="checkbox" class="nes-checkbox"/><span>Download data at the end</span></label>
      </p>
      <button @click="gotosim()" class="nes-btn">
        GO!
      </button>
    </div>
    <p>
      A current trend for developpers these days is to simulate COVID-19 spread,
      so here is my own version!
      <br />
      And i'll even go further by asking three people to do it within 24h or to<br/>
      donate to the CDC or to the WHO (You can continue it afterwards but it has<br/>
      to be something we can still visualise COVID-19 with):<br/>
    </p>
    <table>
      <ul>
        @SaintPlays#7380
      </ul><br/>
      <ul>
        @Instafluff#7764
      </ul><br/>
      <ul>
        @w3cj#7953
      </ul><br/>
    </table>
    <p>
      Good luck. You have 24 hours.
    </p>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    // Just like JSX! Oh wait...
    page: ``
  }),
  methods: {
    gotosim() {
      let stop, download, spots, country, w, h, fictiveM;
      stop = "?stop=" + document.getElementById("stop").checked;
      download = "&downloaddata=" + document.getElementById("download").checked;
      spots =
        Number(document.getElementById("spots").value) > 0 ?
        "&spotsN=" + Number(document.getElementById("spots").value) :
        "";
      country =
        document.getElementById("country").value.toLowerCase() == "ch" ||
        document.getElementById("country").value.toLowerCase() == "in" ||
        document.getElementById("country").value.toLowerCase() == "fr" ||
        document.getElementById("country").value.toLowerCase() == "us" ?
        "&country=" + document.getElementById("country").value.toLowerCase() :
        "";
      fictiveM =
        Number(document.getElementById("fictiveM").value) > 0 ?
        "&fM=" + Number(document.getElementById("fictiveM").value) :
        "";
      w =
        Number(document.getElementById("w").value) > 0 ?
        "&w=" + Number(document.getElementById("w").value) :
        "";
      h =
        Number(document.getElementById("h").value) > 0 ?
        "&h=" + Number(document.getElementById("h").value) :
        "";
      //console.log(`https://immweb.glitch.me/covid-19_sim/simulation.html${stop}${download}${spots}${country}${fictiveM}${w}${h}`)
      location.href = `/#/covid-19_sim/simulation${stop}${download}${spots}${country}${fictiveM}${w}${h}`;
    }
  },
  head: {
    link: [{
        href: 'https://fonts.googleapis.com/css?family=Press+Start+2P',
        rel: 'stylesheet'
      },
      {
        href: 'https://unpkg.com/nes.css@latest/css/nes.min.css',
        rel: 'stylesheet'
      },
    ]
  }
}
</script>

<style>
html,body{
  margin:10;
  padding:10;
}
h1 h2 p {
  font-family:'Press Start 2P' !important;
}
</style>
