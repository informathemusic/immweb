<template>
    <v-app>
        <h1>I am {{!open?'':'not'}} available for code ideas!</h1>
        <h2 v-if="!!open">This happens when i'm already doing a project or not in a mood to code (Happens)</h2>
        <a href="mailto:informathemusic@gmail.com?Subject=Idea">E-mail me an idea{{!open?'':' anyways'}}!</a>
    </v-app>
</template>

<script>
import * as axios from "axios";

export default {
    data: () => ({
        open:false,
    }),
    async created () {
        this.open=(await axios.get('https://immweb.glitch.me/backend/busy')).data
    }
}
</script>

<style>

</style>
