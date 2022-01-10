<template>
    <div class="container pt-3">
        <MealView :getSelectedMeal="getSelectedMeal"/>
    </div> 
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MealView from "../components/MealView.vue";

export default {
    name:'RandomMeal',
    components:{
        MealView
    },
    data(){
        return({
        })
    },
    computed:mapGetters(['getSelectedMeal']),
    methods:mapActions(['fetchRandomMeal']),
    created(){
        this.fetchRandomMeal()
    }
}
</script>

<style>
    /* ul{list-style-type: none;}
    b{font-style: italic;} */
</style>