<template>
    <div class="container text-center">
        <h1>{{this.$route.params.name}} Meals</h1>
        <div class="row my-3">
            <div v-for="meal in getMeals" :key="meal.idMeal" class="col-md-3 col-sm-4 col-6 col-lg-2 mb-3">
                <MealCard :meal="meal" />
            </div>
            <div v-if="getMeals.length===0" class="text-secondary position-absolute top-50 start-50 translate-middle">
                <h3>Meal not found</h3> 
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MealCard from "../components/MealCard.vue";
export default {
    name:'Categorie',
    components:{
        MealCard
    },
    computed:mapGetters(['getMeals']),
    methods:mapActions(['fetchMealsByCategorie']),
    created(){
        this.fetchMealsByCategorie(this.$route.params.name)
    }
}
</script>

<style>

</style>