import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ChrashmybrowserIndex from './views/chrashmybrowser/Index.vue'
import Covid19SimIndex from './views/covid-19_sim/Index.vue'
import Covid19SimSimulation from './views/covid-19_sim/Simulation.vue'
import IdeasIndex from './views/ideas/Index.vue'
import PittyBittyIndex from './views/pitybitty/Index.vue'
import SmallProjectsIndex from './views/smallindex/Index.vue'
import SuperawesomeIndex from './views/superawesome/Index.vue'
import TMCCIndex from './views/tmcc/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      icon: 'home',
      appear: 'navbar',
      component: Home
    },
    {
      path: '/covid-19_sim/',
      name: 'Covid-19 Spread Simulator',
      icon: 'virus',
      appear: 'navbar',
      component: Covid19SimIndex
    },
    {
      path: '/chrashmybrowser/',
      name: 'Chrash your browser',
      icon: 'skull-crossbones',
      appear: 'navbar',
      component: ChrashmybrowserIndex
    },
    {
      path: '/superawesome/',
      name: 'Super Awesome',
      component: SuperawesomeIndex
    },
    {
      path: '/pittybitty/',
      name: 'PityBitty conversion bot',
      icon: 'ruler',
      appear: 'navbar',
      component: PittyBittyIndex
    },
    {
      path: '/ideas/',
      name: 'Submit a code idea!',
      icon: 'lightbulb',
      appear: 'navbar',
      component: IdeasIndex
    },
    {
      path: '/projects/',
      name: 'Look through all of my projects',
      icon: 'magnify',
      appear: 'navbar',
      component: IdeasIndex
    },
    {
      path: '/tmcc/',
      name: 'Troll My Coworkers Clipboard',
      icon: 'drama-masks',
      appear: 'navbar',
      component: TMCCIndex
    },
    {
      path: '/covid-19_sim/simulation',
      name: 'covid-19_sim simulation',
      component: Covid19SimSimulation
    }
  ]
})
