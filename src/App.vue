<template>
  <v-app id="inspire">
    <v-navigation-drawer v-if="drawer" app>
      <v-list dense>
        <v-list-item v-for="(route, key) of $router.options.routes.filter(v=>v.appear=='navbar')" :key="`route-${key}`" link>
          <v-list-item-action>
            <v-icon>mdi-{{route.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link class="unlinkify navlink roboto" :to="route.path"><v-list-item-title class="left-align">{{route.name}}</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="#FC6" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" class="roboto unlinkify">InforMatheMusic</router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content id="menu">
      <router-view />
    </v-content>
    <v-footer color="#FC6" app>
      <span class="white--text roboto">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false
    })
  };
</script>

<style>
.roboto{
  font-family: roboto !important;
}
a.unlinkify{
  text-decoration: none;
  color: white !important;
}
a.navlink{
  color: #212121 !important;
}
.left-align{
  text-align: left;
}
</style>
