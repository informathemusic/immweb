import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Covid19SimIndex from './views/covid-19_sim/Index.vue'
import Covid19SimSimulation from './views/covid-19_sim/Simulation.vue'

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
      path: '/covid-19_sim/simulation',
      name: 'covid-19_sim simulation',
      component: Covid19SimSimulation
    }
  ]
})
