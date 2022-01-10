import Vue from 'vue' 
import Router from 'vue-router' 
import Acceuil from "../views/Acceuil.vue"
import Meal from "../views/Meal.vue";
import Categorie from "../views/Categorie.vue";
import RandomMeal from "../views/RandomMeal.vue";
import Error from "../views/Error.vue";

Vue.use(Router)

export default new Router({
    mode:"history",
  routes: [
    {
        path: '/',
        name: 'home',
        component: Acceuil
    },
    // {
        // path: '/meal',
        // name: 'Meal',
        // component:Meal
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
        path:'/meal/:id(\\d{4,5})',
        name:'meal',
        component:Meal
    },
    {
        path:'/categories/:name',
        name:'categories',
        component:Categorie
    },
    {
        path:'/meal/random',
        name:'random',
        component:RandomMeal
    },
    {
        path:'/*',
        name:'error',
        component:Error
    }
  ]
})