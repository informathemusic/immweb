<template>
  <v-app id="inspire">
    <v-app>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12 card">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Troll My Coworkers Clipboard</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <div v-for="(charcat,key) of chars" :key="key">
                  <v-menu>
                    <template v-slot:activator="{ on: menu, attrs }">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on: tooltip }">
                          <v-btn
                            class="mt-3 mb-3"
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="{ ...tooltip, ...menu }"
                            block
                          >
                            <v-icon v-if="charcat.icon">mdi-{{charcat.icon}}</v-icon>
                            {{charcat.label}}
                          </v-btn>
                        </template>
                        <span>{{charcat.desc}}</span>
                      </v-tooltip>
                    </template>
                    <v-list
                      class="overflow-y-auto"
                      max-height="300"
                    >
                      <div
                        v-for="(item, index) in charcat.list"
                        :key="index"
                      >
                        <v-list-item two-line>
                          <v-list-item-content v-if="item.desc">
                            <v-list-item-title :class="`${Object.entries(ranking).find(([k,v])=>k==item.spottable).color}--text text--darken-4`">{{item.name}}</v-list-item-title>
                            <v-list-item-subtitle
                              :class="`${(item.spottable=='none'?'green':item.spottable=='kinda'?'yellow':item.spottable=='gt-kinda'?'orange':item.spottable=='very'?'red':'')}--text text--darken-4`"
                            >
                              <span style="white-space: pre;" :class="`${(item.spottable=='none'?'green':item.spottable=='kinda'?'yellow':item.spottable=='gt-kinda'?'orange':item.spottable=='very'?'red':'')}--text text--darken-4`">{{item.desc}}</span>
                              <v-icon v-clipboard="item.char">mdi-content-copy</v-icon>
                            </v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-title v-else>
                            <span :class="`${(item.spottable=='none'?'green':item.spottable=='kinda'?'yellow':item.spottable=='gt-kinda'?'orange':item.spottable=='very'?'red':'')}--text text--darken-4`">
                              {{item.name}}
                            </span>
                            <v-icon v-clipboard="item.char" @click="voidIt()">mdi-content-copy</v-icon>
                          </v-list-item-title>
                        </v-list-item>
                        <v-divider/>
                      </div>
                    </v-list>
                  </v-menu>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods:{
    voidIt() {
      
    }
  },
  data: () => ({
    ranking:{
      none:{
        color:'green',
        rank:0
      },
      kinda:{
        color:'yellow',
        rank:1
      },
      'gt-kinda':{
        color:'orange',
        rank:2
      },
      totally:{
        color:'red',
        rank:3
      },
    },
    chars:[
      {
        label:"Spaces",
        icon:"arrow-split-vertical",
        desc:"Empty spaces. Put them anywhere to cause an error",
        list:[
          {
            name:'Mongolian space',
            spottable:'none',
            //desc:'Put this anywhere where there is not a string!',
            char:'\u180E'
          },
          {
            name:'Zero width space',
            spottable:'none',
            //desc:'Comes a moment when they\'re gonna delete all the Mongolian spaces.\n This is where I come in!',
            char:'\u200B'
          },
          {
            name:'Zero width non-joiner',
            spottable:'none',
            //desc:'I\'ll replace the guy above when he gets spotted',
            char:'\u200C'
          },
          {
            name:'Zero width joiner',
            spottable:'none',
            //desc:'No idea what\'s the difference between me and the char above',
            char:'\u200D'
          },
          {
            name:'Word joiner',
            spottable:'none',
            //desc:'Yet Another Joiner',
            char:'\u2060'
          },
          {
            name:'Zero width non-breaking space',
            spottable:'none',
            //desc:'AM I EVEN USEFUL IN THE REAL WORLD!?',
            char:'\uFEFF'
          },
        ]
      },
      {
        label:"Russian letters",
        icon:"alphabet-cyrillic",
        desc:"Letters that looks like the ones in the latin alphabet but are not.",
        list:[
          {
            name:'Cyrillic capital A',
            spottable:'none',
            char:'\u0410'
          },
          {
            name:'Cyrillic capital B',
            spottable:'none',
            char:'\u0412'
          },
          {
            name:'Cyrillic capital C',
            spottable:'none',
            char:'\u0421'
          },
          {
            name:'Cyrillic capital E',
            spottable:'none',
            char:'\u0415'
          },
          {
            name:'Cyrillic capital M',
            spottable:'none',
            char:'\u041C'
          },
          {
            name:'Cyrillic capital H',
            spottable:'none',
            char:'\u041D'
          },
          {
            name:'Cyrillic capital O',
            spottable:'none',
            char:'\u041E'
          },
          {
            name:'Cyrillic capital P',
            spottable:'none',
            char:'\u0420'
          },
          {
            name:'Cyrillic capital T',
            spottable:'none',
            char:'\u0422'
          },
          {
            name:'Cyrillic capital X',
            spottable:'none',
            char:'\u0425'
          },
          {
            name:'Old Cyrillic capital I',
            spottable:'none',
            char:'\u0406'
          },
          {
            name:'Old cyrillic capital S',
            spottable:'none',
            char:'\u0405'
          },
          {
            name:'Cyrillic capital E with trema',
            spottable:'none',
            char:'\u0415'
          },
          {
            name:'Cyrillic lowercase A',
            spottable:'none',
            char:'\u0430'
          },
          {
            name:'Cyrillic lowercase B',
            spottable:'none',
            char:'\u0432'
          },
          {
            name:'Cyrillic lowercase E',
            spottable:'none',
            char:'\u0435'
          },
          {
            name:'Cyrillic lowercase O',
            spottable:'none',
            char:'\u043E'
          },
          {
            name:'Cyrillic lowercase P',
            spottable:'none',
            char:'\u0440'
          },
          {
            name:'Cyrillic lowercase C',
            spottable:'none',
            char:'\u0441'
          },
          {
            name:'Cyrillic lowercase T',
            spottable:'gt-kinda',
            char:'\u0442'
          },
          {
            name:'Cyrillic lowercase Y',
            spottable:'none',
            char:'\u0443'
          },
          {
            name:'Cyrillic lowercase X',
            spottable:'none',
            char:'\u0445'
          },
          {
            name:'Old Cyrillic lowercase I',
            spottable:'none',
            char:'\u0456'
          },
          {
            name:'Old cyrillic lowercase S',
            spottable:'none',
            char:'\u0455'
          },
          {
            name:'Cyrillic lowercase E with trema',
            spottable:'none',
            char:'\u0415'
          },
        ]
      },
      {
        label: "Greek letters",
        icon: "alphabet-greek",
        desc:"Letters that looks like the ones in the latin alphabet but are not.",
        list: [
          {
            name: 'Greek capital A',
            spottable:'none',
            char: 'Α'
          },
          {
            name: 'Greek capital B',
            spottable:'none',
            char: 'Β'
          },
          {
            name: 'Greek capital E',
            spottable:'none',
            char: 'Ε'
          },
          {
            name: 'Greek capital H',
            spottable:'none',
            char: 'Η'
          },
          {
            name: 'Greek capital I',
            spottable:'none',
            char: 'Ι'
          },
          {
            name: 'Greek capital K',
            spottable:'none',
            char: 'Κ'
          },
          {
            name: 'Greek capital M',
            spottable:'none',
            char: 'Μ'
          },
          {
            name: 'Greek capital N',
            spottable:'none',
            char: 'Ν'
          },
          {
            name: 'Greek capital O',
            spottable:'none',
            char: 'Ο'
          },
          {
            name: 'Greek capital P',
            spottable:'none',
            char: 'Ρ'
          },
          {
            name: 'Greek capital T',
            spottable:'none',
            char: 'Τ'
          },
          {
            name: 'Greek capital X',
            spottable:'none',
            char: 'Χ'
          },
          {
            name: 'Greek capital Y',
            spottable:'none',
            char: 'Υ'
          },
          {
            name: 'Greek capital Z',
            spottable:'none',
            char: 'Ζ'
          }
        ]
      },
      {
        label:"Punctuation",
        icon:"comma-box-outline",
        desc:"Cause a syntax error by using different punctuation",
        list:[
          {
            name: 'Right double quotation mark',
            spottable:'none',
            char: '\u201D'
          },
          {
            name: 'Two-dot punctuation',
            spottable:'kinda',
            char: '\u205A'
          },
          {
            name: 'Double High-Reversed-9 Quotation Mark',
            spottable:'kinda',
            char: '\u201F'
          },
          {
            name: 'Double Prime',
            spottable:'kinda',
            char: '\u2033'
          },
          {
            name: 'Reflected Double Prime',
            spottable:'kinda',
            char: '\u2036'
          },
          {
            name: 'Double High-Reversed-9 Quotation Mark',
            spottable:'kinda',
            char: '\u201F'
          },
          {
            name: 'Right double quotation mark',
            spottable:'none',
            char: '\u201D'
          },
          {
            name: 'Greek question mark',
            spottable:'none',
            char: '\u037E'
          },
          {
            name: 'Full-width comma',
            spottable:'gt-kinda',
            char: '\uFF0C'
          },
          {
            name: 'Full-width exclamation mark',
            spottable:'gt-kinda',
            char: '\uFF01'
          },
          {
            name: 'Full-width question mark',
            spottable:'gt-kinda',
            char: '\uFF1F'
          },
          {
            name: 'Full-width semi colon',
            spottable:'gt-kinda',
            char: '\uFF1B'
          },
          {
            name: 'Full-width colon',
            spottable:'gt-kinda',
            char: '\uFF1A'
          },
          {
            name: 'Full-width left parenthesis',
            spottable:'gt-kinda',
            char: '\uFF08'
          },
          {
            name: 'Full-width right parenthesis',
            spottable:'gt-kinda',
            char: '\uFF09'
          },
          {
            name: 'Full-width left square bracket',
            spottable:'gt-kinda',
            char: '\uFF3B'
          },
          {
            name: 'Full-width right square bracket',
            spottable:'gt-kinda',
            char: '\uFF3D'
          },
          {
            name: 'Wavy dash',
            spottable:'kinda',
            char: '\uFF5E'
          },
        ]
      },
    ]
  }),
  created() {

    this.chars=this.chars.map((v)=>{
      v.list.sort((a,b)=>Object.entries(this.ranking).find(([k])=>k==a.spottable)[1].rank-Object.entries(this.ranking).find(([k])=>k==b.spottable)[1].rank)
      return v
    })
  }
};
</script>

<style>
.card{
  padding:10 !important;
}
</style>
