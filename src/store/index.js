import Vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      meals:[],
      categories:[],
      selectedMeal:[],
      selectedCategorie:[],
      data:[]
    },
    getters:{
        getMeals:state=>state.meals,
        getSelectedMeal:state=>state.selectedMeal,
        getCategories:state=>state.categories
    },
    actions: {
      async fetchMealsByCategorie ({commit},name) {
        const res=await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+name)
        commit('initMeals',res.data.meals)
      },
      async fetchCategories({commit}){
        const res=await axios.get('http://www.themealdb.com/api/json/v1/1/categories.php')
        commit('initCategories',res.data.categories)
      },
      async fetchSelectedMeal({commit},id){
        const res=await axios.get('http://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
        commit('initSelectedMeal',res.data.meals[0])
      },
      async fetchRandomMeal({commit}){
        const res=await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        commit('initSelectedMeal',res.data.meals[0])
      },
      sortData({commit},object){
        if(object.type!=='cat'){
          commit('sortMeals',object.txt)
        }else{
          commit('sortCategories',object.txt)
        }
      },
      async search({commit},name){
        const res=await axios.get('http://www.themealdb.com/api/json/v1/1/list.php?i='+name)
        commit('initMeals',res.data.meals)
      }
    },
    mutations:{
        initMeals:(state,meals)=>state.meals=meals,
        initSelectedMeal:(state,meal)=>state.selectedMeal=meal,
        initCategories:(state,cat)=>state.categories=cat,
        sortMeals(state,txt){
          const n=txt.length
          state.meals=state.meals.filter(meal=>meal.strMeal.substring(0,n).toLowerCase()==txt.toLowerCase())
        },
        sortCategories(state,txt){
          console.log(txt)
          const n=txt.length
          state.categories=state.categories.filter(cat=>cat.strCategory.substring(0,n).toLowerCase()==txt.toLowerCase())
        }
    }
  })

  export default store