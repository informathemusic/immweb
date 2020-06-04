<template>
  <div>
    <v-container id="header" fluid>
      <div class="big-text-container text-no-wrap">
        <h6 class='big-text header-txt'>
          <img id="front-image" src="../assets/immPic.png"/>
          <div id="name">
            Infor<img src="../assets/1.png" class="emote"/><br/>
            Mathe<img src="../assets/2.png" class="emote"/><br/>
            Music<img src="../assets/3.png" class="emote"/>
          </div>
        </h6>
      </div>
      <h1 class='header-txt'>I'm a teenager, JS developer.</h1>
      <br/>
      <h2 class='header-txt'>I've learned programming for {{currYear-116}} years</h2>
      <h3 class='header-txt'>and {{currYear-117}} focused deeply on javascript</h3>
    </v-container>
    <h1>I've learned:</h1>
    <div class="flex" v-for="(itemsInRow,key) in acquired" :key="`row-${key}`">
      <div v-for="(item,key) in itemsInRow" class="elements" :key="`item-${key}`">
        <v-icon size="90" :color="item.color" class="elements-icon">mdi-{{item.icon}}</v-icon>
        <h4>{{item.name}}</h4>
        <v-progress-linear height="8" :color="item.color" :value="item.progress"></v-progress-linear>
        <h6>{{currYear-item.startingYear}} years of experience</h6>
      </div>
    </div>
    <h1>Streamers i watch:</h1>
    <a v-for="(streamer, key) in this.streamerList" :aria-label="key" :href="`https://twitch.tv/${key}`" :key="`streamer-${key}`">
      <img class="elements" :src="streamer.img">
    </a>
    <h1>Why I've chosen Javascript</h1>
    <p>
      Javascript is particularily easy to learn.<br/>
      It runs anywhere where python can run and in the browser console,<br/>
      It can perform any task python can perform and it is particularily beginner-friendly.<br/>
      It interacts with webpages using DOM, and you don't need to install any libs to do it<br/>
      And this is why I think JavaScript is the way
    </p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    void: () => {}
  },
  data:() => ({
    streamerList: {
      instafluff: {img:''},
      codinggarden:  {img:''},
      saintplaysthings:  {img:''},
      dav1dsnyder404: {img:''},
    },
    currYear: new Date().getYear(),
    console,
    acquired: [{
      vue:{
        name: 'Vue.js',
        color: '#428170',
        icon: 'vuejs',
        progress: 20,
        startingYear: 120
      },
      js:{
        name: 'JS (As a whole)',
        color: '#FC6',
        icon: 'language-javascript',
        progress: 70,
        startingYear: 118
      },
      nodejs:{
        name: 'Node Js',
        color: '#7CB83F',
        icon: 'nodejs',
        progress: 60,
        startingYear: 118
      }
    },
    {
      html:{
        name: 'HTML',
        color: '#ED652A',
        icon: 'language-html5',
        progress: 80,
        startingYear: 116
      },
      jsdom:{
        name: 'JS (DOM)',
        color: '#FC6',
        icon: 'monitor-dashboard',
        progress: 70,
        startingYear: 116
      },
      css:{
        name: 'CSS',
        color: '#4DA8DB',
        icon: 'language-css3',
        progress: 70,
        startingYear: 116
      },
    }]
  }),
  mounted() {
    Object.entries(this.streamerList).forEach(async ([i])=>{
      const aa=await (await (await fetch(`https://fp4u.glitch.me/img/${i}`, {mode: 'cors'})).blob()).text()
      this.streamerList[i].img=aa;
      this.streamerList[i];
    })
  }
}
</script>

<style>
.emote {
  height: 12vw;
  vertical-align: text-top;
}

.big-text-container {
  margin-left: 0;
}

.big-text {
  font-size: 120px;
  font-weight: lighter;
  padding: 20px;
}

#name{
  text-align: left;
  font-size: 12vw;
}

#header {
  background-color: #EB5;
  background-position: top;
}

#front-image{
  height: 50vw;
  border-right: 2px solid white;
  float: left;
}

.flex{
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.elements-icon{
  padding: 10px;
}

h6{
  padding: 2px;
}

.header-txt{
  color: white;
}

.elements{
  width: 160px;
  height: 160px;
  border-radius: 15px;
  background: #DDD;
  margin: 10px;
}

*{
  text-align: center;
}
</style>