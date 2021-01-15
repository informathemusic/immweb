<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <p class="display-1 text--primary">
        All of my small projects
      </p>
      <div class="text--primary">
        I'm looking for...
        <v-autocomplete v-model="value" :items="Object.keys(urls)"></v-autocomplete>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="if (value in urls) openInNewTab(urls[value])"
      >
        Open in new tab
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'App',
  methods: {
    openInNewTab: (link) => window.open(link, '_blank'),
  },
  data: () => ({
    urls: {
      'Meme License': 'https://42.imm.codes/meme-license',
      'CDN': 'https://cdn.imm.codes/',
      'Safe for Advent of Code solutions': 'https://aocsafe.imm.codes/',
      'Proxy': 'https://bypass.imm.codes/bypass-imm',
      'Cute Domain Parking': 'https://cdp.imm.codes/',
      'Last Barrier': 'https://lb.imm.codes/',
      'Pain Au Chocolat, pas Chocolatine': 'https://pac.imm.codes/invite.html',
      'Backup Bot': 'https://backupbot.imm.codes/invite.html',
      'Reaction Bot': 'https://discord.com/api/oauth2/authorize?client_id=744834906986643554&permissions=268435456&scope=bot',
    },
    value: '',
  }),
};
</script>

<style>
.card{
  padding:10 !important;
}
</style>
