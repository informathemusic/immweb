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
      <h1 class='header-txt'>I'm a JS developer who is passionate about my projects.</h1>
      <br/>
      <h2 class='header-txt'>I've learned programming for {{currYear-116}} years</h2>
      <h3 class='header-txt'>and {{currYear-117}} focused deeply on javascript</h3>
    </v-container>
    <h1>I've learned:</h1>
    <div class="flex" v-for="(itemsInRow,key1) in acquired" :key="`row-${key1}`">
      <v-menu offset-y transition="slide-y-transition" v-for="(item,key2) in itemsInRow" :key="`item-${key1}-${key2}`">
        <template v-slot:activator="{ on }">
          <div class="elements" v-on="on">
            <v-icon size="90" :color="item.color" class="elements-icon">mdi-{{item.icon}}</v-icon>
            <h4>{{item.name}}</h4>
            <v-progress-linear height="8" :color="item.color" :value="item.progress"></v-progress-linear>
            <h6>{{currYear-item.startingYear}} years of experience</h6>
          </div>
        </template>
        <v-list color="#DDD">
          <v-list-item><b>What I have achieved using {{item.name}}</b></v-list-item>
          <v-divider/>
          
          <v-list-item v-for="(achieved, key3) in item.achieved" :key="`achieved-${key3}`">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <a v-on="on" :href="achieved.href">{{achieved.name}}</a>
              </template>
              <span>{{achieved.desc}}</span>
            </v-tooltip>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <h1>Streamers i watch:</h1>
    <a v-for="(streamer, key) in this.streamerList" :aria-label="key" :href="`https://twitch.tv/${key}`" :key="`streamer-${key}`">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <img type="i" v-on="on" class="elements" :src="`https://fp4u.glitch.me/img/${key}`">
        </template>
        <span>{{key}}</span>
      </v-tooltip>
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
    toggleGithub(k1,k2) {
      this.acquired[k1][k2].githubToggeled=!this.acquired[k1][k2].githubToggeled
    },
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
    acquired: [
      {
        vue:{
          name: 'Vue.js',
          color: '#428170',
          icon: 'vuejs',
          progress: 20,
          startingYear: 120,
          achieved:{
            immweb:{
              name: 'My website',
              href: 'https://github.com/informathemusic/immweb',
              desc: 'You are currently on it'
            }
          }
        },
        js:{
          name: 'JS in itself',
          color: '#FC6',
          icon: 'language-javascript',
          progress: 70,
          startingYear: 117,
          achieved:{
            informadbjs:{
              name: 'Informa-db.js',
              href: 'https://github.com/informathemusic/informa-db.js',
              desc: 'DataBases made easier'
            }
          }
        },
        nodejs:{
          name: 'Node Js',
          color: '#7CB83F',
          icon: 'nodejs',
          progress: 60,
          startingYear: 118,
          achieved:{
            bots:{
              name: 'Bots. Lots of bots.',
              href: 'https://glitch.com/@informathemusic',
              desc: 'Bots of all kind (Tmijs, discord.js)'
            }
          }
        }
      },
      {
        html:{
          name: 'HTML, CSS & JS',
          color: '#ED652A',
          icon: 'language-html5',
          progress: 80,
          startingYear: 116,
          achieved:{
            covi19sim: {
              name: 'A covid-19 spread simulator',
              href: '/#/covid-19_sim',
              desc: 'Spreads using spread points'
            },
            p5sketches: {
              name: 'Sketches using p5js',
              href: 'https://editor.p5js.org/informathemusic/sketches',
              desc: 'P5js is a library that makes canvas usages easier.'
            }
          }
        },
        /*jsdom:{
          name: 'JS (DOM)',
          color: '#FC6',
          icon: 'monitor-dashboard',
          progress: 70,
          startingYear: 116,
          achieved:{
            codiv19sim: {
              name: 'A covid-19 spread simulator',
              href: './covid-19_sim',
              desc: 'Spreads using spread points'
            }
          }
        },
        css:{
          name: 'CSS',
          color: '#4DA8DB',
          icon: 'language-css3',
          progress: 70,
          startingYear: 116,
          achieved:{
            
          }
        },*/
      }
    ]
  }),
  mounted() {
    /*Object.entries(this.streamerList).forEach(async ([i])=>{
      const aa=await (await (await fetch(`https://fp4u.glitch.me/img/${i}`)).blob()).text()
      this.streamerList[i].img=aa;
      this.streamerList[i];
    })*/
  }
}
</script>

<style>
*{
  font-family: roboto !important;
}

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
  position: relative;
  top: 0;
  left:0;
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